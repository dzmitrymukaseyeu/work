//  Task1

var arr = [1, 'two', false, 23];
var NewArr = arr.slice();


// Task2

var obj = {
    field1: 1,
    field2: 'Hi',
    field3: true
};
var newObj = {};

for (var prop in obj) {
    newObj[prop] = obj[prop];
};

// Task3

function printSquareRoot(num, func) {
    func(num)
};

function func(num) {
    console.log(Math.sqrt(num));
};

printSquareRoot(4, func);

// Task4 
function outer() {
    var arr = [];

    function inner(arg) {
        arr.push(arg);
        console.log(arr);

        if (arr.length === 5) {
        arr = [];
        };

    };
    return inner;
}
var getCounter = outer();
getCounter(1);
getCounter(2);
getCounter(3);
getCounter(4);
getCounter(5);
getCounter(6);
getCounter(7);
getCounter(8);
getCounter(9);
getCounter(10);

// Task5 


var btn = document.querySelector('button');

    function sumClick() {
        var count = 0;
    return function (e) {
            e.currentTarget.innerText = 'Количество нажитий: '+ ++count;                
        };
    };

var clicer = sumClick();

btn.addEventListener('click', clicer);
