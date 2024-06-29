import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private endPoint = environment.API_URL
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>('http://localhost:3000/api/v1/products?price_min=1000');
  }
  
}
