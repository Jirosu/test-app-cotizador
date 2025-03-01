<<<<<<< HEAD
import { TariffPrice } from "./tarifPrice.interface";

export enum CotizacionStatus {
  'Devuelto' , 'Pendiente' , null
}

export interface QuotationHeader {
  no:         string;
  noClient:   string;
  clientName: string;
  status?: CotizacionStatus;
}

// export interface RespQuotationDetailDto {
//   noQuotation: string;
//   noProduct: string;
//   descProduct: string;
//   noLine: number;
//   quantity: number;
//   price: number;
// }


=======
import { Product } from "./product.interface";

export interface QuotationHeader {
  no:         string;
  noClient:   string;
  clientName: string;
  status?: CotizacionStatus;
}

export interface RespQuotationDetailDto {
  noQuotation: string;
  noProduct: string;
  descProduct: string;
  noLine: number;
  quantity: number;
  price: number;
}


export enum CotizacionStatus {
  'Devuelto' , 'Pendiente' , null
}
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b


// GET all
export interface RespQuotationsDto {
  no: string;
  noClient: string;
  clientName: string;
  detail: RespQuotationDetailDto[]        
  // 
  igv?: number;
  totalPrice?: number;
  status?: CotizacionStatus;
  timestamp?: number;
}


<<<<<<< HEAD
=======
// export interface QuotationDetailDto {
//   noQuotation?: string;
//   noProduct: string;
//   noLine?: number;
//   quantity: number;
//   price: number;
//   // 
//   descProduct?: string;
//   amount?: number;
//   stock?: number;
// }

>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
//GET by id
export interface RespQuotationByIdDto {
  no: string;
  noClient: string;
  clientName: string;
  detail: RespQuotationDetailDto[];
  status?: CotizacionStatus,
  totalPrice?: number
}

export interface RespQuotationDetailDto {
  noQuotation: string;
  noProduct: string;
  descProduct: string;
  noLine: number;
  quantity: number;
  price: number;
  // 
  amount?: number;
  stock?: number;
}

<<<<<<< HEAD
// TODO: reemplazar interfaces post, put y cart por esta
// POST y PUT unificados
export interface Quotation {
  noCotizacion: string;
  clientDoc: string;
  clientNames: string;
  cart: QuotationDetail[];
  puntoEntrega: string;
  lugarEnvio: string;
  tipoEntrega: string;
  tipoPrecio: string;
  telefonoCliente: string;
  direCliente: string;

  // opcionales (localStorage)
  status?: CotizacionStatus;
  totalPrice?: number;
  timestamp?: number;
}

// Detail POST y PUT unificados
export interface QuotationDetail {
  noLine: number;
  productCode: string;
  quantity: number;
  price: number;


  // opcionales (localStorage)
  descProduct?: string;
  amount?: number;
  isTarifPriceChecked?: boolean;
  tariffPrice: TariffPrice[];
  originalPrice?: number
}

// POST - add
export interface GenerateQuotation_BL {
  clientDoc: string; //
  clientNames: string;  //
  cart: CartProductGen[];
  totalPrice?: number;
  igv?: number;

  // agregados sergio
  puntoEntrega: string; //
  lugarEnvio: string; //
  tipoEntrega: string; //
  tipoPrecio: string;  //
  telefonoCliente: string; //
  direCliente: string //

  //
  status?: CotizacionStatus;
=======
// POST - add
export interface GenerateQuotation_BL {
  clientDoc: string;
  clientNames: string;
  cart: CartProductGen[];
  totalPrice?: number;
  igv?: number;
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
}
export interface CartProductGen {
  productCode: string;
  quantity: number;
  price: number;
}

// PUT - edit
export interface ModifyQuotation_BL {
  noCotizacion: string;
  clientDoc: string;
  clientNames: string;
  cart: CartProductMod[];
  igv?: number;
  totalPrice?: number;
<<<<<<< HEAD

  // agregados sergio
  puntoEntrega: string;
  lugarEnvio: string;
  tipoEntrega: string;
  tipoPrecio: string;
  telefonoCliente: string;
  direCliente: string;

=======
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
}
export interface CartProductMod {
  noLine: number;
  productCode: string;
  quantity: number;
  price: number;
}
    