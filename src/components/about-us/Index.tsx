"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
// import AboutUsHero from "@/components/about/about-us-hero";
// import AboutUsArea from "@/components/about/about-us-area";
// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import BigText from "@/components/big-text";
import AboutUsHero from "./about-us-hero";
import AboutUsArea from "./about-us-area";
import FooterTwo from "../footer/Index";

const AboutUs = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
            teamMarqueAnim();
            fadeAnimation();
            hoverBtn();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <main>
                    {/* about hero */}
                    <AboutUsHero />
                    {/* about hero */}

                    {/* about area */}
                    <AboutUsArea />
                    {/* about area */}

                    {/* big text */}
                    <BigText cls="char-wrapper" />
                    {/* big text */}
                </main>

                {/* footer area */}
                <FooterTwo topCls="" />
                {/* footer area */}
            </div>
        </div>
    );
};

export default AboutUs;
