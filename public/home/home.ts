export const HomeComponent = {
  templateUrl: './home/home.html',
  bindings: {},
  controller: homeComponentController,
};

function homeComponentController() {
  var vm = this;
  vm.title = 'Awesome, Inc. Internal Ordering System';
}
