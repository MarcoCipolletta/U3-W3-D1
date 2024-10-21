import { Component } from '@angular/core';
import { iProduct } from '../../interfaces/i-product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private productSvc: ProductService) {}
  favourites: number = 0;

  ngOnInit() {
    this.productSvc.favourites$.subscribe((products) => {
      this.favourites = products.length;
    });
    this.productSvc.getFavouritesCount().subscribe((qnt) => {
      this.favourites = qnt;
    });
    console.log(this.favourites);
  }
  badgefavourites() {
    if (this.favourites > 9) {
      return '9+';
    } else {
      return this.favourites;
    }
  }
}
