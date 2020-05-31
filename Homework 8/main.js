'use strict' ;

// task 1 

function getName(name) {
    if (!name) {
        console.log('Hello, %username%');
    } else {
    console.log(`Hello, ${name}`);
    };
};

getName();
getName('Dima');


// task 2 

const arr = [
    {
        city: 'New York',
        country: 'USA'
    },
    {
        city: 'Paris',
        country: 'France'
    },
    {
        city: 'San Francisco',
        country: 'USA'
    },
    {
        city: 'Minsk',
        country: 'Belarus'
    }
];


// task 3 

let arr1 = [1, 2 , 3 , 3232323, -20];

console.log(`Минимальный элемент массива (синтксис ES5): ${Math.min.apply(null,arr1)}`);
console.log(`Максимальный элемент массива (синтаксис ES6): ${Math.max(...arr1)}`);

// task 4 

function sum (arg1, arg2) {
    return arg1 + arg2;
}

function carr (f) {
    return function(a) {
        return function(b){
            return f(a, b);
        }
    }
}

let carriedSum = carr(sum);
console.log(carriedSum(5)(2));



// task 7 


const obj = {
    fistName: 'Yura',
    lastName: 'Alekseyev',
    job: 'web developer',

    printInfo: function () {
        console.log(`${this.fistName} ${this.lastName} works as ${this.job}.`)
    }
};

const obj1 = {
    fistName: 'John',
    lastName: 'Kalligan',
    job: 'musician'
};



obj.printInfo.call(obj1);