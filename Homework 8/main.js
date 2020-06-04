'use strict' ;

// task 1 

function getName(name = '%username%') {
    console.log(`Hello, ${name}`);
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

let newObj = arr.reduce(function(acc,item) {
    item.country.toLowerCase() === 'usa' ? acc.usa.push(item.city) : acc.europe.push(item.city);
    return acc;

},{
  usa: [],
  europe: []
});

console.log(newObj);



// task 3 

let arr1 = [1, 2 , 3 , 3232323, -20];

console.log(`Минимальный элемент массива (синтксис ES5): ${Math.min.apply(null,arr1)}`);
console.log(`Максимальный элемент массива (синтаксис ES6): ${Math.max(...arr1)}`);

// task 4 

function sum (arg1, arg2) {
    return arg1 + arg2;
};

let carriedSum = sum.bind(null, 10);
console.log(carriedSum(2));

// task 5 

function setNum (arg) {
    return {
        plus: function (arg1) {
            arg += arg1;
            return this;
        },
        minus: function (arg1) {
            arg -= arg1;
            return this;
        },
        showNum: function() {
            console.log(arg);
            return this;
        }      
    }
}

setNum(10).plus(7).minus(2).showNum();




// test 6 

let { usa, europe } = newObj;
console.log(usa, europe);

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