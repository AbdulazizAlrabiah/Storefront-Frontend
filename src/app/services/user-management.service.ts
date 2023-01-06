import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkingConfig } from '../networkingConfig';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  // TODO: Save locally
  static token: String = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNywidXNlcm5hbWUiOiJ3ZWZ3ZWYgd2Vmd2VmIn19.Ip7p1PyMSxuelQS_4db1ZFR-1eAGc4mM_40a5ndmt9Q";

  constructor(private httpClient: HttpClient) {}

  static getAuthHeader(): HttpHeaders {
    return new HttpHeaders().set('authorization', UserManagementService.token as string)
  }

  register(firstName: String, lastName: String, password: String): Observable<String> {
    return this.httpClient.post<String>(NetworkingConfig.registerAPI, { 'firstName': firstName, 'lastName': lastName, 'password': password });
 }  
}
