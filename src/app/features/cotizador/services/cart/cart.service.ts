import { Injectable } from '@angular/core';
import { Product } from '../../models/product.interface';

import { ProductService } from '../product/product.service';
import { RespQuotationDetailDto } from '../../models/cotizacion.interface';
import { CotizacionService } from '../cotizacion/cotizacion.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cotizacionProdCart: RespQuotationDetailDto[] = [];
  private products: Product[] = [];
  private productsIncrementPrice: Product[] = [];

  constructor( 
    private _productsService: ProductService,
   ) {
    this.getProducts();
    this.getProductsIncrementPrice();
   }
  
  get cotizacionProductsCart() {
    return [...this.cotizacionProdCart];
  }

  set cotizacionProductsCart(cart: RespQuotationDetailDto[]) {
    this.cotizacionProdCart = cart;
  }

  addProductToCart(product: RespQuotationDetailDto) {
    // const quatation: RespQuotationDetailDto= {
    //   noProduct: product.noProduct,
    //   descProduct: product.descProduct,
    //   price: product.price,
    //   quantity: product.quantity,
    //   amount: product.amount,
    //   noLine: '',
    //   noQuotation: ''
    // }
    
    const index = this.cotizacionProdCart.findIndex( prod => prod.noProduct === product.noProduct);
    
    if (index !== -1) {
      this.cotizacionProdCart[index].quantity = this.cotizacionProdCart[index].quantity + 1;      
      this.cotizacionProdCart[index].amount = this.cotizacionProdCart[index].quantity * this.cotizacionProdCart[index].price;
      return;
    }
    
    product.quantity = 1;
    product.amount = product.quantity * product.price;
    this.cotizacionProdCart.push(product);
  }

  removeProductFromCard(productId: string) {
    const prodIndex = this.cotizacionProdCart.findIndex( prod => prod.noProduct === productId);

    if(prodIndex === -1) {
      return;
    }

    this.cotizacionProdCart = this.cotizacionProdCart.filter(prod => prod.noProduct !== productId);
  }

  getProducts() {
    this._productsService.getProducts().subscribe(data => {
      this.products = data.data.result;
    });
  }

  // incrementar precio por menor
  getProductsIncrementPrice() {
    this._productsService.increaseMinorPrice().subscribe(data => {
      this.productsIncrementPrice = data;
    });
  }

  getProductById(idProd: string, list: Product[]) {
    const index = list.findIndex( prod => prod.code == idProd);
    
    return list[index];
  }

  increasePrecioPorMenorInProducts(isPrecioPorMenorChecked: boolean) {  
    if(isPrecioPorMenorChecked) {

      this.cotizacionProdCart.forEach( prod => {        
        const increaseProduct = this.getProductById(prod.noProduct!, this.productsIncrementPrice);        
        if (increaseProduct) {          
          prod.price = increaseProduct.unitPrice;
        }   

        this.updateProductAmount(prod);
      });  

    }

    else {  

      this.cotizacionProdCart.forEach( prod => {        
        const product = this.getProductById(prod.noProduct!, this.products);        
        if (product) {          
          prod.price = product.unitPrice;
        }  
        
        this.updateProductAmount(prod);
      }); 

    }    
  }

  calculateTotalCartAmount() {
    let total: number = 0;
    this.cotizacionProdCart.forEach( prod => 
      total += prod.amount!
    )

    return total;
  }

  calculateIGV() {
   const montoBase = (this.calculateTotalCartAmount() / 1.18) ;
    return this.calculateTotalCartAmount() - montoBase;
  }

  updateProductAmount(product: RespQuotationDetailDto) {
    // const index = this.cotizacionProdCart.indexOf(product);
    const index = this.cotizacionProdCart.findIndex(prod => prod.noProduct === product.noProduct);

    if(index !== -1){
      this.cotizacionProdCart[index] = product;
      this.cotizacionProdCart[index].price = product.price;
      this.cotizacionProdCart[index].amount = this.cotizacionProdCart[index].quantity! * this.cotizacionProdCart[index].price;
      return;
    }

  }

  clearCart() {
    this.cotizacionProdCart = [];   
  }

}
