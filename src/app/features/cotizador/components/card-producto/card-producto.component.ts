import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CartService } from '../../services/cart/cart.service';
import { RespQuotationDetailDto } from '../../models/cotizacion.interface';
import { QuantityInputComponent } from '../../../../shared/components/quantity-input/quantity-input.component';

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
    QuantityInputComponent,
  ],
  providers: [ MessageService],
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.css'
})
export class CardProductoComponent {

  @Input()
  product: RespQuotationDetailDto = {} as RespQuotationDetailDto;

  @Output()
  onProductChange: EventEmitter<void> = new EventEmitter();

  constructor( private _cartService: CartService ) {}

  removeProduct() {  
    this._cartService.removeProductFromCard(this.product.noProduct);
    this.onProductChange.emit();
  }

  updateCartProduct() {
    this._cartService.updateProductAmount(this.product);    
    this.onProductChange.emit();
  }

  onQuantityChange(quantity: number) {
    this.product.quantity = quantity;

    this.updateCartProduct();
  }

}
