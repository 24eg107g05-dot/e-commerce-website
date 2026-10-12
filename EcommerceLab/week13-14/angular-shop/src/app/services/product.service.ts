import { Injectable } from '@angular/core';
import { ShoeItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Shoe products master repository
  private shoeCatalog: ShoeItem[] = [
    {
      id: 101,
      name: 'Air Zoom Pegasus 40',
      brand: 'Nike',
      category: 'Road Running',
      price: 130.00,
      size: 'US 9.5',
      inStock: true,
      description: 'Responsive everyday running shoes engineered with dual Zoom Air units and engineered mesh.'
    },
    {
      id: 102,
      name: 'Ultraboost Light',
      brand: 'Adidas',
      category: 'Performance Running',
      price: 190.00,
      size: 'US 10.0',
      inStock: true,
      description: 'Ultralight road runner equipped with 30% lighter Boost midsole for explosive energy return.'
    },
    {
      id: 103,
      name: 'Smash V2 Classic Sneaker',
      brand: 'Puma',
      category: 'Lifestyle Sneaker',
      price: 55.00,
      size: 'US 8.5',
      inStock: true,
      description: 'Timeless tennis court-inspired silhouette made with durable clean leather and rubber sole.'
    },
    {
      id: 104,
      name: 'Club C 85 Vintage',
      brand: 'Reebok',
      category: 'Heritage Court',
      price: 85.00,
      size: 'US 9.0',
      inStock: false,
      description: 'Iconic 1985 clean styling featuring vintage off-white garment leather and terry lining.'
    },
    {
      id: 105,
      name: 'Heritage 6-Inch Boot',
      brand: 'Timberland',
      category: 'Outdoor Boots',
      price: 210.00,
      size: 'US 10.5',
      inStock: true,
      description: 'Waterproof seam-sealed nubuck leather boot built with anti-fatigue technology and lugged soles.'
    }
  ];

  /**
   * Retrieve all products from the service
   */
  public getProducts(): ShoeItem[] {
    return [...this.shoeCatalog];
  }

  /**
   * Retrieve single product by id
   */
  public getProductById(id: number): ShoeItem | undefined {
    return this.shoeCatalog.find(shoe => shoe.id === id);
  }
}
