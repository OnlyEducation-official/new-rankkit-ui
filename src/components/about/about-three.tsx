import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal imports
import shape from "@/assets/img/home-03/about/ab-shape-img.png";
import { ArrowBg, RightArrowTwo, FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {
  return (
    <div className="tp-about-3-area pt-120 pb-110 mt-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  What we do
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                Everything a Brand Needs{" "}
                <span>
                  {" "}
                  <br />- All in One Place.
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4" style={{width:"30%"}}>
            <div className="tp-about-3-shape text-lg-end" style={{marginRight:"80px"}}>
              <Image src={shape} alt="shape" style={{ height: "auto" }} />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8" style={{width:"70%"}}>
            <div className="tp-about-3-content" style={{paddingRight:"0"}}>
              <p className=" tp_fade_bottom" style={{fontWeight:"500"}}>
                From striking visuals to seamless websites, from content
                production to full-fledged marketing campaigns — we’re the
                creative force that builds brands end-to-end.
              </p>
              <p className=" tp_fade_bottom" style={{fontWeight:"500"}}>
                We are a modern studio, a production house, a digital agency,
                and a strategic partner — all rolled into one. Whether you’re
                launching, scaling, or redefining, we handle every pixel, every
                frame, and every click that your brand needs to grow.
              </p>
              <p className="mb-45 tp_fade_bottom" style={{fontWeight:"500"}}>
                Let your brand move, speak, and lead — with design, motion, and
                strategy under one roof.
              </p>
              <Link
                className="tp-btn-black-2 tp_fade_bottom"
                href="/contact-us"
              >
                Contact Us
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
