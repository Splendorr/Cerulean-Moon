console.log('this is the toube')

var firstvideo = 'WZfIJgGcDic';

// YOU TUBE **********************************
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an  and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    height: '1080',
    width: '1920',
    videoId: firstvideo,
    playerVars: { 'autoplay': 1, 'vq': 'HD720', 'autohide': 1, 'controls': 1, 'loop': 1, 'rel': 0 },
    events: {
            'onReady': onPlayerReady}
  });

  // mute player
  // player.mute();
}

function onPlayerReady(event) {
        event.target.mute();
      }