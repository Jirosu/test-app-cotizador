import { AfterViewInit, Component, EventEmitter, OnInit, Output, signal, ViewChild } from '@angular/core';
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
export class ScannerCodeComponent implements OnInit {
  
  modalVisibiliy: boolean = false;

  scannerConfig: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth
      }
      // video: {
        // width: { min: 640, ideal: 1920 },
        // height: { min: 360, ideal: 1080 },
        // width: { min: 350, ideal: 350 },
        // height: { min: 200, ideal: 200 },
        // aspectRatio: { ideal: 1.7777777778 },
      // },
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
    this.getProducts();
  }

  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }

  async checkCameraPermission(): Promise<boolean> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop());
      return true;
    } catch (err) {
      console.error('Error al verificar los permisos de la cámara:', err);
      return false;
    }
  }


  async changeModalVisibiliy() {
    if (!this.modalVisibiliy) {
      const hasPermission = await this.checkCameraPermission();
      if (!hasPermission) {
        this.messageServ.add({
          severity: 'error',
          summary: 'Permisos de cámara denegados',
          detail: 'Para usar el escaner, necesita habilitar los permisos de cámara en la configuración de su navegador.',
          key: 'toast-scanner',
          life: 10000,
          sticky: true,
          closable: true
        });
        return;
      }
    }
  
    this.modalVisibiliy = !this.modalVisibiliy;
    this.lastScannedValue = undefined;
    if (!this.modalVisibiliy) {
      this.scanner?.stop();
      return;
    }
    this.handle(this.scanner, 'start');
  }

  getProducts() {
    this._productService.getProducts().subscribe( resp => {
      this.products = resp.data.result;
    })
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
