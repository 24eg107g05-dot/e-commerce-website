import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeProduct } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Store title demonstrating interpolation
  public storeTitle: string = 'SoleStride Shoes';
  public storeSubtitle: string = 'Angular Components, Data Binding & Structural Directives';

  // Cart state
  public cartItemCount: number = 0;
  public cartItems: ShoeProduct[] = [];
  public showCartSummary: boolean = false;

  // Shoe product collection for *ngFor demonstration
  public products: ShoeProduct[] = [
    {
      id: 1,
      name: 'Nike Air Zoom Pegasus 40',
      brand: 'Nike',
      category: 'Running Shoes',
      price: 130.00,
      inStock: true,
      description: 'Responsive everyday running shoe with lightweight mesh and Zoom Air unit.'
    },
    {
      id: 2,
      name: 'Adidas Ultraboost Light',
      brand: 'Adidas',
      category: 'Performance Running',
      price: 190.00,
      inStock: true,
      description: 'Ultralight performance runner with responsive Boost midsole energy return.'
    },
    {
      id: 3,
      name: 'Puma Smash V2 Classic',
      brand: 'Puma',
      category: 'Casual Sneaker',
      price: 55.00,
      inStock: true,
      description: 'Timeless tennis sneaker silhouette constructed with soft genuine leather.'
    },
    {
      id: 4,
      name: 'Reebok Club C 85 Vintage',
      brand: 'Reebok',
      category: 'Vintage Court',
      price: 85.00,
      inStock: false,
      description: 'Classic 1980s court shoe with archive color accents and cushioned cupsole.'
    },
    {
      id: 5,
      name: 'Timberland 6-Inch Premium Boot',
      brand: 'Timberland',
      category: 'Outdoor Boots',
      price: 210.00,
      inStock: true,
      description: 'Rugged waterproof leather boots engineered for traction and durability.'
    }
  ];

  /**
   * Event binding handler to add item to cart
   */
  public addToCart(shoe: ShoeProduct): void {
    if (!shoe.inStock) {
      alert(`Sorry, ${shoe.name} is currently out of stock.`);
      return;
    }
    this.cartItems.push(shoe);
    this.cartItemCount = this.cartItems.length;
  }

  /**
   * Toggle view of cart items
   */
  public toggleCart(): void {
    this.showCartSummary = !this.showCartSummary;
  }

  /**
   * Clear cart items
   */
  public clearCart(): void {
    this.cartItems = [];
    this.cartItemCount = 0;
  }

  /**
   * Calculate total amount of items in cart
   */
  public get cartTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}
