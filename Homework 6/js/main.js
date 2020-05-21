var body = document.body;
var colors = [];
var obj = {
    field1: 1,
    field2: 'summer',
    field3: true,
    field4: ['#00bcd4', ' #ffc107', '#2196f3'],
    field5: false
};
var counter = 0;
var btnColor = document.querySelector('button');

btnColor.addEventListener('click', function () {
    if(!colors.length) {
        for(var prop in obj) {
            if (obj[prop] instanceof Array) {
                colors = obj[prop];
            };
        };
    };
    
    counter = Math.floor(Math.random() * (colors.length));
    body.style.backgroundColor = colors[counter];

});

body.addEventListener('keydown', function (e) {
    var isLeftKey = e.code === 'ArrowLeft';
    var isRightKey = e.code === 'ArrowRight';

    if ((isLeftKey || isRightKey) && !colors.length) {
        alert ('Загрузите массив, пожалуйста!');
    };
    
    if (isRightKey && counter < colors.length - 1){
        body.style.backgroundColor = colors[++counter];

    } else if (isRightKey && counter === colors.length - 1) {
        counter = 0
        body.style.backgroundColor = colors[counter];
    };

    if (isLeftKey && counter <= colors.length - 1 && counter > 0) {
        body.style.backgroundColor = colors[--counter];

    } else if (isLeftKey && counter <= 0 ) {
        counter = colors.length - 1;
        body.style.backgroundColor = colors[counter];
    };

});





