export const CustomersComponent = {
  template: require('./customers.html'),
  bindings: {},
  controller: customersComponentController,
};

customersComponentController.$inject = ['customerService'];
function customersComponentController(customerService) {
  var vm = this;
  vm.title = 'Customers';

  vm.$onInit = () => {
    customerService.getCustomers().then((res) => (vm.customers = res));
  };
}
