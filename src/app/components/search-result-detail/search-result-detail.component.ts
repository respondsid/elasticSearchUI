import { Component, OnInit, Input } from '@angular/core';
import { ElasticContext } from 'src/app/models/elastic/context';

@Component({
  selector: 'app-search-result-detail',
  templateUrl: './search-result-detail.component.html',
  styleUrls: ['./search-result-detail.component.css']
})
export class SearchResultDetailComponent implements OnInit {
  @Input() elasticContext: ElasticContext;
  @Input() searchResult: any;
  constructor() { }

  ngOnInit() {
  }
}
