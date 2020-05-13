var bUniverse = document.querySelector('.b-universe');
var bUniversePlanet = document.querySelector('.b-universe__planet');

bUniverse.addEventListener( 'click', function(e) {
    var x = e.offsetX - bUniversePlanet.offsetWidth / 2;
    var y = e.offsetY - bUniversePlanet.offsetHeight / 2;

    if (bUniversePlanet.style.display === 'none') {
        return bUniversePlanet.style.display = '';
    };

    if (e.target.tagName.toLowerCase() === 'img') {
        return bUniversePlanet.style.display = 'none';
    };

    if (x + bUniversePlanet.offsetWidth > bUniverse.offsetWidth) {
        x = bUniverse.offsetWidth - bUniversePlanet.offsetWidth;
    };

    if (y + bUniversePlanet.offsetHeight > bUniverse.offsetHeight) {
        y = bUniverse.offsetHeight - bUniversePlanet.offsetHeight;
    };

    if (x < 0) {
        x = 0;
    };

    if (y < 0) {
        y = 0;
    };

    bUniversePlanet.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});