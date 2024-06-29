import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private endPoint = environment.API_URL

  constructor() { }

   getProducts(){
   return this.http.get<Product[]>(`${this.endPoint}/api/v1/products?price_max=232324&price_min=50`)
   }
     
   getOne(id:string){
    return this.http.get<Product>(`${this.endPoint}/api/v1/products/${id}`);
   }
   
}
