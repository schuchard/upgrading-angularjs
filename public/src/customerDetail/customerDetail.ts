import * as moment from 'moment';
import { OrderService } from '../orders/orderService';
import { from, forkJoin } from 'rxjs';
import { AddressService } from '../shared/addressService';

export const CustomerDetailComponent = {
  template: require('./customerDetail.html'),
  bindings: {
    customer: '<',
  },
  controller: customerDetailComponentController,
};

customerDetailComponentController.$inject = ['addressService', 'orderService'];
function customerDetailComponentController(
  addressService: AddressService,
  orderService: OrderService
) {
  var vm = this;
  vm.title = 'Customer Detail';
  vm.customer = this.customer;

  vm.$onInit = function() {
    forkJoin(
      from(addressService.getFullAddress(vm.customer)),
      from(orderService.getOrdersByCustomer(vm.customer.id))
    ).subscribe((res) => {
      [vm.address, vm.orders] = res;

      vm.orders.forEach(function(order) {
        order.orderDate = moment(order.orderDate).format('MM/DD/YYYY');
      });
    });
  };

  vm.updateDiscount = function(discount) {
    vm.customer.discount = discount;
  };
}
