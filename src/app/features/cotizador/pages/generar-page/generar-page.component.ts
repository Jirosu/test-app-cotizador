import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ProductService } from '../../services/product/product.service';
import { CotizacionService } from '../../services/cotizacion/cotizacion.service';
import { CardProductoComponent } from '../../components/card-producto/card-producto.component';
import { CartService } from '../../services/cart/cart.service';
import { Cotizacion } from '../../models/cotizacion.interface';
import { ScannerCodeComponent } from '../../components/scanner-code/scanner-code.component';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';

import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { Product, ProductCart } from '../../models/product.interface';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'cotizador-generar-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    ButtonModule,
    CardProductoComponent,
    Toast,
    InputTextModule,
    FloatLabel,
    ScannerCodeComponent,
    SearchBarComponent,
  ],
  providers: [ MessageService],
  templateUrl: './generar-page.component.html',
  styleUrl: './generar-page.component.css'
})
export class GenerarPageComponent implements OnInit, OnDestroy {

  cotizacion: Cotizacion = {
    id: '',
    docCliente: '',
    cliente: '',
    monto: 0,
    fecha: '',
    estado: null,
    productos: []
  };
  products: any[] | undefined;
  selectedProduct: any;
  filteredProducts: any[] = [];
  // scannedCode?: string;

   // plural pipe
   productsPluralMap = {
    '=0': 'productos',
    '=1': 'producto',
    'other': 'productos'
  }
  

  constructor(  
    private _cotizacionService: CotizacionService,
    private _cartService: CartService,    
    private messageServ: MessageService
   ) {}
    
  ngOnInit(): void {
    this.getEditCotizacionData();    
  }

  ngOnDestroy(): void {
    this._cartService.clearCart();
  }

  get cotizacionCartProducts() {
    return this._cartService.cotizacionProductsCart;
  }

  getEditCotizacionData() {
    if(history.state?.cotizacion) {
      this.cotizacion = history.state?.cotizacion;

      this._cartService.cotizacionProductsCart = this.cotizacion.productos;  
    }
  }

  addProductToCart(producto: Product) {
    this._cartService.addProductToCart({...producto});
  }

  getTotalCartAmount() {
    return this._cartService.calculateTotalCartAmount();
  }

  onSelectProduct(product: Product) {
    this.addProductToCart(product as ProductCart)

    this.selectedProduct = null;
  }

  saveToLocalStorageCotizacion() {
    this.cotizacion.monto = this.getTotalCartAmount();
    this._cotizacionService.saveCotizacionInLocalStorage(this.cotizacion);

    const prod = {
      severity: 'info',
      summary: 'Cotización guardada',
      detail: 'Se guardó la cotización exitosamente.',
      key: 'toast-generate-cotizacion',
      life: 2500
    }

    this.messageServ.add(prod);
    this.clearFormAndCart();
  }

  sendToDynamics() {
    this.cotizacion.monto = this.getTotalCartAmount();
    this._cotizacionService.sendToDynamics(this.cotizacion);

    this.messageServ.add({
      severity: 'success',
      summary: 'Cotización generada',
      detail: 'La cotización fue enviada exitosamente.',
      key: 'toast-generate-cotizacion',
      life: 2500
    });

    this.clearFormAndCart();
  }

  updateInDynamics() {
    this.cotizacion.monto = this.getTotalCartAmount();
    this._cotizacionService.sendToDynamics(this.cotizacion);

    this.messageServ.add({
      severity: 'success',
      summary: 'Cotización actualizada',
      detail: 'La cotización fue actualizada exitosamente.',
      key: 'toast-generate-cotizacion',
      life: 2500
    });

    this.clearFormAndCart();
  }

  isFormInvalid() {
    let isInvalid = {
      saveBtn: true,
      sendBtn: true,
    }
    
    if( (this.cotizacion.docCliente.toString().length === 8 || this.cotizacion.docCliente.toString().length === 11 ) && this.cotizacion.cliente.length > 0 && this.cotizacionCartProducts.length > 0) {
      isInvalid.saveBtn = false;
      isInvalid.sendBtn = false;      
    }
    if( this.cotizacion.estado === 'Completado' ) {
      isInvalid.saveBtn = true;
    }

    return isInvalid;
  }

  validateDocCliente(event: any) {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  clearFormAndCart() {
    this.cotizacion = {
      id: '0',
      docCliente: '',
      cliente: '',
      monto: 0,
      fecha: '',
      estado: null,
      productos: []
    };

    this._cartService.clearCart();
  }


  onProductScanned(product: Product) {
    if(!product) {
      console.log('producto no encontrado');
      
      return;
    }

    this.addProductToCart(product);
  }

}
