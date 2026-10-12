"use strict";
// =============================================================================
// SoleStride Shoes - TypeScript Classes, Interfaces, and Functions (Week 11 Lab)
// =============================================================================
/**
 * Class representing a Shoe, implementing the Product interface.
 */
class Shoe {
    /**
     * Constructor to initialize a Shoe instance
     */
    constructor(id, name, brand, category, price, inStock, sizes) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.inStock = inStock;
        this.sizes = sizes;
    }
    /**
     * Method returning formatted summary details of the shoe
     */
    getDetails() {
        const stockStatus = this.inStock ? "In Stock" : "Out of Stock";
        return `[#${this.id}] ${this.brand} - ${this.name} | Category: ${this.category} | Price: $${this.price.toFixed(2)} | Status: ${stockStatus}`;
    }
    /**
     * Method to calculate discount and return final price
     * @param discountPercent - Percentage discount (e.g. 15 for 15%)
     * @returns Final discounted price
     */
    applyDiscount(discountPercent) {
        if (discountPercent < 0 || discountPercent > 100) {
            throw new Error("Discount percentage must be between 0 and 100.");
        }
        const discountAmount = (this.price * discountPercent) / 100;
        const finalPrice = this.price - discountAmount;
        return finalPrice;
    }
}
/**
 * Independent helper function to display complete product invoice & discount details
 * @param shoe - Instance of Shoe class
 * @param discountPercent - Discount rate to apply
 */
function displayProductInvoice(shoe, discountPercent = 0) {
    console.log("----------------------------------------------------------------");
    console.log(shoe.getDetails());
    console.log(`Available Sizes (US): [${shoe.sizes.join(", ")}]`);
    if (discountPercent > 0) {
        const discountedPrice = shoe.applyDiscount(discountPercent);
        const savedAmount = shoe.price - discountedPrice;
        console.log(`Original Price  : $${shoe.price.toFixed(2)}`);
        console.log(`Discount Applied: ${discountPercent}% (-$${savedAmount.toFixed(2)})`);
        console.log(`Final Price     : $${discountedPrice.toFixed(2)}`);
    }
    else {
        console.log(`Final Price (No Discount): $${shoe.price.toFixed(2)}`);
    }
    console.log("----------------------------------------------------------------");
}
// =============================================================================
// Driver Code / Execution Demonstration
// =============================================================================
console.log("================================================================");
console.log("   SOLESTRIDE SHOES - TYPESCRIPT PRODUCT CATALOG REPORT");
console.log("================================================================\n");
// Instantiating shoe objects
const shoe1 = new Shoe(101, "Air Zoom Pegasus 40", "Nike", "Running", 130.00, true, [8, 8.5, 9, 9.5, 10, 11]);
const shoe2 = new Shoe(102, "Ultraboost Light", "Adidas", "Running / Lifestyle", 190.00, true, [7.5, 8.5, 9.5, 10.5]);
const shoe3 = new Shoe(103, "Smash V2 Classic Sneaker", "Puma", "Casual", 55.00, true, [7, 8, 9, 10]);
const shoe4 = new Shoe(104, "Heritage 6-Inch Waterproof Boot", "Timberland", "Outdoor Boot", 210.00, false, [8, 9, 10, 11, 12]);
// Displaying shoe details with varying discount percentages
displayProductInvoice(shoe1, 20); // 20% discount on Nike
displayProductInvoice(shoe2, 15); // 15% discount on Adidas
displayProductInvoice(shoe3, 0); // No discount on Puma
displayProductInvoice(shoe4, 25); // 25% discount on Timberland
