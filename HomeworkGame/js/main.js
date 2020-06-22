var body = document.body;
var bShooter = document.querySelector('.b-shooter');
var bShooterAim = document.querySelector('.b-shooter__aim');
var bShooterImgAim = document.querySelector('.b-shooter__img-aim');
var ghost = document.querySelector('.b-shooter__img-ghost');
var bShooterImgFire = document.querySelector('.b-shooter__img-fire');
var delayToReset = 500;

bShooter.addEventListener('click', function (e) {
    if (ghost.style.animationPlayState === 'paused') {
        return;
    }

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

        if (
            aimCenterX <= coordGhost.right - 20
            && aimCenterX >= coordGhost.left + 20
            && aimCenterY >= coordGhost.top - 20
            && aimCenterY <= coordGhost.bottom + 20
        ) {
            var animationProperties = `opacity: 0;
                transition-duration: ${delayToReset * 0.6}ms;
                transition-delay: ${delayToReset * 0.4}ms;`;

            bShooterImgFire.style.visibility = 'visible';
            bShooterImgFire.style.cssText += animationProperties;
            ghost.style.cssText += animationProperties;
            bShooterImgAim.style.display = 'none';
            ghost.style.animationPlayState = 'paused';


            setTimeout(function() {
                bShooterImgFire.removeAttribute('style');
                bShooterImgFire.style.visibility = 'hidden';
                bShooterImgAim.style.display = '';
                ghost.removeAttribute('style');
                ghost.style.display = 'none';
            }, delayToReset);
        };
    };
});

function setRandomCoords () {
    var limitX = bShooter.offsetWidth - ghost.offsetWidth;
    var limitY = bShooter.offsetHeight - ghost.offsetHeight;

    var x = Math.floor(Math.random() * (limitX + 1));
    var y = Math.floor(Math.random() * (limitY + 1));

    ghost.style.left = x + 'px';
    ghost.style.top = y + 'px';
};

setInterval(function() {

    if (ghost.style.display === 'none') {
        ghost.style.display = '';
    };

    if (ghost.style.animationPlayState ==='paused') {
        return;
    }

    setRandomCoords();
}, 3000);




