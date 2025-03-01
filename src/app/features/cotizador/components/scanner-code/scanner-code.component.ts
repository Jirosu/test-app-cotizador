<<<<<<< HEAD
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, signal, ViewChild } from '@angular/core';
=======
import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, signal, ViewChild } from '@angular/core';
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
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
import { Subject, takeUntil } from 'rxjs';
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
export class ScannerCodeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>(); // Subject para desuscribirse automáticamente
  // modalVisibiliy: boolean = false;
  modalVisibiliy: boolean = true;

  scannerConfig: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth
      }
    },
    isBeep: false,
    // vibrate: 300,
  };


  cameras: MediaDeviceInfo[] = [];
  selectedDeviceId: string = '';

  @Input()
  products: Product[] = [];


  @Output()
  public onScannedProduct: EventEmitter<Product> = new EventEmitter();

  @Output()
  onCloseScannerModal: EventEmitter<void> = new EventEmitter();

  @ViewChild(NgxScannerQrcodeComponent)
  scanner?: NgxScannerQrcodeComponent;
    

  lastScannedValue?: string;

  constructor( 
    private messageServ: MessageService,
<<<<<<< HEAD
    // private _productService: ProductService
=======
    private _productService: ProductService
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
   ) {}  

  ngOnInit(): void {
    this.initScanner();

<<<<<<< HEAD
    // this.getProducts();
  }

  ngOnDestroy(): void {
    this.scanner?.stop();

    this.destroy$.next(); // Emitimos el evento para desuscribirnos
    this.destroy$.complete();
=======
    this.getProducts();
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
  }

  ngOnDestroy(): void {
    this.scanner?.stop();

    this.destroy$.next(); // Emitimos el evento para desuscribirnos
    this.destroy$.complete();
  }

  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    // if (fn === 'start') {
    //   action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    // } else {
    //   action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    // }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack)
        .pipe(takeUntil(this.destroy$)) // Se desuscribe cuando `destroy$` emite un valor
        .subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]()
        .pipe(takeUntil(this.destroy$))
        .subscribe((r: any) => console.log(fn, r), alert);
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

  async initScanner() {
    if (this.modalVisibiliy) {
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

    this.lastScannedValue = undefined;

    this.handle(this.scanner, 'start');
  }


  async changeModalVisibiliy(visible: boolean) {
    // if (!this.modalVisibiliy) {
    if (visible) {
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
  
    this.modalVisibiliy = visible;
    this.lastScannedValue = undefined;

    if (!visible) {
      this.scanner?.stop();
      return;
    }
    this.handle(this.scanner, 'start');
  }

  onCloseModal() {
    this.modalVisibiliy = true;

    this.onCloseScannerModal.emit();
<<<<<<< HEAD
=======
  }

  getProducts() {
    this._productService.getProducts().subscribe( resp => {
      this.products = resp.data.result;
    })
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
  }

  // getProducts() {
  //   this._productService.getProducts().subscribe( resp => {
  //     this.products = resp.data.result;
  //   })
  // }


  searchScannedProduct(code: string) {
    return this.products.find(prod => prod.code.toLowerCase() === code.toLocaleLowerCase());
  }

  onValueScanned(codeValue: ScannerQRCodeResult[]) {

    if(codeValue[0].value.length === 0) {    
      return;
    }

    // if(codeValue[0].value === this.lastScannedValue) {
    //   return;
    // }
           
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
      this.onScannedProduct.emit(product);
      
      this.messageServ.add({
        severity: 'warn',
        summary: 'Producto no encontrado',
        detail: 'El producto no fue encontrado, intente escanearlo nuevamente.',
        key: 'toast-scanner',
        life: 2500
      });

    }
    this.onCloseModal();
  }

}
