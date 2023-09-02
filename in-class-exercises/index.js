// Exercise 1

console.groupCollapsed('EXERCISE 1:');
console.log('See alerts');

    function greet() {
        let name = prompt('What is your name?');

        if (name == '' || name == null) {
            alert('Hi there!');
        } else {
            alert('Hello, ' + name + '!');
        }
    }

    greet();

console.groupEnd();

// Exercise 2

console.groupCollapsed('EXERCISE 2:');

    function multiply(num1, num2) {
        console.log(num1 * num2);
    }

    multiply(2, 4);
    multiply(6, 3);
    multiply(0, 1);

console.groupEnd();

// Exercise 3

console.groupCollapsed('EXERCISE 3:');

    let person = {
        name: 'Bob',
        age: '42',
        gender: 'male',
    };

    console.log(person);

console.groupEnd();

// Exercise 4

console.groupCollapsed('EXERCISE 4:');

    let car = {
        make: 'Honda',
        model: 'Accord',
        year: 2007,
    };

    console.log(car);

console.groupEnd();

// Exercise 5

console.groupCollapsed('EXERCISE 5:');

    function reverseString(string) {
        return string.split('').reverse().join('');
    }

    console.log(reverseString('potato'));
    console.log(reverseString('Alabama'));

console.groupEnd();

// Exercise 6

console.groupCollapsed('EXERCISE 6:');

    function calculateRadius(r) {
        let area = Math.pow((Math.PI * r), 2); 
        return area;
    }

    console.log(calculateRadius(4));

console.groupEnd();

// Exercise 7

console.groupCollapsed('EXERCISE 7:');

    console.log(new Date());

console.groupEnd();

// Exercise 8

console.groupCollapsed('EXERCISE 8:');

    console.log(Math.ceil(Math.random() * 10));

console.groupEnd();

// Exercise 10

console.groupCollapsed('EXERCISE 10');

    function tellStory(noun) {
        console.log(`There once was a ${noun}. The ${noun} was very happy. The end.`);
    }

    tellStory('potato');

console.groupEnd();

// Exercise 11

console.groupCollapsed('EXERCISE 11:');
console.log('Click the button');
console.groupEnd();

    let user = {
        name: 'Billy',
        age: 42,
        occupation: 'rock climber',
    }

    function printUserInfo() {
        console.groupCollapsed('EXERCISE 11 CONTINUED:');

        for (const property in user) {
            console.log(`${property}: ${user[property]}`);
        }

        console.groupEnd();
    }

// Exercise 12

console.groupCollapsed('EXERCISE 12:');

    function keysAndValues(object) {
        const sortedObject = sortKeys(object);
        return keyAndValueArrays(sortedObject);
    }

    function sortKeys(object) {
        return Object.keys(object)
            .sort()
            .reduce((result, key) => {
                result[key] = object[key];
                return result;
            }, {});
    }

    function keyAndValueArrays(sortedObject) {
        let keys = [];
        let values = [];

        for (const key in sortedObject) {
            keys.push(key);
            values.push(sortedObject[key])
        };

        return [keys, values];
    }

    console.log(keysAndValues({ a: 1, b: 2, c: 3 })) // [['a', 'b', 'c'], [1, 2, 3]]
    console.log(keysAndValues({ a: 'Apple', c: 'Google', b: 'Microsoft' })) // [['a', 'b', 'c'], ['Apple', 'Microsoft, 'Google']]
    console.log(keysAndValues({ key3: undefined, key1: true, key2: false  })) // [['key1', 'key2', 'key3'], [true, false, undefined]]

console.groupEnd();

// Exercise 13

console.groupCollapsed('EXERCISE 13:');

    function reverseWords(string) {
        string.trim();
        return string.split(' ').reverse().join(' ');
    }

    console.log(reverseWords('happy to be alive'));
    console.log(reverseWords('Someday My Prince Will Come'));
    console.log(reverseWords('Can you hear me now?'));

console.groupEnd();

// Exercise 14

function balancedParentheses(string) {
    let stack = [];
    let stringArray = string.split('');

    for (let item in stringArray) {
        if (item == '(' || item == '[' || item == '{') {
            stack.push(item);
        } else if (item == ')' || item == ']' || item == '}') {
            if (stack.length == 0) {
                return 'not balanced';
            }

            let topItem = stack.pop();

            if ((item == ')' && topItem != '(') || (item == ']' && topItem != '[') || (item == '}' && topItem != '{')) {
                return 'not balanced';
            }
        }
        return (stack.length == 0) ? 'balanced' : 'not balanced';
    }
}

console.log(balancedParentheses('()[]{}'));
console.log(balancedParentheses('([{}])'));
console.log(balancedParentheses('()[(())]{)}'));

// Exercise 15

// Exercise 16

function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i);
        }
    }
}

// Exercise 17

// Exercise 18

