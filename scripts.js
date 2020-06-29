//prints numbers until (a)

let printNumbersTill = (a) => {
    for (let i = 0; i <= a; i++) {
        console.log(i);
    }
};

console.log(printNumbersTill(14));

//greetings

let getGreetingsTo = (name) => {
    return "Hello " + name + "!";
};

console.log(getGreetingsTo("Ivan"));


//prints an array

let printValues = (numbers) => {
    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index]);
    }
};

console.log(printValues([2, 3, 1, 5, 1231, 2]));

//prints an array with forEach

let myNumbers = [5, -3, 142, 3];

myNumbers.forEach((number) => {
    console.log(number);
})