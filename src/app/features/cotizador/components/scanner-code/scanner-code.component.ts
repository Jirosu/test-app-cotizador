import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { Toast } from 'primeng/toast';
import { ProgressSpinner } from 'primeng/progressspinner';

// ngx-scanner-qrcode
import { NgxScannerQrcodeModule, LOAD_WASM, ScannerQRCodeResult, NgxScannerQrcodeComponent, ScannerQRCodeConfig } from 'ngx-scanner-qrcode';
import { MessageService } from 'primeng/api';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product.interface';
LOAD_WASM('assets/wasm/ngx-scanner-qrcode.wasm').subscribe();

@Component({
  selector: 'scanner-code',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    Dialog,
    NgxScannerQrcodeModule,
    Toast,
    ProgressSpinner,
  ],
  providers: [MessageService],
  templateUrl: './scanner-code.component.html',
  styleUrl: './scanner-code.component.css'
})
export class ScannerCodeComponent implements OnInit  {
  
  modalVisibiliy: boolean = false;

  scannerConfig: ScannerQRCodeConfig = {
    constraints: {
      video: {
        // width: { min: 640, ideal: 1920 },
        // height: { min: 360, ideal: 1080 },
        width: { min: 350, ideal: 350 },
        height: { min: 200, ideal: 200 },
        aspectRatio: { ideal: 1.7777777778 },
      },
    },
    isBeep: false,
    vibrate: 300,
  };

  products: Product[] = [];


  @Output()
  public onScannedProduct: EventEmitter<Product> = new EventEmitter();

  @ViewChild(NgxScannerQrcodeComponent)
  scanner?: NgxScannerQrcodeComponent;
    

  lastScannedValue?: string;

  constructor( 
    private messageServ: MessageService,
    private _productService: ProductService
   ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe( resp => {
      this.products = resp.data.result;
    })
  }

  changeModalVisibiliy() {
    this.modalVisibiliy = !this.modalVisibiliy;
    this.lastScannedValue = undefined;
    if(!this.modalVisibiliy) {
      this.scanner?.stop();
   
      return;
    }
    this.scanner?.start();
  }

  searchScannedProduct(code: string) {
    return this.products.find(prod => prod.code === code);
  }

  onValueScanned(codeValue: ScannerQRCodeResult[]) {

    if(codeValue[0].value.length === 0) {    
      return;
    }

    if(codeValue[0].value === this.lastScannedValue) {
      return;
    }
    
       
// TODO: esto se cambio
    const product = this.searchScannedProduct(codeValue[0].value);
    if(product) {      
      this.lastScannedValue = codeValue[0].value; 
      this.onScannedProduct.emit(product);
  
      this.messageServ.add({
        severity: 'success',
        summary: 'Producto escaneado',
        detail: 'Se agregó el producto a la cotización',
        key: 'toast-scanner',
        life: 2500
      });
    }
  }

}
