import * as angular from 'angular';
import 'angular-route';

import homeComponent from './home/home';
import customersComponent from './customers/customers';
import customerDetail from './customerDetail/customerDetail';

angular
  .module('app', ['ngRoute'])
  .component('home', homeComponent)
  .component('customers', customersComponent)
  .component('customerDetail', customerDetail);

angular.module('app').config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('');
  },
]);
