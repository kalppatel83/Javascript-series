// Here operators means + - / * %

var num1 = 4;
var num2 = 5;

// console.log(num1 + num2);

var answer = num1 > num2;
// console.log(answer);

// TODO: write a program to calculate discount
// Formula D = (L - S)/L * 100

var listingPrice = 799;
var sellingPrice = 199;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(`Discount Percentage is: ${discountPercent}`);

var displayDiscountPercent = Math.round(discountPercent);

console.log(`${displayDiscountPercent}% off`);
