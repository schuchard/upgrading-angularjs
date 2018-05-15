import * as angular from 'angular';

import 'angular-route';
import 'jquery';
import 'lodash';
import 'moment';

import './styles/app.css';

import { HashPrefixConfig } from './config.hashprefix';
import { RouteProvider } from './config.routes';

import { CustomerService } from './customers/customerService';
import { AddressService } from './shared/addressService';
import { ProductService } from './products/productService';
import { AuthenticationService } from './shared/authenticationService';
import { OrderService } from './orders/orderService';

import { HomeComponent } from './home/home';
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

angular
  .module('app', ['ngRoute'])
  .config(HashPrefixConfig)
  .config(RouteProvider)
  .service('customerService', CustomerService)
  .service('addressService', AddressService)
  .service('productService', ProductService)
  .service('authenticationService', AuthenticationService)
  .service('orderService', OrderService)
  .component('home', HomeComponent)
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
