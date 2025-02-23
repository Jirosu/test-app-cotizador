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
    FloatLabel,
    InputIconModule,
    IconFieldModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit, OnChanges {

  @Input()
  checkedPrecioMenor: boolean = false;

  selectedProduct: any;
  filteredProducts: any[] = [];
  products: any[] | undefined;

  @Output()
  onSelectedProduct: EventEmitter<Product> = new EventEmitter();

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
  }

  getProductsPorMenor() {
    this._productService.increaseMinorPrice().subscribe( prods => {
      this.products = prods;
    });  
  }

  filterProducts(event: AutoCompleteCompleteEvent) {
      let filtered: any[] = [];
      let query = event.query;
  
      for (let i = 0; i < (this.products as any[]).length; i++) {
          let product = (this.products as any[])[i];
          if (product.description.toLowerCase().indexOf(query.toLowerCase()) == 0 || product.code.toLowerCase().indexOf(query.toLowerCase()) == 0 ) {
              filtered.push(product);
          }
      }    
      this.filteredProducts = filtered;
  }

  onSelectProduct(event: any) {
    this.onSelectedProduct.emit(event.value)

    this.selectedProduct = null;
  }

}
