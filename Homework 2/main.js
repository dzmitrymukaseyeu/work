var myArr1 = ['dima','dasha','pasha'];

//task 1

myArr1.unshift('sasha');

console.log(myArr1);


// task 2

myArr1.push('tasha');

console.log(myArr1);


// task 3 

delete myArr1 [2];

console.log(myArr1);


myArr1.splice(0,3);

console.log(myArr1);




myArr1.push('pasha');
var a = [1,2,2,4];


// task 5
var myArr3 = [1,2,9,12,'five','six','tomatoes','potatoes'];
var a = myArr3;

for (var i = 0; i < a.length; i++) {
    if (typeof a[i] === 'number' && a[i] > 7) {
     console.log(i + '-' + a[i]);
    }
}

// task 6
for (var i = 0; i < a.length; i++) {
    if (typeof a[i] === 'string' && [i] > 5) {
        console.log(i + '-' + a[i]);
    }
};

// task 7 

var myArr4 = [10, 456, 'world', 'ball', false];
var b = myArr4;

for (var i = 0; i < b.length; i++) {
    if (typeof b[i] === 'string') {
        console.log('This is sting- ' + b[i]);
    }
    else if (typeof b[i] === 'number') {
        console.log('This is number- ' + b[i]);        
    }
    else {
        console.log('This is some type- ' + b[i]);
    };
};
