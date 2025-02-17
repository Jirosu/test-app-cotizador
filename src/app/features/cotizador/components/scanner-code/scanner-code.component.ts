import { Component, EventEmitter, OnInit, Output, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product/product.service';

import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { Toast } from 'primeng/toast';
import { ProgressSpinner } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';

// ngx-scanner-qrcode
import { NgxScannerQrcodeModule, LOAD_WASM, ScannerQRCodeResult, NgxScannerQrcodeComponent, ScannerQRCodeConfig } from 'ngx-scanner-qrcode';
LOAD_WASM('assets/wasm/ngx-scanner-qrcode.wasm').subscribe();

@Component({
  selector: 'scanner-code',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    Dialog,
    NgxScannerQrcodeModule,
    Toast,
    ProgressSpinner,
    SelectModule,
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


  cameras: MediaDeviceInfo[] = [];
  selectedDeviceId: string = '';

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
    this.loadCameras();
    this.getProducts();
    console.log(this.scanner?.deviceIndexActive)
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

  loadCameras() {
    try {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
       this.cameras = devices.filter(device => device.kind === 'videoinput');
       if (this.cameras.length > 0) {
         this.selectedDeviceId = this.cameras[0].deviceId;
       }
     });
    } catch (error) {
      console.error('Error al cargar las cámaras:', error);      
    }

    console.log(this.selectedDeviceId);
    console.log(this.cameras);
    
  }

  // Cambiar de cámara
  onChangeCamera(): void {
    
    this.scanner?.stop();

    setTimeout( () => {
      this.scanner?.playDevice(this.selectedDeviceId);
      500
    });
    console.log(this.selectedDeviceId)

    this.scanner?.start();
  }
  

  // onValueScanned(codeValue: ScannerQRCodeResult[]) {

  //   if(codeValue[0].value.length === 0) {    
  //     return;
  //   }

  //   if(codeValue[0].value === this.lastScannedValue) {
  //     return;
  //   }
    
  //   this.lastScannedValue = codeValue[0].value;    

  //   this.onScannedProduct.emit(this.searchScannedProduct(codeValue[0].value));

  //   this.messageServ.add({
  //     severity: 'success',
  //     summary: 'Producto escaneado',
  //     detail: 'Se agregó el producto a la cotización',
  //     key: 'toast-scanner',
  //     life: 2500
  //   });


  // }

  onValueScanned(codeValue: ScannerQRCodeResult[]) {

    if(codeValue[0].value.length === 0) {    
      return;
    }

    if(codeValue[0].value === this.lastScannedValue) {
      return;
    }
           
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
    else {
      this.lastScannedValue = codeValue[0].value; 
      
      this.messageServ.add({
        severity: 'warn',
        summary: 'Producto no encontrado',
        detail: 'El producto no fue encontrado, intente escanearlo nuevamente.',
        key: 'toast-scanner',
        life: 2500
      });
    }
  }

}
