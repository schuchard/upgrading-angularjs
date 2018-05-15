import * as angular from 'angular';
import 'angular-route';

import hashPrefixConfig from './config.hashprefix';

import homeComponent from './home/home';
import customersComponent from './customers/customers';
import customerDetailComponent from './customerDetail/customerDetail';
import CustomerService from './customers/customerService';
import AddressService from './shared/addressService';

angular
  .module('app', ['ngRoute'])
  .config(hashPrefixConfig)
  .service('customerService', CustomerService)
  .service('addressService', AddressService)
  .component('home', homeComponent)
  .component('customers', customersComponent)
  .component('customerDetail', customerDetailComponent);
