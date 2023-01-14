import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductPlaceDialogComponent } from 'src/app/components/productplacedialog/productplacedialog.component';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public productService: ProductService, private orderService: OrderService, private diaglog: MatDialog) {};
  
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

    this.orderService.addProductToUserOrder(productId, quantity).subscribe( (_) => {
      this.openSuccessDialog();
    });
  }

  openSuccessDialog() {
    const dialogConfiguration = new MatDialogConfig();

    dialogConfiguration.autoFocus = false;

    dialogConfiguration.position = {
        bottom: '0',
      }      

      this.diaglog.open(ProductPlaceDialogComponent, dialogConfiguration);

      setTimeout(() => {
        this.diaglog.closeAll();
      }, 850);
    }
}
