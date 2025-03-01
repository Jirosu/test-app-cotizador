import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { QuotationDetailService } from '../../services/quotation-detail-service/quotation-detail-service.service';
import { QuotationDetail, RespQuotationDetailDto } from '../../models/cotizacion.interface';
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
    QuantityInputComponent,
    CheckboxModule,
    InputTextModule,
    TooltipModule,
  ],
  providers: [ MessageService],
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.css'
})
export class CardProductoComponent implements OnInit {

  @Input()
  product: QuotationDetail = {} as QuotationDetail;

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
    this._cartService.removeProductFromCard(this.product.productCode);
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
  }

}
