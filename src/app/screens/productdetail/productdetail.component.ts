import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number = 0;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private orderService: OrderService) {

    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
    });

    this.product = {
      id: 0,
      name: '',
      price: 0,
      category: '',
      imageLink: '',
      description: '',
    }
  }

  ngOnInit(): void {
    this.product = this.productService.getProductById(this.productId);
  }

  // Used any type for easier argument passing rather than creating a new object for this single purpose
  addToCart(json: any) {
    const productId = json['productId']
    const quantity = json['quantity']

    this.orderService.addProductToUserOrder(productId, quantity).subscribe( (_) => {});

  }

}
