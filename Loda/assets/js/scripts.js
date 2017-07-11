  
//------- MAGNIFICENT POPUP ---//

$(document).ready(function() {

  "use strict";

    $('.image-modal').magnificPopup({
      type:'inline',
      fixedContentPos: false,
      removalDelay: 100,
      closeBtnInside: true,
      preloader: false,
      mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
      e.preventDefaut();
      $.magnificPopup.close();
    });


    $('.image-popup-no-margins').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
          verticalFit: true
        },
        zoom: {
          enabled: true,
          duration: 300 // don't foget to change the duration also in CSS
        }

    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false

    });

//------- SITE LOADER ---//

jQuery(window).load(function() { 
    jQuery(".spinner").delay(400).fadeOut("slow");
    jQuery(".title-load").delay(400).fadeOut("slow");
    jQuery("#loader").delay(800).fadeOut("slow"); 

});

// ACTIVE LINKS

  $('body').scrollspy({ offset: 200, target: '.navigation' });

  


//----- HIDE PADDER COLUMN WHEN NOT MOBILE ---//
var viewportWidth = $(window).width();
if (viewportWidth > 770){

    $("#padder").css("display", "none");
    $(".p-margin").css("text-align","left")
    }
else{
    $("#padder").css("display", "initial")
    $(".p-margin").css("text-align","center")

    }
$(window).resize(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth > 770){

    $("#padder").css("display", "none");
    $(".p-margin").css("text-align","left")
    }
    else{
    $("#padder").css("display", "initial");
    $(".p-margin").css("text-align","center")

    }
    
});

//----- HIDE LOGO UNTIL SCROLLED ---//
var scrollpct = $(window).scrollTop(); 
console.log(scrollpct)
if (scrollpct < 150){
    $("#logo").css("display", "none");
} else {
    $("#logo").css("display", "initial");
}
$(window).scroll(function() {
var scrollpct = $(window).scrollTop(); 
if (scrollpct < 150){
    $("#logo").css("display", "none");
} else {
    $("#logo").css("display", "initial");
}
});

});