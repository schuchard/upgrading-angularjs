import * as angular from 'angular';
import 'angular-route';

import homeComponent from './home/home';
import customersComponent from './customers/customers';
import customerDetail from './customerDetail/customerDetail';
import CustomerService from './customers/customerService';
import AddressService from './shared/addressService';

angular
  .module('app', ['ngRoute'])
  .service('customerService', CustomerService)
  .service('addressService', AddressService)
  .component('home', homeComponent)
  .component('customers', customersComponent)
  .component('customerDetail', customerDetail);

angular.module('app').config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('');
  },
]);
