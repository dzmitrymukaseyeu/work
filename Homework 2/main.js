var myArr1 = ['dima','dasha','pasha'];

//task 1
myArr1.unshift('sasha');
console.log(myArr1);


// task 2
myArr1.push('tasha');
console.log(myArr1);


// task 3 
delete myArr1[2];
console.log(myArr1);


myArr1.splice(0,3);
console.log(myArr1);


// task 4
var a = [1, 2, 2, 4];
var t = [];

for (var i = 0; i < a.length; i++) {
    if (t.indexOf(a[i]) === -1) {
        t.push(a[i]);
    };
};
console.log(t);


// task 5
var myArr3 = [1,2,9,12,'five','six','tomatoes','potatoes'];


for (var i = 0; i < myArr3.length; i++) {
    var c = myArr3[i];

    if (typeof c === 'number' && c > 7) {
        console.log(i + ' - ' + c);
    }
};

// task 6
for (var i = 0; i < myArr3.length; i++) {
    var d = myArr3[i];

    if (typeof d === 'string' && d.length > 5) {
        console.log(i + ' - ' + d);
    };
};

// task 7 

var myArr4 = [10, 456, 'world', 'ball', false];


for (var i = 0; i < myArr4.length; i++) {
    var b = myArr4[i];

    if (typeof b === 'string') {
        console.log('This is sting - ' + b);
    }
    else if (typeof b === 'number') {
        console.log('This is number - ' + b);
    }
    else {
        console.log('This is some type - ' + b);
    };
};



// task 8 

var myArr5 = [
    {
        id: 1,
        message: 'Test',
        isHidden: false
    },
    {
        id: 2,
        message: 'Test2',
        isHidden: true
    },
    {
        id: 3,
        message: 'Test3',
        isHidden: false
    },
    {
        id: 4,
        message: 'Test4',
        isHidden: true
    },
];


for (var i = 0; i < myArr5.length; i++) {
    if (myArr5[i].isHidden !== true) {
        console.log('message - ' + myArr5[i].message);
    }
};




// task 9
var arr = [{ title: 'fdfkdlfksdl' }, { title: 'gkdgkfggkl' }];
var newArr = [];



for (var i = 0; i < arr.length; i++) {

    var value = arr[i];

    value.titleUppercased = value.title.toUpperCase();
    newArr.push(value);

}

console.log(newArr);


// task 10

var myArr6 = ['winter','summer','autumn','spring','column'] ;

for (var i = 0; i < myArr6.length; i++) {
    if (myArr6[i].indexOf('u') > -1) {
        console.log(myArr6[i])
    };
    
};


//task 11 
var arr11 = [1, 2, 3, 4, 5];

for (var i = 0; i < arr11.length; i++) {
    if (arr11[i] % 2 === 0) {
        console.log('Это четное число - ' + arr11[i])
    }
    else {
        console.log('Это нечетное число - ' + arr11[i]);
    };
};


// task 12

function myFunc1(num) {
    return num * num;
};


function myFunc2(func) {
    var arr12 = [];

    arr12.push(func(8));

    return arr12;
};

console.log(myFunc2(myFunc1));





