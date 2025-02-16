import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductCart } from '../../models/product.interface';
import { CartService } from '../../services/cart/cart.service';

import { InputNumber } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'cotizador-card-producto',
  standalone: true,
  imports: [
    FormsModule,
    InputNumber,
    ButtonModule,
    Card,
  ],
  providers: [ MessageService],
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.css'
})
export class CardProductoComponent {

  @Input()
  product: ProductCart = {} as ProductCart;

  constructor( private _cartService: CartService ) {}

  removeProduct() {  
    this._cartService.removeProductFromCard(this.product.code);
  }

  updateCartProduct() {
    this._cartService.updateProductAmount(this.product);    
  }

}
