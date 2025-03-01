<<<<<<< HEAD
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { QuotationDetailService } from '../../services/quotation-detail-service/quotation-detail-service.service';
import { QuotationDetail, RespQuotationDetailDto } from '../../models/cotizacion.interface';
=======
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CartService } from '../../services/cart/cart.service';
import { RespQuotationDetailDto } from '../../models/cotizacion.interface';
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
import { QuantityInputComponent } from '../../../../shared/components/quantity-input/quantity-input.component';

import { InputNumber } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { CompanyService } from '../../services/company/company.service';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cotizador-card-producto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputNumber,
    ButtonModule,
<<<<<<< HEAD
    QuantityInputComponent,
    CheckboxModule,
    InputTextModule,
    TooltipModule,
=======
    Card,
    QuantityInputComponent,
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
  ],
  providers: [ MessageService],
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.css'
})
export class CardProductoComponent implements OnInit {

  @Input()
<<<<<<< HEAD
  product: QuotationDetail = {} as QuotationDetail;
=======
  product: RespQuotationDetailDto = {} as RespQuotationDetailDto;

  @Output()
  onProductChange: EventEmitter<void> = new EventEmitter();
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b

  @Output()
  onProductChange: EventEmitter<void> = new EventEmitter();
  
  isListPriceChecked: boolean = false;
  originalPrice: number = 0; 

  constructor( 
    private _cartService: QuotationDetailService,
    private _companyService: CompanyService
   ) {}

  ngOnInit(): void {
    // this.getCompanyTariffPrice();
  }

  removeProduct() {  
<<<<<<< HEAD
    this._cartService.removeProductFromCard(this.product.productCode);
=======
    this._cartService.removeProductFromCard(this.product.noProduct);
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
    this.onProductChange.emit();
  }

  updateCartProduct() {
    this._cartService.updateProductAmount(this.product);    
    this.onProductChange.emit();
  }

  onQuantityChange(quantity: number) {
    this.product.quantity = quantity;

    this.updateCartProduct();
<<<<<<< HEAD
  }

  getCompanyTariffPrice() {
    // if(!this.isListPriceChecked){
    //   this.product.price = this.originalPrice;

    //   this.updateCartProduct();
    //   this.onProductChange.emit();
    //   return;
    // }
    
    // this.originalPrice = this.product.price;
    // this._companyService.getCompanyTariffPrice(this.product.productCode, this.product.quantity).subscribe( resp => {
    //   if(resp.data > 0) {
    //     this.product.price = resp.data;        
    //   }
    // });

    this.updateCartProduct();
    this.onProductChange.emit();
=======
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
  }

}
