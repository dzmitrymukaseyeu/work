const requestForUser = function(succes, error, url) {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status < 300) {
                succes(JSON.parse(xhr.response));
                ;
            } else {
                error({
                    code: 500,
                    message: 'Server Error'
                })
            }
        }
    }

    xhr.send();
};


requestForUser(function(male){
    console.log(male);
},
function(error) {
console.log(error);   
},
"https://randomuser.me/api/?results=3&gender=male"
);

requestForUser(function (female) {
    console.log(female);
},
    function (error) {
        console.log(error);
    },
    "https://randomuser.me/api/?results=3&gender=female"
);