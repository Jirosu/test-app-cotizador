import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ModalDetalleComponent } from '../../components/modal-detalle/modal-detalle.component';
import { Cotizacion } from '../../models/cotizacion.interface';
import { CotizacionService } from '../../services/cotizacion/cotizacion.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { ContextMenu, ContextMenuModule } from 'primeng/contextmenu';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'cotizador-listado-page',
  standalone: true,
  imports: [
    NavbarComponent,
    TableModule,
    ButtonModule,
    CommonModule,
    PaginatorModule,
    ModalDetalleComponent,
    TagModule,
    ContextMenuModule,
    ConfirmDialog,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './listado-page.component.html',
  styleUrl: './listado-page.component.css'
})
export class ListadoPageComponent implements OnInit {

  metaKey: boolean = true;

  modalVisibility: boolean = false;
  cotizaciones: Cotizacion[] = [];
  selectedCotizacion: Cotizacion | null= {
    id: '0',
    docCliente: '',
    cliente: '',
    monto: 0,
    fecha: '',
    estado: null,
    productos: []
  };

  contextMenuItems: MenuItem[] | undefined;

  @ViewChild('contexMenu') 
  contexMenu?: ContextMenu;


  constructor( 
    private _cotizacionesService: CotizacionService,
    private _router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
   ) {}

  ngOnInit(): void {
    this.getCotizaciones();
  }

  onContextMenuShow() {
    this.contextMenuItems = [
      {
        label: 'Editar',
        icon: 'pi pi-pen-to-square',
        command: () => { 
          this._router.navigate(['cotizador/generar'], {state: {cotizacion: this.selectedCotizacion!}})
        },        
      },
      {
        label: 'Ver detalle',
        icon: 'pi pi-info-circle',
        command: () => { 
          this.changeModalVisibility(true) 
        }
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-times-circle',
        visible: this.canDeleteCotizacion(),
        command: () => { 
          this.confirmationModal(event!) 
        }
      }
    ];
  }

  getCotizaciones() {
    this.cotizaciones = [...(this._cotizacionesService.cotizacionesList)].reverse();
  }

  canDeleteCotizacion() {    
    return this.selectedCotizacion!.estado === 'Pendiente'
  }

  deleteCotizacion() {
    this._cotizacionesService.deleteCotizacion(this.selectedCotizacion!);

    this.getCotizaciones();
  }

  confirmationModal(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
        message: '¿Está seguro que desea eliminar la cotización?',
        header: 'Confirmación',
        closable: true,
        closeOnEscape: true,
        icon: 'pi pi-exclamation-triangle',
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
            this.messageService.add({ 
              severity: 'info', 
              summary: 'Eliminación exitosa', 
              detail: `Se eliminó la cotización ${this.selectedCotizacion!.id} exitosamente.`, 
              key: 'listado-toast',
              life: 2500
            });

            this.deleteCotizacion();
        },
        reject: () => {            
            return;
        },
      });
  }

  changeModalVisibility(visibility: boolean) {
    this.modalVisibility = visibility;
  }

  getStatusSeverity(status: string ) {
    switch(status) {
      case 'Pendiente':
        return 'info';
      case 'Completado':
        return 'success';
      default: 
        return 'info';
    }
  }
}
