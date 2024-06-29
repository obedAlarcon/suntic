import { Component, Input, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../../../domains/products/pages/list/list.component';
import { ProductComponent } from '../../../domains/products/components/product/product.component';
import { Product } from '../../models/product.model';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,
    ListComponent,
    ProductComponent,
    RouterLinkWithHref,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
// creamos el menu del carrito de conpras
hideSideMenu= signal(true);



private cartService = inject(CartService)
cart = this.cartService.cart;
total = this.cartService.total;
toogleSideMenu(){
  this.hideSideMenu.update(prevState =>!prevState)
}
}
