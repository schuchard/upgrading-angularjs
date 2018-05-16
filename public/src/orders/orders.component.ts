import { Component, OnInit, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

import { Observable, from, forkJoin } from 'rxjs';
import * as _ from 'lodash';

import { MODULE_NAME } from '../app.module.ajs';
import { OrderService } from './orderService';
import { CustomerService } from '../customers/customer.service';

declare var angular: angular.IAngularStatic;

@Component({
  selector: 'orders',
  template: require('./orders.html'),
})
export class OrdersComponent implements OnInit {
  title = 'Orders';
  orders: any[];
  customers: any[];

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    @Inject('$location') private $location
  ) {}

  ngOnInit() {
    forkJoin(
      from(this.orderService.getOrders()), // promise
      this.customerService.getCustomers() // observable stream
    ).subscribe((res) => {
      [this.orders, this.customers] = res;

      this.orders.forEach((order) => {
        const customer = _.find(
          this.customers,
          (customer) => order.customerId === customer.id
        );
        order.customerName = customer.fullName;
      });
    });
  }
}

angular.module(MODULE_NAME).directive('orders', downgradeComponent({
  component: OrdersComponent,
}) as angular.IDirectiveFactory);
