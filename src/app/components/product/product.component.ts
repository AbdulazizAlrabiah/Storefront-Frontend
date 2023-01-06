import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Input() isDetailedView: boolean;
  @Output() addToCart = new EventEmitter();
  @Output() openDetailView = new EventEmitter();

  selectedQuantity = 1;
  quantityOptions: number[] = [1,2,3,4,5,6,7,8,9];

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      category: '',
      imageLink: '',
      description: '',
    }
    this.isDetailedView = false;
  }

  prepareToaddToCart() {
     this.addToCart.emit({ 'productId': this.product.id,'quantity': this.selectedQuantity })
  }
}
