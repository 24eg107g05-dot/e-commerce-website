import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerOrder } from '../models/order.model';

/**
 * OrderService — Connects the Angular frontend to the Week 10 Node.js backend.
 * Sends cart-based checkout orders via HTTP POST to the server,
 * which validates and persists them to orders.json on disk.
 */
@Injectable({ providedIn: 'root' })
export class OrderService {

  /** Base URL of the Week 10 Node.js backend server */
  private apiUrl = 'http://localhost:3000/api/checkout';

  constructor(private http: HttpClient) {}

  /**
   * Submit a completed order to the backend server.
   * The server validates the data and saves it to orders.json.
   *
   * @param order - The CustomerOrder object built by AppComponent
   * @returns Observable with the server's JSON response
   */
  placeOrder(order: CustomerOrder): Observable<any> {
    return this.http.post(this.apiUrl, {
      trackingId: order.orderId,
      customerName: order.fullName,
      email: order.email,
      address: order.address,
      items: order.items,
      total: order.totalAmount,
      date: order.orderDate
    });
  }
}
