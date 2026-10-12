# Week 6 — XML File to Display Shoe Information and DTD Validation

## Aim
To store structured shoe catalogue data in an XML file (`shoes.xml`) and enforce grammar, element hierarchy, and attribute validity using an external Document Type Definition file (`shoes.dtd`).

## Files Created
- `shoes.dtd`: External DTD schema specifying:
  - Root element `<!ELEMENT catalog (shoe+)>`.
  - Child elements in exact order `<!ELEMENT shoe (name, brand, category, price, size, inStock)>`.
  - Required unique ID attribute `<!ATTLIST shoe id ID #REQUIRED>`.
- `shoes.xml`: XML dataset containing 4 shoe items properly referencing `<!DOCTYPE catalog SYSTEM "shoes.dtd">`.
- `validate.js`: Node.js script that parses and validates `shoes.xml` against all rules in `shoes.dtd`.

## Prerequisites
- Node.js (already installed) or an XML validating tool like `xmllint`.

## How to Run / Test

### Option 1: Using the provided Node.js validator
Open terminal in the `week6` directory and run:
```bash
node validate.js
```

### Option 2: Using xmllint (if installed on your system)
```bash
xmllint --noout --dtdvalid shoes.dtd shoes.xml
```

### Option 3: Viewing in a Web Browser
Double-click `shoes.xml` or open it in Google Chrome/Edge/Firefox. The browser displays the well-formed XML tree with elements color-coded.

## Expected Output
```text
==========================================
SoleStride Shoes - XML & DTD Validator
==========================================

Reading shoes.xml...
Reading shoes.dtd...

✓ DOCTYPE declaration correctly references 'shoes.dtd'.
  ✓ Validated shoe [s101]: Nike Air Zoom Pegasus 40 ($130.00)
  ✓ Validated shoe [s102]: Adidas Ultraboost Light ($190.00)
  ✓ Validated shoe [s103]: Puma Smash V2 Classic ($55.00)
  ✓ Validated shoe [s104]: Timberland Heritage Boot ($210.00)

------------------------------------------
RESULT: shoes.xml is 100% VALID according to shoes.dtd!
Validated 4 shoe entries successfully.
------------------------------------------
```
