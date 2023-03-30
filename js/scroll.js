// Game grid SCROLL
window.addEventListener('scroll', onGameGridScroll);
gameGrid = document.getElementById("vivarium");
blurHere = document.getElementById("vivariumBlur");

function onGameGridScroll () {
    var scrollPosition = window.scrollY;
    var scrollTop = document.body.scrollTop + 3*window.innerHeight/4;
    // Determine if position is at a certain point
    if (scrollTop > blurHere.getBoundingClientRect().top) {
        gameGrid.classList.add("blur");
    } else {
        gameGrid.classList.remove("blur");
    }
}
//
// function showHeader() {
//   title.style.display = "block";
// }
//
// function hideHeader() {
//   title.style.display = "none";
// }
