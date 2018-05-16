import { Component, Input } from '@angular/core';
import { IAngularStatic } from 'angular';
import { MODULE_NAME } from '../app.module.ajs';
import { downgradeComponent } from '@angular/upgrade/static';

declare var angular: IAngularStatic;
const template = require('./customers-table.html');

@Component({
  selector: 'customers-table',
  template
})
export class CustomersTableComponent {
  constructor() {}

  @Input() customers: any;
}

angular
  .module(MODULE_NAME)
  .directive('customersTable', downgradeComponent({
    component: CustomersTableComponent,
  }) as angular.IDirectiveFactory);
