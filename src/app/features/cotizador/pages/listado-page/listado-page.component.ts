import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { catchError, EMPTY, map } from 'rxjs';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ModalDetalleComponent } from '../../components/modal-detalle/modal-detalle.component';
import { CotizacionService } from '../../services/cotizacion/cotizacion.service';
<<<<<<< HEAD
import { CotizacionStatus, Quotation, QuotationHeader, RespQuotationsDto } from '../../models/cotizacion.interface';
=======
import { CotizacionStatus, QuotationHeader, RespQuotationsDto } from '../../models/cotizacion.interface';
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
<<<<<<< HEAD
import { CompanyService } from '../../services/company/company.service';
import { LoginComponent } from '../../../auth/pages/login/login.component';
=======
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b


@Component({
  selector: 'cotizador-listado-page',
  standalone: true,
  imports: [
    NavbarComponent,
    TableModule,
    ButtonModule,
    CommonModule,
    PaginatorModule,
    // ModalDetalleComponent,
    TagModule,
    ContextMenuModule,
    ConfirmDialog,
    ToastModule,
    ToolbarModule,
    RouterModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './listado-page.component.html',
  styleUrl: './listado-page.component.css'
})
export class ListadoPageComponent implements OnInit {

  metaKey: boolean = true;

  modalVisibility: boolean = false;
  // cotizaciones: RespQuotationsDto[] = [];
<<<<<<< HEAD
  // cotizaciones: QuotationHeader[] = [];
  cotizaciones: Quotation[] = [];
  selectedCotizacion: Quotation | null = null;
=======
  cotizaciones: QuotationHeader[] = [];
  selectedCotizacion: QuotationHeader | null = null;
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
  loading: boolean = false;
  loadingTable: boolean = false;

  constructor( 
    private _cotizacionesService: CotizacionService,
    private _router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private _companyService: CompanyService
   ) {}

  ngOnInit(): void {
<<<<<<< HEAD
    this.getQuotationsFromApiAndLocalStorage();

    // this._companyService.getCompanyTariffPrice('SK-G1').subscribe( resp => {

    //   console.log('CompanyTariffPrice', resp.data);
    // });
=======
    // this.getCotizaciones();
    this.getQuotationHeaders();
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
  }

  get cotizacionStatus(): typeof CotizacionStatus {
    return CotizacionStatus;
  }


<<<<<<< HEAD
  getQuotationsFromApiAndLocalStorage() {
    this.loadingTable = true;

    this._cotizacionesService.getQuotationHeaders()
      .subscribe( (data: Quotation[]) => {
=======
  // getCotizaciones() {  
  //   this._cotizacionesService.getQuotation()  
  //     .subscribe( (data: RespQuotationsDto[])  => {
  //       this.cotizaciones = data;
  //     }
  //   )
  // }

  getQuotationHeaders() {
    this.loadingTable = true;

    this._cotizacionesService.getQuotationHeaders()
      .subscribe( (data: QuotationHeader[]) => {
        // this.cotizaciones = data.reverse();
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
        this.cotizaciones = data;
        
        this.loadingTable = false
      } )
  }
  

  deleteCotizacion() {
    if(this.selectedCotizacion!.status === CotizacionStatus.Pendiente) {
<<<<<<< HEAD
      this._cotizacionesService.deleteCotizacionFromLocalStorage(this.selectedCotizacion!.noCotizacion!);
      
      this.getQuotationsFromApiAndLocalStorage();
=======
      this._cotizacionesService.deleteCotizacionFromLocalStorage(this.selectedCotizacion!.no);
      
      this.getQuotationHeaders();
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b

      this.messageService.add({
        severity: 'success',
        summary: 'Cotización eliminada',
<<<<<<< HEAD
        detail: `La cotización ${this.selectedCotizacion!.noCotizacion!} fue eliminada exitosamente.`,
        key: 'listado-toast',
=======
        detail: 'La cotización fue eliminada exitosamente.',
        key: 'toast-generate-cotizacion',
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
        life: 2500
      });

      this.loading = false;
      return;
    }
        
<<<<<<< HEAD
    this.deleteCotizacionApi(this.selectedCotizacion!.noCotizacion!);
=======
    this.deleteCotizacionApi(this.selectedCotizacion!.no);
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
      
  }
  
    deleteCotizacionApi(id: string) {
      this._cotizacionesService.deleteQuotation(id).pipe(
        map(resp => {
          if(!resp.success) {                        
            this.messageService.add({
              severity: 'danger',
              summary: 'Error al eliminar la cotización',
              detail: 'La cotización no puedo ser eliminada.',
              key: 'listado-toast',
              life: 2500
            });
<<<<<<< HEAD

            console.log({resp});
            this.loading = false;
          }
          else{
            this.messageService.add({
              severity: 'success',
              summary: 'Cotización eliminada',
              detail: 'La cotización fue eliminada exitosamente.',
              key: 'listado-toast',
              life: 2500
            });
            
            console.log({resp});
            this.getQuotationsFromApiAndLocalStorage();            
            this.loading = false;
          }
        }),
        catchError( error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error al eliminar la cotización',
            detail: `Se produjo un error al intentar eliminar la cotización.`,
            key: 'listado-toast',
            life: 2500
          });
          console.log({error});
          this.loading = false;
          return EMPTY;
        })
      ).subscribe();
    }

  confirmationModal(event: Event) {    
    
    this.confirmationService.confirm({
      target: 
        event.target as EventTarget,
        message: `¿Está seguro que desea eliminar la cotización ${this.selectedCotizacion?.noCotizacion!}?`,
=======

            console.log({resp});
            this.loading = false;
          }
          else{
            this.messageService.add({
              severity: 'success',
              summary: 'Cotización eliminada',
              detail: 'La cotización fue eliminada exitosamente.',
              key: 'listado-toast',
              life: 2500
            });
            
            console.log({resp});
            this.getQuotationHeaders();            
            this.loading = false;
          }
        }),
        catchError( error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error al eliminar la cotización',
            detail: `Se produjo un error al intentar eliminar la cotización.`,
            key: 'listado-toast',
            life: 2500
          });
          console.log({error});
          this.loading = false;
          return EMPTY;
        })
      ).subscribe();
    }

  confirmationModal(event: Event) {    

    this.confirmationService.confirm({
      target: 
        event.target as EventTarget,
        message: '¿Está seguro que desea eliminar la cotización?',
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
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
          this.loading = true;
          this.deleteCotizacion();

          setTimeout(
            () => {
              this.selectedCotizacion = null;                
            },
            200
          );
        },
        reject: () => {     
          // this.selectedCotizacion = null; 
          this.loading = false      
          return;
        },
      });
  }

  // modal detail
  changeModalVisibility(visibility: boolean) {
    this.modalVisibility = visibility;
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

  navigateToEditPage() {
    // console.log('id',this.selectedCotizacion!.no);
    
<<<<<<< HEAD
    this._router.navigate(['cotizador/generar'], {state: {cotizacionId: this.selectedCotizacion!.noCotizacion}})
  }

  pageTitle() {    
    return  {
      title: 'Listado de cotizaciones',
      isTagActive: false,
      tagLabel: '',
      severity: -1,
    }   
  }                     
=======
    this._router.navigate(['cotizador/generar'], {state: {cotizacionId: this.selectedCotizacion!.no}})
  }

  
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
}
