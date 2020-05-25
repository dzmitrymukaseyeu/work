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



// Task5 


var btn = document.querySelector('button');
var count = 0;

btn.addEventListener('click', function(e) {
    if (e.target.tagName.toLowerCase() === 'button') {

        function sumClick () {
            return function() {
                return ++count;
            };
        };
        var clicer = sumClick();
        btn.innerText = 'Количество нажатий: ' + clicer();
    };

});
