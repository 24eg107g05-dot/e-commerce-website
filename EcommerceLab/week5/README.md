# Week 5 — Product Catalogue Using HTML, CSS, and JavaScript

## Aim
To develop a responsive, interactive shoe product catalogue (`catalog.html`) leveraging DOM manipulation, array filtering and sorting methods, and event handling in JavaScript (`script.js`).

## Files Created
- `catalog.html`: Catalogue container with search field, sort dropdown, sticky cart counter badge, and responsive product grid.
- `style.css`: Clean grid-based styles with sticky header, cards, buttons, and toast notifications.
- `script.js`:
  - Dataset array of 8 shoe items with name, brand, price, and category.
  - Dynamic card generation using `document.createElement()` and `innerHTML`.
  - Real-time search filter matching name, brand, or category.
  - Price sorting (Low to High, High to Low).
  - Add to cart handling with dynamic cart counter badge updates and temporary toast alerts.

## Prerequisites
- Modern web browser.

## How to Run / Test
1. Open `EcommerceLab/week5/catalog.html` in your browser.
2. **Search Test**: Type "Nike" or "Boot" in the search box to verify instantaneous filtering.
3. **Sort Test**: Select "Price: Low to High" and verify Puma ($55) appears first; switch to "Price: High to Low" and verify Timberland ($210) appears first.
4. **Cart Test**: Click the **Add to Cart** button on multiple shoes. Notice the cart item counter in the top-right header incrementing and toast alert appearing.

## Expected Output
- Interactive shoe catalogue with 8 items rendered dynamically from JavaScript, dynamic search filtering, two-way price sorting, and live cart counter badge.
