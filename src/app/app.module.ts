import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './screens/productlist/productlist.component';
import { ProductDetailComponent } from './screens/productdetail/productdetail.component';
import { CartComponent } from './screens/cart/cart.component';
import { OrderCompletionComponent } from './screens/ordercompletion/ordercompletion.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateUserComponent } from './screens/createuser/createuser.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ProductInCartComponent } from './components/productincart/productincart.component';
import { PaymentFormComponent } from './components/paymentform/paymentform.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductPlaceDialogComponent } from './components/productplacedialog/productplacedialog.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    OrderCompletionComponent,
    ProductComponent,
    HeaderComponent,
    CreateUserComponent,
    ProductInCartComponent,
    PaymentFormComponent,
    ProductPlaceDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule, 
    MaterialModule, 
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
