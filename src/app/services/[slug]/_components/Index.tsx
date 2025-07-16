"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import ServiceDetailsArea from "./service-details-area";
// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";
import FooterTwo from "@/components/footer/Index";
import BigText from "@/components/about-us/big-text";
import { DataContentType } from "../page";
import { servicePanel } from "@/utils/panel-animation";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";

const SingleServicePage = ({data}: {data: DataContentType}) => {
    // useScrollSmooth();
    // useGSAP(() => {
    //     const timer = setTimeout(() => {
    //         charAnimation();
    //         titleAnimation();
    //     }, 100);
    //     return () => clearTimeout(timer);
    // });
    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                               <HeaderTwo />
                
                <main>
                    {/* service details area */}
                    <ServiceDetailsArea data={data} />
                    {/* service details area */}

                    {/* big text */}
                    <BigText />
                    {/* big text */}
                </main>
                              <FooterOne />

            </div>
        </div>
    );
};

export default SingleServicePage;
