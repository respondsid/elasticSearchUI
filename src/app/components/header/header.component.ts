import { Component, OnInit, Input } from '@angular/core';
import { ElasticContext } from 'src/app/models/elastic/context';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() elasticContext: ElasticContext;
  constructor() { }
  faSearch=faSearch;
  ngOnInit() {
  }

}
