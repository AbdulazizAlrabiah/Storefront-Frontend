
enum NetworkingAPIs {
    getProducts = 'api/products',
    register = 'api/user',
    order = 'api/order',
};

export class NetworkingConfig {
    
  static baseURL = 'http://localhost:3000/';

  // APIs
  static getProductsAPI = this.baseURL + NetworkingAPIs.getProducts;
  static registerAPI = this.baseURL + NetworkingAPIs.register;
  static orderActionsAPI = this.baseURL + NetworkingAPIs.order;
}
