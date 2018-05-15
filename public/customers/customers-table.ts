export const CustomersTableComponent = {
  templateUrl: './customers/customers-table.html',
  bindings: {
    customers: '<',
  },
  controller: customersTableComponentController,
};

customersTableComponentController.$inject = [];

function customersTableComponentController() {
  var vm = this;
}
