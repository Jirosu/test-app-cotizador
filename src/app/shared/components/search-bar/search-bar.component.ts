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
    // FloatLabel,
    InputIconModule,
    IconFieldModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {

  @Input()
  checkedPrecioMenor: boolean = false;

  selectedProduct: Product | null = {} as Product;
  filteredProducts: Product[] = [];

  @Input()
  products: Product[] = [];
  
  @Output()
  onSelectedProduct: EventEmitter<Product> = new EventEmitter();

  constructor() {}
  
  ngOnInit(): void {    
  }


  getIndexOfQuery(description: string, query: string) {
    return description.toLowerCase().indexOf(query.toLowerCase());
  }

  filterProducts(event: AutoCompleteCompleteEvent) {
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
  }


  onSelectProduct(event: any) {
    this.onSelectedProduct.emit(event.value);
    this.selectedProduct = null;
  }

}
