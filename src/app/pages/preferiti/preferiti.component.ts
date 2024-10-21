import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { iProduct } from '../../interfaces/i-product';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss',
})
export class PreferitiComponent {
  favourites: iProduct[] = [];
  constructor(private productSvc: ProductService) {}
  ngOnInit() {
    this.favourites = this.productSvc.favouritesArr;
  }
}
