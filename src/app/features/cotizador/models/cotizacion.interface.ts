import { ProductCart } from "./product.interface";

export interface Cotizacion {
  id: string;
  docCliente: string;
  cliente: string;
  monto: number;
  fecha: string;
  estado: 'Completado' | 'Pendiente' | null;
  productos: ProductCart[];
}
