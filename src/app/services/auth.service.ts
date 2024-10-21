import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authorization: boolean = false;
  constructor(private productSvc: ProductService, private router: Router) {
    this.productSvc.getFavouritesCount().subscribe((lenght) => {
      if (lenght !== 0) {
        this.authorization = true;
      } else {
        this.router.navigate(['/']);
        this.authorization = false;
      }
    });
  }
}
