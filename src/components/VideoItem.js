import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)}>
            <img 
                alt={video.snippet.title} 
                src={video.snippet.thumbnails.medium.url} 
            />
            <div>{video.snippet.title}</div>
            <div>{video.snippet.channelTitle}</div>
        </div>
    )
}

export default VideoItem;
