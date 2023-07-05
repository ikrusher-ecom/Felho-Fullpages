import React from "react"
import Vimeo from "@u-wave/react-vimeo"

function Video({ videoSrc, playing }) {
    return (
        <Vimeo
            background={true}
            height={943}
            loop={true}
            responsive
            video={videoSrc}
            width={1920}
            playing={playing}
            style={{
                height: "49.11vw",
                left: "50%",
                minHeight: "100vh",
                minWidth: "203.61vh",
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
            {console.log(videoSrc, playing)}
        </div>
    );
}