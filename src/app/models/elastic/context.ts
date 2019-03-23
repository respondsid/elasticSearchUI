import { MetadataField } from './metadata-field';
import { ElasticAggregationResult } from './aggregation-results';
import { ElasticQueryBuilder } from './elastic-query-builder';
import { ElasticAggregationField } from './aggregation-field';

export class ElasticContext {
    public metadataFields: MetadataField[];
    public searchResults: any[];
    public aggregationResults: ElasticAggregationResult[];
    public elasticQuery: ElasticQueryBuilder;

    constructor() {
        this.elasticQuery = new ElasticQueryBuilder();
        this.metadataFields = [];
    }

    public populateAggregationFields() {
        if (this.aggregationResults) {
            this.aggregationResults.forEach(el => {
                el.field = this.metadataFields.find(f => el.name === f.field_name);
                if (el.field.field_type === 'RANGE') {
                    el.values.forEach((v, i) => {
                        if (el.field.range_label && el.field.range_label[i]) {
                            v.displayLabel = el.field.range_label[i];
                        }
                    });
                }
            });
        }
    }

    public populateFilteredSearch() {
        if (this.aggregationResults) {
            this.elasticQuery.resetQuery();
            this.aggregationResults.forEach(element => {
                if (element.values && element.values.length > 0) {
                    element.values.forEach(value => {
                        if (value.checked) {
                            this.appendFilter(value, element);
                            if (!element.filterValues) {
                                element.filterValues = [];
                            }
                            element.filterValues.push(value);
                        }
                    })
                }
            })
        }
    }

    public appendFilter(value: ElasticAggregationField, result: ElasticAggregationResult) {
        if (result.field) {
            this.elasticQuery.prepareQuery();
            const filterContainer: any = this.elasticQuery.query.bool.should;
            filterContainer.push(result.field.getFilterQueryObject(value.key));
        }
    }

    public mergeAggregations(newAggregations: ElasticAggregationResult[]) {
        if (this.aggregationResults && newAggregations) {
            const mergedAggregations: ElasticAggregationResult[] = [];
            newAggregations.forEach(element => {
                let newAggregationResult = element;
                const existingAggregationResult = this.aggregationResults.filter(X => X.name === element.name)[0];
                if (existingAggregationResult) {
                    const existingAggregationChecekd = existingAggregationResult.values.filter(f => f.checked)[0];
                    if (existingAggregationChecekd) {
                        newAggregationResult = existingAggregationResult;
                    }
                }
                mergedAggregations.push(newAggregationResult);
            });
            this.aggregationResults = mergedAggregations;
        } else {
            this.aggregationResults = newAggregations;
        }
        this.populateAggregationFields();
    }

    public initializeFromSearch(data: any) {
        if (data && data.responseDocuments.length > 0) {
            this.searchResults = this.changeKeys(data.responseDocuments);
            this.elasticQuery.total = data.total;
        }
        if (data && data.responseAggregations.length > 0) {
            this.mergeAggregations(data.responseAggregations);
        }
    }

    changeKeys(responseDocuments: any): any[] {
        if (this.metadataFields && responseDocuments) {
            let newResponseDocuments: any[] = [];
            for (let responseDocument of responseDocuments) {
                let newResponseDocument: any = {};
                for (let key of Object.keys(responseDocument)) {
                    let metadataField = this.metadataFields.find(f => f.field_name === key);
                    if (metadataField) {
                        newResponseDocument.key = metadataField.display_label;
                        newResponseDocument[metadataField.display_label] = responseDocument[key];
                    } else {
                        newResponseDocument.key = key;
                        newResponseDocument[key] = responseDocument[key];
                    }
                }
                newResponseDocuments.push(newResponseDocument);
            }
            return newResponseDocuments;
        }
        return responseDocuments;
    }



}