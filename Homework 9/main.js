'use strict';

const requestUsers = function(cb) {
    const users = [
        {
            id: 1,
            fistName: 'Chloe',
            lastName: 'Snyder'
        },
        {
            id: 44,
            fistName: 'Valdemar',
            lastName: 'Larsen'
        },
        {
            id: 342,
            fistName: 'Curtis',
            lastName: 'Garza'
        },
        {
            id: 2,
            fistName: 'Sedef',
            lastName: 'Sezek'
        },
        {
            id: 24,
            fistName: 'Emile',
            lastName: 'Taylor'
        }
    ];

    setTimeout(function () {
        cb(users);
    }, 1000);
};

const requestCountries = function (cb) {   
    const countries = [
        {
            userId: 44,
            country: 'Germany'
        },
        {
            userId: 1,
            country: 'Canada'
        },
        {
            userId: 342,
            country: 'Brazil'
        },
        {
            userId: 24,
            country: 'Denmark'
        },
        {
            userId: 2,
            country: 'Ireland'
        }
    ];

    setTimeout(function () {
        cb(countries);
    }, 1000);
}





function createList() {
    return document.createElement('ul');   
};

function createListItem(text1, text2, text3) {
  const li = document.createElement('li');
  li.innerText = `fistName: ${text1} , lastName: ${text2} , country: ${text3}`;
  return li;
};

requestUsers(function (users) {
    console.log(users);

    requestCountries(function (countries) {
        console.log(countries);
        let newArr = [];

        for (let i = 0; i < users.length; i++) {
            for (let prop of countries) {
                if (prop.userId === users[i].id) {
                    users[i].country = prop.country;
                    newArr.push(users[i]);
                };
            };
        };
            console.log(newArr);

        newArr.forEach(function (el) {
            const ul = createList();
            const li = createListItem(el.fistName, el.lastName, el.country);
            ul.appendChild(li);
            document.body.appendChild(ul);
        });
    });
});





