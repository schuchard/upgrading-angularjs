import { Injectable } from '@angular/core';
import { MODULE_NAME } from '../app.module.ajs';
import { downgradeInjectable } from '@angular/upgrade/static';

declare var angular: angular.IAngularStatic;

@Injectable()
export class AddressService {
  constructor() {}

  getFullAddress(customer) {
    return (
      customer.address1 +
      ', ' +
      customer.city +
      ', ' +
      customer.state +
      ' ' +
      customer.zip
    );
  }
}

angular
  .module(MODULE_NAME)
  .factory('addressService', downgradeInjectable(AddressService));
