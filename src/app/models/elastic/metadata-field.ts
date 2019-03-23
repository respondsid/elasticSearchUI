export class MetadataField {
    public field_id: string;
    public field_name: string;
    public display_label: string;
    public field_type: string;
    public range: string[];
    public range_label: string[];
    public facet_ind: string;
    public collection: string;

    constructor(obj: any) {
        this.field_id = obj.field_id;
        this.field_name = obj.field_name;
        this.display_label = obj.display_label;
        this.field_type = obj.field_type;
        this.range = obj.range;
        this.range_label = obj.range_label;
        this.facet_ind = obj.facet_ind;
        this.collection = obj.collection;
    }

    public getAggregationObject() {
        if (this.facet_ind) {
            if (this.field_type !== 'RANGE') {
                const obj: any = JSON.parse('{"terms":{"field":"' + this.field_name + '.raw"}}');
                obj.terms.size = 100;
                return obj;
            } else {
                const obj: any = JSON.parse('{"range":{"field":"' + this.field_name + '.raw"}}');
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
                const obj: any = JSON.parse('{"term":{"' + this.field_name + '.raw":"' + value + '"}}');
                return obj;
            } else {
                const obj: any = {};
                obj.range = {}
                obj.range[this.field_name + '.raw'] = {};
                const ranges: string[] = value.split('-');
                if (ranges[0] !== '*') {
                    obj.range[this.field_name + '.raw'].gte = ranges[0];
                }
                if (ranges[1] !== '*') {
                    obj.range[this.field_name + '.raw'].lte = ranges[1];
                }
                return obj;

            }

        }
        return null;
    }

}