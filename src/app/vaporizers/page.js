/*
 * @Date: 2023-06-28 11:57:07
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2023-07-17 15:47:08
 * @FilePath: \felho-fullpage\src\app\vaporizers\page.js
 */
'use client'

import { useState, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import '../fullvideo.css';
import BackgroundVideo from "../components/videoBg";
import { CSSTransition } from 'react-transition-group';

export default function Vaporizers() {
    const fullpages = [
        {
            h1: `ALPHA+`,
            p: "The Alpha + is the ultimate in high-end vaporizer technology. With every puff, you will feel pure, clean, and perfectly heated concentrates and dry-herb. The Alpha Plus is the most accurate electric vaporizer and with a host of accessories, you will no doubt have everything you need for the perfect session.",
            url: "https://www.felho.com/alpha-plus-concentrate-vaporizer.html",
        },
        {
            h1: "QUEST",
            p: "The Quest is the next stage in portable concentrate devices. With a water filtration system, a tactical door with an induction cup, and powerful 1000 mAh battery, the Quest can handle any session you throw at it.",
            url: "https://www.felho.com/quest-concentrate-vaporizer.html",
        },
        {
            h1: "AKIMBO",
            p: "The Akimbo is one of the most concise dry-herb vaporizers. With dual heating elements for conduction and convection, you can perfectly control your settings to deliver to perfect puff! With cleaning accessories and a full water filtration adapter, you can have the best experience possible!",
            url: "https://www.felho.com/akimbo-dual-heating-vaporizer.html",
        },
        {
            h1: "POKIT",
            p: "The Pokit was developed to be a micro vaporizer with a BIG impact. By being the SMALLEST convection vaporizer on the market, it comes with a wide selection of optimizable accessories, fully adjustable temperature control, and multiple charging methods.",
            url: "https://www.felho.com/pokit.html",
        },
    ];

    const colors = [
        "#fff",
        "#fff",
        "#fff",
        "#fff",
    ];

    const videos = [
        "844653302",
        "842662088",
        "842663713",
        "844653875"
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
        <div className="vaporizer-app">
            <ReactFullpage
                debug
                licenseKey={"LZX76-2TN0J-J5M66-9RKN9-QVXMN"}
                // fullpage options
                afterLoad={(origin, destination, direction) => {
                    setActiveSection(destination.index);
                }}
                navigation
                anchors={["ALPHA+", "QUEST", "AKIMBO", "POKIT"]}
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