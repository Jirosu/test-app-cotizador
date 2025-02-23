import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { catchError, EMPTY, EmptyError, map } from 'rxjs';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { CotizacionService } from '../../services/cotizacion/cotizacion.service';
import { CardProductoComponent } from '../../components/card-producto/card-producto.component';
import { CartService } from '../../services/cart/cart.service';
import { ScannerCodeComponent } from '../../components/scanner-code/scanner-code.component';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { CotizacionStatus, RespQuotationByIdDto, RespQuotationsDto } from '../../models/cotizacion.interface';
import { Mapper } from '../../../../shared/utils/mapper';
import { Product } from '../../models/product.interface';
import { CompanyService } from '../../services/company/company.service';

import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { Toast } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { TagModule } from 'primeng/tag';
import { ProgressSpinner } from 'primeng/progressspinner';

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
    CheckboxModule,
    ConfirmDialog,
    TagModule,
    ProgressSpinner,
  ],
  providers: [ MessageService, ConfirmationService ],
  templateUrl: './generar-page.component.html',
  styleUrl: './generar-page.component.css'
})
export class GenerarPageComponent implements OnInit, OnDestroy {

  cotizacion: RespQuotationByIdDto = {
    no: '',
    noClient: '',
    clientName: '',
    // igv: 0,
    // totalPrice: 0,
    status: CotizacionStatus.null,
    detail: []
  }

  selectedProduct: any;
  filteredProducts: any[] = [];
  precioPorMenor: boolean = false;
  // editMode: boolean = false;

  loadingBtnDelete: boolean = false;
  loadingBtnSave: boolean = false;
  loadingBtnSend: boolean = false;
  loadingFetchData: boolean = false;

   // plural pipe
   productsPluralMap = {
    '=0': 'productos',
    '=1': 'producto',
    'other': 'productos'
  }
  

  constructor(  
    private _cotizacionesService: CotizacionService,
    private _cartService: CartService,    
    private _companyService: CompanyService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
   ) {}
    
  ngOnInit(): void {
    this.getCotizacionData();    
  }

  ngOnDestroy(): void {
    this._cartService.clearCart();
  }

  get cotizacionCartProducts() {
    return this._cartService.cotizacionProductsCart;
  }

  get cotizacionStatus(): typeof CotizacionStatus {
    return CotizacionStatus;
  }

// TODO: v1 
  // get cotizacion data to edit (from router state)
  // getCotizacionData() {
  //   let cotizacionId: string = '';
    
  //   this.loadingFetchData = true;

  //   if(history.state?.cotizacionId) {
  //     cotizacionId = history.state?.cotizacionId;
      
  //     // local
  //     if((cotizacionId.toUpperCase()).startsWith('CT')) {
  //       const findedCotLocal = this._cotizacionesService.findCotizacionInLocalStorageById(cotizacionId);

  //       if(findedCotLocal === null) {
  //         this.cotizacion = {
  //           no: '',
  //           noClient: '',
  //           clientName: '',            
  //           status: CotizacionStatus.null,
  //           detail: []            
  //         }
  //         return;
  //       }
  //       console.log(findedCotLocal);
        
  //       this.cotizacion = findedCotLocal;

  //       this._cartService.cotizacionProductsCart = findedCotLocal.detail;
  //     }

  //     this.loadingFetchData = false;
  //     return;
  //   }


  //   // fetch api
  //   if((cotizacionId.toUpperCase()).startsWith('FV')) {
  //     this._cotizacionesService.getQuotationDetailById(this.cotizacion.no).subscribe( resp => {
  //       this.cotizacion.detail = resp.data;
  //       this._cartService.cotizacionProductsCart = resp.data;

  //     })                
  //   }

  //   // if((cotizacionId.toUpperCase()).startsWith('FV')) {
  //   //   this.getCotizacionById(cotizacionId);          
  //   // }

  //   this.editMode = true;
  //   this.loadingFetchData = false;
  //   return;
  // }
  // }


  // TODO: v2 mejorado más legible
  getCotizacionData() {
    this.loadingFetchData = true;
    // const cotizacionId = this.getCotizacionIdFromState();
    const cotizacionId: string | null = history.state?.cotizacionId || null;

    console.log({cotizacionId});
    

    if (!cotizacionId) {
        this.loadingFetchData = false;
        // console.log('!cotizacionId', !cotizacionId);        
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

    if( !(cotizacionId.toUpperCase()).startsWith('CT') && !(cotizacionId.toUpperCase()).startsWith('FV') ){
      this.loadCotizacionFromLocalStorage(cotizacionId);      
    }

    // this.editMode = true;
    
  } 

  private loadCotizacionFromLocalStorage(cotizacionId: string) {
    const foundCotizacion = this._cotizacionesService.findCotizacionInLocalStorageById(cotizacionId);

    if (!foundCotizacion) {
      this.cotizacion = {
        no: '',
        noClient: '',
        clientName: '',            
        status: CotizacionStatus.null,
        detail: []            
      };

      this.messageService.add({
        severity: 'error',
        summary: 'Error al obtener la cotización',
        detail: 'Se produjo un error al intentar obtener los datos de la cotización.',
        key: 'toast-generate-cotizacion',
        life: 3500
      });

      this.loadingFetchData = false;
      return;
    }

    this.cotizacion = foundCotizacion;
    this._cartService.cotizacionProductsCart = foundCotizacion.detail;

    this.loadingFetchData = false;
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
        
        this.loadingFetchData = false
        return EMPTY
      })
    ).subscribe(cotizacion => {
      if (!cotizacion) return;

      this.cotizacion = cotizacion.data;

      this.cotizacion.status = CotizacionStatus.Devuelto;
      this.cotizacion.clientName = cotizacion.data.noClient === 'NV' ? '' : this.cotizacion.clientName;
      this.cotizacion.noClient = cotizacion.data.noClient === 'NV' ? '' : this.cotizacion.noClient;
      this._cartService.cotizacionProductsCart = cotizacion.data.detail;

      this.loadingFetchData = false
    })
  }
  

  addProductToCart(producto: Product) {
    this._cartService.addProductToCart(
      // producto
      Mapper.mapProductToQuotationDetailDto(producto)
    );

    // this.saveToLocalStorageCotizacion();
    this.saveCotizacionInLocalStorage();
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
    this.loadingBtnSave = true;

    this.cotizacion.totalPrice = this.getTotalCartAmount();
    // this.cotizacion.igv = this.getCartIGV();

    this._cotizacionesService.saveCotizacionInLocalStorage(this.cotizacion);
    
    this.clearFormAndCart();
    // this.editMode = false;
    this.loadingBtnSave = false;

    this.messageService.add({
      severity: 'info',
      summary: 'Cotización guardada',
      detail: 'Se guardó la cotización exitosamente.',
      key: 'toast-generate-cotizacion',
      life: 2500
    });    
  }

  sendToDynamics() {
    this.loadingBtnSend = true; 
    
    this.cotizacion.detail = this._cartService.cotizacionProductsCart;
    // this.cotizacion.totalPrice = this.getTotalCartAmount();
    // this.cotizacion.igv = this.getCartIGV();

    this._cotizacionesService.addQuotation(
      Mapper.mapRespQuotationsDtoToGenerateQuotation_BL(this.cotizacion),
      // this.cotizacion.no
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
            summary: 'Cotización generada',
            detail: 'La cotización fue enviada exitosamente.',
            key: 'toast-generate-cotizacion',
            life: 2500
          });

          this._cotizacionesService.deleteCotizacionFromLocalStorage(this.cotizacion.no);
          this.clearFormAndCart();
          // this.editMode = false;

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

    this.cotizacion.detail = this._cartService.cotizacionProductsCart;
    // this.cotizacion.totalPrice = this.getTotalCartAmount();
    // this.cotizacion.igv = this.getCartIGV();
    
    this._cotizacionesService.updateQuotation(
      Mapper.mapRespQuotationsDtoToModifyQuotation_BL(this.cotizacion)
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
            summary: 'Cotización actualizada',
            detail: 'La cotización fue actualizada exitosamente.',
            key: 'toast-generate-cotizacion',
            life: 2500
          });
          
          this._cotizacionesService.deleteCotizacionFromLocalStorage(this.cotizacion.no);
          this.clearFormAndCart();
          // this.editMode = false;

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

    if(this.cotizacionCartProducts.length > 0) {
      isInvalid.saveBtn = false;
      isInvalid.sendBtn = false;
      isInvalid.deleteBtn = false;
    }

    if(this.cotizacion.status === CotizacionStatus.Devuelto) {
      isInvalid.saveBtn = true;
    }


    if(this.cotizacion.status === CotizacionStatus.null){
      isInvalid.deleteBtn = true; 
    }

    return isInvalid;
  }

  validateDocCliente(event: any) {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }

    
  }  

  getClientDataMigo() {
    if(this.cotizacion.noClient.length === 0) {
      this.cotizacion.clientName = '';
      this.saveCotizacionInLocalStorage();
      return;
    }

    if(this.cotizacion.noClient.length !== 8 && this.cotizacion.noClient.length !== 11) {
      return;
    }

    
    return this._companyService.getClientDataMigo(this.cotizacion.noClient).subscribe( data => {
      if(this.cotizacion.noClient.length === 8) {
        this.cotizacion.clientName = data.nombre || '';
      }
      else {
        this.cotizacion.clientName = data.nombre_o_razon_social || '';
      }

      this.saveCotizacionInLocalStorage();
    })
  }

  onNameChange() {    
    this.saveCotizacionInLocalStorage();    
  }

  clearFormAndCart() {
    this.cotizacion = {
      no: '',
      noClient: '',
      clientName: '',
      // igv: 0,
      totalPrice: 0,
      status: CotizacionStatus.null,
      detail: []
    };

    this.precioPorMenor = false;
    this._cartService.clearCart();
  }


  onProductScanned(product: Product) {
    if(!product) {
      console.warn('Producto no encontrado');
      
      return;
    }

    this.addProductToCart(product);
  }

  onProductChange() {
    this.saveCotizacionInLocalStorage();
  }

  // auto save
  saveCotizacionInLocalStorage() {
    // this.loadingBtnSave = true;

    this.cotizacion.totalPrice = this.getTotalCartAmount();
    // this.cotizacion.igv = this.getCartIGV();

    this._cotizacionesService.saveCotizacionInLocalStorage(this.cotizacion);
    
    // this.clearFormAndCart();
    // this.editMode = false;
    // this.loadingBtnSave = false;

    // this.messageService.add({
    //   severity: 'info',
    //   summary: 'Cotización guardada',
    //   detail: 'Se guardó la cotización exitosamente.',
    //   key: 'toast-generate-cotizacion',
    //   life: 2500
    // });    
  }


  deleteCotizacion() {
    if(this.cotizacion.status === CotizacionStatus.Pendiente) {
      this._cotizacionesService.deleteCotizacionFromLocalStorage(this.cotizacion.no);
      
      this.messageService.add({
        severity: 'success',
        summary: 'Cotización eliminada',
        detail: 'La cotización fue eliminada exitosamente.',
        key: 'toast-generate-cotizacion',
        life: 2500
      });

      this.clearFormAndCart();
      // this.editMode = false;
      this.loadingBtnDelete = false;
      return;
    }

    this.deleteCotizacionApi(this.cotizacion.no);
  }

  deleteCotizacionApi(id: string) {
    this._cotizacionesService.deleteQuotation(id).pipe(
      map(resp => {
        if(!resp.success) {
          this.messageService.add({
            severity: 'danger',
            summary: 'Error al eliminar la cotización',
            detail: 'La cotización no puedo ser eliminada.',
            key: 'toast-generate-cotizacion',
            life: 2500
          });

          console.log({resp});
          this.loadingBtnDelete = false;
        }
        else{
          this.messageService.add({
            severity: 'success',
            summary: 'Cotización eliminada',
            detail: 'La cotización fue eliminada exitosamente.',
            key: 'toast-generate-cotizacion',
            life: 2500
          });
      
          this.clearFormAndCart();
          // this.editMode = false;

          console.log({resp});
          this.loadingBtnDelete = false;
        }
      }),
      catchError( error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al eliminar la cotización',
          detail: `Se produjo un error al intentar eliminar la cotización.`,
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
    this._cartService.increasePrecioPorMenorInProducts(this.precioPorMenor);

    this.saveCotizacionInLocalStorage();
  }

  confirmationModal(event: Event) {
    this.confirmationService.confirm({
      target: 
        event.target as EventTarget,
        message: '¿Está seguro que desea eliminar la cotización?',
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

  getStatusSeverity(status: number ) {
    switch(status) {
      case 0:
        return 'warn';
      case 1:
        return 'info';      
      default: 
        return 'secondary';
    }
  }
  
}
