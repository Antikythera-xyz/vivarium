// Game grid SCROLL
window.addEventListener('scroll', onGameGridScroll);
gameGrid = document.getElementById("vivarium");
gridBlur = document.getElementById("vivariumBlur");

function onGameGridScroll () {
    var scrollPosition = window.scrollY;
    var scrollTop = document.body.scrollTop + 3*window.innerHeight/4;
    // Determine if position is at a certain point
    if (scrollTop > gridBlur.getBoundingClientRect().top) {
        gameGrid.classList.add("blur");
    } else {
        gameGrid.classList.remove("blur");
    }
}

// Sensorimotor SCROLL
window.addEventListener('scroll', onSensorimotorScroll);
ss = document.getElementById("sensorimotor");
ssBlur = document.getElementById("sensorimotorBlur");

function onSensorimotorScroll () {
    var scrollPosition = window.scrollY;
    var scrollTop = document.body.scrollTop + window.innerHeight/2;
    // Determine if position is at a certain point
    if (scrollTop > ssBlur.getBoundingClientRect().top) {
        ss.classList.add("blur");
    } else {
        ss.classList.remove("blur");
    }
}


// Platformer SCROLL
window.addEventListener('scroll', onPlatformerScroll);
p = document.getElementById("platformer");
pBlur = document.getElementById("platformerBlur");

function onPlatformerScroll () {
    var scrollPosition = window.scrollY;
    var scrollTop = document.body.scrollTop + window.innerHeight/2;
    // Determine if position is at a certain point
    if (scrollTop > pBlur.getBoundingClientRect().top) {
        p.classList.add("blur");
    } else {
        p.classList.remove("blur");
    }
}



// MMARPG SCROLL
window.addEventListener('scroll', onMMARPGScroll);
m = document.getElementById("mmarpg");
mBlur = document.getElementById("mmarpgBlur");

function onMMARPGScroll () {
    var scrollPosition = window.scrollY;
    var scrollTop = document.body.scrollTop + window.innerHeight/2;
    // Determine if position is at a certain point
    if (scrollTop > mBlur.getBoundingClientRect().top) {
        m.classList.add("blur");
    } else {
        m.classList.remove("blur");
    }
}
