/*
 * @Date: 2023-06-30 16:05:05
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2023-07-19 13:51:44
 * @FilePath: \felho-fullpage\src\app\components\videoBg.js
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
            height={943}
            loop={true}
            responsive
            video={videoSrc}
            width={1920}
            style={{
                height: "56.25vw",
                left: "50%",
                minHeight: "100vh",
                minWidth: "177.78vh",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "100vw",
            }}
        />
    );
}

export default function BackgroundVideo({ videoSrc, playing }) {
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
            }}>
            <Video videoSrc={videoSrc} playing={playing} />
        </div>
    );
}
