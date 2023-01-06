import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public productService: ProductService, private orderService: OrderService) {};
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts();
  }

  // Used any type for easier argument passing rather than creating a new object for this single purpose
  addToCart(json: any) {
    const productId = json['productId']
    const quantity = json['quantity']

    this.orderService.addProductToUserOrder(productId, quantity).subscribe( (_) => {});

  }

}
