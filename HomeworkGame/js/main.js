var body = document.body;
var bShooter = document.querySelector('.b-shooter');
var bShooterAim = document.querySelector('.b-shooter__aim');
var bShooterImgAim = document.querySelector('.b-shooter__img-aim');
var ghost = document.querySelector('.b-shooter__img-ghost');
var bShooterImgFire = document.querySelector('.b-shooter__img-fire');
var delayToReset = 500;

bShooter.addEventListener('click', function (e) {
    var x = e.offsetX - bShooterAim.offsetWidth / 2;
    var y = e.offsetY - bShooterAim.offsetHeight / 2;
    var limitX = bShooter.offsetWidth - bShooterAim.offsetWidth;
    var limitY = bShooter.offsetHeight - bShooterAim.offsetHeight;
    if (x > limitX) {
        x = limitX;
    } else if (x < 0) {
        x = 0;
    };
    if (y > limitY) {
        y = limitY;
    } else if (y < 0) {
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
        var coordShooter = bShooterImgAim.getBoundingClientRect();
        var aimCenterX = coordShooter.x + coordShooter.width / 2;
        var aimCenterY = coordShooter.y + coordShooter.height / 2;
        let coordGhost = ghost.getBoundingClientRect();

        bShooterImgAim.style.transform = '';

        console.log(aimCenterX, aimCenterY, coordGhost.left, coordGhost.right);

        if (aimCenterX <= coordGhost.right - 20 && aimCenterX >= coordGhost.left + 20 && aimCenterY >= coordGhost.top -20 && aimCenterY <= coordGhost.bottom + 20) {
            bShooterImgFire.style.visibility = 'visible';
            bShooterImgFire.style.opacity = '0';
            bShooterImgFire.style.transitionDuration = `.${delayToReset * 0.6}s`;
            bShooterImgFire.style.transitionDelay = `.${delayToReset * 0.4}s`;
            ghost.style.transitionDuration = `.${delayToReset * 0.6}s`;
            ghost.style.transitionDelay = `.${delayToReset * 0.4}s`;
            ghost.style.opacity = '0';
            bShooterImgAim.style.display = 'none';

            setTimeout(() => {
                bShooterImgFire.removeAttribute('style');
                bShooterImgFire.style.visibility = 'hidden';
                ghost.style.transitionDuration = '';
                ghost.style.transitionDelay ='';
                ghost.style.opacity = '';
                bShooterImgAim.style.display = '';

                
            }, delayToReset);
        };

    };

});


function setRandomCoords () {
    var x = Math.floor(Math.random() * (bShooter.offsetWidth - ghost.offsetWidth / 2));
    var y = Math.floor(Math.random() * (bShooter.offsetHeight - ghost.offsetHeight / 2));
    var limitX = bShooter.offsetWidth - ghost.offsetWidth;
    var limitY = bShooter.offsetHeight - ghost.offsetHeight;

    if (x > limitX) {
        x = limitX;
    } else if (x < 0) {
        x = 0;
    };

    if (y > limitY) {
        y = limitY;
    } else if (y < 0) {
        y = 0;
    }; 

    ghost.style.left = x + 'px';
    ghost.style.top = y + 'px';

};

setInterval(f, 3000);

function f() {

    if (ghost.style.display === 'none') {
        return ghost.style.display = '';
    };
    if (!ghost.style.opacity) {
        setRandomCoords();
    }
};



