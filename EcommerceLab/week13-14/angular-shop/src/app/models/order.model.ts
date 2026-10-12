import { ShoeItem } from './product.model';

export interface CustomerOrder {
  orderId: string;
  fullName: string;
  email: string;
  address: string;
  items: ShoeItem[];
  totalAmount: number;
  orderDate: Date;
}
