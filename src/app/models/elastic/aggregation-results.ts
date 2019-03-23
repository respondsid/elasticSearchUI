import { ElasticAggregationField } from './aggregation-field';
import { MetadataField } from './metadata-field';

export class ElasticAggregationResult{
    public name: string;
    public values: ElasticAggregationField[];
    public filterValues: ElasticAggregationField[];
    public field: MetadataField;
}