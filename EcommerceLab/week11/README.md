# Week 11 — TypeScript Programs Using Classes, Interfaces, and Functions

## Aim
To implement Object-Oriented Programming (OOP) concepts in TypeScript by declaring a `Product` interface, implementing a `Shoe` class, writing functions with typed parameters and return types, computing discounts, and compiling TypeScript to standard JavaScript.

## Files Created
- `products.ts`: TypeScript source code featuring:
  - Interface `Product` declaring fields (`id`, `name`, `brand`, `category`, `price`, `inStock`) and method `getDetails(): string`.
  - Class `Shoe` implementing `Product` with constructor, fields, `getDetails()` method, and `applyDiscount(discountPercent: number): number`.
  - Independent function `displayProductInvoice(shoe: Shoe, discountPercent: number): void` computing original price, discount amount, and final price.
  - Driver execution creating 4 shoe instances (Nike, Adidas, Puma, Timberland) and printing invoices.
- `tsconfig.json`: TypeScript compiler configuration targeting ES2020 and CommonJS.
- `package.json`: NPM scripts for compilation and execution.
- `products.js`: Transpiled JavaScript output ready for Node.js execution.

## Prerequisites
- Node.js (already installed).

## How to Compile and Run

### Command Option 1 (Direct NPM script):
In the `EcommerceLab/week11/` directory:
```bash
npm start
```

### Command Option 2 (Using npx tsc):
```bash
# 1. Compile TypeScript to JavaScript
npx -p typescript tsc

# 2. Run the compiled JavaScript file
node products.js
```

### Command Option 3 (If TypeScript is installed globally):
```bash
tsc
node products.js
```

## Expected Output
```text
================================================================
   SOLESTRIDE SHOES - TYPESCRIPT PRODUCT CATALOG REPORT
================================================================

----------------------------------------------------------------
[#101] Nike - Air Zoom Pegasus 40 | Category: Running | Price: $130.00 | Status: In Stock
Available Sizes (US): [8, 8.5, 9, 9.5, 10, 11]
Original Price  : $130.00
Discount Applied: 20% (-$26.00)
Final Price     : $104.00
----------------------------------------------------------------
----------------------------------------------------------------
[#102] Adidas - Ultraboost Light | Category: Running / Lifestyle | Price: $190.00 | Status: In Stock
Available Sizes (US): [7.5, 8.5, 9.5, 10.5]
Original Price  : $190.00
Discount Applied: 15% (-$28.50)
Final Price     : $161.50
----------------------------------------------------------------
----------------------------------------------------------------
[#103] Puma - Smash V2 Classic Sneaker | Category: Casual | Price: $55.00 | Status: In Stock
Available Sizes (US): [7, 8, 9, 10]
Final Price (No Discount): $55.00
----------------------------------------------------------------
----------------------------------------------------------------
[#104] Timberland - Heritage 6-Inch Waterproof Boot | Category: Outdoor Boot | Price: $210.00 | Status: Out of Stock
Available Sizes (US): [8, 9, 10, 11, 12]
Original Price  : $210.00
Discount Applied: 25% (-$52.50)
Final Price     : $157.50
----------------------------------------------------------------
```
