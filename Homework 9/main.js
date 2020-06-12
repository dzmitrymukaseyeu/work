'use strict';

import { requestUsers, requestCountries   } from './main1.js';

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

requestUsers(function (users) {
    console.log(users);

    requestCountries(function (countries) {
        console.log(countries);


        const newArr = users.map(elem => {
            const { country } = countries.find(el => el.userId === elem.id);

            return {
                ...elem,
                country
            };
        });
        console.log(newArr);

        printHtml(newArr);
    });
});

