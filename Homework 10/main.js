'use strict';


const requestForUser = function(succes, error, url) {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', "https://randomuser.me/api/?results=3&gender" + url);

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
    function(male){
        console.log(male);
    },
    function(error) {
    console.log(error);   
    },
    "=male"
);

requestForUser(
    function (female) {
        console.log(female);
    },
    function (error) {
        console.log(error);
    },
    "=female"
);



requestForUser(
    function (male) {
        console.log(male);
        
        requestForUser(
            function (female) {
                console.log(female);
            },
            function (error) {
                console.log(error);
            },
            "=female"
        );
    },
    function (error) {
        console.log(error);
    },
    "=male"
);