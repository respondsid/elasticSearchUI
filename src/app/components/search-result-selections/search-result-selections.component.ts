import { Component, OnInit, Input } from '@angular/core';
import { ElasticContext } from 'src/app/models/elastic/context';
import { ElasticAggregationField } from 'src/app/models/elastic/aggregation-field';
import { ElasticAggregationResult } from 'src/app/models/elastic/aggregation-results';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SearchSelectionService } from 'src/app/services/search-selection/search-selection.service';

@Component({
  selector: 'app-search-result-selections',
  templateUrl: './search-result-selections.component.html',
  styleUrls: ['./search-result-selections.component.css']
})
export class SearchResultSelectionsComponent implements OnInit {
  @Input() elasticContext: ElasticContext;
  faTimes = faTimes;
  constructor(private seearchSelectionService:SearchSelectionService) { }

  ngOnInit() {
  }

  selections(): boolean {
    if(this.elasticContext && this.elasticContext.aggregationResults){
      for(let aggregationResult of this.elasticContext.aggregationResults){
        for(let value  of aggregationResult.values){
          if(value.checked){
            return true;
          }
        }
      }
    }
    return false;
  }

  selectedValuesArray(aggregationResult: ElasticAggregationResult) {
    return aggregationResult.values.filter(v => v.checked);
  }

 flipSelection(value:ElasticAggregationField) {
    value.checked=!value.checked;
    this.seearchSelectionService.announceSearchChanged();
  }
}
