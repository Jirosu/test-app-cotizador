import { Injectable } from '@angular/core';
import { Product } from '../../models/product.interface';

import { ProductService } from '../product/product.service';
import { QuotationDetail, RespQuotationDetailDto } from '../../models/cotizacion.interface';
import { CotizacionService } from '../cotizacion/cotizacion.service';
import { CompanyService } from '../company/company.service';

@Injectable({
  providedIn: 'root'
})
export class QuotationDetailService {

  private cotizacionProdCart: QuotationDetail[] = [];

  percentageForMinorTypePrice: number = 1; 
  // private products: Product[] = [];
  // private productsIncrementPrice: Product[] = [];

  constructor( private _companyService: CompanyService ) {
    this.getCompanyPercentageForMinorTypePrice();
  }
  
  get cotizacionProductsCart() {
    return [...this.cotizacionProdCart];
  }

  set cotizacionProductsCart(cart: QuotationDetail[]) {
    this.cotizacionProdCart = cart;
  }

  getProductTariffPrice(prod: QuotationDetail) {
    this._companyService.getCompanyTariffPrice(prod.productCode).subscribe( resp => {
      prod.tariffPrice = resp.data
    })
  }

  addProductToCart(product: QuotationDetail) {
    
    const index = this.cotizacionProdCart.findIndex( prod => prod.productCode === product.productCode);
    
    if (index !== -1) {      
      
      this.cotizacionProdCart[index].quantity = this.cotizacionProdCart[index].quantity + 1;      
      this.cotizacionProdCart[index].amount = this.cotizacionProdCart[index].quantity * this.cotizacionProdCart[index].price;
      return;
    }
    
    this.getProductTariffPrice(product);
    product.quantity = 1;
    product.amount = product.quantity * product.price;


    console.log({product});
    
    this.cotizacionProdCart.push(product);
  }

  removeProductFromCard(productId: string) {
    const prodIndex = this.cotizacionProdCart.findIndex( prod => prod.productCode === productId);

    if(prodIndex === -1) {
      return;
    }

    this.cotizacionProdCart = this.cotizacionProdCart.filter(prod => prod.productCode !== productId);
  }

  // getProducts() {
  //   this._productsService.getProducts().subscribe(data => {
  //     this.products = data.data.result;
  //   });
  // }

  getCompanyPercentageForMinorTypePrice() {
    this._companyService.getCompanyPercentageForMinorTypePrice().subscribe(response => {
      this.percentageForMinorTypePrice = response.data;
      // console.log(response.data);
      
    })
  }

  // incrementar precio por menor
  getProductsIncrementPrice(productsList: Product[]): Product[] {
    // console.log(this.percentageForMinorTypePrice);
    
    return productsList.map((prod: Product) => {
      return {
        ...prod, 
        unitPrice: prod.unitPrice * this.percentageForMinorTypePrice
      }
    })    
  }

  getProductById(idProd: string, list: Product[]) {
    const index = list.findIndex( prod => prod.code == idProd);
    
    return list[index];
  }

  increasePrecioPorMenorInProducts(isPrecioPorMenorChecked: boolean, productsList: Product[]) {  
    if(isPrecioPorMenorChecked) {    

      this.cotizacionProdCart.forEach( prod => {        
        // const increaseProduct = this.getProductById(prod.productCode!, this.productsIncrementPrice);        
        const increaseProduct = this.getProductById(prod.productCode!, this.getProductsIncrementPrice(productsList));        
        if (increaseProduct) {          
          prod.price = increaseProduct.unitPrice;
        }   

        this.updateProductAmount(prod);
      });  

    }

    else {  
      this.cotizacionProdCart.forEach( prod => {        
        const product = this.getProductById(prod.productCode!, productsList);        
        if (product) {          
          prod.price = product.unitPrice;
        }  
        
        this.updateProductAmount(prod);
      }); 

    }    
  }

  calculateTotalCartAmount() {
    let total: number = 0;
    // this.cotizacionProdCart.forEach( prod => 
    //   total += prod.amount!
    // )

    this.cotizacionProdCart.forEach( prod => 
      total += prod.quantity * prod.price
    );

    return total;
  }

  calculateIGV() {
   const montoBase = (this.calculateTotalCartAmount() / 1.18) ;
    return this.calculateTotalCartAmount() - montoBase;
  }

  updateProductAmount(product: QuotationDetail) {
    // const index = this.cotizacionProdCart.indexOf(product);
    const index = this.cotizacionProdCart.findIndex(prod => prod.productCode === product.productCode);

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
