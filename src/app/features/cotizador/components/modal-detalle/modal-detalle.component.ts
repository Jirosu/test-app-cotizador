import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cotizacion } from '../../models/cotizacion.interface';
import { CardProductoDetalleComponent } from '../card-producto-detalle/card-producto-detalle.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'cotizaciones-modal-detalle',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    Dialog,
    CardProductoDetalleComponent,
  ],
  templateUrl: './modal-detalle.component.html',
  styleUrl: './modal-detalle.component.css'
})
export class ModalDetalleComponent {  

  @Input()
  visible: boolean = false;

  @Output()
  onCloseModal: EventEmitter<boolean> = new EventEmitter();

  @Input()
  cotizacion: Cotizacion = {
      id: '0',
      docCliente: '',
      cliente: '',
      monto: 0,
      fecha: '',
      estado: null,
      productos: []
    };  

  constructor() {}

  closeModal() {
    this.visible = false;
    this.onCloseModal.emit(false);
  }

}
