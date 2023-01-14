import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-productincart',
  templateUrl: './productincart.component.html',
  styleUrls: ['./productincart.component.css']
})
export class ProductInCartComponent {
  @Input() order: Order
  @Input() totalPrice: number = 0
  @Output() removeFromCart = new EventEmitter();

  constructor() {
    this.order = {
      id: 0,
      products: [],
      status: '',
    }
  }
}
