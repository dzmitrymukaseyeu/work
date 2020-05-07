var body = document.body;
var btnToogle = document.querySelector('.l-tasks__btn._toggle');
var spansArr = document.getElementsByClassName('l-tasks__span');
var btnRemove = document.querySelector('.l-tasks__btn._remove');
var onToggleScheme = function() {
    body.classList.toggle('_color-scheme-light');
};
var onRemoveSpan = function () {
    if (body.classList.contains('_color-scheme-light')) {
        spansArr[0].remove();
    }
    else {
        spansArr[--spansArr.length].remove();
    };
    btnRemove.removeEventListener('click', onRemoveSpan);
};

btnRemove.addEventListener('click', onRemoveSpan);
btnToogle.addEventListener('click', onToggleScheme);

(function (num) {
    var tx = document.getElementsByClassName('l-tasks__item-text')[0];
    if (typeof num === 'number') {
        if (num % 2 === 0) {
            tx.innerText = 'Number '+ num +' is even';
        }
        else {
            tx.innerText = 'Number ' + num + ' is odd';
        }
    }
    else {
        tx.innerText = 'This is not a number';
    }
})(4);


