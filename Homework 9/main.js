'use strict';

import { requestUsers, requestCountries   } from './main1.js';

let div = document.querySelector('div');
const requestInfo = {
    total: 2,
    done: 0,
    hasError: false
};
let users = [];
let countries = [];


function registerRequest(hasError) {
    requestInfo.done++;

    if (hasError) {
        requestInfo.hasError = true;
    }

    if(requestInfo.total === requestInfo.done) {
        printInfo(requestInfo.hasError);
    }
};

function printInfo(hasError){
    div.innerText = hasError 
     ? 'Error'
     : '!!!Bingo Bongo!!!';

    console.log(users);
    console.log(countries);
    
}

function createList() {
    return document.createElement('ul');
};

function createListItem({ fistName, lastName, country }) {
    const li = document.createElement('li');

    li.innerText = `${fistName} ${lastName}, ${country}`;
    return li;
};

function printHtml(arr) {
    const ul = createList();

    arr.forEach(function (el) {
        const li = createListItem(el);

        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

// requestUsers(
//     function(users) {
//     console.log(users);

//         requestCountries(
//             function (countries) {
//             console.log(countries);

//             const newArr = users.map(elem => {
//                 const { country } = countries.find(el => el.userId === elem.id);

//                 return {
//                     ...elem,
//                     country
//                 };
//             });
//             console.log(newArr);
//             printHtml(newArr);
//             },
//             function (error) {
//                 div.innerText = error.text;
//                 console.log(error);
//             }
//         )
//     },  
//     function(error) {
//         div.innerText = error.text;
//         console.log(error);
//     }
// );



requestUsers(
    function (u) {
        users = u;
        registerRequest(false);
    },
    function (error) {
        registerRequest(true);
    }
);


requestCountries(
    function (c) {
        countries = c;
        registerRequest(false);

        const newArr = users.map(elem => {
            const { country } = countries.find(el => el.userId === elem.id);

            return {
                ...elem,
                country
            };
        });
        console.log(newArr);
        printHtml(newArr);
    },
    function (error) {
        registerRequest(true);
    }
)