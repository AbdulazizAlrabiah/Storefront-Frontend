import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './screens/productlist/productlist.component';
import { ProductDetailComponent as ProductDetailComponent } from './screens/productdetail/productdetail.component';
import { CartComponent } from './screens/cart/cart.component';
import { OrderCompletionComponent } from './screens/ordercompletion/ordercompletion.component';
import { CreateUserComponent } from './screens/createuser/createuser.component';

const routes: Routes = [
  {
    path: '',
    component: CreateUserComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'product_detail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'cart/order_completion/:totalPrice/:fullName',
    component: OrderCompletionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
