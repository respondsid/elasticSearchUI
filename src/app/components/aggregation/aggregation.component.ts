import { Component, OnInit, Input } from '@angular/core';
import { ElasticAggregationResult } from 'src/app/models/elastic/aggregation-results';
import { ElasticContext } from 'src/app/models/elastic/context';
import { faSearch, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aggregation',
  templateUrl: './aggregation.component.html',
  styleUrls: ['./aggregation.component.css']
})
export class AggregationComponent implements OnInit {
  @Input() elasticContext: ElasticContext;
  @Input() aggregation: ElasticAggregationResult;
  faSearch = faSearch;
  faUp = faChevronUp;
  faDown = faChevronDown;
  fold = false;
  constructor() { }

  search: string;

  ngOnInit() {
  }

  foldUnfoldIcon() {
    return this.fold ? this.faDown : this.faUp;
  }

  flipFold() {
    this.fold = !this.fold;
  }

}
