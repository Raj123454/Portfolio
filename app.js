let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function scrollToAbout() {
    let aboutSection = document.querySelector(".secondSec");
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
function scrollToHome() {
    let homeSection = document.querySelector(".firstSec");
    homeSection.scrollIntoView({ behavior: 'smooth' });
    location.reload();
  }
  function togglePopup(){
    let popup = document.querySelector(".popupContainer");
    popup.classList.toggle("show");
  }