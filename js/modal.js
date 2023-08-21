// Modal and button IDs abbreviations should be added to categories.

var categories = ["ss", "cn", "cs", "oc", "wc", "mm"];

for (var cat of categories) {
  let modal = document.getElementById(cat + "Modal");
  let btn = document.getElementById(cat + "Btn");
  let close = document.getElementById(cat + "Close");

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "flex";
  }

  // When the user clicks on (x), close the modal
  close.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
      // Get all elements with the class "modal"
      const modalElements = document.querySelectorAll('.modal');

      // Loop through each modal element and set display to "none"
      modalElements.forEach(modal => {
        modal.style.display = "none";
      });
    }
  }
}
