import { ElasticAggregationResult } from './aggregation-results';

export class ElasticResponse{
    public total: string;
    public responseDocuments: any[];
    public responseAggregations: ElasticAggregationResult[];
}