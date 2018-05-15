export const ProductDetailComponent = {
  templateUrl: './productDetail/productDetail.html',
  bindings: {
    product: '<',
  },
  controller: productDetailComponentController,
};

productDetailComponentController.$inject = [];
function productDetailComponentController() {
  var vm = this;
  vm.title = 'Product Detail';
  vm.product = this.product;
}
