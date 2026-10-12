# Week 8 — AJAX / Fetch API to Load Text Data Asynchronously

## Aim
To implement asynchronous data loading in JavaScript using the modern Fetch API and Promises/`async-await` syntax to retrieve and display plain text from an external file (`store.txt`) without reloading the web page.

## Files Created
- `store.txt`: Plain text document containing store announcements, address, store hours, and discount promotions.
- `fetch-text.html`: Web page featuring fetch action buttons, loading/error banners, and preformatted text display area.

## Why a Local Server is Needed
Modern browsers enforce strict security rules (CORS - Cross-Origin Resource Sharing) that block `fetch()` or `XMLHttpRequest` when opening files via the `file:///` protocol. Running a lightweight local development server resolves this.

## How to Run / Test

### Method 1: Using Node.js npx serve (Recommended)
1. Open terminal inside the `EcommerceLab/week8/` folder:
   ```bash
   npx serve .
   ```
2. Open the URL printed in the terminal (usually `http://localhost:3000` or `http://localhost:5000`) and click `fetch-text.html`.

### Method 2: Using Python HTTP server
If Python is installed:
```bash
python -m http.server 8080
```
Open your browser to `http://localhost:8080/fetch-text.html`.

### Method 3: Using VS Code Live Server extension
Right-click `fetch-text.html` in VS Code and click **Open with Live Server**.

## Testing Steps
1. Click the button labeled **Fetch Store Info (store.txt)**.
2. Verify that the loading indicator appears briefly, followed by a green success banner.
3. Verify that the store announcements and promotional text appear inside the preformatted display box.
4. Click **Clear Output** to reset the display.

## Expected Output
- The contents of `store.txt` (SoleStride announcements, hours, BOGO promotion, return policy) populate asynchronously into the web page without page refresh.
