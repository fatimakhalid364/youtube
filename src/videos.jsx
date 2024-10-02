import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useMediaQuery} from 'react-responsive';

function VideoList(props){

    const [videos, setVideos] = useState([]);

    const isLessScreen = useMediaQuery({minWidth: '937px', maxWidth: '1198px'});
    const isSmallerScreen = useMediaQuery({minWidth: '659px', maxWidth: '937px'});
    const isMobileScreen = useMediaQuery({minWidth: '455px', maxWidth: '659px'});
    const isMicroScreen = useMediaQuery({minWidth: '359px', maxWidth: '455px'});

    function handleVideoClick(videoId, videoTitle, videoChannel) {
        window.location.href = `/video-player.html?videoId=${videoId}&title=${encodeURIComponent(videoTitle)}&channel=${encodeURIComponent(videoChannel)}`;
    }
    /*useEffect(() => {
            async function fetchData() {
            try {
                const response1 = await axios.get('http://localhost:3000/video');
                setVideos(response1.data.items);
                localStorage.setItem('videos', JSON.stringify(response1.data.items));
                


            } catch (error) {
                console.error('Error fetching data:', error);
                    //}
            }
        fetchData();
    }}, []);*/


    useEffect(() => {
        const storedVideos = localStorage.getItem('videos');
        if(storedVideos){
        setVideos(JSON.parse(storedVideos));
        }
        console.log(videos);
    }, []);

    return (
        <div className='videoBox' style={{gridTemplateColumns: props.gridStyle, marginLeft: props.marginFromLeft, width: isMobileScreen || isMicroScreen ? '100%' : '90%', gap: props.gapBetweenVideos}}>
            {videos.map((video) => 
                <div key={video.id.videoId} className='videoBoxBelongings'>
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className='videoUnit' style={{height: props.videoHeight, width: props.videoWidth, cursor: 'pointer'}} onClick={() => handleVideoClick(video.id.videoId, video.snippet.title, video.snippet.channelTitle  )} />
                    <p style={{width: '90%', marginBottom: 0, fontWeight: 'bold'}}>{video.snippet.title}</p>
                    <p style={{marginTop: 0, width: '80%'}}>{video.snippet.channelTitle}</p>
                </div>
            )}
        </div>
    )
}

export default VideoList;

