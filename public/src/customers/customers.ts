import { CustomerService } from './customer.service';

export const CustomersComponent = {
  template: require('./customers.html'),
  bindings: {},
  controller: customersComponentController,
};

customersComponentController.$inject = ['customerService'];
function customersComponentController(customerService: CustomerService) {
  var vm = this;
  vm.title = 'Customers';

  vm.$onInit = () => {
    customerService.getCustomers().subscribe((res) => (vm.customers = res));
  };
}
