var body = document.body;
var form = document.querySelector('.f-default');
var formButton = document.querySelector('.f-default__btn');

form.addEventListener ('submit', function (e) {
    e.preventDefault();

    var emailValue = e.target.elements.email.value;
    var passwordValue = e.target.elements.password.value;

    if (!emailValue || !passwordValue) {
        alert('!!!!Заполните поля!!!!');
    } else if (passwordValue.length < 10) {
        alert('!!!!!Пароль должен быть длинее 10 символов!!!!');
    };
});

formButton.addEventListener('click', function (e) {
    e.stopPropagation();
});

body.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    console.log('BODY_1');
});

body.addEventListener('click', function (e) {
    console.log('BODY_2');
});

body.addEventListener('click', function (e) {
    console.log('BODY_3');
});