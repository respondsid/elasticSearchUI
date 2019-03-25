import { Component, OnInit, Input } from '@angular/core';
import { ElasticContext } from 'src/app/models/elastic/context';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { SearchSelectionService } from 'src/app/services/search-selection/search-selection.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() elasticContext: ElasticContext;
  searchTermChanged: Subject<string> = new Subject<string>();
  constructor(private searchSelectionService:SearchSelectionService) { }
  faSearch=faSearch;
  ngOnInit() {
  }

  onSearch(event: any) {
    if (this.searchTermChanged.observers.length === 0) {
        this.searchTermChanged.pipe(debounceTime(1000), distinctUntilChanged())
            .subscribe(term => {
                // your code here
              this.elasticContext.elasticQuery.prepareMultiFieldQuery(term);
              this.searchSelectionService.announceSearchChanged();
            });
    }
    this.searchTermChanged.next(event);
}

}
