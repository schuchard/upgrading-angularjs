export class ProductService {
  constructor(private $http) {}
  getProducts() {
    return this.products();
  }

  getProduct(id) {
    return this.products().filter((p) => p.id === id)[0];
  }

  postProduct(product) {
    return this.$http.post('/api/products', product).then((data) => data);
  }

  private products() {
    return [
      {
        id: 1,
        name: 'Amazing Widget',
        color: 'Red',
        price: 2.5,
      },
      {
        id: 2,
        name: 'Incredible Widget',
        color: 'Blue',
        price: 2.5,
      },
      {
        id: 3,
        name: 'Fantastic Widget',
        color: 'Yellow',
        price: 2.5,
      },
      {
        id: 4,
        name: 'Collectible Widget Tote Bag',
        color: 'Sand',
        price: 10,
      },
    ];
  }
}

ProductService.$inject = ['$http'];
