import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iJsonresponse } from '../interfaces/i-jsonresponse';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { iProduct } from '../interfaces/i-product';
import { iCart } from '../interfaces/i-cart';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://dummyjson.com/products';

  product$ = new BehaviorSubject<iProduct[]>([]);
  cart$ = new Subject<iProduct>();
  favourites$ = new BehaviorSubject<iProduct[]>([]);

  productsArr: iProduct[] = [];
  cartArr: iProduct[] = [];
  favouritesArr: iProduct[] = [];

  constructor(private http: HttpClient) {
    this.getProdutcs();
    this.getFavouritesFromLocalStorage();
  }
  getProdutcs() {
    this.http
      .get<iJsonresponse>(this.apiUrl)
      .pipe(map((response) => response.products))
      .pipe(
        tap((products) => {
          this.product$.next(products);
          this.productsArr = products;
        })
      )
      .subscribe();
  }

  getFavouritesFromLocalStorage() {
    let FavouritesFromLocalStorage: iProduct[] = JSON.parse(
      localStorage.getItem('favouritesArr') || '[]'
    );
    this.favouritesArr = FavouritesFromLocalStorage;
    this.favourites$.next(this.favouritesArr);
  }

  addToCart(product: iProduct) {
    this.cartArr.push(product);
    this.cart$.next(product);
  }
  addToFavourites(product: iProduct) {
    const found = this.favouritesArr.find((p) => p.id === product.id);
    if (found) {
      const index = this.favouritesArr.findIndex((p) => p.id === found.id);
      this.favouritesArr.splice(index, 1);
      this.favourites$.next(this.favouritesArr);
      localStorage.setItem('favouritesArr', JSON.stringify(this.favouritesArr));
    } else {
      this.favouritesArr.push(product);
      this.favourites$.next(this.favouritesArr);
      localStorage.setItem('favouritesArr', JSON.stringify(this.favouritesArr));
    }
  }
  getFavouritesCount(): Observable<number> {
    return this.favourites$.pipe(map((favourites) => favourites.length));
  }
}
