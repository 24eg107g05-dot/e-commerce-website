# Weeks 13–14 — Angular Forms and Services for a Single-Page Application

## Aim
To develop an end-to-end Single Page Application (SPA) shoe storefront featuring:
1. **Dependency Injection & Angular Services**: A centralized `ProductService` providing catalogue data.
2. **Dynamic Cart Management**: Real-time addition, price recalculation, and removal of items.
3. **Template-Driven Angular Forms**: Two-way data binding with `[(ngModel)]` capturing customer name, email, and shipping address.
4. **Validation Enforcement**: Validates required fields and strictly checks that **the cart is not empty before allowing order confirmation**.
5. **Dynamic Order Confirmation**: Displays a detailed purchase receipt upon successful checkout.

## Architecture & Code Structure
- **Service**: `ProductService` (`src/app/services/product.service.ts`) marked with `@Injectable({ providedIn: 'root' })` supplying product items.
- **Component**: `AppComponent` (`src/app/app.component.ts`)
  - Imports `CommonModule` and `FormsModule`.
  - Injects `ProductService` via constructor dependency injection.
  - Manages shopping cart state array and total price calculation getter.
  - Implements `submitOrder()` verifying that the cart has items and required fields meet validation constraints.
- **Models**:
  - `ShoeItem` (`src/app/models/product.model.ts`)
  - `CustomerOrder` (`src/app/models/order.model.ts`)

## Prerequisites
- Node.js (v18+)
- Angular CLI (can be run via `npx @angular/cli@18` or `npm install`)

## How to Install and Run

1. Open terminal inside the project folder:
   ```bash
   cd EcommerceLab/week13-14/angular-shop
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
   *(or `npx ng serve`)*
4. Navigate to:
   ```
   http://localhost:4200/
   ```
5. To test building for production:
   ```bash
   npm run build
   ```

## Step-by-Step Testing
1. **Test Service Data**: Verify that 5 shoes from `ProductService` are rendered in the catalog grid with prices ($55 - $210).
2. **Test Empty Cart Validation**: Fill in customer details and click **Confirm & Place Order** without adding any shoes. Notice the error banner: *"Your shopping cart is empty! Please add at least one pair of shoes before checking out."*
3. **Test Add to Cart**: Click **+ Add to Cart** on Nike and Puma shoes. The cart updates in real time with items, total amount ($185.00), and top bar indicators.
4. **Test Form Validation**: Enter an invalid email or an address shorter than 10 characters. The error banner alerts you to correct the inputs.
5. **Test Successful Order**: Enter valid details:
   - Full Name: `Navya Sharma`
   - Email: `navya@example.com`
   - Address: `123 Main Street, Suite 400, Boston, MA 02110`
   - Click **Confirm & Place Order**.
6. **Observation**: A green Order Confirmation receipt appears containing a unique tracking number (`ORD-XXXX`), itemized list, total paid, delivery address, and customer email.

## Expected Output
- Responsive single-page application with shoe cards injected from `ProductService`, interactive shopping cart, template-driven form with two-way data binding, and dynamic order confirmation receipt.
