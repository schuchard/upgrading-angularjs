import * as _ from 'lodash';
import { Observable, from, forkJoin } from 'rxjs';
import { OrderService } from './orderService';
import { CustomerService } from '../customers/customer.service';

export const OrdersComponent = {
  template: require('./orders.html'),
  bindings: {},
  controller: ordersComponentController,
};

ordersComponentController.$inject = ['orderService', 'customerService'];
function ordersComponentController(
  orderService: OrderService,
  customerService: CustomerService
) {
  var vm = this;
  vm.title = 'Orders';

  vm.$onInit = () => {
    forkJoin(
      from(orderService.getOrders()), // promise
      customerService.getCustomers() // observable stream
    ).subscribe((res) => {
      [vm.orders, vm.customers] = res;

      vm.orders.forEach((order) => {
        const customer = _.find(
          vm.customers,
          (customer) => order.customerId === customer.id
        );
        order.customerName = customer.fullName;
      });
    });
  };
}
