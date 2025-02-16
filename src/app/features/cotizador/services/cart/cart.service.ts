import { Injectable } from '@angular/core';
import { Product, ProductCart } from '../../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cotizacionProdCart: ProductCart[] = [];

  constructor() { }

  get cotizacionProductsCart() {
    return [...this.cotizacionProdCart];
  }

  set cotizacionProductsCart(cart: ProductCart[]) {
    this.cotizacionProdCart = cart;
  }

  addProductToCart(product: Product) {
    let productCarrito = {...product as ProductCart}
    
    const index = this.cotizacionProdCart.findIndex( prod => prod.code === product.code);
    
    if (index !== -1) {
      this.cotizacionProdCart[index].cantidad = this.cotizacionProdCart[index].cantidad + 1;      
      this.cotizacionProdCart[index].monto = this.cotizacionProdCart[index].cantidad * this.cotizacionProdCart[index].unitPrice;
      return;
    }
    
    productCarrito.cantidad = 1;
    productCarrito.monto = productCarrito.cantidad * productCarrito.unitPrice;
    this.cotizacionProdCart.push(productCarrito);
  }

  removeProductFromCard(productId: string) {
    const prodIndex = this.cotizacionProdCart.findIndex( prod => prod.code === productId);

    if(prodIndex === -1) {
      return;
    }

    this.cotizacionProdCart = this.cotizacionProdCart.filter(prod => prod.code !== productId);
  }

  calculateTotalCartAmount() {
    let total: number = 0;
    this.cotizacionProdCart.forEach( prod => 
      total += prod.monto 
    )

    return total;
  }

  updateProductAmount(product: ProductCart) {
    const index = this.cotizacionProdCart.indexOf(product);

    if(index !== -1){
      this.cotizacionProdCart[index] = product;
      this.cotizacionProdCart[index].unitPrice = product.unitPrice;
      this.cotizacionProdCart[index].monto = this.cotizacionProdCart[index].cantidad * this.cotizacionProdCart[index].unitPrice;
      return;
    }

  }

  clearCart() {
    this.cotizacionProdCart = [];   
  }

}
