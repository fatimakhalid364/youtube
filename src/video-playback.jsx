import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {useState} from 'react';
import $ from 'jquery';
import { useLocation } from 'react-router-dom';



function Playback({}){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const channel = searchParams.get('channel');
    const videoId = searchParams.get('videoId');
    const videoTitle = searchParams.get('title');
    const [isApiLoaded, setIsApiLoaded] = useState(false);
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    tag.onload = () => {
      setIsApiLoaded(true);
    }
    var player;

    function onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.ENDED) {
          player.playVideo();
      }
    }

    function onPlayerReady(event) {
      event.target.playVideo();
    }

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '470',
            width: '900',
            videoId: videoId,
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }



      
    onYouTubeIframeAPIReady();
    return (
      <div>
      {!isApiLoaded && (
          <div style={{ width: '640px', height: '390px' }}>Loading...</div>
      )}
      {isApiLoaded && (
          <div className='action'>
            <div id='player'>
              
            </div>
            <h3>{videoTitle}</h3>
            <p>{channel}</p>

          </div>
          
      )}
  </div>
    )
}

export default Playback;