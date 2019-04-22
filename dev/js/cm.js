// document.addEventListener('DOMContentLoaded', function () {
// }); // end DOMContentLoaded / onReady

window.addEventListener('load', function (event) {
  pageLoad();
  // console.log("All resources finished loading!");
});

function pageLoad() {
  updateCopyright()
}

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

function updateCopyright() {
  var currentdate = document.querySelector('.currentdate');
  var year = new Date().getFullYear();
  currentdate.textContent = year;
  console.log('year: ', year);
}
