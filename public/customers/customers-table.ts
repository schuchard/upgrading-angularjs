export const CustomersTableComponent = {
  template: require('./customers-table.html'),
  bindings: {
    customers: '<',
  },
  controller: customersTableComponentController,
};

customersTableComponentController.$inject = [];

function customersTableComponentController() {
  var vm = this;
}
