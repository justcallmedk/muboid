import { useEffect } from 'react';

function YouTube() {
  let player;
  useEffect(() => {
    // On mount, check to see if the API script is already loaded

    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      window.onYouTubeIframeAPIReady();
    }
  }, []);

  window.onYouTubeIframeAPIReady = async () => {
    //const youTube = new YouTube('AIzaSyArMLqNzP-hCwsVnRvUzeX0XR8fWEyi6HI');
    player = new window.YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'aAkMkVFwAoo',
      playerVars: {
        'controls' : 0,
        'mute': 1 // if the video is not muted, playVideo() does not work
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data == window.YT.PlayerState.PLAYING) {
      //setTimeout(stopVideo, 6000);
    }
  }

  function stopVideo() {
    // player.stopVideo();
  }

  return (
    <div id="player">ytPlayer</div>
  );
}

export default YouTube;
