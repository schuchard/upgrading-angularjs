import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { downgradeInjectable } from '@angular/upgrade/static';

import { MODULE_NAME } from '../app.module.ajs';
declare var angular: angular.IAngularStatic;

@Injectable()
export class CustomerService {
  customersRoot = '/api/customers';
  constructor(private http: Http) {}

  getCustomers(): Promise<any> {
    return this.http
      .get(`${this.customersRoot}`)
      .toPromise()
      .then((res: Response) => res.json());
  }

  getCustomer(id): Promise<any> {
    return this.http
      .get(`${this.customersRoot}/${id}`)
      .toPromise()
      .then((res: Response) => res.json());
  }

  postCustomer(customer): Promise<any> {
    return this.http
      .post(`${this.customersRoot}`, customer)
      .toPromise()
      .then((data) => data.json());
  }
}

angular
  .module(MODULE_NAME)
  .factory('customerService', downgradeInjectable(CustomerService));
