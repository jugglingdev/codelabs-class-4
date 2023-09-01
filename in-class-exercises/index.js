// Exercise 1
function greet() {
    let name = prompt('What is your name?');
    alert('Hello, ' + name + '!');
}

greet();

// Exercise 2
function multiply(num1, num2) {
    console.log(num1 * num2);
}

multiply(2, 4);
multiply(6, 3);
multiply(0, 1);

// Exercise 3
let person = {
    name: 'Bob',
    age: '42',
    gender: 'male',
};

console.log(person);

// Exercise 4

let car = {
    make: 'Honda',
    model: 'Accord',
    year: 2007,
};

console.log(car);

// Exercise 5

function reverseString(string) {
    return string.split('').reverse().join('');
}

console.log(reverseString('potato'));
console.log(reverseString('Alabama'));

// Exercise 6

function calculateRadius(r) {
    let area = Math.pow((Math.PI * r), 2); 
    return area;
}

calculateRadius(4);

// Exercise 7

console.log(new Date());

// Exercise 8

console.log(Math.ceil(Math.random() * 10));

// Exercise 10

function tellStory(noun) {
    console.log(`There once was a ${noun}.  The ${noun} was very happy.  The end.`);
}

tellStory('potato');

// Exercise 11

let user = {
    name: 'Billy',
    age: 42,
    occupation: 'rock climber',
}

function printUserInfo() {
    for (const property in user) {
        console.log(`${property}: ${user[property]}`);
    }
}

// Exercise 12

function keysAndValues(object) {
    let keys = [];
    let values = [];

    for (const key in object) {
        keys.push(key);
        values.push(object[key])
    };

    return { keys, values };
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 })) // [['a', 'b', 'c'], [1, 2, 3]]

console.log(keysAndValues({ a: 'Apple', b: 'Microsoft', c: 'Google' })) // [['a', 'b', 'c'], ['Apple', 'Microsoft, 'Google']]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined })) // [['key1', 'key2', 'key3'], [true, false, undefined]]

// Exercise 13

function reverseWords(string) {
    string.trim();
    return string.split(' ').reverse().join(' ');
}

reverseWords('happy to be alive');
reverseWords('Someday My Prince Will Come');
reverseWords('Can you hear me now?');

// Exercise 14

// function balancedParentheses(string) {

// }

// Exercise 15

// Exercise 16

// Exercise 17

// Exercise 18

