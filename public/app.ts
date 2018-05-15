import * as angular from 'angular';
import 'angular-route';

import hashPrefixConfig from './config.hashprefix';
import routeProvider from './config.routes';

import CustomerService from './customers/customerService';
import AddressService from './shared/addressService';

import homeComponent from './home/home';
import customersComponent from './customers/customers';
import customerDetailComponent from './customerDetail/customerDetail';


angular
  .module('app', ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProvider)
  .service('customerService', CustomerService)
  .service('addressService', AddressService)
  .component('home', homeComponent)
  .component('customers', customersComponent)
  .component('customerDetail', customerDetailComponent);
