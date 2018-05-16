export const HomeComponent = {
  template: require('./home.html'),
  bindings: {},
  controller: homeComponentController,
};

function homeComponentController() {
  var vm = this;
  vm.title = 'Awesome, Inc. Internal Ordering System';
}
