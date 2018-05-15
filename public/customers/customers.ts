export const CustomersComponent = {
  templateUrl: './customers/customers.html',
  bindings: {},
  controller: customersComponentController,
};

customersComponentController.$inject = ['customerService'];
function customersComponentController(customerService) {
  var vm = this;
  vm.title = 'Customers';

  vm.$onInit = () => (vm.customers = customerService.getCustomers());
}
