/*
 * @Date: 2023-06-30 16:05:05
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2023-08-15 14:17:59
 * @FilePath: \felho-fullpage\src\app\components\videoMb.js
 */
import React, { useEffect, useState } from 'react'
import Vimeo from '@u-wave/react-vimeo';

function Video({ videoSrc, playing }) {
    const [vimeoPlayer, setVimeoPlayer] = useState(null);

    useEffect(() => {
        if (vimeoPlayer) {
            if (playing) {
                vimeoPlayer.getPaused().then(paused => {
                    if (paused) {
                        vimeoPlayer.play();
                    }
                });
            } else {
                vimeoPlayer.pause();
            }
        }
    }, [playing, vimeoPlayer]);

    return (
        <Vimeo
            onReady={setVimeoPlayer}
            background={true}
            loop={true}
            responsive
            video={videoSrc}
            style={{
                height: "216.41vw",
                left: "50%",
                minHeight: "100vh",
                minWidth: "46.21vh",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "100vw",
            }}
        />
    );
}

export default function BackgroundVideoMobile({ videoSrc, playing }) {
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    // 23815ffde8250d16f1868f0ef9ce0975
    useEffect(() => {
        fetch(`https://api.vimeo.com/videos/${videoSrc}?access_token=23815ffde8250d16f1868f0ef9ce0975`)
        .then(response => response.json())
        .then(data => {
            setThumbnailUrl(data.pictures.sizes[3].link);
        })
        .catch(error => console.error('Error fetching video thumbnail:', error));
    }, [videoSrc]);
    console.log(thumbnailUrl);
    
    return (
        <div
            style={{
                bottom: "0",
                left: "0",
                minHeight: "100%",
                minWidth: "100%",
                objectFit: "cover",
                objectPosition: "center",
                position: "absolute",
                right: "0",
                top: "0",
                zIndex: "-1",
                backgroundImage: `url(${thumbnailUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
            }}>
            <Video videoSrc={videoSrc} playing={playing} />
        </div>
    );
}
