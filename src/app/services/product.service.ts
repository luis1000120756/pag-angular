import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = 'view-source:https://api.spacexdata.com/v4/rockets'
  constructor(private httpClient: HttpClient) {}
  getProduct(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }
}
