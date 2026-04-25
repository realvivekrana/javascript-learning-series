// 1. WAP to reverse a string .
//    sonam--> manos

// 2. Check weather the string is palindrome or not?
  
//     means string: Malayalam

//     if both are same then it's palindrome othervise it's not.

// 3. Take a sentence: johhny johhny yes papa...

//     convert each word first letter in capital

//     output: Johhny Johhny Yes Papa...

// 4. Take one word and check how many letters are there with its repeatation calculation
//    Malayalam
//    --m: 2
//    --a: 4
//    --l: 2
//    --y: 1



function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("sonam")); // manos




function isPalindrome(str) {
    const clean = str.toLowerCase();
    const reversed = clean.split('').reverse().join('');
    
    return clean === reversed;
}

console.log(isPalindrome("Malayalam")); // true



function capitalizeSentence(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(capitalizeSentence("johhny johhny yes papa"));
// Johhny Johhny Yes Papa



function charCount(str) {
    const obj = {};
    const lower = str.toLowerCase();

    for (let char of lower) {
        obj[char] = (obj[char] || 0) + 1;
    }

    return obj;
}

console.log(charCount("Malayalam"));