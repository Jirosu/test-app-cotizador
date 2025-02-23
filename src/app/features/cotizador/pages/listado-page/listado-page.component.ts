import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { catchError, EMPTY, map } from 'rxjs';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ModalDetalleComponent } from '../../components/modal-detalle/modal-detalle.component';
import { CotizacionService } from '../../services/cotizacion/cotizacion.service';
import { CotizacionStatus, QuotationHeader, RespQuotationsDto } from '../../models/cotizacion.interface';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';


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
  cotizaciones: QuotationHeader[] = [];
  selectedCotizacion: QuotationHeader | null = null;
  loading: boolean = false;
  loadingTable: boolean = false;

  constructor( 
    private _cotizacionesService: CotizacionService,
    private _router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
   ) {}

  ngOnInit(): void {
    // this.getCotizaciones();
    this.getQuotationHeaders();
  }

  get cotizacionStatus(): typeof CotizacionStatus {
    return CotizacionStatus;
  }


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
        this.cotizaciones = data;
        
        this.loadingTable = false
      } )
  }
  

  deleteCotizacion() {
    if(this.selectedCotizacion!.status === CotizacionStatus.Pendiente) {
      this._cotizacionesService.deleteCotizacionFromLocalStorage(this.selectedCotizacion!.no);
      
      this.getQuotationHeaders();

      this.messageService.add({
        severity: 'success',
        summary: 'Cotización eliminada',
        detail: 'La cotización fue eliminada exitosamente.',
        key: 'toast-generate-cotizacion',
        life: 2500
      });

      this.loading = false;
      return;
    }
        
    this.deleteCotizacionApi(this.selectedCotizacion!.no);
      
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
    
    this._router.navigate(['cotizador/generar'], {state: {cotizacionId: this.selectedCotizacion!.no}})
  }

  
}
