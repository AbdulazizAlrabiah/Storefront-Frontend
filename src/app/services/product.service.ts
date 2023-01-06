import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { NetworkingConfig } from '../networkingConfig';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  async getProducts() {
     this.httpClient.get<Product[]>(NetworkingConfig.getProductsAPI).subscribe( (res) => {
      this.products = res;
    });
  }

  getProductById(id: number): Product {
    // TODO: Handle definite assertion
    return this.products.find(product => product.id == id)!;
  }
}
