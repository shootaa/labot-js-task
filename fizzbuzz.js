

for (let number = 1; number <= 100; number++) {
    if (number % 15 !== 0) {

        if (number % 3 === 0) {
            console.log("Fizz");
        } else if (number % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(number);
        }
    }
    else  {
        console.log("FizzBuzz");
    }
}









