import { Component, OnInit, Input } from '@angular/core';
import { ElasticContext } from 'src/app/models/elastic/context';

@Component({
  selector: 'app-search-result-header',
  templateUrl: './search-result-header.component.html',
  styleUrls: ['./search-result-header.component.css']
})
export class SearchResultHeaderComponent implements OnInit {
  @Input() elasticContext: ElasticContext;
  constructor() { }

  ngOnInit() {
  }

}
