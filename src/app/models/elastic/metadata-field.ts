export class MetadataField {
    public field_id: string;
    public field_name: string;
    public display_label: string;
    public field_type: string;
    public range: string[];
    public range_label: string[];
    public facet_ind: string;
    public collection: string;
    public raw_ind: string;

    constructor(obj: any) {
        this.field_id = obj.field_id;
        this.field_name = obj.field_name;
        this.display_label = obj.display_label;
        this.field_type = obj.field_type;
        this.range = obj.range;
        this.range_label = obj.range_label;
        this.facet_ind = obj.facet_ind;
        this.collection = obj.collection;
        this.raw_ind=obj.raw_ind;
    }

    public getAggregationObject() {
        if (this.facet_ind) {
            if (this.field_type !== 'RANGE') {
                const obj: any = JSON.parse('{"terms":{"field":"' + this.getFieldName() + '"}}');
                obj.terms.size = 100;
                return obj;
            } else {
                const obj: any = JSON.parse('{"range":{"field":"' +  this.getFieldName() + '"}}');
                obj.range.ranges = this.range.map(item => JSON.parse(item.replace('\\', '')));
                obj.range.ranges.size = 100;
                return obj;
            }
        }
        return null;
    }

    public getFilterQueryObject(value: string) {
        if (this.facet_ind) {
            if (this.field_type !== 'RANGE') {
                const obj: any = JSON.parse('{"term":{"' + this.getFieldName() + '":"' + value + '"}}');
                return obj;
            } else {
                const obj: any = {};
                obj.range = {}
                obj.range[this.getFieldName()] = {};
                const ranges: string[] = value.split('-');
                if (ranges[0] !== '*') {
                    obj.range[this.getFieldName()].gte = ranges[0];
                }
                if (ranges[1] !== '*') {
                    obj.range[this.getFieldName()].lte = ranges[1];
                }
                return obj;

            }

        }
        return null;
    }

    public getFieldName(){
        if(this.raw_ind && this.raw_ind==='false'){
            return   this.field_name;
        }
        return this.field_name+".raw";
    }

}