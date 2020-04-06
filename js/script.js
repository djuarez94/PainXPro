$(document).ready(function(){

/*-----------------------
Scroll On Click
------------------------*/

$("#scrollToTop, #scrollToBenefits").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });
  }
});

/*-----------------------
Slide Overlay On Click
------------------------*/

//get all Overlays
var overlay = document.querySelectorAll('#benefits .overlay');

//get all Overlay Close Buttons
var overlayCloseButtons = document.querySelectorAll('.benefitBox .closeOverlay');

//loop thorugh all Overlay Close Buttons and then Slide Out Overlay function gets called
for(var i = 0; i < overlayCloseButtons.length; i++) {
    var anchor = overlayCloseButtons[i];
    anchor.onclick = slideOutOverlay;
}

// Slide Out Overlay function
function slideOutOverlay() {
  for(var i = 0; i < overlay.length; i++) {
      var anchor = overlay[i];
      this.parentNode.offsetParent.style.height = "0%";
  }
}

//get all Learn More Buttons
var learnMoreButton = document.querySelectorAll("#benefits .secondaryButton");

//loop thorugh all Learn More Buttons and then Slide In Overlay function gets called
for(var i = 0; i < learnMoreButton.length; i++) {
    var anchor = learnMoreButton[i];
    anchor.onclick = slideInOverlay;
}

// Slide In Overlay function
function slideInOverlay() {
  for(var i = 0; i < overlay.length; i++) {
      var anchor = overlay[i];
      this.nextElementSibling.style.height = "100%";
  }
}

/*-----------------------
Display Pain Relief Carousel
------------------------*/

var painReliefDisplayCarouselBox = document.getElementById('painReliefDisplay');
var painDisplayLink = document.getElementById('painLink');
var painDisplayCarouselButton = document.querySelector('#painReliefCarousel .closeOverlay');

if(painDisplayLink){
    painDisplayLink.onclick = painReliefDisplay;
    painDisplayCarouselButton.onclick = painReliefDisplayRemoval;
}

function painReliefDisplay() {
  this.offsetParent.style.display = "none";
  painReliefDisplayCarouselBox.style.display = "block";
};

function painReliefDisplayRemoval() {
  this.parentNode.offsetParent.parentNode.style.display = "none";
  this.parentNode.parentNode.parentNode.parentNode.firstElementChild.style.display = "block";
};



});
