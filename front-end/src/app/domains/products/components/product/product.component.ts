import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    RouterLinkWithHref,
    RouterLinkActive
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 @Input({required:true}) product!: Product;
 @Output () addToCart = new EventEmitter();
 

 addToCartHandler(){
  this.addToCart.emit(this.product)
 }

}
