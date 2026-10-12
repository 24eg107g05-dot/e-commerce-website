// ===================================================================
// SoleStride Shoes - Order Processing Backend (Week 10 Lab)
// ===================================================================

const fs = require('fs');
const path = require('path');

// Port definition
const PORT = process.env.PORT || 3000;
const ORDERS_FILE = path.join(__dirname, 'orders.json');

// Ensure orders.json exists on disk
if (!fs.existsSync(ORDERS_FILE)) {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2), 'utf8');
}

// Shoe price directory for server-side verification
const SHOE_PRICES = {
    "Nike Air Zoom Pegasus 40": 130.00,
    "Adidas Ultraboost Light": 190.00,
    "Puma Smash V2 Classic": 55.00,
    "Reebok Club C 85 Vintage": 85.00,
    "Timberland Heritage Boot": 210.00
};

// Check if express is available; if not, fallback to built-in http
let useExpress = false;
let express, cors;
try {
    express = require('express');
    cors = require('cors');
    useExpress = true;
} catch (e) {
    useExpress = false;
}

if (useExpress) {
    const app = express();

    // Enable CORS and JSON parsing
    app.use(cors());
    app.use(express.json());
    app.use(express.static(__dirname));

    // Endpoint: Receive and save customer order via POST
    app.post('/api/orders', (req, res) => {
        const orderData = req.body;
        const validation = validateAndSaveOrder(orderData);

        if (!validation.success) {
            return res.status(400).json(validation);
        }

        return res.status(201).json(validation);
    });

    // Endpoint: Retrieve all saved orders
    app.get('/api/orders', (req, res) => {
        const orders = JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8'));
        res.json({ success: true, count: orders.length, orders });
    });

    // Endpoint: Accept cart-based checkout from Angular frontend
    app.post('/api/checkout', (req, res) => {
        const orderData = req.body;
        const validation = validateAndSaveCheckout(orderData);

        if (!validation.success) {
            return res.status(400).json(validation);
        }

        return res.status(201).json(validation);
    });

    app.listen(PORT, () => {
        console.log(`====================================================`);
        console.log(`SoleStride Shoes Server running on http://localhost:${PORT}`);
        console.log(`Open in browser: http://localhost:${PORT}/post-data.html`);
        console.log(`Orders will be stored in: ${ORDERS_FILE}`);
        console.log(`====================================================`);
    });

} else {
    // Fallback using built-in http module (Zero dependency mode)
    const http = require('http');

    const server = http.createServer((req, res) => {
        // Enable CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
            res.writeHead(204);
            return res.end();
        }

        // Serve HTML file for GET / or /post-data.html
        if (req.method === 'GET' && (req.url === '/' || req.url === '/post-data.html')) {
            const htmlPath = path.join(__dirname, 'post-data.html');
            if (fs.existsSync(htmlPath)) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(fs.readFileSync(htmlPath, 'utf8'));
            }
        }

        // GET /api/orders
        if (req.method === 'GET' && req.url === '/api/orders') {
            const orders = JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8'));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true, count: orders.length, orders }, null, 2));
        }

        // POST /api/orders
        if (req.method === 'POST' && req.url === '/api/orders') {
            let body = '';
            req.on('data', chunk => { body += chunk.toString(); });
            req.on('end', () => {
                try {
                    const orderData = JSON.parse(body);
                    const validation = validateAndSaveOrder(orderData);
                    const statusCode = validation.success ? 201 : 400;
                    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(validation, null, 2));
                } catch (err) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, message: 'Invalid JSON payload.' }));
                }
            });
            return;
        }

        // POST /api/checkout (Angular cart-based orders)
        if (req.method === 'POST' && req.url === '/api/checkout') {
            let body = '';
            req.on('data', chunk => { body += chunk.toString(); });
            req.on('end', () => {
                try {
                    const orderData = JSON.parse(body);
                    const validation = validateAndSaveCheckout(orderData);
                    const statusCode = validation.success ? 201 : 400;
                    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(validation, null, 2));
                } catch (err) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, message: 'Invalid JSON payload.' }));
                }
            });
            return;
        }

        // Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    });

    server.listen(PORT, () => {
        console.log(`====================================================`);
        console.log(`SoleStride Shoes Server running on http://localhost:${PORT} (Native HTTP mode)`);
        console.log(`Open in browser: http://localhost:${PORT}/post-data.html`);
        console.log(`Orders will be stored in: ${ORDERS_FILE}`);
        console.log(`====================================================`);
    });
}

/**
 * Validates order inputs and writes them to orders.json on disk
 * (Used by the Week 10 HTML form — single product orders)
 * @param {Object} order 
 * @returns {Object} result
 */
function validateAndSaveOrder(order) {
    const { customerName, email, shoeProduct, shoeSize, quantity, address } = order;

    // Validate fields
    if (!customerName || customerName.trim().length < 3) {
        return { success: false, message: "Customer name must be at least 3 characters." };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
        return { success: false, message: "Valid email address is required." };
    }
    if (!shoeProduct || !SHOE_PRICES[shoeProduct]) {
        return { success: false, message: "Please select a valid shoe product from the store catalog." };
    }
    if (!shoeSize) {
        return { success: false, message: "Shoe size is required." };
    }
    const qty = parseInt(quantity, 10);
    if (isNaN(qty) || qty < 1 || qty > 10) {
        return { success: false, message: "Quantity must be between 1 and 10 pairs." };
    }
    if (!address || address.trim().length < 10) {
        return { success: false, message: "Shipping address must be at least 10 characters." };
    }

    const unitPrice = SHOE_PRICES[shoeProduct];
    const totalAmount = unitPrice * qty;

    // Create persistent order record
    const savedOrder = {
        orderId: "ORD-" + Date.now().toString(36).toUpperCase(),
        timestamp: new Date().toISOString(),
        customerName: customerName.trim(),
        email: email.trim(),
        shoeProduct,
        shoeSize,
        quantity: qty,
        unitPrice: unitPrice,
        totalAmount: totalAmount,
        shippingAddress: address.trim(),
        status: "CONFIRMED"
    };

    // Read current orders from disk, append new order, and save back to disk
    const rawData = fs.readFileSync(ORDERS_FILE, 'utf8');
    const existingOrders = JSON.parse(rawData || '[]');
    existingOrders.push(savedOrder);
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(existingOrders, null, 2), 'utf8');

    console.log(`[ORDER SAVED] Order #${savedOrder.orderId} written to orders.json for ${savedOrder.customerName}. Total: $${totalAmount}`);

    return {
        success: true,
        message: "Order placed and saved successfully on the server!",
        order: savedOrder
    };
}

/**
 * Validates and saves a cart-based checkout order from the Angular frontend.
 * Accepts: { trackingId, customerName, email, address, items: ShoeItem[], total, date }
 * @param {Object} order
 * @returns {Object} result
 */
function validateAndSaveCheckout(order) {
    const { customerName, email, address, items, total } = order;

    // Validate customer name
    if (!customerName || customerName.trim().length < 3) {
        return { success: false, message: "Customer name must be at least 3 characters." };
    }
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
        return { success: false, message: "Valid email address is required." };
    }
    // Validate address
    if (!address || address.trim().length < 10) {
        return { success: false, message: "Shipping address must be at least 10 characters." };
    }
    // Validate cart items
    if (!items || !Array.isArray(items) || items.length === 0) {
        return { success: false, message: "Cart must contain at least one item." };
    }

    // Build the saved order record
    const savedOrder = {
        orderId: order.trackingId || ("ORD-" + Date.now().toString(36).toUpperCase()),
        timestamp: new Date().toISOString(),
        customerName: customerName.trim(),
        email: email.trim(),
        shippingAddress: address.trim(),
        items: items,
        totalAmount: total,
        status: "CONFIRMED"
    };

    // Append to orders.json
    const rawData = fs.readFileSync(ORDERS_FILE, 'utf8');
    const existingOrders = JSON.parse(rawData || '[]');
    existingOrders.push(savedOrder);
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(existingOrders, null, 2), 'utf8');

    console.log(`[CHECKOUT SAVED] Order #${savedOrder.orderId} written to orders.json for ${savedOrder.customerName}. Total: $${savedOrder.totalAmount}`);

    return {
        success: true,
        message: "Order placed and saved successfully on the server!",
        order: savedOrder
    };
}
