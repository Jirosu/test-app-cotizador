import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductService } from '../../../features/cotizador/services/product/product.service';
import { Product } from '../../../features/cotizador/models/product.interface';

import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { FloatLabel } from 'primeng/floatlabel';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'shared-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AutoComplete,
<<<<<<< HEAD
    // FloatLabel,
=======
    FloatLabel,
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
    InputIconModule,
    IconFieldModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit, OnChanges {

  @Input()
  checkedPrecioMenor: boolean = false;

  @Input()
  checkedPrecioMenor: boolean = false;

  selectedProduct: Product | null = {} as Product;
  filteredProducts: Product[] = [];

  @Input()
  products: Product[] = [];
  
  @Output()
  onSelectedProduct: EventEmitter<Product> = new EventEmitter();

<<<<<<< HEAD
  constructor() {}
  
  ngOnInit(): void {    
  }


  getIndexOfQuery(description: string, query: string) {
    return description.toLowerCase().indexOf(query.toLowerCase());
=======
  constructor(private _productService: ProductService) {}
  
  ngOnInit(): void {
    this.getProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['checkedPrecioMenor'].currentValue) {
      this.getProductsPorMenor();
    }
    else {
      this.getProducts();
    }
  }

  getProducts() {
     this._productService.getProducts().subscribe( resp => {
      this.products = resp.data.result;
    });
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
  }

  getProductsPorMenor() {
    this._productService.increaseMinorPrice().subscribe( prods => {
      this.products = prods;
    });  
  }

  filterProducts(event: AutoCompleteCompleteEvent) {
<<<<<<< HEAD
    let filtered: Product[] = [];
    let query = event.query.toLowerCase();
    let count = 0;
 
    for (let i = 0; i < (this.products as Product[]).length; i++) {
      let product = (this.products as Product[])[i];
      if (product.description.toLowerCase().indexOf(query) !== -1 || product.code.toLowerCase().indexOf(query) !== -1) {
        filtered.push(product);
        count++;
        if (count >= 10) break;
      }
    }
    this.filteredProducts = filtered;
=======
      let filtered: any[] = [];
      let query = event.query;
  
      for (let i = 0; i < (this.products as any[]).length; i++) {
          let product = (this.products as any[])[i];
          if (product.description.toLowerCase().indexOf(query.toLowerCase()) == 0 || product.code.toLowerCase().indexOf(query.toLowerCase()) == 0 ) {
              filtered.push(product);
          }
      }    
      this.filteredProducts = filtered;
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
  }


  onSelectProduct(event: any) {
    this.onSelectedProduct.emit(event.value);
    this.selectedProduct = null;
  }

}
