import {
  Component,
  inject,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { iProduct } from '../../interfaces/i-product';
import { iCart } from '../../interfaces/i-cart';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cart: iProduct[] = [];

  constructor(private productSvc: ProductService) {}

  ngOnInit() {
    this.productSvc.cart$.subscribe((prod) => {
      this.cart.push(prod);
    });
  }

  private offcanvasService = inject(NgbOffcanvas);

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
