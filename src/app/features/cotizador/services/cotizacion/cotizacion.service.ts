import { Injectable, OnInit } from '@angular/core';
import { Cotizacion } from '../../models/cotizacion.interface';

import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService implements OnInit {

  private cotizaciones: Cotizacion[] = [];  

  private cotizacionesFromLocalStorage: Cotizacion[] = [];
  

  constructor( private _cartService: CartService ) {
    this.cotizaciones = [
      {
        id: 'COT-1',
        docCliente: '12345678970',
        cliente: 'Cliente 1',
        monto: 3100.00,
        fecha: '2025-02-13',
        estado: 'Completado',
        productos: [
          {
            code: '0378-24/25',
            description: "Apple MacBook Pro 16-inch M1 Max",
            unitPrice: 1500.00,
            stock: 1,
            cantidad: 1,
            monto: 1500.00
          },
          {
            code: 'QQ-6067',
            description: "Samsung Galaxy S21 Ultra 5G",
            unitPrice: 800.00,
            stock: 1,
            cantidad: 2,
            monto: 1600.00
          }
        ]
      },
      {
        id: 'COT-2',
        docCliente: '98765412301',
        cliente: 'Cliente 2',
        monto: 2300.00,
        fecha: '2025-02-13',
        estado: 'Completado',
        productos: [
          {
            code: 'TA-2016',
            description: "Microsoft Surface Pro 8",
            unitPrice: 600.00,
            stock: 1,
            cantidad: 2,
            monto: 1200.00
          },
          {
            code: '2838',
            description: "Bose Noise Cancelling Headphones 700",
            unitPrice: 200.00,
            stock: 1,
            cantidad: 2,
            monto: 400.00
          },
          {
            code: '123-439/42',
            description: "Apple Watch Series 8",
            unitPrice: 300.00,
            stock: 1,
            cantidad: 2,
            monto: 600.00
          }
        ]
      },
      {
        id: 'COT-20',
        docCliente: '12345678',
        cliente: 'Cliente 20',
        monto: 3100.00,
        fecha: '2025-02-13',
        estado: 'Completado',
        productos: [
          {
            code: '0378-24/25',
            description: "Apple MacBook Pro 16-inch M1 Max",
            unitPrice: 1500.00,
            stock: 1,
            cantidad: 1,
            monto: 1500.00
          },
          {
            code: 'QQ-6067',
            description: "Samsung Galaxy S21 Ultra 5G",
            unitPrice: 800.00,
            stock: 1,
            cantidad: 2,
            monto: 1600.00
          }
        ]
      }
    ];
    
   }
  // ngOnInit(): void {    
  // }

  // get cotizacionesList() {
  //   const cotizacionesFromStorage = this.getCotizacionesFromLocalStorage();

  //   return [...this.cotizaciones, ...cotizacionesFromStorage];
  // }
  
  // getNewId() {
  //   let lastId: string = this.cotizacionesList[this.cotizacionesList.length -1].id;
  //   let splitId: string[] = lastId.split('-');

  //   return splitId[0] + '-' + (parseInt(splitId[1]) + 1);
  // }

  // getCotizacionesFromLocalStorage() {
  //   const objetos = [];

  //   for (let i = 0; i < localStorage.length; i++) {
  //     const clave = localStorage.key(i);
  //     const valor = localStorage.getItem(clave!);
    
  //     try {
  //       const objeto = JSON.parse(valor!);
  //       objetos.push(objeto);
  //     } catch (e) {
  //       console.error(`Error al obtener los datos almacenados.`, e);
  //     }
  //   }

  //   return objetos;    
  // }

  // // POST
  // sendToDynamics(cotizacion: Cotizacion) {
  //   const date = new Date();
  //   this.removeCotizacionFromLocalStorage(cotizacion.id);

  //   const index = this.cotizaciones.findIndex( cot => cot.id === cotizacion.id);
    
  //   cotizacion.id = cotizacion.id || this.getNewId();
  //   cotizacion.fecha = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
  //   cotizacion.productos = this._cartService.cotizacionProductsCart;
  //   cotizacion.estado = 'Completado';
    
  //   // cotizacion guardada storage
  //   if (index === -1) {
  //     this.cotizaciones.push(cotizacion);
      
  //     return;    
  //   }
    
  //   // cotizacion ya enviada al Dynamic (edita la cotizacion existente)
  //   this.cotizaciones[index].id = cotizacion.id || this.getNewId();
  //   this.cotizaciones[index].cliente = cotizacion.cliente;
  //   this.cotizaciones[index].docCliente = cotizacion.docCliente;
  //   this.cotizaciones[index].productos = this._cartService.cotizacionProductsCart;
  //   this.cotizaciones[index].monto = cotizacion.monto;
  //   this.cotizaciones[index].estado = cotizacion.estado;
 
  // }
  
  // // PUT
  // updateInDynamics(cotizacion: Cotizacion) {
  //   const date = new Date();
  //   this.removeCotizacionFromLocalStorage(cotizacion.id);

  //   const index = this.cotizaciones.findIndex( cot => cot.id === cotizacion.id);
    
  //   cotizacion.id = cotizacion.id || this.getNewId();
  //   cotizacion.fecha = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
  //   cotizacion.productos = this._cartService.cotizacionProductsCart;
  //   cotizacion.estado = 'Completado';
    
  //   // cotizacion guardada storage
  //   if (index === -1) {
  //     this.cotizaciones.push(cotizacion);
      
  //     return;    
  //   }
    
  //   // cotizacion ya enviada al Dynamic (edita la cotizacion existente)
  //   this.cotizaciones[index].id = cotizacion.id || this.getNewId();
  //   this.cotizaciones[index].cliente = cotizacion.cliente;
  //   this.cotizaciones[index].docCliente = cotizacion.docCliente;
  //   this.cotizaciones[index].productos = this._cartService.cotizacionProductsCart;
  //   this.cotizaciones[index].monto = cotizacion.monto;
  //   this.cotizaciones[index].estado = cotizacion.estado;
 
  // }

  // saveCotizacionInLocalStorage(cotizacion: Cotizacion) {
  //   if(cotizacion.estado === 'Completado') {
  //     return;
  //   }

  //   const date = new Date();

  //   const index = this.cotizaciones.findIndex( cot => cot.id === cotizacion.id);
    
  //   // nueva cotizacion (guarda storage)
  //   if (index === -1) {
  //     cotizacion.id = cotizacion.id || this.getNewId();
  //     cotizacion.fecha = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
  //     cotizacion.productos = this._cartService.cotizacionProductsCart;
  //     cotizacion.estado = 'Pendiente';      
      
  //     localStorage.setItem(cotizacion.id, JSON.stringify(cotizacion));
  //     return;
  //   }

  //   // cotizacion ya enviada al Dynamic (edita la cotizacion existente)
  //   this.cotizaciones[index].cliente = cotizacion.cliente;
  //   this.cotizaciones[index].docCliente = cotizacion.docCliente;
  //   this.cotizaciones[index].productos = this._cartService.cotizacionProductsCart;
  //   this.cotizaciones[index].monto = cotizacion.monto;        
  // }

  // deleteCotizacion(cotizacion: Cotizacion) {
  //   if(cotizacion.estado != 'Pendiente') {    
  //     return;
  //   }

  //   this.removeCotizacionFromLocalStorage(cotizacion.id);
  // }

  // removeCotizacionFromLocalStorage(id: string) {
  //   localStorage.removeItem(id);
  // }

  ngOnInit(): void {    
  }

  // TODO: editado
  get cotizacionesList() {
    this.getCotizacionesFromLocalStorage();

    return [...this.cotizaciones, ...this.cotizacionesFromLocalStorage];
  }
  
  getNewId() {
    let lastId: string = this.cotizacionesList[this.cotizacionesList.length -1].id;
    let splitId: string[] = lastId.split('-');

    return splitId[0] + '-' + (parseInt(splitId[1]) + 1);
  }

  // TODO: modificado reemplazar todo
  getCotizacionesFromLocalStorage() {
    // const objetos = [];

    // for (let i = 0; i < localStorage.length; i++) {
    //   const clave = localStorage.key(i);
    //   const valor = localStorage.getItem(clave!);
    
    //   try {
    //     const objeto = JSON.parse(valor!);
    //     objetos.push(objeto);
    //   } catch (e) {
    //     console.error(`Error al obtener los datos almacenados.`, e);
    //   }
    // }

    // return objetos;    
    const storage = localStorage.getItem('backup-data');
    if(storage) {
      this.cotizacionesFromLocalStorage =  JSON.parse(storage);
      return;
    }
    this.cotizacionesFromLocalStorage = [];
  }

  // TODO: 
  // POST
  sendToDynamics(cotizacion: Cotizacion) {
    const date = new Date();
    // this.removeCotizacionFromLocalStorage(cotizacion.id);
    this.deleteCotizacionFromLocalStorage(cotizacion);

    const index = this.cotizaciones.findIndex( cot => cot.id === cotizacion.id);
    
    cotizacion.id = cotizacion.id || this.getNewId();
    cotizacion.fecha = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
    cotizacion.productos = this._cartService.cotizacionProductsCart;
    cotizacion.estado = 'Completado';
    
    // cotizacion guardada storage
    if (index === -1) {
      this.cotizaciones.push(cotizacion);
      
      return;    
    }
    
    // cotizacion ya enviada al Dynamic (edita la cotizacion existente)
    this.cotizaciones[index].id = cotizacion.id || this.getNewId();
    this.cotizaciones[index].cliente = cotizacion.cliente;
    this.cotizaciones[index].docCliente = cotizacion.docCliente;
    this.cotizaciones[index].productos = this._cartService.cotizacionProductsCart;
    this.cotizaciones[index].monto = cotizacion.monto;
    this.cotizaciones[index].estado = cotizacion.estado;
 
  }
  
  // PUT
  updateInDynamics(cotizacion: Cotizacion) {
    const date = new Date();
    // this.removeCotizacionFromLocalStorage(cotizacion.id);
    this.deleteCotizacionFromLocalStorage(cotizacion);

    const index = this.cotizaciones.findIndex( cot => cot.id === cotizacion.id);
    
    cotizacion.id = cotizacion.id || this.getNewId();
    cotizacion.fecha = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
    cotizacion.productos = this._cartService.cotizacionProductsCart;
    cotizacion.estado = 'Completado';
    
    // cotizacion guardada storage
    if (index === -1) {
      this.cotizaciones.push(cotizacion);
      
      return;    
    }
    
    // cotizacion ya enviada al Dynamic (edita la cotizacion existente)
    this.cotizaciones[index].id = cotizacion.id || this.getNewId();
    this.cotizaciones[index].cliente = cotizacion.cliente;
    this.cotizaciones[index].docCliente = cotizacion.docCliente;
    this.cotizaciones[index].productos = this._cartService.cotizacionProductsCart;
    this.cotizaciones[index].monto = cotizacion.monto;
    this.cotizaciones[index].estado = cotizacion.estado;
 
  }

  // TODO: editado
  saveCotizacionInLocalStorage(cotizacion: Cotizacion) {
    if(cotizacion.estado === 'Completado') {
      return;
    }

    const date = new Date();

    // const index = this.cotizaciones.findIndex( cot => cot.id === cotizacion.id);
    const index = this.cotizacionesFromLocalStorage.findIndex( cot => cot.id === cotizacion.id);
    
    // nueva cotizacion (guarda storage)
    if (index === -1) {
      cotizacion.id = cotizacion.id || this.getNewId();
      cotizacion.fecha = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
      cotizacion.productos = this._cartService.cotizacionProductsCart;
      cotizacion.estado = 'Pendiente';      
        
      this.cotizacionesFromLocalStorage.push(cotizacion);

      this.saveInLocalStorage('backup-data', this.cotizacionesFromLocalStorage);
      // localStorage.setItem('backup-data', JSON.stringify(this.cotizacionesFromLocalStorage));


      // localStorage.setItem(cotizacion.id, JSON.stringify(cotizacion));
      return;
    }
   
    this.cotizacionesFromLocalStorage[index].cliente = cotizacion.cliente;
    this.cotizacionesFromLocalStorage[index].docCliente = cotizacion.docCliente;
    this.cotizacionesFromLocalStorage[index].productos = this._cartService.cotizacionProductsCart;
    this.cotizacionesFromLocalStorage[index].monto = cotizacion.monto;        
    
    this.saveInLocalStorage('backup-data', this.cotizacionesFromLocalStorage);
  }

  // TODO: editado
  saveInLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // TODO: editado
  deleteCotizacionFromLocalStorage(cotizacion: Cotizacion) {
    // console.log(this.cotizacionesFromLocalStorage);
    
    if(cotizacion.estado != 'Pendiente') {    
      return;
    }

    const updatedCotizaciones = this.cotizacionesFromLocalStorage.filter( cot => cot.id !== cotizacion.id );
    this.saveInLocalStorage('backup-data', updatedCotizaciones);
    // console.log({updatedCotizaciones});
    
    // this.removeCotizacionFromLocalStorage(cotizacion.id);
  }

  // removeCotizacionFromLocalStorage(id: string) {
  //   localStorage.removeItem(id);
  // }

}
