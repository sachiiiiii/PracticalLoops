/**
 * Part 1: Fizz Buzz
 */
console.log(`
Part 1: Fizz Buzz`)

for (num = 1; num <= 100; num++) {
    // if (num % 3 === 0 && num % 5 === 0) {
    //     console.log("Fizz Buzz")
    // }
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

