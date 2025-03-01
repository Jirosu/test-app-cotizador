import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { QuotationDetail } from '../../models/cotizacion.interface';
import { QuantityInputComponent } from '../../../../shared/components/quantity-input/quantity-input.component';
import { QuotationDetailService } from '../../services/quotation-detail-service/quotation-detail-service.service';

import { TableModule } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'detalle-cotizacion-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    QuantityInputComponent,
    FormsModule,
    Tooltip,
    InputNumberModule,
  ],
  templateUrl: './detalle-cotizacion-table.component.html',
  styleUrl: './detalle-cotizacion-table.component.css'
})
export class DetalleCotizacionTableComponent implements OnInit {

  @Input()
  detailCotizacionList: QuotationDetail[] = [];

  @Output()
  onProductChange: EventEmitter<void> = new EventEmitter();

  constructor( 
    private _cartService: QuotationDetailService,
  ) {}

  ngOnInit(): void {
    this.validateTariffPriceChecked();
  }

  removeProduct(prodCode: string) {  
    this._cartService.removeProductFromCard(prodCode);
    this.onProductChange.emit();
  }

  updateCartProduct(prod: QuotationDetail) {
    this._cartService.updateProductAmount(prod);    
    this.onProductChange.emit();
  }

  validateIsPriceIsIncludeInTariff(prod: QuotationDetail) {
    prod.isTarifPriceChecked = false;    

    const index = this.detailCotizacionList.findIndex(prodList => prodList.productCode === prod.productCode);
    this.detailCotizacionList[index] = prod;
    
    prod.tariffPrice.forEach( tariff  => {      
        if(tariff.unitPrice == prod.price && tariff.minimumQuantity <= prod.quantity) {
          prod.isTarifPriceChecked = true;
        }
      });
    
    this.updateCartProduct(prod); 
    this.onProductChange.emit();
  }

  onQuantityChange(prod: QuotationDetail, quantity: number) {
    prod.quantity = quantity;
    
    if(prod.isTarifPriceChecked) {
      this.getCompanyTariffPrice(prod);
    }

    this.updateCartProduct(prod);
    this.onProductChange.emit();
  }

  validateTariffPriceChecked() {
    this.detailCotizacionList.forEach( detailProd => {
      detailProd.tariffPrice.forEach( tariff => {
        if(tariff.unitPrice === detailProd.price) {
          detailProd.isTarifPriceChecked = true;
        }
      })
    })
  }

  getCompanyTariffPrice(prod: QuotationDetail) {

    
    if(prod.isTarifPriceChecked){
      prod.tariffPrice.sort((a, b) => b.minimumQuantity - a.minimumQuantity);

      const tarifaCorrespondiente = prod.tariffPrice.find(tariff => prod.quantity >= tariff.minimumQuantity);

      if(tarifaCorrespondiente === undefined) {
        return
      } else{
        prod.price = tarifaCorrespondiente.unitPrice;
      }

      this.updateCartProduct(prod);
      this.onProductChange.emit();

      // console.log('checked');
      console.log('tariff', tarifaCorrespondiente);
            
      return;
    }
    
    prod.price = prod.originalPrice!;

    this.updateCartProduct(prod);
    this.onProductChange.emit();
  }

  validateOnlyNumbers(event: any) {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }    
  } 

  validateValidPrice(product: QuotationDetail) {
    if (product.price == null || product.price == undefined || isNaN(product.price) || product.price < 0) {
      console.log('Validating number'); 
      product.price = 0.10;
    }
  }

}
