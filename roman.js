 function convertToRoman(num) 
 {
    // Step 1: Define an array of Roman numeral symbols and their corresponding values
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    // Step 2: Initialize an empty string to store the Roman numeral representation
    let romanStr = '';

    // Step 3: Loop through the Roman numeral symbols
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            romanStr += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }

    // Step 4: Return the final Roman numeral string
    return romanStr;
}

// Test the function
console.log(convertToRoman(2));    // Output: II
console.log(convertToRoman(3));    // Output: III
console.log(convertToRoman(4));    // Output: IV
console.log(convertToRoman(5));    // Output: V
console.log(convertToRoman(9));    // Output: IX
console.log(convertToRoman(12));   // Output: XII
console.log(convertToRoman(16));   // Output: XVI
console.log(convertToRoman(29));   // Output: XXIX
console.log(convertToRoman(44));   // Output: XLIV
console.log(convertToRoman(45));   // Output: XLV
console.log(convertToRoman(68));   // Output: LXVIII
console.log(convertToRoman(83));   // Output: LXXXIII
console.log(convertToRoman(97));   // Output: XCVII
console.log(convertToRoman(99));   // Output: XCIX
console.log(convertToRoman(400));  // Output: CD
console.log(convertToRoman(500));  // Output: D
console.log(convertToRoman(501));  // Output: DI
console.log(convertToRoman(649));  // Output: DCXLIX
console.log(convertToRoman(798));  // Output: DCCXCVIII
console.log(convertToRoman(891));  // Output: DCCCXCI
console.log(convertToRoman(1000)); // Output: M
console.log(convertToRoman(1004)); // Output: MIV
console.log(convertToRoman(1006)); // Output: MVI
console.log(convertToRoman(1023)); // Output: MXXIII
console.log(convertToRoman(2014)); // Output: MMXIV
console.log(convertToRoman(3999)); // Output: MMMCMXCIX

console.log(convertToRoman(0));