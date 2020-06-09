'use strick';

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



requestNewArr = function (cb) {
    let newArr;

    setTimeout (function() {
        cb(newArr);
    }, 1000)
    
};


requestUsers (function(users){
    console.log(users);

    requestCountries (function (countries) {
        console.log(countries);

        requestNewArr (function (arr) {
            let newArr = [];

            for (let i = 0; i < users.length; i++) {
                for (let el = 0; el < countries.length; el++) {
                    if (users[i].id === countries[el].userId) {
                        users[i].country = countries[el].country;
                        newArr.push(users[i]);
                    }
                }
            }
            console.log(newArr);
        });
    });
});



