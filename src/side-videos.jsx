import React from "react";
import {useState} from 'react';
import { useEffect } from 'react';
import {useMediaQuery} from "react-responsive";
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

function SideVideoList(){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const channel = searchParams.get('channel');
    const videoId = searchParams.get('videoId');
    const videoTitle = searchParams.get('title');
    const [videos, setVideos] = useState([]);
    const containerRef = useRef(null);
    

    useEffect(() => {
        const storedVideos = localStorage.getItem('videos');
        if(storedVideos){
        setVideos(JSON.parse(storedVideos));
        }
        console.log(videos);
    }, []);

   

    const sideVideos = videos.filter((video)=>video.id.videoId !== videoId );

    return(
        <div className='sideVideosDiv'>
            {sideVideos.map((video) => 
                <div key={video.id.videoId} className='sideVideosContents' style={{display: 'flex', marginBottom: '10px'}}>
                    <img src={video.snippet.thumbnails.medium.url} style={{borderRadius: '10px', height: '110px', width: '190px'}} alt={video.snippet.title} className='sideVideoUnit' />
                    <div className='sideTitles' style={{marginLeft: '10px'}}>
                        <div >
                        <p className='textOverflow' style={{marginTop: 0, marginBottom: 0}}>
                            {video.snippet.title}
                        </p>
                        </div>
                        <p style={{marginTop: '9px', fontSize: '13px'}}>{video.snippet.channelTitle}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SideVideoList;