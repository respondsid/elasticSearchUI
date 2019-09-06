import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElasticResponse } from 'src/app/models/elastic/response';
import { ElasticAggregationResult } from 'src/app/models/elastic/aggregation-results';
import { ElasticAggregationField } from 'src/app/models/elastic/aggregation-field';
import { ElasticQueryBuilder } from 'src/app/models/elastic/elastic-query-builder';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(protected http: HttpClient) { }



  private convertResult(response: any) {
    const elasticResponse: ElasticResponse = new ElasticResponse();
    elasticResponse.total = response.hits.total.value;
    elasticResponse.responseDocuments = [];
    response.hits.hits.forEach(element => {
      elasticResponse.responseDocuments.push(element._source);
    });
    if (response.aggregations) {
      const responseAggregations: ElasticAggregationResult[] = [];
      Object.keys(response.aggregations).map(key => {
        const elasticAggregation: ElasticAggregationResult = new ElasticAggregationResult();
        elasticAggregation.name = key;
        elasticAggregation.values = response.aggregations[key].buckets.map(v => new ElasticAggregationField(v.key, v.doc_count));
        responseAggregations.push(elasticAggregation);
      });
      elasticResponse.responseAggregations = responseAggregations;
    }
    return elasticResponse;
  }

  public searchElastic(collection: string, queryObject: ElasticQueryBuilder): Observable<ElasticResponse> {
    return this.http.post('http://localhost:9200/' + collection + '/_search'+(queryObject!=null?queryObject.getMultiFieldQueryStr():''), queryObject != null ? queryObject.toJson() : null).pipe(map<ElasticResponse, any>(data => this.convertResult(data)));
  }
}

