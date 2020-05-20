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
    i = Math.floor(Math.random() * (colors.length));
    counter = i;
    if(!colors.length) {
        for(var prop in obj) {
            if (obj[prop] instanceof Array) {
                colors = obj[prop];
            };
        };
    };
    body.style.backgroundColor = colors[i];

});

body.addEventListener('keydown', function (e) {
    

    if ((e.code === 'ArrowRight' && colors.length === 0) || (e.code === 'ArrowLeft' && colors.length === 0)) {
        alert ('Загрузите массив');
    };

    if (e.code === 'ArrowRight' && counter < colors.length - 1){
        body.style.backgroundColor = colors[++counter];

    } else if (e.code === 'ArrowRight' && counter === colors.length - 1) {
        counter = 0
        body.style.backgroundColor = colors[counter];
    };


    if (e.code === 'ArrowLeft' && counter <= colors.length - 1 && counter > 0) {
        body.style.backgroundColor = colors[--counter];

    } else if (e.code === 'ArrowLeft' && counter <= 0 ) {
        counter = colors.length - 1;
        body.style.backgroundColor = colors[counter];
    }

});





