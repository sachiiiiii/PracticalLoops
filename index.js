// /**
//  * Part 1: Fizz Buzz
//  */
// console.log(`
// Part 1: Fizz Buzz`)

// // Loop through all numbers from 1 to 100.
// // If a number is divisible by 3, log “Fizz.”
// // If a number is divisible by 5, log “Buzz.”
// // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// // If a number is not divisible by either 3 or 5, log the number.
// for (num = 1; num <= 100; num++) {
//     switch (true) {
//         case (num % 3 === 0 && num % 5 === 0):
//             console.log("Fizz Buzz");
//             break;

//         case (num % 3 === 0):
//             console.log("Fizz");
//             break;

//         case (num % 5 === 0):
//             console.log("Buzz");
//             break;

//         default:
//             console.log(num)
//             break;
//     }
// }

/**
 * Part 2: Prime Time
 */
console.log(`
Part 2: Prime Time`)

const n = 829;
let divisibleBySelf = true;
let divisibleByOne = true;
let OtherMultiples = 0;

let nextPrimeNum = n + 1;
while (n > 1) {
    for (i = n; i > 1; i--) {
        if (nextPrimeNum % i === 0) {
            OtherMultiples++;
        }
    }
    if (divisibleByOne && divisibleBySelf && OtherMultiples === 0) {
        console.log(nextPrimeNum);
        break;
    } else {
        nextPrimeNum++;
        OtherMultiples = 0;
    }
}

// for (i = n; i > 1; i--) {
//     if (nextPrimeNum % i === 0) {
//         OtherMultiples++;
//     }
// }
// if (divisibleByOne && divisibleBySelf && OtherMultiples === 0) {
//     console.log(nextPrimeNum);
//     break;
// } else {
//     nextPrimeNum++;
//     OtherMultiples = 0;
// }