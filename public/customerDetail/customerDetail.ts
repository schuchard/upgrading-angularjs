import * as moment from 'moment';

export default {
  templateUrl: './customerDetail/customerDetail.html',
  bindings: {
    customer: '<',
  },
  controller: customerDetailComponentController,
};

customerDetailComponentController.$inject = ['addressFactory', 'orderService'];
function customerDetailComponentController(addressFactory, orderService) {
  var vm = this;
  vm.title = 'Customer Detail';
  vm.customer = this.customer;

  vm.$onInit = function() {
    vm.address = addressFactory.getFullAddress(vm.customer);
    vm.orders = orderService.getOrdersByCustomer(vm.customer.id);
    vm.orders.forEach(function(order) {
      order.orderDate = moment(order.orderDate).format('MM/DD/YYYY');
    });
  };

  vm.updateDiscount = function(discount) {
    vm.customer.discount = discount;
  };
}
