var bod = document.body;
var btn = document.querySelector('._toggle');
var clickHandler = function() {

    bod.classList.toggle('_color-scheme-light');

};

btn.addEventListener('click', clickHandler);


(function (num) {
    var tx = document.getElementsByClassName('l-tasks__item-text')[0];
    if (typeof num === 'number') {
        if (num % 2 === 0) {
            tx.innerText = `Number ${num} is even`;
        }
        else {
            tx.innerText = `Number ${num} is odd`;
        }
    }
    else {
        tx.innerText = 'This is not a number';
    }
})(4);


var elem = document.getElementsByClassName('l-tasks__span');
var btn = document.querySelector('._remove');

var clickHandler = function() {  

    if (bod.classList.contains('_color-scheme-light')){
        elem[0].remove();
    }
    else {
        elem[--elem.length].remove();
    };

    btn.removeEventListener('click', clickHandler);
};

btn.addEventListener('click', clickHandler);
