/*
 * @Date: 2023-06-28 11:57:07
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2023-07-27 16:29:14
 * @FilePath: \felho-fullpage\src\app\tinctures\page.js
 */
'use client'

import { useState, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import '../fullvideo.css';
import BackgroundVideo from "../components/videoBg";
import BackgroundVideoMobile from "../components/videoMb";
import { CSSTransition } from 'react-transition-group';

export default function Tinctures() {
    const fullpages = [
        {
            h1: "Felhö DREAM",
            h5: "Full Spectrum Tincture",
            p: "Our Dream tincture will have you calm and relaxed - ready for a good night's sleep! The combination of CBD + CBN provides a calm and relaxing experience that puts your head in the right place for a full-8 hours of rest.",
            url: "https://www.felho.com/dream-full-spectrum-cbd-tincture.html",
        },
        {
            h1: "Felhö RELAX",
            h5: "Hemp Supplement",
            p: "With 1000mg of Broad-Spectrum CBD oil, you will feel lighter than air. Our CBD tincture provides the perfect effects for those who are looking to relax after a long day of work or help with any stressful situation.",
            url: "https://www.felho.com/relax-full-spectrum-cbd-tincture.html",
        },
        {
            h1: "Felhö VITAL",
            h5: "Hemp Supplement",
            p: "With the carefully curated combination of CBD and CBG, you will feel calm, comfortable, and uplifted. CBG delivers an optimal sense of relief from sore muscles/ joints due to the anti-inflammatory nature of CBG. On top of that, our wellness blend acts as a great hunger manipulator to help those looking to increase their appetite.",
            url: "https://www.felho.com/vital-full-spectrum-cbd-tincture.html",
        },
    ];

    const colors = [
        "#fff",
        "#fff",
        "#fff",
    ];

    const videos = [
        "841317619",
        "841318121",
        "841314896",
    ];

    const mobileVideos = [
        "848805100",
        "848800894",
        "848806948",
    ];

    const size = useWindowSize();

    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 800
    );

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            }

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            }
        }
    }, []);
    
    const [activeSection, setActiveSection] = useState(-1);
    const fullpageRef = useRef(null);

    useEffect(() => {
        if (activeSection === -1) {
            setTimeout(() => setActiveSection(0), 50);
        } else if (fullpageRef.current) {
            fullpageRef.current.fullpageApi.moveTo(activeSection + 1);
        }
    }, [activeSection]);

    if (!fullpages.length) return null;
    console.log(windowWidth);

    if (size.width > 767) {
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
    } else {
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
                            {mobileVideos.map((id, index) => (
                                <div className={`section section_${index}`} key={index}>
                                    <a href={fullpages[index].url} target="_parent">
                                        <BackgroundVideoMobile videoSrc={id} playing={activeSection === index} />
                                        <CSSTransition
                                            in={activeSection === index}
                                            timeout={3000}
                                            classNames={`video-text-${index % 2 === 0 ? 'right' : 'left'}`}
                                            unmountOnExit
                                        >
                                            <div className="video_text_bg_mobile">
                                                <div className="video_text_mobile">
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
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
    
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}