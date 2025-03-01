import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { catchError, EMPTY, map } from 'rxjs';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { CotizacionService } from '../../services/cotizacion/cotizacion.service';
import { CardProductoComponent } from '../../components/card-producto/card-producto.component';
import { QuotationDetailService } from '../../services/quotation-detail-service/quotation-detail-service.service';
import { ScannerCodeComponent } from '../../components/scanner-code/scanner-code.component';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { CotizacionStatus, Quotation, QuotationDetail } from '../../models/cotizacion.interface';
import { Mapper } from '../../../../shared/utils/mapper';
import { Product } from '../../models/product.interface';
import { CompanyService } from '../../services/company/company.service';
import { ScannerUsbComponent } from '../../components/scanner-usb/scanner-usb.component';
import { ProductService } from '../../services/product/product.service';
import { RespPlaceOfDispatchDto, RespPriceTypeDto, RespShippingLocationDto, RespTypeOfDeliveryDto } from '../../models/company.interface';
import { DetalleCotizacionTableComponent } from '../../components/detalle-cotizacion-table/detalle-cotizacion-table.component';

import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { Toast } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { TagModule } from 'primeng/tag';
import { ProgressSpinner } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: 'cotizador-generar-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    ButtonModule,
    // CardProductoComponent,
    Toast,
    InputTextModule,
    FloatLabel,
    ScannerCodeComponent,
    SearchBarComponent,
    CheckboxModule,
    ConfirmDialog,
    TagModule,
    ProgressSpinner,
    DialogModule,
    ScannerUsbComponent,
    SelectModule,
    AccordionModule,    
    DetalleCotizacionTableComponent,
  ],
  providers: [ MessageService, ConfirmationService ],
  templateUrl: './generar-page.component.html',
  styleUrl: './generar-page.component.css'
})
export class GenerarPageComponent implements OnInit, OnDestroy {


  cotizacion: Quotation = {
    noCotizacion: '',
    clientDoc: '',
    clientNames: '',
    cart: [],
    
    puntoEntrega: '',
    lugarEnvio: '',
    tipoEntrega: '',
    tipoPrecio: '',
    telefonoCliente: '',
    direCliente: '',

    status: CotizacionStatus.null,
    totalPrice: 0,
    timestamp: 0,
  }

  // selects data
  typeOfDelivery: RespTypeOfDeliveryDto[] = [];
  placeOfDispatch: RespPlaceOfDispatchDto[] = [];
  shippingLocation: RespShippingLocationDto[] = [];
  priceType: RespPriceTypeDto[] = [];

  selectedProduct: any;
  filteredProducts: any[] = [];
  precioPorMenor: boolean = false;
  scannerVisibility: boolean = false;
  productNotFoundVisibility: boolean = false;
  accordionVisibility: boolean = true;
  
  loadingBtnDelete: boolean = false;
  loadingBtnSave: boolean = false;
  loadingBtnSend: boolean = false;
  loadingFetchData: boolean = false;

  productsListOriginal: Product[] = [];
  productsList: Product[] = [];
  percentageForMinorTypePrice: number = 1; 

   // plural pipe
   productsPluralMap = {
    '=0': 'productos',
    '=1': 'producto',
    'other': 'productos'
  }

  @ViewChild('hiddenInputBarcode')
  hiddenInputBarcode!: ElementRef<HTMLInputElement>;
  

  constructor(  
    private _cotizacionesService: CotizacionService,
    private _cartService: QuotationDetailService,   
    private _productService: ProductService, 
    private _companyService: CompanyService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
   ) {}
    
  ngOnInit(): void {    
    this.getCotizacionData();        
    this.getProductos();
    this.loadTypeOfDelivery();
    this.loadCompanyPlaceOfDispatch();
    this.loadCompanyShippingLocation();
    this.loadCompanyPriceType();
    // this.getCompanyPercentageForMinorTypePrice();
  }

  ngOnDestroy(): void {
    this._cartService.clearCart();
  }

  get cotizacionCartProducts() {
    return this._cartService.cotizacionProductsCart.reverse();
  }

  loadTypeOfDelivery(): void {
    this._companyService.getTypeOfDelivery().subscribe(response => {
      this.typeOfDelivery = response.data;
    });
  }

  loadCompanyPlaceOfDispatch(): void {
    this._companyService.getCompanyPlaceOfDispatch().subscribe(response => {
      this.placeOfDispatch = response.data;
    });
  }

  loadCompanyShippingLocation(): void {
    this._companyService.getCompanyShippingLocation().subscribe(response => {
      this.shippingLocation = response.data;
    });
  }

  loadCompanyPriceType(): void {
    this._companyService.getCompanyPriceType().subscribe(response => {
      this.priceType = response.data;
    });
  }

  // getCompanyPercentageForMinorTypePrice() {
  //   this._companyService.getCompanyPercentageForMinorTypePrice().subscribe(response => {
  //     this.percentageForMinorTypePrice = response.data;
  //   })
  // }


  get cotizacionStatus(): typeof CotizacionStatus {
    return CotizacionStatus;
  }

  getProductos() {
    this.loadingFetchData = true;

    this._productService.getProducts().pipe(
      map(resp => resp.data.result),
      // map(products => products.map( (prod: Product) => ({
      //     ...prod,
      //     description: prod.description.length === 0 ? 'PRODUCTO SIN NOMBRE' : prod.description
      //   }) 
      // ))
    )    
    .subscribe( data => {
      this.productsListOriginal = data;
      this.productsList = data;

      this.loadingFetchData = false
    })
  }


  getCotizacionData() {
    
    const cotizacionId: string | null = history.state?.cotizacionId || null;  

    // new quotation (no id found in state)
    if (!cotizacionId) {
        // this.loadingFetchData = false;   
        return;
    }

    // localStorage
    if ( (cotizacionId.toUpperCase()).startsWith('CT') ) {
        this.loadCotizacionFromLocalStorage(cotizacionId);
    }
    // API
    if ( (cotizacionId.toUpperCase()).startsWith('FV') ) {
        this.getCotizacionById(cotizacionId);
    }
    // id diferente, busca en local
    if( !(cotizacionId.toUpperCase()).startsWith('CT') && !(cotizacionId.toUpperCase()).startsWith('FV') ){
      this.loadCotizacionFromLocalStorage(cotizacionId);      
    }  
  } 

  private loadCotizacionFromLocalStorage(cotizacionId: string) {
    const foundCotizacion = this._cotizacionesService.findCotizacionInLocalStorageById(cotizacionId);

    if (!foundCotizacion) {
      this.cotizacion = {
        noCotizacion: '',
        clientDoc: '',
        clientNames: '',
        cart: [],
        
        puntoEntrega: '',
        lugarEnvio: '',
        tipoEntrega: '',
        tipoPrecio: '',
        telefonoCliente: '',
        direCliente: '',

        status: CotizacionStatus.null,
        totalPrice: 0,
        timestamp: 0,         
      };

      this.messageService.add({
        severity: 'error',
        summary: 'Error al obtener la cotización',
        detail: 'Se produjo un error al intentar obtener los datos de la cotización.',
        key: 'toast-generate-cotizacion',
        life: 3500
      });

      // this.loadingFetchData = false;
      return;
    }

    this.cotizacion = foundCotizacion;
    this._cartService.cotizacionProductsCart = foundCotizacion.cart;

    // this.loadingFetchData = false;
  }

  getProductTariffPrice(prod: QuotationDetail) {
      this._companyService.getCompanyTariffPrice(prod.productCode).subscribe( resp => {
      prod.tariffPrice = resp.data
    })
  }

  getCotizacionById(id: string) {
    this._cotizacionesService.getQuotationById(id).pipe(
      catchError( err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al obtener la cotización',
          detail: 'Se produjo un error al intentar obtener los datos de la cotización.',
          key: 'toast-generate-cotizacion',
          life: 3500
        }); 
        
        // this.loadingFetchData = false
        return EMPTY
      })
    ).subscribe(cotizacion => {
      if (!cotizacion) return;

      this.cotizacion = Mapper.mapRespQuotationByIdDtoQuotation(cotizacion.data);

      this.cotizacion.status = CotizacionStatus.Devuelto;
      this.cotizacion.clientNames = cotizacion.data.clientName === 'NV' || cotizacion.data.clientName === 'NOTA DE VENTA' ? '' : this.cotizacion.clientNames;
      this.cotizacion.clientDoc = cotizacion.data.noClient === 'NV' ? '' : this.cotizacion.clientDoc;
      this._cartService.cotizacionProductsCart = this.cotizacion.cart;

      // // obtener precio de lista
      this.cotizacion.cart.forEach( detail => {
        this.getProductTariffPrice(detail)
      } )
      // console.log(this.cotizacion.cart);
      

      // this.loadingFetchData = false
    })
  }
  

  addProductToCart(producto: Product) {
    this._cartService.addProductToCart(
      Mapper.mapProductToQuotationDetail(producto)
    );
    
    this.autoSaveCotizacionInLocalStorage();
  }

  getTotalCartAmount() {
    return this._cartService.calculateTotalCartAmount();
  }

  getCartIGV() {
    return this._cartService.calculateIGV();
  }

  onSelectProduct(product: Product) {
    this.addProductToCart(product);

    this.selectedProduct = null;
  }

  // save with new id
  saveToLocalStorageCotizacion() {
    const cotCodeLocal = this.cotizacion.noCotizacion;
    this.loadingBtnSave = true;

    this.cotizacion.totalPrice = this.getTotalCartAmount();

    this._cotizacionesService.saveCotizacionInLocalStorage(this.cotizacion);
    
    this.clearFormAndCart();
    this.loadingBtnSave = false;

    this.messageService.add({
      severity: 'info',
      summary: 'Cotización guardada',
      detail: `Se guardó la cotización con el código ${cotCodeLocal}.`,
      key: 'toast-generate-cotizacion',
      life: 2500
    });    
  }

  sendToDynamics() {
    this.loadingBtnSend = true; 
    
    this.cotizacion.cart = this._cartService.cotizacionProductsCart;


    this._cotizacionesService.addQuotation(
      // this.cotizacion
      // Mapper.mapRespQuotationsDtoToGenerateQuotation_BL(this.cotizacion),
      // this.cotizacion.no
      {
        clientDoc: this.cotizacion.clientDoc,
        clientNames: this.cotizacion.clientNames,
        cart: this.cotizacion.cart,
        puntoEntrega: this.cotizacion.puntoEntrega,
        lugarEnvio: this.cotizacion.lugarEnvio,
        tipoEntrega: this.cotizacion.tipoEntrega,
        tipoPrecio: this.cotizacion.tipoPrecio,
        telefonoCliente: this.cotizacion.telefonoCliente,
        direCliente: this.cotizacion.direCliente,
      }
    ).pipe(
      map(resp => {
        if(!resp.success) {
          this.messageService.add({
            severity: 'danger',
            summary: 'Error al registrar la cotización',
            detail: 'La cotización no puedo ser registrada.',
            key: 'toast-generate-cotizacion',
            life: 2500
          });

          console.log({resp});
          this.loadingBtnSend = false;
        }
        else{
          this.messageService.add({
            severity: 'success',
            summary: 'Cotización generada correctamente.',
            detail: resp.data,
            key: 'toast-generate-cotizacion',
            life: 2500
          });

          this._cotizacionesService.deleteCotizacionFromLocalStorage(this.cotizacion.noCotizacion!);
          this.clearFormAndCart();

          console.log({resp});          
          this.loadingBtnSend = false;
        }
      }),
      catchError( err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al registrar la cotización',
          detail: `Error: La cotización no puedo ser registrada.`,
          key: 'toast-generate-cotizacion',
          life: 2500
        });
        console.error({err});
        
        this.loadingBtnSend = false;
        return EMPTY;
      })
    ).subscribe();
        
  }

  updateInDynamics() {
    this.loadingBtnSend = true;

    this.cotizacion.cart = this._cartService.cotizacionProductsCart;
    
    this._cotizacionesService.updateQuotation(
      // Mapper.mapRespQuotationsDtoQuotation(this.cotizacion)
      // this.cotizacion
      {
        noCotizacion: this.cotizacion.noCotizacion,
        clientDoc: this.cotizacion.clientDoc,
        clientNames: this.cotizacion.clientNames,
        cart: this.cotizacion.cart,
        puntoEntrega: this.cotizacion.puntoEntrega,
        lugarEnvio: this.cotizacion.lugarEnvio,
        tipoEntrega: this.cotizacion.tipoEntrega,
        tipoPrecio: this.cotizacion.tipoPrecio,
        telefonoCliente: this.cotizacion.telefonoCliente,
        direCliente: this.cotizacion.direCliente,
      }
    ).pipe(
      map(resp => {
        if(!resp.success) {
          this.messageService.add({
            severity: 'danger',
            summary: 'Error al actualizar la cotización',
            detail: 'La cotización no puedo ser actualizada.',
            key: 'toast-generate-cotizacion',
            life: 2500
          });

          console.log({resp});
          this.loadingBtnSend = false;
        }
        else{
          this.messageService.add({
            severity: 'success',
            summary: `Se actualizo correctamente la cotización ${this.cotizacion.noCotizacion}.`,
            detail: resp.data,
            key: 'toast-generate-cotizacion',
            life: 2500
          });
          
          this._cotizacionesService.deleteCotizacionFromLocalStorage(this.cotizacion.noCotizacion!);
          this.clearFormAndCart();

          console.log({resp});
          this.loadingBtnSend = false;
        }
      }),
      catchError( error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al registrar la cotización',
          detail: `Error: ${error.message}`,
          key: 'toast-generate-cotizacion',
          life: 2500
        });
        console.log({error});

        this.loadingBtnSend = false;
        return EMPTY;
      })
    ).subscribe();    
  }

  isFormInvalid() {
    let isInvalid = {
      saveBtn: true,
      sendBtn: true,
      deleteBtn: true
    }

    // cart vacio
    if(this.cotizacionCartProducts.length === 0) {
      return isInvalid;
    }    

    // pendiente/local 
    if(this.cotizacion.status === CotizacionStatus.Pendiente && this.cotizacionCartProducts.length > 0){
      isInvalid.saveBtn = false;
      isInvalid.sendBtn = false;
      isInvalid.deleteBtn = false; 

      // if(this.cotizacion.tipoPrecio.trim().length < 1 || this.cotizacion.puntoEntrega.trim().length < 1 || this.cotizacion.lugarEnvio.trim().length < 1 || this.cotizacion.tipoEntrega.trim().length < 1 || this.cotizacion.telefonoCliente.trim().length < 1 || this.cotizacion.direCliente.trim().length < 1 ) {      
      if(this.cotizacion.tipoPrecio.trim().length < 1 || this.cotizacion.puntoEntrega.trim().length < 1 || this.cotizacion.lugarEnvio.trim().length < 1 || this.cotizacion.tipoEntrega.trim().length < 1 ) {      
        isInvalid.sendBtn = true;
      }
      return isInvalid;
    }

    // form invalid
    // if(this.cotizacion.tipoPrecio.trim().length < 1 || this.cotizacion.puntoEntrega.trim().length < 1 || this.cotizacion.lugarEnvio.trim().length < 1 || this.cotizacion.tipoEntrega.trim().length < 1 || this.cotizacion.telefonoCliente.trim().length < 1 || this.cotizacion.direCliente.trim().length < 1 ) {      
      if(this.cotizacion.tipoPrecio.trim().length < 1 || this.cotizacion.puntoEntrega.trim().length < 1 || this.cotizacion.lugarEnvio.trim().length < 1 || this.cotizacion.tipoEntrega.trim().length < 1 ) {      
      return isInvalid;
    }

    // devuelto y cart vacio
    if(this.cotizacion.status === CotizacionStatus.Devuelto && this.cotizacionCartProducts.length > 0) {
      isInvalid.saveBtn = true;
      isInvalid.sendBtn = false;
      isInvalid.deleteBtn = false;

      // if(this.cotizacion.tipoPrecio.trim().length < 1 || this.cotizacion.puntoEntrega.trim().length < 1 || this.cotizacion.lugarEnvio.trim().length < 1 || this.cotizacion.tipoEntrega.trim().length < 1 || this.cotizacion.telefonoCliente.trim().length < 1 || this.cotizacion.direCliente.trim().length < 1 ) {      
        if(this.cotizacion.tipoPrecio.trim().length < 1 || this.cotizacion.puntoEntrega.trim().length < 1 || this.cotizacion.lugarEnvio.trim().length < 1 || this.cotizacion.tipoEntrega.trim().length < 1 ) {      
        isInvalid.sendBtn = true;
      }
      return isInvalid;
    }

    return isInvalid;
  }



  validateOnlyNumbers(event: any) {
    // Tomar el valor actual del campo
    let currentValue = event.target.value;
  
    // Eliminar caracteres no numéricos
    const filteredValue = currentValue.replace(/[^0-9]/g, '');
    
    // Actualizar el modelo con el valor filtrado
    if (event.target.id === 'numDocCli') {
      this.cotizacion.clientDoc = filteredValue;
    } else if (event.target.id === 'registerDate') {
      this.cotizacion.telefonoCliente = filteredValue;
    }
    
    // Actualizar el valor del campo input en la vista
    event.target.value = filteredValue;
  }

  removeNoNumericCharacters() {

    if (this.cotizacion.telefonoCliente) {
      this.cotizacion.telefonoCliente = this.cotizacion.telefonoCliente.replace(/[^0-9]/g, '');
    }
  
    // Elimina cualquier carácter no numérico en el campo clientDoc
    if (this.cotizacion.clientDoc) {
      this.cotizacion.clientDoc = this.cotizacion.clientDoc.replace(/[^0-9]/g, '');
    }
  }

  getClientDataMigo() {    

    if(this.cotizacion.clientDoc.length === 0) {
      this.cotizacion.clientNames = '';
      this.autoSaveCotizacionInLocalStorage();
      return;
    }

    if(this.cotizacion.clientDoc.length !== 8 && this.cotizacion.clientDoc.length !== 11) {
      this.cotizacion.clientNames = '';      
      return;
    }
    
    return this._companyService.getCustomerInfo(this.cotizacion.clientDoc).subscribe( data => {
      if(this.cotizacion.clientDoc.length === 8) {
        this.cotizacion.clientNames = data.nombres || '';
      }
      else {
        this.cotizacion.clientNames = data.nombres || '';
      }

      this.autoSaveCotizacionInLocalStorage();
    })
  }

  onFormValuesChange() {    
    this.autoSaveCotizacionInLocalStorage();    
  }

  clearFormAndCart() {
    this.cotizacion = {
      noCotizacion: '',
      clientDoc: '',
      clientNames: '',
      cart: [],
      
      puntoEntrega: '',
      lugarEnvio: '',
      tipoEntrega: '',
      tipoPrecio: '',
      telefonoCliente: '',
      direCliente: '',

      status: CotizacionStatus.null,
      totalPrice: 0,
      timestamp: 0,
    };

    this.precioPorMenor = false;
    this._cartService.clearCart();
  }


  onProductScanned(product: Product | null) {
    if(!product) {      
      this.productNotFoundVisibility = true;
      setTimeout(
        () => this.productNotFoundVisibility = false,
        1500
      )
      return;
    }
    
    this.messageService.add({
      severity: 'success',
      summary: 'Producto escaneado',
      detail: `Se agregó el producto ${product.description} a la cotización` ,
      key: 'toast-generate-cotizacion',
      life: 1200
    });

    this.addProductToCart(product);
  }



  onProductChange() {
    this.autoSaveCotizacionInLocalStorage();
  }

  // auto save
  autoSaveCotizacionInLocalStorage() {   
    if(this._cartService.cotizacionProductsCart.length > 0)  {      
      this.cotizacion.totalPrice = this.getTotalCartAmount();
      
      this._cotizacionesService.saveCotizacionInLocalStorage(this.cotizacion);            
    }
    
    // carrito vacío -> elimina del local
    if(this._cartService.cotizacionProductsCart.length === 0 && this.cotizacion.noCotizacion && this.cotizacion.status === CotizacionStatus.Pendiente) {          
              
      this.deleteCotizacion(false);
    }
  }


  deleteCotizacion(showToast: boolean = true) {
    if(this.cotizacion.status === CotizacionStatus.Pendiente) {
      this._cotizacionesService.deleteCotizacionFromLocalStorage(this.cotizacion.noCotizacion);
      
      if(showToast) {
        this.messageService.add({
          severity: 'success',
          summary: 'Cotización eliminada',
          detail: `La cotización ${this.cotizacion.noCotizacion} fue eliminada exitosamente.`,
          key: 'toast-generate-cotizacion',
          life: 2500
        });
      }

      this.clearFormAndCart();
      this.loadingBtnDelete = false;
      return;
    }

    if(this.cotizacion.status === CotizacionStatus.Devuelto) {
      this.deleteCotizacionApi(this.cotizacion.noCotizacion);
    }
  }

  deleteCotizacionApi(id: string) {
    this._cotizacionesService.deleteQuotation(id).pipe(
      map(resp => {
        if(!resp.success) {
          this.messageService.add({
            severity: 'danger',
            summary: 'Error al eliminar la cotización',
            detail: `La cotización ${id} no puedo ser eliminada.`,
            key: 'toast-generate-cotizacion',
            life: 2500
          });

          console.log({resp});
          this.loadingBtnDelete = false;
        }
        else{
          this.messageService.add({
            severity: 'success',
            summary: 'Cotización eliminada correctamente.',
            detail: resp.data,
            key: 'toast-generate-cotizacion',
            life: 2500
          });
      
          this.clearFormAndCart();

          console.log({resp});
          this.loadingBtnDelete = false;
        }
      }),
      catchError( error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al eliminar la cotización',
          detail: `Se produjo un error al intentar eliminar la cotización ${id}.`,
          key: 'toast-generate-cotizacion',
          life: 2500
        });
        console.log({error});

        this.loadingBtnDelete = false;
        return EMPTY;
      })
    ).subscribe();
  }

  onPrecioPorMenorChange() {
    // incrementar productos del carrito
    this._cartService.increasePrecioPorMenorInProducts(this.precioPorMenor, this.productsListOriginal);
    
    // obtener lista productos incrementados
    if(this.precioPorMenor) {      
      this.productsList = this._cartService.getProductsIncrementPrice(this.productsListOriginal);
      
    } else { // obtener lista precios normales
      this.productsList = this.productsListOriginal;
    }


    this.autoSaveCotizacionInLocalStorage();
  }

  confirmationModal(event: Event) {
    this.confirmationService.confirm({
      target: 
        event.target as EventTarget,
        message: `¿Está seguro que desea eliminar la cotización ${this.cotizacion.noCotizacion}?`,
        header: 'Confirmación',
        closable: true,
        closeOnEscape: true,
        // icon: 'pi pi-exclamation-triangle',
        rejectButtonProps: {
            label: 'Cancelar',
            severity: 'secondary',
            outlined: true,
        },
        acceptButtonProps: {
            label: 'Eliminar',
            severity: 'danger',
        },
        accept: () => {     
          this.loadingBtnDelete = true;

          this.deleteCotizacion();          
        },
        reject: () => {     
          return;
        },
      });
  }

  isDeviceMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  }

  toggleAccordion(): void {
    this.accordionVisibility = !this.accordionVisibility;
  }

  pageTitle() {
    if(this.cotizacion.status === this.cotizacionStatus.Devuelto || this.cotizacion.status === this.cotizacionStatus.Pendiente) {
      return  {
        title: `Cotización: ${this.cotizacion.noCotizacion}`,
        isTagActive: true,
        tagLabel: this.cotizacionStatus[this.cotizacion.status],
        severity: this.cotizacion.status,
      }                          
    }
    else {
        return {
          title: 'Generar nueva cotización',
          isTagActive: false,     
          tagLabel: '',
          severity: -1,
        }           
    }
  }

}
