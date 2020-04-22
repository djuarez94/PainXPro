$(document).ready(function(){

AOS.init();

/*-----------------------
Scroll On Click
------------------------*/

$("#scrollToTop, #scrollToBenefits, #scrollToMission, #retailSupportBtn, #prevBtn, #nextBtn, #buyNowBtnShop").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){

      window.location.hash = hash;
    });
  }
});

if ($(window).width() <= 768) {
  $("#rollOnPckBtn, #pumpPckBtn, #qrBtn").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){

        window.location.hash = hash;
      });
    }
  });
} else {
  $("#rollOnPckBtn, #pumpPckBtn, #qrBtn").on('click', function(event) {
    event.preventDefault()
  });
}

/*-----------------------
Slide Overlay On Click
------------------------*/

//get all Overlays
var overlay = document.querySelectorAll('#benefits .overlay');
var overlay2 = document.querySelectorAll('#blogs .overlay');

//get all Overlay Close Buttons
var overlayCloseButtons = document.querySelectorAll('.benefitBox .closeOverlay');
var overlayCloseButtons2 = document.querySelectorAll('#blogs .benefitBox .closeOverlay');

//loop thorugh all Overlay Close Buttons and then Slide Out Overlay function gets called
for(var i = 0; i < overlayCloseButtons.length; i++) {
    var anchor = overlayCloseButtons[i];
    anchor.onclick = slideOutOverlay;
}

for(var i = 0; i < overlayCloseButtons2.length; i++) {
    var anchor = overlayCloseButtons2[i];
    anchor.onclick = slideOutOverlay2;
}

// Slide Out Overlay function
function slideOutOverlay() {
  for(var i = 0; i < overlay.length; i++) {
      var anchor = overlay[i];
      this.parentNode.offsetParent.style.height = "0%";
  }
}

function slideOutOverlay2() {
  for(var i = 0; i < overlay2.length; i++) {
      var anchor = overlay2[i];
      this.parentNode.offsetParent.style.height = "0%";
  }
}

//get all Learn More Buttons
var learnMoreButton = document.querySelectorAll("#benefits .secondaryButton");
var discoverMoreButton = document.querySelectorAll("#blogs .secondaryButton");
// console.dir(discoverMoreButton);

//loop thorugh all Learn More Buttons and then Slide In Overlay function gets called
for(var i = 0; i < discoverMoreButton.length; i++) {
    var anchor = discoverMoreButton[i];
    anchor.onclick = slideInOverlay2;
}

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

function slideInOverlay2() {
  for(var i = 0; i < overlay2.length; i++) {
      var anchor = overlay2[i];
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

/*-----------------------
Quantity Increase/Decrease
------------------------*/

$('.btn-number').click(function(e){
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {

            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {

    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }


});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

/*-----------------------
Contact Form Reveal
------------------------*/

if ($(window).width() <= 369) {
  $("#customerSupportBtn, #customerSupportIcon").click(function(){
    $("#customerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "215%"});
    $('#contactInfo').animate({paddingTop: "31em"});
  });

  $("#retailSupportBtn, #retailIcon").click(function(){
    $("#resellerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "215%"});
    $('#contactInfo').animate({paddingTop: "31em"});
  });

  $('.backToOptions h5').click(function(){
    $("#customerSupportForm").animate({left: '-100%'});
    $("#resellerSupportForm").animate({left: '-100%'});
    $('#retailForm').animate({opacity: "1"});
    $('#retailForm').show();
    $('#customerForm').animate({opacity: "1"});
    $('#contactInfo').animate({paddingTop: "6em"});
  });
}

if (($(window).width() >= 369) && ($(window).width() <= 400)) {
  $("#customerSupportBtn, #customerSupportIcon").click(function(){
    $("#customerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "195%"});
    $('#contactInfo').animate({paddingTop: "26em"});
  });

  $("#retailSupportBtn, #retailIcon").click(function(){
    $("#resellerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "195%"});
    $('#contactInfo').animate({paddingTop: "26em"});
  });

  $('.backToOptions h5').click(function(){
    $("#customerSupportForm").animate({left: '-100%'});
    $("#resellerSupportForm").animate({left: '-100%'});
    $('#retailForm').animate({opacity: "1"});
    $('#retailForm').show();
    $('#customerForm').animate({opacity: "1"});
    $('#contactInfo').animate({paddingTop: "6em"});
  });
}

if (($(window).width() >= 400) && ($(window).width() <= 446)) {
  $("#customerSupportBtn, #customerSupportIcon").click(function(){
    $("#customerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "180%"});
    $('#contactInfo').animate({paddingTop: "24em"});
  });

  $("#retailSupportBtn, #retailIcon").click(function(){
    $("#resellerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "180%"});
    $('#contactInfo').animate({paddingTop: "24em"});
  });

  $('.backToOptions h5').click(function(){
    $("#customerSupportForm").animate({left: '-100%'});
    $("#resellerSupportForm").animate({left: '-100%'});
    $('#retailForm').animate({opacity: "1"});
    $('#retailForm').show();
    $('#customerForm').animate({opacity: "1"});
    $('#contactInfo').animate({paddingTop: "6em"});
  });
}

if ($(window).width() >= 768) {

var sealsImg = document.querySelector('#sealsHome img');
  if(sealsImg){
      sealsImg.src = "imgs/athletes-are-in-it-together-desktop.png";
  }


  $("#shopLink").mouseover(function(){
      $("#navImgs").slideDown(500);
    });

    $("#closeImgsLinks span").click(function(){
        $("#navImgs").slideUp(500);
      });
}

if (($(window).width() >= 446) && ($(window).width() <= 768)) {

  $("#customerSupportBtn, #customerSupportIcon").click(function(){
    $("#customerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "170%"});
    $('#contactInfo').animate({paddingTop: "22em"});
  });

  $("#retailSupportBtn, #retailIcon").click(function(){
    $("#resellerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "170%"});
    $('#contactInfo').animate({paddingTop: "22em"});
  });

  $('.backToOptions h5').click(function(){
    $("#customerSupportForm").animate({left: '-100%'});
    $("#resellerSupportForm").animate({left: '-100%'});
    $('#retailForm').animate({opacity: "1"});
    $('#retailForm').show();
    $('#customerForm').animate({opacity: "1"});
    $('#contactInfo').animate({paddingTop: "4em"});
  });
}

if ($(window).width() > 768) {
  $('.benefitContainer').mouseover(function() {
    var overlay = this.firstElementChild.lastElementChild;
    overlay.style.height = "100%";
  });

  $('.benefitContainer').mouseout(function() {
    var overlay = this.firstElementChild.lastElementChild;
    overlay.style.height = "0%";
  });
}

if (($(window).width() >= 768) && ($(window).width() <= 992 )) {
  $("#customerSupportBtn, #customerSupportIcon").click(function(){
    $("#customerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "170%"});
    $('#contactInfo').animate({paddingTop: "21em"});
  });

  $("#retailSupportBtn, #retailIcon").click(function(){
    $("#resellerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "170%"});
    $('#contactInfo').animate({paddingTop: "21em"});
  });

  $('.backToOptions h5').click(function(){
    $("#customerSupportForm").animate({left: '-100%'});
    $("#resellerSupportForm").animate({left: '-100%'});
    $('#retailForm').animate({opacity: "1"});
    $('#retailForm').show();
    $('#customerForm').animate({opacity: "1"});
    $('#contactInfo').animate({paddingTop: "4em"});
  });
}

if (($(window).width() >= 992) && ($(window).width() <= 1200 )) {
  $("#customerSupportBtn, #customerSupportIcon").click(function(){
    $("#customerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "140%"});
    $('#contactInfo').animate({paddingTop: "21em"});
  });

  $("#retailSupportBtn, #retailIcon").click(function(){
    $("#resellerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "140%"});
    $('#contactInfo').animate({paddingTop: "21em"});
  });

  $('.backToOptions h5').click(function(){
    $("#customerSupportForm").animate({left: '-100%'});
    $("#resellerSupportForm").animate({left: '-100%'});
    $('#retailForm').animate({opacity: "1"});
    $('#retailForm').show();
    $('#customerForm').animate({opacity: "1"});
    $('#contactInfo').animate({paddingTop: "4em"});
  });
}

if ($(window).width() >= 1200) {
  $("#customerSupportBtn, #customerSupportIcon").click(function(){
    $("#customerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "130%"});
    $('#contactInfo').animate({paddingTop: "19em"});
  });

  $("#retailSupportBtn, #retailIcon").click(function(){
    $("#resellerSupportForm").animate({left: '0px'});
    $('#customerForm').animate({opacity: "0"});
    $('#retailForm').animate({opacity: "0"}, function() {
      $('#retailForm').hide();
    });
    $('#contactUs #resellerSupportForm, #contactUs #customerSupportForm').css({"height": "130%"});
    $('#contactInfo').animate({paddingTop: "19em"});
  });

  $('.backToOptions h5').click(function(){
    $("#customerSupportForm").animate({left: '-100%'});
    $("#resellerSupportForm").animate({left: '-100%'});
    $('#retailForm').animate({opacity: "1"});
    $('#retailForm').show();
    $('#customerForm').animate({opacity: "1"});
    $('#contactInfo').animate({paddingTop: "4em"});
  });
}
/*-----------------------
Contact Form Reveal
------------------------*/

var qrCodeBtn = document.querySelector('#labTestedContainer button.secondaryButton');

if(qrCodeBtn){
  qrCodeBtn.addEventListener("click", qrCodeReveal);

  function qrCodeReveal() {
      var labImage = document.querySelector('#labTestedContainer img');
      labImage.src = "imgs/PainXProLab-Homepage-QR-Code.png";
  }
}

/*-----------------------
Box Packaging Reveal On Click
------------------------*/



  var freezePumpContainer = document.querySelector('#pump img');
  var pumpPckBtn = document.querySelector('#pumpPckBtn');
  var rollOnContainer = document.querySelector('#roll-on img');
  var rollOnPckBtn = document.querySelector('#rollOnPckBtn');

    if(freezePumpContainer){
      pumpPckBtn.addEventListener("click", function() {
        freezePumpContainer.src = "imgs/PainXPro-Pain-Relief-Freeze-Pump-Box-Packaging.png";
      });
    }

    if(rollOnContainer){
      rollOnPckBtn.addEventListener("click", function() {
        rollOnContainer.src = "imgs/PainXPro-Pain-Relief-Roll-On-Box-Packaging.png";
      });
    }


/*-----------------------
Product Page - Product Thumbnails
------------------------*/

var productThumbnails = document.querySelectorAll('#imageThumbnails img');
var mainProductImg = document.getElementById('mainProductImg');

var image = document.querySelector('.zoom');

for(var i = 0; i < productThumbnails.length; i++) {
    var anchor = productThumbnails[i];
    anchor.onmouseover = function() {
      mainProductImg.src = this.src;
      image.style.backgroundImage = 'url("' + this.src + '")';
    };
}

if(mainProductImg){
  function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.pageX;
    e.offsetY ? offsetY = e.offsetY : offsetX = e.pageX;
    x = offsetX/zoomer.offsetWidth*100;
    y = offsetY/zoomer.offsetHeight*100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }

  var browserWidth = window.innerWidth;
      if (browserWidth > 769) {
        document.querySelector('.zoom').addEventListener('mousemove', function () {
                  zoom(event);
      });
    } else {

     var image = document.querySelector('.zoom');
     image.classList.remove('zoom');
     image.style.backgroundImage = "none";

    }
}



});
