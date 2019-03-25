import { templateRefExtractor } from '@angular/core/src/render3';

export class ElasticQueryBuilder {
    public _source: string[];
    public query: any = {};
    public aggs: {};
    public size: number;
    public from: number;
    public total: string;
    public multiFieldQuery: string;

    public prepareQuery() {
        if (!this.query.query) {
            this.query = {
                'bool': {
                    'should': []
                }
            };
        }
    }

    public prepareMultiFieldQuery(term:string) {
        this.resetQuery();
        this.multiFieldQuery=term; 
    }

    public getMultiFieldQueryStr(){
        if(this.multiFieldQuery && this.multiFieldQuery.trim()!==''){
            return '?q='+this.multiFieldQuery;
        }
        return '';
    }

    

    public resetQuery() {
        this.query = {};
    }

    constructor() {
        this._source = [];
        this.query = {};
        this.aggs = {};
        this.size = 10;
        this.from = 1;
    }

    public toJson() {
        const obj: any = {};
        if (this.size && this._source.length > 0) {
            obj._source = this._source;
        }
        if (this.aggs) {
            obj.aggs = this.aggs;
        }
        if (this.query && (this.query.bool)) {
            obj.query = this.query;
        }
        obj.size = this.size;
        obj.from = this.from;
        return obj;

    }

}
