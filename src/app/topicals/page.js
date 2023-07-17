/*
 * @Date: 2023-06-28 11:57:07
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2023-07-17 15:53:15
 * @FilePath: \felho-fullpage\src\app\topicals\page.js
 */
'use client'

import { useState, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import '../fullvideo.css';
import BackgroundVideo from "../components/videoBg";
import { CSSTransition } from 'react-transition-group';

export default function Topicals() {
    const fullpages = [
        {
            h1: `CALMING BALM`,
            h5: "CBD Calming Balm",
            p: "Feel relief at a much deeper level. This unique balm lets your sore joints and muscles enjoy instant gratification when applied directly. By combining camphor wintergreen with potent peppermint, you’ll get a rich, soothing sensation that’ll last for hours to come.",
            url: "https://www.felho.com/calming-1000mg-cbd-balm.html",
        },
        {
            h1: "COOLING GEL",
            h5: "CBD Cooling Gel",
            p: "Relief is how we roll. Our 500mg pure CBD cooling gel is perfect for after the gym, when sore muscles, aches, and pains are at their peak. It’s cooling wintergreen scent will give you instant gratification and evaporate soreness for ultimate comfort.",
            url: "https://www.felho.com/cooling-500mg-cbd-gel.html",
        },
        {
            h1: "HEATING GEL",
            h5: "CBD Heating Gel",
            p: "Turn up the heat and turn down the hurt. This CBD heating lotion helps relieve sore muscles and joint pain. Our proprietary oil is a soothing blend of premium, USA-grown hemp and naturally scented oils, designed to propel a natural heating sensation perfect for an after-gym session. Give the therapeutic properties of CBD a try.",
            url: "https://www.felho.com/heating-500mg-cbd-gel.html",
        },
    ];

    const colors = [
        "#fff",
        "#fff",
        "#fff",
    ];

    const videos = [
        "844654152",
        "844654300",
        "844672931",
    ];
    
    const [activeSection, setActiveSection] = useState(-1);
    const fullpageRef = useRef(null);

    useEffect(() => {
        if (activeSection === -1) {
            setTimeout(() => setActiveSection(0), 50);
        } else if (fullpageRef.current) {
            fullpageRef.current.fullpageApi.moveTo(activeSection + 1);
        }
    }, [activeSection]);

    // useEffect(() => {
    //     function handleWheel(event) {
    //         if (
    //             (event.deltaY < 0 && window.scrollY <= 0) ||
    //             (event.deltaY > 0 && window.scrollY + window.innerHeight >= document.body.offsetHeight)
    //         ) {
    //             window.parent.postMessage({ message: 'scrollParent', deltaY: event.deltaY }, '*');
    //         }
    //     }

    //     window.addEventListener('wheel', handleWheel);

    //     // cleanup function
    //     return () => {
    //         window.removeEventListener('wheel', handleWheel);
    //     };
    // }, []);

    if (!fullpages.length) return null;

    return (
        <div className="topical-app">
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
                        {videos.map((id, index) => (
                            <div className={`section section_${index}`} key={index}>
                                <a href={fullpages[index].url} target="_parent">
                                    <BackgroundVideo videoSrc={id} playing={activeSection === index} />
                                    <CSSTransition
                                        in={activeSection === index}
                                        timeout={3000}
                                        classNames={`video-text-${index % 2 === 0 ? 'right' : 'left'}`}
                                        unmountOnExit
                                    >
                                        <div className="video_text_bg">
                                            <div className="video_text">
                                                <h1>{fullpages[index].h1}</h1>
                                                <h5>{fullpages[index].h5}</h5>
                                                <p>{fullpages[index].p}</p>
                                                <a href={fullpages[index].url} target="_parent">SHOP NOW</a>
                                            </div>
                                        </div>
                                    </CSSTransition>
                                </a>
                            </div>
                        ))}
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
    );
}