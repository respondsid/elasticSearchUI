import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elasticSearchUI';
  collection='accounts';
  constructor() { }

  metadataFields = [
    {
      'field_id': 'account_number',
      'field_name': 'account_number',
      'display_label': 'Account Number',
      'field_type': 'MULTI',
      'facet_ind': 'false',
      'collection': 'accounts'
    },
    {
      'field_id': 'FirstName',
      'field_name': 'firstname',
      'display_label': 'First Name',
      'field_type': 'MULTI',
      'facet_ind': 'false',
      'collection': 'accounts'
    },
    {
      'field_id': 'lastname',
      'field_name': 'lastname',
      'display_label': 'Last Name',
      'field_type': 'MULTI',
      'facet_ind': 'false',
      'collection': 'accounts'
    },
    {
      'field_id': 'Gender',
      'field_name': 'gender',
      'display_label': 'Gender',
      'field_type': 'MULTI',
      'facet_ind': 'true',
      'collection': 'accounts'
    },
    {
      'field_id': 'employer',
      'field_name': 'employer',
      'display_label': 'Employer',
      'field_type': 'MULTI',
      'facet_ind': 'true',
      'collection': 'accounts'
    },

    {
      'field_id': 'age',
      'field_name': 'age',
      'display_label': 'Age',
      'field_type': 'RANGE',
      'range': ['{"to":20}', '{"from":10,"to":30}', '{"from":30,"to":60}', '{"from":60}'],
      'range_label': ['Less Than 20', 'From 20 to 30', 'From 30 to 60', 'More than 60'],
      'facet_ind': 'true',
      'collection': 'accounts',
      'raw_ind':'false'
    },
    {
      'field_id': 'Address',
      'field_name': 'Address',
      'display_label': 'Address',
      'field_type': 'MULTI',
      'facet_ind': 'false',
      'collection': 'accounts'
    },
    {
      'field_id': 'email',
      'field_name': 'email',
      'display_label': 'Email',
      'field_type': 'MULTI',
      'facet_ind': 'false',
      'collection': 'accounts'
    },
    {
      'field_id': 'state',
      'field_name': 'state',
      'display_label': 'State',
      'field_type': 'Multi',
      'facet_ind': 'true',
      'collection': 'accounts'
    },
    {
      'field_id': 'balance',
      'field_name': 'balance',
      'display_label': 'Balance',
      'field_type': 'RANGE',
      'range': ['{"to":"6000"}', '{"from": "6000","to":"15000"}', '{"from": "15000","to":"45000"}', '{"from": "45000"}'],
	    'range_label': ['Less Than 6,000$', 'From 6,000$ to $15,000', 'From 15,000$ to $45,000$', 'More Than 45,000$'],
      'facet_ind': 'true',
      'collection': 'accounts',
      'raw_ind':'false'
  }
  ]
}
