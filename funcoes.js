var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000); // muda
}
var slideIndex = 1;
showbotoes(slideIndex);

function plusSlides(n) {
  showbotoes(slideIndex += n);
}

function showbotoes(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
function openMapLocation() {
  window.open("https://www.google.com/maps/search/?api=1&query=Avenida+Benjamim+de+Paula+Franca,+1138+Vale+Verde,+Valinhos");
}
