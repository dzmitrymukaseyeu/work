var body = document.body;
var bShooter = document.querySelector('.b-shooter');
var bShooterAim = document.querySelector('.b-shooter__aim');
var bShooterImgAim = document.querySelector('.b-shooter__img-aim');




bShooter.addEventListener('click', function (e) {
    var x = e.offsetX - bShooterAim.offsetWidth / 2;
    var y = e.offsetY - bShooterAim.offsetHeight / 2;
    var limitX = bShooter.offsetWidth - bShooterAim.offsetWidth;
    var limitY = bShooter.offsetHeight - bShooterAim.offsetHeight;

    if (e.target.tagName.toLowerCase() === 'img') {
        return bShooterAim.style.transform ;
    };

    if (x > limitX) {
        x = limitX
    };

    if ( y > limitY) {
        y = limitY
    };

    if (x < 0) {
        x = 0;
    };

    if (y < 0) {
        y = 0;
    }; 

    bShooterAim.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

});

body.addEventListener('keydown', function(e) {
    
    if (e.code === 'Enter') {    
        bShooterImgAim.style.transform = 'scale(.9)';
    }
});

body.addEventListener('keyup', function (e) {

    if (e.code === 'Enter') {
        bShooterImgAim.style.transform = '';
    }

});