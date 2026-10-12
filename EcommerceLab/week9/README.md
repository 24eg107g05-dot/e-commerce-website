# Week 9 — AJAX / Fetch API to Parse JSON and XML Response Data

## Aim
To demonstrate asynchronous retrieval and client-side data parsing for both JSON and XML data formats using the Fetch API, JavaScript Object notation methods (`response.json()`), and the XML `DOMParser()` interface.

## Files Created
- `products.json`: JSON array of shoe objects containing id, name, category, brand, price, rating, and sizes.
- `fetch-json.html`: Web page that loads `products.json` asynchronously and renders products into a styled HTML table.
- `products.xml`: XML dataset containing `<products>` and `<product>` nodes with id, name, category, brand, price, and stock.
- `fetch-xml.html`: Web page that fetches `products.xml`, parses it into an XML Document using `DOMParser()`, traverses nodes using `getElementsByTagName()`, and renders an HTML table.

## Prerequisites
- Node.js or Python to serve files over HTTP (due to browser CORS restrictions for local files).

## How to Run / Test

### Start Local Web Server:
Open terminal in `EcommerceLab/week9/` and run:
```bash
npx serve .
```
*(Or run `python -m http.server 8080`)*

### Testing JSON Fetch:
1. Open `http://localhost:3000/fetch-json.html` in your browser.
2. Click **Fetch Shoe Products (JSON)**.
3. Observe the green confirmation banner and the 5-row table populated with shoe names, prices ($55 - $210), and star ratings.

### Testing XML Fetch:
1. Open `http://localhost:3000/fetch-xml.html` in your browser.
2. Click **Fetch Shoe Products (XML)**.
3. Observe the XML DOM parsed into table rows displaying product codes, shoe names, prices, and stock units.

## Expected Output
- Clean dynamic tables populated asynchronously from `products.json` and `products.xml` respectively, without page reloads.
