import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchSelectionService {
 // Observable string sources
 private announceElasticSearchChange = new Subject<boolean>();

 // Observable string streams
 searchChanged$ = this.announceElasticSearchChange.asObservable();
 

 // Service message commands
 announceSearchChanged() {
   this.announceElasticSearchChange.next(true);
 }

}
