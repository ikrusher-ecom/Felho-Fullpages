/*
 * @Date: 2023-06-28 11:57:07
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2023-06-28 15:46:55
 * @FilePath: \Scripts\vapeplus.com\felho-fullpage\src\app\tinctures\page.js
 */
'use client'

import { useState, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import ReactPlayer from 'react-player';
import '../fullvideo.css';
// import styled from "styled-components";
// import Vimeo from "@u-wave/react-vimeo";

export default function Tinctures() {
    const [fullpages, setFullpages] = useState([
        {
            text: "DREAM"
        },
        {
            text: "RELAX"
        },
        {
            text: "VITAL"
        },
    ]);

    const colors = [
        "#fff",
        "#fff",
        "#fff",
    ];

    const videos = [
        "https://vimeo.com/840614347?share=copy",
        "https://vimeo.com/840616506?share=copy",
        "https://vimeo.com/840614609?share=copy",
    ];

    const [activeSection, setActiveSection] = useState(0);
    const fullpageRef = useRef(null);

    useEffect(() => {
        if (fullpageRef.current) {
          fullpageRef.current.fullpageApi.moveTo(activeSection + 1);
        }
    }, [activeSection]);
      

    if (!fullpages.length) return null;

    return (
        <div className="tincture-app">
            <ReactFullpage
                debug
                licenseKey={"LZX76-2TN0J-J5M66-9RKN9-QVXMN"}
                // fullpage options
                afterLoad={(origin, destination, direction) => {
                    setActiveSection(destination.index);
                }}
                navigation
                anchors={["dream", "relax", "vital"]}
                sectionsColor={colors}
                render={() => (
                    <ReactFullpage.Wrapper ref={fullpageRef}>
                        {videos.map((url, index) => (
                             <div className={`section section_${index}`} key={index}>
                                 <ReactPlayer 
                                    url={url} 
                                    loop={true} 
                                    controls={false} 
                                    muted={true} 
                                    playing={activeSection === index} 
                                    width="100%" 
                                    height="100%" 
                                    style={{ objectFit: 'cover' }}
                                />
                                 <div className="video_text">
                                        <h1>{fullpages[index].text}</h1>
                                 </div>
                             </div>
                        ))}
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
    );
}