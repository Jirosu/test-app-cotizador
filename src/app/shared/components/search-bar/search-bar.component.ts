import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { ProductService } from '../../../features/cotizador/services/product/product.service';
import { FloatLabel } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { Product } from '../../../features/cotizador/models/product.interface';

@Component({
  selector: 'shared-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AutoComplete,
    FloatLabel,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {

  selectedProduct: any;
  filteredProducts: any[] = [];
  products: any[] | undefined;

  @Output()
  onSelectedProduct: EventEmitter<Product> = new EventEmitter();

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
     this._productService.getProducts().subscribe( resp => {
      this.products = resp.data.result;
    });
  }

  filterProducts(event: AutoCompleteCompleteEvent) {
      let filtered: any[] = [];
      let query = event.query;
  
      for (let i = 0; i < (this.products as any[]).length; i++) {
          let product = (this.products as any[])[i];
          if (product.description.toLowerCase().indexOf(query.toLowerCase()) == 0) {
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
