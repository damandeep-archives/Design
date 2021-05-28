// Get the modal
window.onload = function () {
var modal = document.getElementById("myModal");

// button
var btn = document.getElementById("myBtn");



// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}