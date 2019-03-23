import { Component, OnInit, Input } from '@angular/core';
import { ElasticAggregationResult } from 'src/app/models/elastic/aggregation-results';
import { ElasticAggregationField } from 'src/app/models/elastic/aggregation-field';
import { SearchSelectionService } from 'src/app/services/search-selection/search-selection.service';

@Component({
  selector: 'app-aggregation-value',
  templateUrl: './aggregation-value.component.html',
  styleUrls: ['./aggregation-value.component.css']
})
export class AggregationValueComponent implements OnInit {
  @Input() value: ElasticAggregationField;
  @Input() aggregation: ElasticAggregationResult;
  constructor(private announceElasticSearchChangedService:SearchSelectionService) { }

  ngOnInit() {
  }

  checked(event) {
    this.value.checked = event.target.checked;
    this.announceElasticSearchChangedService.announceSearchChanged();
  }

}
