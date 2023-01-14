import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkingConfig } from '../networkingConfig';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private httpClient: HttpClient) {}

  static getTolken(): string {
    return localStorage.getItem('UserToken') as string;
  }

  static getAuthHeader(): HttpHeaders {
    return new HttpHeaders().set('authorization', UserManagementService.getTolken())
  }

  async register(firstName: String, lastName: String, password: String): Promise<void> {
    return new Promise((resolve) => {
      this.httpClient.post<String>(NetworkingConfig.registerAPI, { 'firstName': firstName, 'lastName': lastName, 'password': password }).subscribe( (res) => {
        localStorage.setItem('UserToken', res as string);
        console.log(res);
        resolve();
      });
    })
  }
}
