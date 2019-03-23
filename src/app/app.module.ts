import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AggregationComponent } from './components/aggregation/aggregation.component';
import { AggregationValueComponent } from './components/aggregation-value/aggregation-value.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchLayoutComponent } from './components/search-layout/search-layout.component';
import { SearchAggregationsComponent } from './components/search-aggregations/search-aggregations.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultTitleComponent } from './components/search-result-title/search-result-title.component';
import { SearchResultDetailComponent } from './components/search-result-detail/search-result-detail.component';
import { SearchResultHeaderComponent } from './components/search-result-header/search-result-header.component';
import { SearchResultFooterComponent } from './components/search-result-footer/search-result-footer.component';
import { SearchResultSelectionsComponent } from './components/search-result-selections/search-result-selections.component';

@NgModule({
  declarations: [
    AppComponent,
    AggregationComponent,
    AggregationValueComponent,
    HeaderComponent,
    SearchLayoutComponent,
    SearchAggregationsComponent,
    SearchResultsComponent,
    SearchResultTitleComponent,
    SearchResultDetailComponent,
    SearchResultHeaderComponent,
    SearchResultFooterComponent,
    SearchResultSelectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
