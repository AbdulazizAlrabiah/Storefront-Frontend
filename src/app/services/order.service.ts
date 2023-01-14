import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkingConfig } from '../networkingConfig';
import { UserManagementService } from './user-management.service';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {}

  addProductToUserOrder(productId :number, quantity: number): Observable<number> {

    const body = { 'productId':  productId, 'quantity': quantity }

    return this.httpClient.post<number>(NetworkingConfig.orderActionsAPI, body, { headers: UserManagementService.getAuthHeader() })
  }

  getOrder(): Observable<Order> {
    return this.httpClient.get<Order>(NetworkingConfig.orderActionsAPI, { headers: UserManagementService.getAuthHeader() } )
  }

  deleteProductFromOrder(productId: number): Observable<Product> {

    const body = { 'productId':  productId}

    return this.httpClient.delete<Product>(NetworkingConfig.orderActionsAPI, { headers: UserManagementService.getAuthHeader(), body: body });
  }

  // TODO: Implement submitOrder API
  submitOrder(): Observable<Order> {
    return of({id: 0, products: [], status: ''});
  }

}
