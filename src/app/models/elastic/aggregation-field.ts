export class ElasticAggregationField {
    public key: string;
    public displayLabel: string;
    public doc_count: string;
    public checked: boolean;

    constructor(key: string, doc_count: string) {
        this.key = key;
        this.displayLabel = key;
        this.doc_count = doc_count;
    }

}