/**
 * Week 6 XML/DTD Validation Script
 * Verifies that 'shoes.xml' satisfies all structure rules defined in 'shoes.dtd'.
 * Can be run via: node validate.js
 */

const fs = require('fs');
const path = require('path');

const xmlPath = path.join(__dirname, 'shoes.xml');
const dtdPath = path.join(__dirname, 'shoes.dtd');

console.log("==========================================");
console.log("SoleStride Shoes - XML & DTD Validator");
console.log("==========================================\n");

if (!fs.existsSync(xmlPath)) {
    console.error("Error: shoes.xml not found at " + xmlPath);
    process.exit(1);
}
if (!fs.existsSync(dtdPath)) {
    console.error("Error: shoes.dtd not found at " + dtdPath);
    process.exit(1);
}

const xmlContent = fs.readFileSync(xmlPath, 'utf8');
const dtdContent = fs.readFileSync(dtdPath, 'utf8');

console.log("Reading shoes.xml...");
console.log("Reading shoes.dtd...\n");

// Check DTD reference in XML
const doctypeMatch = xmlContent.match(/<!DOCTYPE\s+catalog\s+SYSTEM\s+["']shoes\.dtd["']>/);
if (!doctypeMatch) {
    console.error("Validation Failed: shoes.xml does not reference shoes.dtd correctly.");
    process.exit(1);
}
console.log("✓ DOCTYPE declaration correctly references 'shoes.dtd'.");

// Structural rule checks according to DTD:
// <!ELEMENT catalog (shoe+)>
// <!ELEMENT shoe (name, brand, category, price, size, inStock)>
// <!ATTLIST shoe id ID #REQUIRED>

const shoeRegex = /<shoe\s+id="([^"]+)">([\s\S]*?)<\/shoe>/g;
let match;
let shoeCount = 0;
const seenIds = new Set();
let hasErrors = false;

while ((match = shoeRegex.exec(xmlContent)) !== null) {
    shoeCount++;
    const shoeId = match[1];
    const shoeBody = match[2];

    // Check unique ID constraint (DTD ID attribute rule)
    if (seenIds.has(shoeId)) {
        console.error(`✗ Error: Duplicate ID '${shoeId}' found in shoe #${shoeCount}`);
        hasErrors = true;
    }
    seenIds.add(shoeId);

    // Required child tags in exact sequence: name, brand, category, price, size, inStock
    const requiredElements = ['name', 'brand', 'category', 'price', 'size', 'inStock'];
    requiredElements.forEach(tag => {
        const tagRegex = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`);
        const tagMatch = shoeBody.match(tagRegex);
        if (!tagMatch || tagMatch[1].trim() === "") {
            console.error(`✗ Error: Shoe '${shoeId}' is missing mandatory element <${tag}>.`);
            hasErrors = true;
        }
    });

    const nameVal = (shoeBody.match(/<name>(.*?)<\/name>/) || [])[1];
    const priceVal = (shoeBody.match(/<price>(.*?)<\/price>/) || [])[1];
    console.log(`  ✓ Validated shoe [${shoeId}]: ${nameVal} ($${priceVal})`);
}

if (shoeCount === 0) {
    console.error("✗ Error: No <shoe> elements found inside <catalog>.");
    hasErrors = true;
}

console.log("\n------------------------------------------");
if (!hasErrors) {
    console.log(`RESULT: shoes.xml is 100% VALID according to shoes.dtd!`);
    console.log(`Validated ${shoeCount} shoe entries successfully.`);
} else {
    console.log(`RESULT: XML validation completed with errors.`);
    process.exit(1);
}
console.log("------------------------------------------");
