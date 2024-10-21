import { iProduct } from './i-product';

export interface iJsonresponse {
  products: iProduct[];
  total: number;
  skip: number;
  limit: number;
}
