import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkingConfig } from '../networkingConfig';
import { UserManagementService } from './user-management.service';
import { Observable } from 'rxjs';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { useAnimation } from '@angular/animations';
import { Order } from '../models/order';
import { enableDebugTools } from '@angular/platform-browser';
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
}
