import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  order: Order;

  constructor(private orderService: OrderService, private router: Router) {
    this.order = {
      id: 0,
      products: [],
      status: '',
    }
  }

  ngOnInit(): void {
    this.getCurrentOrder();
  }

  getCurrentOrder() {
    this.orderService.getOrder().subscribe( (res) => {
      this.order = res;
    });
  }

  removeFromCart(id: number) {
    this.orderService.deleteProductFromOrder(id).subscribe( (res) => {
      this.order.products.splice(this.order.products.findIndex( (order) => order.product.id === id), 1);
    });
  }

  submitOrder(fullName: String) {
    this.orderService.submitOrder().subscribe( (_) => {
      this.router.navigate(['cart/order_completion', this.calculateTotalPrice(), fullName]);
    });
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    this.order.products.forEach( (product) => {
      totalPrice += product.product.price * product.quantity;
    });
    return totalPrice;
  }
}
