import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../../shared/models/product.model';
import { ProductService } from '../../../../shared/services/product.service';

import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CartService } from '../../../../shared/services/cart.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule, 
    ProductComponent,
    RouterModule,
    HeaderComponent,
    RouterOutlet
    
    
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  private cartService = inject(CartService)
   
    private productService = inject(ProductService);

    ngOnInit(){
   this.productService.getProducts()
   .subscribe({
    next:(products)=>{
      console.log('Product fetched:', products);
      this.products.set(products)
    },
    error:()=>{

    }
   })

    
    }

    addToCart(product: Product){
    this.cartService.addToCart(product)
    }

   
  }

  
 

