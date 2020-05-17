var body = document.body;
var color = [];
var obj = {
    field1: 1,
    field2: 'summer',
    field3: true,
    field4: ['#00bcd4', ' #ffc107', '#2196f3'],
    field5: false
};
var btnColor = document.querySelector('button');

btnColor.addEventListener('click',function () {
    for(var prop in obj) {
        if (obj[prop] instanceof Array) {
            color = obj[prop];
            console.log(color);
        }
    };

    var i = Math.floor(Math.random() * (color.length + 1))
    console.log(i);
    console.log(color.length)
   

    
})