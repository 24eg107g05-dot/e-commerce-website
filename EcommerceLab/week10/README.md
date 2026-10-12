# Week 10 — AJAX Program to Send Data Using POST

## Aim
To develop an asynchronous customer order placement program where form data is serialized to JSON, dispatched to a Node.js backend server using the HTTP POST method via the Fetch API, validated server-side, and permanently saved into an `orders.json` file.

## Files Created
- `post-data.html`: Order form collecting customer details, shoe selection, size, quantity, and address. Dispatches `fetch("http://localhost:3000/api/orders", { method: "POST", ... })`.
- `server.js`: Node.js server that:
  - Serves static files and accepts JSON payloads.
  - Implements field validation (valid name, valid email regex, valid shoe product, quantity limits, minimum address length).
  - Computes total amount based on the catalog price list.
  - Actually persists orders into `orders.json` on disk using Node's `fs` module.
  - Returns HTTP 201 with generated `orderId` and order details, or HTTP 400 upon validation error.
- `package.json`: Project manifest defining start script and dependencies (`express`, `cors`).
- `orders.json`: Persistent disk storage for customer orders.

## Prerequisites
- Node.js (v18+)

## Setup and How to Run

### Step 1: Install Dependencies (Optional, server supports both Express and native mode)
Open your terminal in `EcommerceLab/week10/` and run:
```bash
npm install
```
*(Note: `server.js` includes an automatic zero-dependency fallback, so it runs immediately even without running `npm install`)*

### Step 2: Start the Backend Server
```bash
node server.js
```
You will see:
```text
====================================================
SoleStride Shoes Server running on http://localhost:3000
Open in browser: http://localhost:3000/post-data.html
Orders will be stored in: ...\EcommerceLab\week10\orders.json
====================================================
```

### Step 3: Test Placing an Order
1. Open your browser and navigate to:
   `http://localhost:3000/post-data.html`
2. Enter your Name, Email, Shoe Model (e.g. Nike Air Zoom Pegasus 40), Size (US 9), Quantity (2), and Address.
3. Click **Send Order (HTTP POST)**.
4. **Result**: A green confirmation card appears containing the generated Order Tracking ID (e.g. `ORD-M2KL8...`), computed total price ($260.00), and delivery summary.
5. Check `EcommerceLab/week10/orders.json` in your editor to verify that the order was written to disk.
6. You can also view all saved orders in JSON format by visiting `http://localhost:3000/api/orders`.

## Expected Output
- Web page displays an order confirmation receipt upon successful POST.
- Server terminal logs: `[ORDER SAVED] Order #ORD-XXXX written to orders.json for Navya Sharma. Total: $260`.
- File `orders.json` contains the serialized JSON array of persistent orders.
