import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { downgradeInjectable } from '@angular/upgrade/static';

import { MODULE_NAME } from '../app.module.ajs';

declare var angular: angular.IAngularStatic;

@Injectable()
export class OrderService {
  apiRoot = '/api/orders';
  customersRoot = '/api/customers';

  constructor(private http: Http) {}

  getOrders(): Promise<any> {
    return this.http
      .get(`${this.apiRoot}`)
      .toPromise()
      .then((res: Response) => res.json());
  }

  getOrder(id): Promise<any> {
    return this.http
      .get(`${this.apiRoot}/${id}`)
      .toPromise()
      .then((res: Response) => res.json());
  }

  getOrdersByCustomer(customerId): Promise<any> {
    return this.http
      .get(`${this.customersRoot}/${customerId}/orders`)
      .toPromise()
      .then((res: Response) => res.json());
  }

  postOrder(order): Promise<any> {
    return this.http
      .post(`${this.apiRoot}`, order)
      .toPromise()
      .then((res: Response) => res.json());
  }
}

angular
  .module(MODULE_NAME)
  .factory('orderService', downgradeInjectable(OrderService));
