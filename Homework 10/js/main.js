'use strict';

let arrMale = [];
let arrFemale = [];

const requestForUser = function(succes, error, url) {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', "https://randomuser.me/api/?results=3" + url);

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status < 300) {
                succes(JSON.parse(xhr.response));
            } else {
                error({
                    code: xhr.status,
                    message: xhr.responseText
                })
            };
        };
    };

    xhr.send();
};


requestForUser(
    function ({ results }){
        arrMale = results;
        console.log(arrMale);
        if(arrMale.length && arrFemale.length){
            AllUsers();        
        };
    },
    function(error) {
    console.log(error);   
    },
    '&gender=male'
);

requestForUser(
    function ({results}) {
        arrFemale = results
        console.log(arrFemale);
        if (arrMale.length && arrFemale.length) {
            AllUsers();
        };

    },
    function (error) {
        console.log(error);
    },
    '&gender=female'
);

function AllUsers () {
    const div = document.createElement('div')
    const ul = document.createElement('ul');
    let arrAllUsers = arrMale.concat(arrFemale);

    div.classList.add('conteiner');
    ul.classList.add('outer');

    console.log(arrAllUsers);

    arrAllUsers.forEach(function(item) {
        const li = document.createElement('li');
        li.classList.add('user');
        li.innerHTML = `
            <div class="user__inner">
                <img src="${item.picture.large}" alt="user img">
                <div class="user__inner-info">
                    <h3>${item.name.title} ${item.name.first} ${item.name.last}</h3>
                    <p>${item.email}</p>
                </div>
            </div>
        `;
        div.appendChild(ul);
        ul.appendChild(li);
        document.body.appendChild(div);
        })
};











// requestForUser(
//     function (male) {
//         console.log(male);
        
//         requestForUser(
//             function (female) {
//                 console.log(female);
//             },
//             function (error) {
//                 console.log(error);
//             },
//             '&gender=female'
//         );
//     },
//     function (error) {
//         console.log(error);
//     },
//     '&gender=male'
// );