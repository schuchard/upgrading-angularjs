import { CustomerService } from './customer.service';
import { Component, OnInit } from '@angular/core';
import { MODULE_NAME } from '../app.module.ajs';
import { downgradeComponent } from '@angular/upgrade/static';

declare var angular: angular.IAngularStatic;
const template = require('./customers.html');

@Component({
  selector: 'customers',
  template,
})
export class CustomersComponent implements OnInit {
  customers: any[];
  title = 'Customers';

  constructor(private customerService: CustomerService) {}
  ngOnInit() {
    this.customerService
      .getCustomers()
      .subscribe((res) => (this.customers = res));
  }
}

angular
  .module(MODULE_NAME)
  .directive('customers', downgradeComponent({
    component: CustomersComponent,
  }) as angular.IDirectiveFactory);
