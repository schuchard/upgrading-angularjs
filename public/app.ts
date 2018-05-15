import * as angular from 'angular';
import 'angular-route';

import { HashPrefixConfig} from './config.hashprefix';
import { RouteProvider} from './config.routes';

import { CustomerService} from './customers/customerService';
import { AddressService } from './shared/addressService';

import { HomeComponent } from './home/home';
import { CustomersComponent } from './customers/customers';
import { CustomerDetailComponent } from './customerDetail/customerDetail';
import { NavigationComponent } from './navigation/navigation';
import { CustomersTableComponent } from './customers/customers-table';
import { DiscountComponent } from './customerDetail/discount';
import { OrdersComponent } from './orders/orders';

angular
  .module('app', ['ngRoute'])
  .config(HashPrefixConfig)
  .config(RouteProvider)
  .service('customerService', CustomerService)
  .service('addressService', AddressService)
  .component('home', HomeComponent)
  .component('customers', CustomersComponent)
  .component('customerDetail', CustomerDetailComponent)
  .component('navigation', NavigationComponent)
  .component('customersTable', CustomersTableComponent)
  .component('discount', DiscountComponent)
  .component('orders', OrdersComponent);
