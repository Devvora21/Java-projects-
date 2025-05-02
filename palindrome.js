
function palindrome(str) 
{
  // Step 1: Normalize the string
    // Convert to lowercase and remove all non-alphanumeric characters
    var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Step 2: Check if the string is equal to its reverse
    var reversedStr = cleanStr.split('').reverse().join('');
    
    // Step 3: Return true if it's a palindrome, false otherwise
    return cleanStr === reversedStr;
}

// Testing the function
console.log(palindrome("eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /-\\ :) 0-0")); // true
console.log(palindrome("five|\\_/|four")); // false
