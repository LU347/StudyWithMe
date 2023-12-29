import { useState } from 'react';
const VideoPlayer = () => {
    const [youtubeID, setYoutubeID] = useState('cjIEzmgMNk0');
    const ytIDs = ['yYn-uHnLeGQ', 'aEVzzr3S0HA', 'YlnUCFUSyew', 'cjIEzmgMNk0', 'ODVfZR6sMjU']
    let currentIndex = 0;

    function handleClick(event) {
        var button = event.target;
        switch (button.id) {
            default:
            case "shuffle-button":
                playRandomVideo();
                break;
            case "prev-button":
                switchVideo('prev');
                break;
            case "next-button":
                switchVideo('next');
                break;
        }
    }

    function playRandomVideo() {
        currentIndex = Math.floor(Math.random() * ytIDs.length);
        setYoutubeID(ytIDs[currentIndex]);
    }

    function switchVideo(direction) {
        let currentIndex = ytIDs.indexOf(youtubeID);
    
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % ytIDs.length;
        } else if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + ytIDs.length) % ytIDs.length;
        }
    
        setYoutubeID(ytIDs[currentIndex]);
    }
    
    return (
        <div className="videoPlayer">
            <div class="button-controls-wrapper">
                <div class="buttons">
                    <h1 class="site-title">Study with Me</h1>
                    <button onClick={handleClick} id="shuffle-button"></button>
                    <button onClick={handleClick} id="prev-button"></button>
                    <button onClick={handleClick} id="next-button"></button>
                </div>
            </div>
            <div class="video-wrapper">
                <iframe className='video' class='video'
                    frameBorder="0"
                    title='Youtube player'
                    allow='autoplay; encrypted-media'
                    sandbox='allow-same-origin allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${youtubeID}?mute=1&autoplay=1&t=0&loop=1&playlist=${youtubeID}`}>
                </iframe>
            </div>
        </div>
    );
}
 
export default VideoPlayer;