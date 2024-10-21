import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { iProduct } from '../../interfaces/i-product';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productSvc: ProductService) {}

  products: iProduct[] = [];
  cart: iProduct[] = [];
  favourites: iProduct[] = [];

  ngOnInit() {
    this.productSvc.product$.subscribe((products) => {
      this.products = products;
    });

    // this.productSvc.cart$.subscribe((products) => {
    //   this.cart = products;
    // });
  }
}
