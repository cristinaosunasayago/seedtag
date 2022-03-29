'use strict';

function fadeGrid() {
    // get body-grid and add class fade
    document.getElementById('body-fade').classList.add('fade');
    // set timeout (5s) and remove class fade
    setTimeout(function () {
        document.getElementById('body-fade').classList.remove('fade');
    }, 5000);
}
// when we do a window resize, it runs fadeGrid function
window.addEventListener('resize', fadeGrid);
