$(document).ready(function(){

  // SLICK SLIDER
  $('.responsiveslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    adaptiveHeight: false,
    // edgeFriction: 0.15,
    touchMove: false,
    // asNavFor: '.sliderhowto'
  });

  $('.slidersmallgfy').slick({
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    adaptiveHeight: false,
    // edgeFriction: 0.15,
    touchMove: false,
    // centerMode: true,
    // mobileFirst: true,
    // asNavFor: '.slidersmallheader'
  });

  // START GFYCAT

  $blankhtml = " ";

  // BEGIN gfySwapSmall
  /* New re-factoring for single GFYs */
  var activeSingleGfyVar = '';
  var domSingleGfy = '';

  var currentSmallSlide = $('.slidersmallgfy').slick('slickCurrentSlide');

  var makeGfySingle = function(arrayIndex) {
    if (arrayIndex > gfySingleMax) {
      arrayIndex = 0;
    } else if (arrayIndex < 0 ) {
      arrayIndex = gfySingleMax;
    } else { }

    // activeSingleGfyVar = 'gfySingle' + arrayIndex;
    domSingleGfy = '#gfySingle' + arrayIndex; 
    // return domSingleGfy;
    // console.log('makeGfySingle:', activeSingleGfyVar, domSingleGfy);
    // return;
  };

  // console.log('maxing out', makeGfySingle(19));

  var unloadGfySingle = function(numeral) {
    makeGfySingle(numeral);
    $(domSingleGfy).html($blankhtml);
    // domSingleGfy.html(blankhtml);

    console.log('unloadGfySingle UNloading', domSingleGfy);
  };

  var loadGfySingle = function (numeral) {
    makeGfySingle(numeral);
    // $(domSingleGfy).html(gfySingles[numeral]);
    $(domSingleGfy).html(
      "<img class='gfyitem' data-id='" + gfySingles[numeral] + "' data-controls='false' data-dot='false' data-perimeter='false' />"
      // gfySingles[numeral]
      );
    console.log('loadGfySingle loading', domSingleGfy);
  };

  var gfySwapSmall = function (numeral) {
    loadGfySingle(numeral);
    unloadGfySingle(numeral - 1);
    unloadGfySingle(numeral + 1);

    gfyCollection.init();

    // console.log('gfySwapSmall Unloading', (numeral-1), '&', (numeral+1), 'loading', numeral);
  };

  // END gfySwapSmall

  // console.log(makeGfySingle(-1));
  // console.log(unloadGfySingle(0-1));

  /* BEGIN new gfySwapDouble */

  var gfyDoubleStartID = 0;
  var domDoubleGfyOne;

  var currentLargeSlide = $('.sliderhowto').slick('slickCurrentSlide');

  var makeGfyDoubleGroup = function (slideIndex) {
    if (slideIndex > gfyDoubleMax) {
      slideIndex = 0;
    } else if (slideIndex < 0 ) {
      slideIndex = gfyDoubleMax;
    } else { }
    gfyDoubleStartID = slideIndex * 2;
  };

  var setGfyDoubleDomId = function (startID) {
    domDoubleGfyOne = '#gfySingle' + startID + 'double';
  };

  var unloadGfyOneOfDouble = function (numeral) {
    setGfyDoubleDomId(numeral);
    $(domDoubleGfyOne).html($blankhtml);
    console.log('unloadGfyOneOfDouble UNloading', domDoubleGfyOne);
  };

  var loadGfyOneOfDouble = function (numeral) {
    setGfyDoubleDomId(numeral);
    $(domDoubleGfyOne).html(
      "<img class='gfyitem' data-id='" + gfySingles[numeral] + "' data-controls='false' data-dot='false' data-perimeter='false' />"
    );
    console.log('loadGfyOneOfDouble Loading', domDoubleGfyOne);
  };

  var unloadGfyDouble = function (groupID) {
    makeGfyDoubleGroup(groupID);
    unloadGfyOneOfDouble(gfyDoubleStartID);
    unloadGfyOneOfDouble(gfyDoubleStartID + 1);
    console.log('unloadGfyDouble UNloading groupID', groupID);
  };

  var loadGfyDouble = function (groupID) {
    makeGfyDoubleGroup(groupID);
    loadGfyOneOfDouble(gfyDoubleStartID);
    loadGfyOneOfDouble(gfyDoubleStartID + 1);
    console.log('loadGfyDouble LOading groupID', groupID);
  };

  var gfySwapDouble = function (numeral) {
    loadGfyDouble(numeral);
    unloadGfyDouble(numeral - 1);
    unloadGfyDouble(numeral + 1);

    console.log('gfySwapDouble StartID', numeral);
    gfyCollection.init();

  };

  // End gfySwapDouble
  
  
  /* BEGIN new gfySwapTriple */

  var gfyTripleStartID = 0;
  var domTripleGfyOne;

  var currentLargeSlide = $('.sliderhowto').slick('slickCurrentSlide');

  var makeGfyTripleGroup = function (slideIndex) {
    if (slideIndex > gfyTripleMax) {
      slideIndex = 0;
    } else if (slideIndex < 0 ) {
      slideIndex = gfyTripleMax;
    } else { }
    gfyTripleStartID = slideIndex * 3;
  };

  var setGfyTripleDomId = function (startID) {
    domTripleGfyOne = '#gfySingle' + startID + 'triple';
  };

  var unloadGfyOneOfTriple = function (numeral) {
    setGfyTripleDomId(numeral);
    $(domTripleGfyOne).html($blankhtml);
    console.log('unloadGfyOneOfTriple UNloading', domTripleGfyOne);
  };

  var loadGfyOneOfTriple = function (numeral) {
    setGfyTripleDomId(numeral);
    $(domTripleGfyOne).html(
      "<img class='gfyitem' data-id='" + gfySingles[numeral] + "' data-controls='false' data-dot='false' data-perimeter='false' />"
    );
    console.log('loadGfyOneOfTriple Loading', domTripleGfyOne);
  };

  var unloadGfyTriple = function (groupID) {
    makeGfyTripleGroup(groupID);
    unloadGfyOneOfTriple(gfyTripleStartID);
    unloadGfyOneOfTriple(gfyTripleStartID + 1);
    unloadGfyOneOfTriple(gfyTripleStartID + 2);
    console.log('unloadGfyTriple UNloading groupID', groupID);
  };

  var loadGfyTriple = function (groupID) {
    makeGfyTripleGroup(groupID);
    loadGfyOneOfTriple(gfyTripleStartID);
    loadGfyOneOfTriple(gfyTripleStartID + 1);
    loadGfyOneOfTriple(gfyTripleStartID + 2);
    console.log('loadGfyTriple LOading groupID', groupID);
  };

  var gfySwapTriple = function (numeral) {
    loadGfyTriple(numeral);
    unloadGfyTriple(numeral - 1);
    unloadGfyTriple(numeral + 1);

    console.log('gfySwapTriple StartID', numeral);
    gfyCollection.init();

  };

  // End gfyTriple

  function gfyLoad() {

    console.log('SLIDES: ran gfyLoad');
    loadGfySingle(0);
    // loadGfyTriple(0);
    loadGfyDouble(0);

    gfyCollection.init();
  } // End gfyLoad()

  $('.responsiveslider').on('afterChange', function(event, slick, currentSlide){
    // console.log(nextSlide);
    console.log('current large slick slide:', currentSlide);
    // gfySwapTriple(currentSlide);
    gfySwapDouble(currentSlide);
  });

  $('.slidersmallgfy').on('afterChange', function(event, slick, currentSlide){
    // console.log(nextSlide);
    console.log('current small slick slide:', currentSlide);
    gfySwapSmall(currentSlide);
  });

  // Needs to go at the end:
  // GFYcat ***********
  (function(d, t) {
      var g = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
      g.src = 'http://assets.gfycat.com/js/gfyajax-0.517d.js';
      s.parentNode.insertBefore(g, s);
  }(document, 'script'));

  gfyLoad();

}); // end document.ready

// YOU TUBE **********************************
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an  and
// YouTube player after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '1080',
    width: '1920',
    videoId: youTubeVideoID,
    playerVars: { 'autoplay': 1, 'vq': 'HD720', 'autohide': 1, 'controls': 1, 'loop': 1, 'modestbranding': 1, 'rel': 0, 'showinfo': 0 },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  // mute player
  // player.mute();
}

function onPlayerReady(event) {
        event.target.mute();
      }

// when video ends
function onPlayerStateChange(event) {        
    if(event.data === 0) {          
        // alert('done');
        event.target.seekTo(0);
        event.target.playVideo();
    }
}