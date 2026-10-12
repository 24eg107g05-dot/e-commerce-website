# EcommerceLab — Web Development Laboratory Manual & Projects
**Theme: SoleStride Shoes — E-Commerce Footwear Store**  
**Course:** B.Tech Computer Science & Engineering (CSE) — Web Technologies / Web Development Lab

---

## 📖 Overview
This repository contains a complete, beginner-friendly laboratory project suite developed for a **Web Development Lab course**. Every experiment is organized into an independent week-wise directory using the consistent theme of **SoleStride Shoes**, an e-commerce footwear store.

All programs adhere to academic lab curriculum requirements and feature comprehensive comments, semantic markup, error handling, and step-by-step instructions.

---

## 📂 Project Structure

```text
EcommerceLab/
├── README.md                          # Main project documentation & execution guide
├── week-wise-index.md                 # Quick reference lab syllabus & index
├── week1/                             # Home Page & Login Page (HTML)
│   ├── index.html
│   ├── login.html
│   └── README.md
├── week2/                             # Registration Form (HTML Controls)
│   ├── register.html
│   └── README.md
├── week3/                             # CSS Styling for E-Commerce Pages
│   ├── index.html
│   ├── login.html
│   ├── style.css
│   └── README.md
├── week4/                             # Client-Side Form Validation (JavaScript)
│   ├── register.html
│   ├── script.js
│   └── README.md
├── week5/                             # Product Catalogue (DOM, Search, Sort, Cart)
│   ├── catalog.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── week6/                             # XML Data & DTD Validation
│   ├── shoes.xml
│   ├── shoes.dtd
│   ├── validate.js
│   └── README.md
├── week7/                             # Placeholder for Pending Syllabus Title
│   └── README.md
├── week8/                             # AJAX / Fetch API Loading Asynchronous Text
│   ├── fetch-text.html
│   ├── store.txt
│   └── README.md
├── week9/                             # AJAX / Fetch API Parsing JSON & XML
│   ├── fetch-json.html
│   ├── products.json
│   ├── fetch-xml.html
│   ├── products.xml
│   └── README.md
├── week10/                            # Asynchronous HTTP POST & Node.js Backend
│   ├── post-data.html
│   ├── server.js
│   ├── package.json
│   ├── orders.json
│   └── README.md
├── week11/                            # TypeScript (Interfaces, Classes & Discounts)
│   ├── products.ts
│   ├── tsconfig.json
│   ├── package.json
│   ├── products.js
│   └── README.md
├── week12/                            # Angular Components, Data Binding & Directives
│   ├── angular-products/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── models/product.model.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.component.html
│   │   │   │   └── app.component.css
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   └── styles.css
│   │   ├── angular.json
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.app.json
│   └── README.md
└── week13-14/                         # Angular SPA (Services, Forms & DI)
    ├── angular-shop/
    │   ├── src/
    │   │   ├── app/
    │   │   │   ├── models/product.model.ts
    │   │   │   ├── models/order.model.ts
    │   │   │   ├── services/product.service.ts
    │   │   │   ├── app.component.ts
    │   │   │   ├── app.component.html
    │   │   │   └── app.component.css
    │   │   ├── index.html
    │   │   ├── main.ts
    │   │   └── styles.css
    │   ├── angular.json
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── tsconfig.app.json
    └── README.md
```

---

## 💻 Prerequisites & Setup

1. **Modern Web Browser**: Google Chrome, Mozilla Firefox, or Microsoft Edge.
2. **Node.js**: Node.js (v18 or higher recommended). Download from [nodejs.org](https://nodejs.org).
3. **Local HTTP Server**:
   - Node.js built-in `npx serve .` (for Weeks 8 and 9 AJAX requests), or
   - VS Code "Live Server" extension, or
   - Python: `python -m http.server 8080`.

---

## 🚀 How to Run Each Experiment

### Week 1 — Home Page & Login Page
- **Files**: `week1/index.html`, `week1/login.html`
- **Execution**: Double-click `index.html` in your browser. Use the top navigation bar to visit the Login page.

### Week 2 — Registration Page
- **Files**: `week2/register.html`
- **Execution**: Open `register.html` in your browser. Test HTML5 input validation and form reset controls.

### Week 3 — Applying CSS to Home and Login Pages
- **Files**: `week3/index.html`, `week3/login.html`, `week3/style.css`
- **Execution**: Open `week3/index.html` in your browser. Observe the responsive card grid, hover transitions, and navigation bar styling.

### Week 4 — Applying JavaScript to the Registration Form
- **Files**: `week4/register.html`, `week4/script.js`
- **Execution**: Open `week4/register.html`. Submit empty to see the custom JS error alerts; enter valid details to see the green confirmation banner without page reload.

### Week 5 — Product Catalogue Using HTML, CSS, and JavaScript
- **Files**: `week5/catalog.html`, `week5/style.css`, `week5/script.js`
- **Execution**: Open `week5/catalog.html`. Test the live search filter (e.g., search "Nike" or "Boot"), sort by price (Low to High / High to Low), and click "Add to Cart" to see the dynamic cart counter update.

### Week 6 — XML File to Display Shoe Information and DTD Validation
- **Files**: `week6/shoes.xml`, `week6/shoes.dtd`, `week6/validate.js`
- **Execution**: Open terminal in `EcommerceLab/week6/` and run:
  ```bash
  node validate.js
  ```
  Or run `xmllint --noout --dtdvalid shoes.dtd shoes.xml`.

### Week 7 — Experiment Title Pending Confirmation
- **Status**: Reserved until the college lab instructor confirms the required experiment topic.

### Week 8 — AJAX / Fetch API to Load Text Data Asynchronously
- **Files**: `week8/fetch-text.html`, `week8/store.txt`
- **Execution**: Start a local server inside `EcommerceLab/week8/`:
  ```bash
  npx serve .
  ```
  Open `http://localhost:3000/fetch-text.html` and click **Fetch Store Info**.

### Week 9 — AJAX / Fetch API to Parse JSON and XML Response Data
- **Files**: `week9/fetch-json.html`, `week9/products.json`, `week9/fetch-xml.html`, `week9/products.xml`
- **Execution**: Run `npx serve .` inside `EcommerceLab/week9/`.
  - Open `fetch-json.html` and click **Fetch Shoe Products (JSON)**.
  - Open `fetch-xml.html` and click **Fetch Shoe Products (XML)**.

### Week 10 — AJAX Program to Send Data Using POST
- **Files**: `week10/post-data.html`, `week10/server.js`, `week10/package.json`, `week10/orders.json`
- **Execution**:
  1. Open terminal in `EcommerceLab/week10/`.
  2. Start the backend: `node server.js`
  3. Open `http://localhost:3000/post-data.html` in your browser.
  4. Fill in order details and submit. Order details are saved to `orders.json` on disk!

### Week 11 — TypeScript Programs Using Classes, Interfaces, and Functions
- **Files**: `week11/products.ts`, `week11/tsconfig.json`, `week11/package.json`
- **Execution**: Open terminal in `EcommerceLab/week11/` and run:
  ```bash
  npm start
  ```
  *(or `npx -p typescript tsc && node products.js`)*

### Week 12 — Angular Components, Data Binding, and Directives
- **Directory**: `week12/angular-products/`
- **Execution**:
  1. Open terminal in `EcommerceLab/week12/angular-products/`.
  2. Run `npm install` (first time).
  3. Start dev server: `npm start`
  4. Open `http://localhost:4200/`.

### Weeks 13–14 — Angular Forms and Services for a Single-Page Application
- **Directory**: `week13-14/angular-shop/`
- **Execution**:
  1. Open terminal in `EcommerceLab/week13-14/angular-shop/`.
  2. Run `npm install` (first time).
  3. Start dev server: `npm start`
  4. Open `http://localhost:4200/`.
