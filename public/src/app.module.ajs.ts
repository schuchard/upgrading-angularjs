import * as angular from 'angular';

import 'angular-route';
import 'jquery';
import 'lodash';
import 'moment';

import './styles/index';

import { HashPrefixConfig } from './config.hashprefix';
import { RouteProvider } from './config.routes';

import { ProductService } from './products/productService';
import { AuthenticationService } from './shared/authenticationService';

import { CustomersComponent } from './customers/customers';
import { CustomerDetailComponent } from './customerDetail/customerDetail';
import { NavigationComponent } from './navigation/navigation';
import { CustomersTableComponent } from './customers/customers-table';
import { DiscountComponent } from './customerDetail/discount';
import { OrdersComponent } from './orders/orders';
import { OrderDetailComponent } from './orderDetail/orderDetail';
import { ProductsComponent } from './products/products';
import { ProductDetailComponent } from './productDetail/productDetail';
import { ValidateDateDirective } from './directives/validateDate';

export const MODULE_NAME = 'app';

angular
  .module(MODULE_NAME, ['ngRoute'])
  .config(HashPrefixConfig)
  .config(RouteProvider)
  .service('productService', ProductService)
  .service('authenticationService', AuthenticationService)
  .component('customers', CustomersComponent)
  .component('customerDetail', CustomerDetailComponent)
  .component('navigation', NavigationComponent)
  .component('customersTable', CustomersTableComponent)
  .component('discount', DiscountComponent)
  .component('orders', OrdersComponent)
  .component('orderDetail', OrderDetailComponent)
  .component('products', ProductsComponent)
  .component('productDetail', ProductDetailComponent)
  .directive('validateDate', ValidateDateDirective);
