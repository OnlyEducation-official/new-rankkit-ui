"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand/image 71.png";
import b_2 from "@/assets/img/home-01/brand/image 72.png";
import b_3 from "@/assets/img/home-01/brand/image 73.png";
import b_4 from "@/assets/img/home-01/brand/image 74.png";
import b_5 from "@/assets/img/home-01/brand/image 75.png";
import b_6 from "@/assets/img/home-01/brand/image 76.png";
import b_7 from "@/assets/img/home-01/brand/logo_only_enginerning 1.png";
import b_8 from "@/assets/img/home-01/brand/Nav Chaitanya Malvani logo 1.png";
import b_9 from "@/assets/img/home-01/brand/ribbon & balloons logo 1.png";
import b_10 from "@/assets/img/home-01/brand/zero degree logo 1.png";

const brand_images = [
  b_1,
  b_2,
  b_3,
  b_4,
  b_5,
  b_6,
  b_7,
  b_8,
  b_1,
  b_2,
  b_3,
  b_4,
  b_5,
  b_6,
  b_7,
  b_8,
  b_9,
  b_10,
];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={100}
        loop={0}
        className="brand-wrapper"
        style={{ gap: "200px" }}
      >
        {brand_images.map((b, i) => (
          <div
            key={i}
            className="tp-brand-item"
            style={{
              marginLeft: "100px",
              height: "100px",
              width: "100px",
              gap: "80px",
              position: "relative",
            }}
          >
            <Image src={b} fill alt="" />
          </div>
        ))}
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
