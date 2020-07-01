const body = document.body;
const bShooter = document.querySelector('.b-shooter');
const bShooterAim = document.querySelector('.b-shooter__aim');
const bShooterImgAim = document.querySelector('.b-shooter__img-aim');
const ghost = document.querySelector('.b-shooter__img-ghost');
const bShooterImgFire = document.querySelector('.b-shooter__img-fire');
const delayToReset = 500;
const healthIcon = document.getElementsByClassName('b-shooter__health-icon');
const progressIcon = document.getElementsByClassName('b-shooter__progress-icon');
let isGameOver = false;

bShooter.addEventListener('click', function (e) {
    if (ghost.style.animationPlayState === 'paused') {
        return;
    }

    if (isGameOver === true) {
        return;
    }

    let x = e.offsetX - bShooterAim.offsetWidth / 2;
    let y = e.offsetY - bShooterAim.offsetHeight / 2;
    let limitX = bShooter.offsetWidth - bShooterAim.offsetWidth;
    let limitY = bShooter.offsetHeight - bShooterAim.offsetHeight;

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
        let coordShooter = bShooterImgAim.getBoundingClientRect();
        let aimCenterX = coordShooter.x + coordShooter.width / 2;
        let aimCenterY = coordShooter.y + coordShooter.height / 2;
        let coordGhost = ghost.getBoundingClientRect();

        bShooterImgAim.style.transform = '';

        if (
            aimCenterX <= coordGhost.right - 20
            && aimCenterX >= coordGhost.left + 20
            && aimCenterY >= coordGhost.top - 20
            && aimCenterY <= coordGhost.bottom + 20
        ) {
            let animationProperties = `opacity: 0;
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
    let limitX = bShooter.offsetWidth - ghost.offsetWidth;
    let limitY = bShooter.offsetHeight - ghost.offsetHeight;

    let x = Math.floor(Math.random() * (limitX + 1));
    let y = Math.floor(Math.random() * (limitY + 1));

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



function markLifeStatus () {
    for (let i = 0; i < healthIcon.length; i++) {
        i.classList.add('user__inner')
        
        
    }
}


function markProgress() {
    for (let i = 0; i < progressIcon.length; i++) {

        if (!progressIcon[i].classList.contains('_progress-mod')) {
            progressIcon[i].classList.add('_progress-mod');
            break;
        };

        if (i === progressIcon.length - 1) {
            isGameOver = true;
        };
    }
}

