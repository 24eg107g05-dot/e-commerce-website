import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';
import { ShoeItem } from './models/product.model';
import { CustomerOrder } from './models/order.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Store branding
  public title: string = 'SoleStride Shoes — Single Page Application Store';

  // Product collection supplied by ProductService
  public products: ShoeItem[] = [];

  // Active shopping cart
  public cart: ShoeItem[] = [];

  // Customer order form model (bound via [(ngModel)])
  public customer = {
    fullName: '',
    email: '',
    address: ''
  };

  // Form error notification
  public formError: string = '';

  // Completed order confirmation
  public confirmedOrder: CustomerOrder | null = null;

  // Server communication state
  public isSubmitting: boolean = false;
  public serverMessage: string = '';

  /**
   * Dependency Injection of ProductService and OrderService
   */
  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  /**
   * Lifecycle hook to initialize data from service
   */
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  /**
   * Add selected shoe to cart
   */
  public addToCart(shoe: ShoeItem): void {
    if (!shoe.inStock) {
      alert(`${shoe.name} is currently out of stock.`);
      return;
    }
    this.cart.push(shoe);
    // Reset order confirmation if cart is modified
    this.confirmedOrder = null;
  }

  /**
   * Remove item from cart by index
   */
  public removeFromCart(index: number): void {
    this.cart.splice(index, 1);
  }

  /**
   * Calculate total order sum
   */
  public get cartTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  /**
   * Process customer order submission.
   * Validates form inputs, checks that cart contains products,
   * then sends the order to the Week 10 Node.js backend via OrderService.
   */
  public submitOrder(): void {
    this.formError = '';
    this.confirmedOrder = null;
    this.serverMessage = '';

    // 1. Validate that cart is not empty
    if (this.cart.length === 0) {
      this.formError = 'Your shopping cart is empty! Please add at least one pair of shoes before checking out.';
      return;
    }

    // 2. Validate customer full name
    const name = this.customer.fullName.trim();
    if (!name || name.length < 3) {
      this.formError = 'Please provide a valid full name (minimum 3 characters).';
      return;
    }

    // 3. Validate email
    const email = this.customer.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      this.formError = 'Please enter a valid email address (e.g., name@example.com).';
      return;
    }

    // 4. Validate shipping address
    const address = this.customer.address.trim();
    if (!address || address.length < 10) {
      this.formError = 'Please provide a complete shipping address (minimum 10 characters).';
      return;
    }

    // Build the order object
    const order: CustomerOrder = {
      orderId: 'ORD-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
      fullName: name,
      email: email,
      address: address,
      items: [...this.cart],
      totalAmount: this.cartTotal,
      orderDate: new Date()
    };

    // Send order to the backend server via HTTP POST
    this.isSubmitting = true;

    this.orderService.placeOrder(order).subscribe({
      next: (response) => {
        // Server confirmed and saved the order
        this.confirmedOrder = order;
        this.serverMessage = response.message || 'Order saved on the server!';

        // Clear cart and form inputs upon successful placement
        this.cart = [];
        this.customer = { fullName: '', email: '', address: '' };
        this.isSubmitting = false;
      },
      error: (err) => {
        // Server returned an error or is unreachable
        const serverMsg = err?.error?.message || err?.message || 'Could not connect to the server.';
        this.formError = `Server error: ${serverMsg} — Make sure the Week 10 backend is running (node server.js in week10/).`;
        this.isSubmitting = false;
      }
    });
  }
}
