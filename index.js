/**
 * Part 1: Fizz Buzz
 */
console.log(`
Part 1: Fizz Buzz`)

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
for (num = 1; num <= 100; num++) {
    switch (true) {
        case (num % 3 === 0 && num % 5 === 0):
            console.log("Fizz Buzz");
            break;

        case (num % 3 === 0):
            console.log("Fizz");
            break;

        case (num % 5 === 0):
            console.log("Buzz");
            break;

        default:
            console.log(num)
            break;
    }
}

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

/**
 * Part 3: Feeling Loopy
 */
console.log(`
Part 3: Feeling Loopy`)

const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let cell = "";

let tableString = "";
let rowString = "";

for (const char of csvString) {
    if (char === ",") {
        rowString += `${cell}${char} `;
        cell = "";
    } else if (char === "\n") {
        rowString += cell;
        tableString = `${rowString}`;
        rowString = "";
        cell = "";
        console.log(tableString)
    } else { 
        cell += char;
    }
}

// I couldn't figure out a way to get the last row and the last cell in that row to be logged to console within the for of loop.
console.log(rowString + cell)