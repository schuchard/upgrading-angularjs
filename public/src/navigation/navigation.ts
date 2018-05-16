export const NavigationComponent = {
  template: require('./navigation.html'),
  bindings: {},
  controller: navigationComponentController,
};

navigationComponentController.$inject = [];

function navigationComponentController() {
  var vm = this;
  vm.companyName = 'Awesome, Inc.';
}
