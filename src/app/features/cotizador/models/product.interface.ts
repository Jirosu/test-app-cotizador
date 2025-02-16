export interface Product {
    code: string;
    description: string;
    unitPrice: number;
    stock: number;
}

export interface ProductCart extends Product {
    cantidad: number,
    monto: number,
}
