# Week 12 — Angular Components, Data Binding, and Directives

## Aim
To create an Angular application demonstrating component architecture, string interpolation (`{{ }}`), event binding (`(click)`), property binding (`[disabled]`), and Angular structural directives (`*ngFor` and `*ngIf`) using an e-commerce footwear store theme.

## Application Architecture
- **Standalone Component**: `AppComponent` (`src/app/app.component.ts`)
- **Data Model**: `ShoeProduct` interface (`src/app/models/product.model.ts`)
- **Features Demonstrated**:
  - **Interpolation**: Renders dynamic titles, shoe names, brands, descriptions, and prices formatted with the Currency/Decimal pipe (`{{ item.price | number:'1.2-2' }}`).
  - **Structural Directives**:
    - `*ngFor="let product of products"` iterates over the collection of shoes to generate catalog cards.
    - `*ngIf="product.inStock"` displays in-stock vs out-of-stock badges conditionally.
    - `*ngIf="showCartSummary"` reveals the customer's cart drawer when toggled.
  - **Event Binding**:
    - `(click)="addToCart(product)"` adds selected shoes to the cart and updates the counter.
    - `(click)="toggleCart()"` opens/closes the shopping cart summary drawer.

## Prerequisites
- Node.js (v18+)
- Angular CLI (can be run via `npx @angular/cli@18` or `npm install`)

## How to Install and Run

1. Navigate to the project folder:
   ```bash
   cd EcommerceLab/week12/angular-products
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   npm start
   ```
   *(or `npx ng serve`)*
4. Open your browser and navigate to:
   ```
   http://localhost:4200/
   ```

5. To build the production bundle:
   ```bash
   npm run build
   ```

## Expected Output
- Responsive shoe catalogue header with cart item counter button.
- 5 shoe cards generated via `*ngFor` (Nike, Adidas, Puma, Reebok, Timberland).
- Disabled Add-to-Cart button on out-of-stock Reebok shoes via `*ngIf` and property binding.
- Clicking "Add to Cart" increments the header counter and logs the shoe in the cart summary drawer.
