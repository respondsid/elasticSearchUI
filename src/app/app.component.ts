import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elasticSearchUI';
  collection='companydatabase';
  constructor() { }

  metadataFields = [
    {
      'field_id': 'Designation',
      'field_name': 'Designation',
      'display_label': 'Designation',
      'field_type': 'MULTI',
      'facet_ind': 'true',
      'collection': 'employees'
    },
    {
      'field_id': 'FirstName',
      'field_name': 'FirstName',
      'display_label': 'First Name',
      'field_type': 'MULTI',
      'facet_ind': 'false',
      'collection': 'employees'
    },
    {
      'field_id': 'LastName',
      'field_name': 'LastName',
      'display_label': 'Last Name',
      'field_type': 'MULTI',
      'facet_ind': 'false',
      'collection': 'employees'
    },
    {
      'field_id': 'Gender',
      'field_name': 'Gender',
      'display_label': 'Gender',
      'field_type': 'MULTI',
      'facet_ind': 'true',
      'collection': 'employees'
    },
    {
      'field_id': 'MaritalStatus',
      'field_name': 'MaritalStatus',
      'display_label': 'Marital Status',
      'field_type': 'MULTI',
      'facet_ind': 'true',
      'collection': 'employees'
    },

    {
      'field_id': 'age',
      'field_name': 'Age',
      'display_label': 'Age',
      'field_type': 'RANGE',
      'range': ['{"to":20}', '{"from":10,"to":30}', '{"from":30,"to":60}', '{"from":60}'],
      'range_label': ['Less Than 20', 'From 20 to 30', 'From 30 to 60', 'More than 60'],
      'facet_ind': 'true',
      'collection': 'employees'
    },
    {
      'field_id': 'Address',
      'field_name': 'Address',
      'display_label': 'Address',
      'field_type': 'MULTI',
      'facet_ind': 'false',
      'collection': 'employees'
    },
    {
      'field_id': 'DateOfJoining',
      'field_name': 'DateOfJoining',
      'display_label': 'Joining Date',
      'field_type': 'RANGE',
      'range': ['{"to": "now-5y"}', '{"from": "now-5y","to":"now-3y"}','{"from": "now-2y","to":"now-1y"}','{"from":"now-1y"}'],
      'range_label': ['Older than 5 years', 'From 5 years to 3 years old','From 1 year to 2 year ', 'Less than an year old'],
      'facet_ind': 'true',
      'collection': 'employees'
    },
    {
      'field_id': 'Salary',
      'field_name': 'Salary',
      'display_label': 'Annual Salary',
      'field_type': 'RANGE',
      'range': ['{"to":"60000"}', '{"from": "60000","to":"80000"}', '{"from": "80000","to":"120000"}', '{"from": "120000"}'],
	    'range_label': ['Less Than 60,000$', 'From 60,000$ to $80,000', 'From 80,000$ to $1,20,000$', 'More Than 1,20,000$'],
      'facet_ind': 'true',
      'collection': 'employees'
  }
  ]
}
