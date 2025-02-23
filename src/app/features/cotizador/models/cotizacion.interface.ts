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

// POST - add
export interface GenerateQuotation_BL {
  clientDoc: string;
  clientNames: string;
  cart: CartProductGen[];
  totalPrice?: number;
  igv?: number;
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
}
export interface CartProductMod {
  noLine: number;
  productCode: string;
  quantity: number;
  price: number;
}
    