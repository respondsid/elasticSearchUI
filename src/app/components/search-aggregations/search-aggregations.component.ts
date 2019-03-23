import { Component, OnInit, Input } from '@angular/core';
import { ElasticContext } from 'src/app/models/elastic/context';

@Component({
  selector: 'app-search-aggregations',
  templateUrl: './search-aggregations.component.html',
  styleUrls: ['./search-aggregations.component.css']
})
export class SearchAggregationsComponent implements OnInit {
  @Input() elasticContext: ElasticContext;
  constructor() { }

  ngOnInit() {
  }

}
