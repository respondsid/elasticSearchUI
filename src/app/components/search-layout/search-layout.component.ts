import { Component, OnInit, Input } from '@angular/core';
import { CollectionService } from 'src/app/services/collection-service/collection.service';
import { MetadataField } from 'src/app/models/elastic/metadata-field';
import { ElasticContext } from 'src/app/models/elastic/context';
import { SearchSelectionService } from 'src/app/services/search-selection/search-selection.service';

@Component({
  selector: 'app-search-layout',
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.css']
})
export class SearchLayoutComponent implements OnInit {
  public elasticContext: ElasticContext = new ElasticContext();
  @Input() metadataFields: MetadataField[];
  @Input() collection: string;
  constructor(private collectionService: CollectionService, private announceElasticSearchChangedService: SearchSelectionService) { }

  ngOnInit() {
    this.searchSetup();
    this.announceElasticSearchChangedService.searchChanged$.subscribe(changed => {
      if (changed) {
        this.onSelectChange();
      }
    })
  }

  searchSetup() {
        this.metadataFields.forEach(element => {
          const metadataField = new MetadataField(element);
          this.elasticContext.elasticQuery._source.push(metadataField.field_name);
          if (metadataField.facet_ind && metadataField.facet_ind === 'true') {
            this.elasticContext.elasticQuery.aggs[metadataField.field_name] = metadataField.getAggregationObject();
          }
          this.elasticContext.metadataFields.push(metadataField);
      });
      this.search();
  }

  public search() {
    this.collectionService.searchElastic(this.collection, this.elasticContext.elasticQuery).subscribe(data => {
      this.elasticContext.initializeFromSearch(data);
    });
  }

  public onSelectChange() {
    this.elasticContext.populateFilteredSearch();
    this.search();
  }

}
