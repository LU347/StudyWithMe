import { useState } from 'react';

/* 
    notes for later:
    https://react.dev/reference/react/useState#setstate
*/
const Main = () => {
    const [youtubeID, setYoutubeID] = useState('cjIEzmgMNk0');
    return ( 
        <div className="main">
            <iframe className='video' class='video'
                frameborder="0"
                title='Youtube player'
                sandbox='allow-same-origin allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
            </iframe>
        </div>
     );
}
 
export default Main;