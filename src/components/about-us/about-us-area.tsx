import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Hand } from "../svg";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// images
// import shape from "@/assets/img/inner-about/about/shape-1.png";
import shape from "../../../public/assets/img/inner-about/about/shape-1.png"
import ab_1 from "../../../public/assets/img/inner-about/about/about-1.jpg";
import ab_2 from "../../../public/assets/img/inner-about/about/about-3.jpg";
import ab_3 from "../../../public/assets/img/inner-about/about/about-2.jpg";

export default function AboutUsArea() {
    const handRef = useRef(null);

  useEffect(() => {
    const element = handRef.current;

    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      rotation: 360, // Full rotation
      duration: 1.5,
      ease: "power2.out"
    });

  }, []);

  const ropeRef = useRef(null);

  useEffect(() => {
    const element = ropeRef.current;

    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // When top of element hits 80% of viewport
        end: "top 30%",
        toggleActions: "play none none none", // Play once when entering view
        markers: false // Set to true for debugging positions
      },
      scale: 0.5, // Start scaled down
      opacity: 0, // Start invisible
      duration: 1.2,
      ease: "back.out(1.7)", // Nice elastic effect
      immediateRender: false
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span ref={handRef}>
                <Hand />
                Hi!
              </span>
              <p className="tp-dropcap tp_fade_bottom fs-1" style={{ letterSpacing: "unset" }}>
                At RankKit, we are a full-spectrum creative and content production agency built for brands that want to lead. From high-impact visuals to immersive digital strategies, we help businesses stand out in crowded markets through cinematic storytelling, sharp design, and cutting-edge marketing.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h4 className="ab-about-category-title">
                    At Rankkit <br />
                    <span>WHAT WE DO</span>
                  </h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>Digital Marketing</li>
                        <li>Branding & Multimedia Designing</li>
                        <li>E-commerce Development</li>
                        <li>Social Media Marketing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        <li>WordPress Development</li>
                        <li>SEO Services</li>
                        <li>Ecommerce SEO Services</li>
                        <li>Media Production</li>
                        <li>CreatorNest</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
