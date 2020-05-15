var bUniverse = document.querySelector('.b-universe');
var bUniversePlanet = document.querySelector('.b-universe__planet');

bUniverse.addEventListener( 'click', function(e) {
    var x = e.offsetX - bUniversePlanet.offsetWidth / 2;
    var y = e.offsetY - bUniversePlanet.offsetHeight / 2;
    var limitX = bUniverse.offsetWidth - bUniversePlanet.offsetWidth;
    var limitY = bUniverse.offsetHeight - bUniversePlanet.offsetHeight;

    if (bUniversePlanet.style.display === 'none') {
        return bUniversePlanet.style.display = '';
    };

    if (e.target.tagName.toLowerCase() === 'img') {
        return bUniversePlanet.style.display = 'none';
    };

    if (x > limitX) {
        x = limitX;
    };

    if (y > limitY) {
        y = limitY;
    };

    if (x < 0) {
        x = 0;
    };

    if (y < 0) {
        y = 0;
    }; 

    bUniversePlanet.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});