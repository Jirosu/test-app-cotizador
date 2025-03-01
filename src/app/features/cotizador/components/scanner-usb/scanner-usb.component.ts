import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { Product } from '../../models/product.interface';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'scanner-usb',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './scanner-usb.component.html',
  styleUrl: './scanner-usb.component.css'
})
export class ScannerUsbComponent {

  buttonLabel: string = 'Escanear';
  isScanning: boolean = false;

  @Input()
  products: Product[] = [];

  @ViewChild('hiddenInputBarcode')
  hiddenInputBarcode!: ElementRef<HTMLInputElement>;

  @Output()
  onProductScanned: EventEmitter<Product | null> = new EventEmitter(); 

  typingTimer: any;
  doneTypingInterval: number = 50;

  constructor( ) { }

  onInputChange(event: Event) {
    clearTimeout(this.typingTimer);
    const input = event.target as HTMLInputElement;
    const value = input.value;
    console.log('Input changed:', value);
    this.typingTimer = setTimeout(() => {
      this.doneTyping(value)
    }, this.doneTypingInterval);
  }

  doneTyping(value: string) {
    console.log('Done typing:', value);
    this.searchScannedProduct(value);
    this.hiddenInputBarcode.nativeElement.value = ''; // Limpiar el input
    this.hiddenInputBarcode.nativeElement.focus(); // Mantener el foco en el input
  }


  scanProduct() {
    console.log('scan');
    
    if(!this.isScanning) {

      console.log('scan false');
      
      this.isScanning = true;
      this.hiddenInputBarcode.nativeElement.focus();
      this.buttonLabel = 'Detener escaner';
      return;
    }

    console.log('scan true');
    this.buttonLabel = 'Escanear';    
    this.isScanning = false;
    this.hiddenInputBarcode.nativeElement.blur();
    
  } 

  onBlurHiddeninput() {
    // this.buttonLabel = 'Escanear';    
    // this.isScanning = false;
    if(this.isScanning) {
      this.hiddenInputBarcode.nativeElement.focus();
    }
  }

  searchScannedProduct(value: string) {  

    this.onProductScanned.emit( this.getProductByCode(value) );

    console.log({value});

    // this.hiddenInputBarcode.nativeElement.value = '';
    
  }
  
  getProductByCode(code: string) {  
    const index = this.products.findIndex(prod => prod.code.toLowerCase() === code.toLowerCase());
    
    if(index === -1) {
      return null
    }

    return this.products[index];
  }
  
  

}
