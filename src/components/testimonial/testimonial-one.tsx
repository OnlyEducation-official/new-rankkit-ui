"use client";
import React from "react";
import { NextIcon, PrevIcon } from "../svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const testimonial_data = [
  {
    id: 1,
    desc: `“The Kerala Table underwent a sea change when it began working with RankKit. They brought our brand to life online with their incisive digital marketing and dramatic approach to content. Every picture, every campaign, and every reel produced outcomes. The growth was evident and steady and included both an increase in bookings and online orders.”`,
    name: "Ranjit Nair",
    designation: "Founder, The Kerala Table",
  },
  {
    id: 2,
    desc: `“RankKit made us stand out in a congested education industry. Our entire SEO approach was redesigned by their team, which also provided us with the necessary visibility to draw in serious pupils. Our queries followed, our ranks improved, and the effect was instantaneous..”`,
    name: "Dweep Naag",
    designation: "Founder, Only Engineering",
  },
  {
    id: 3,
    desc: `“From technical SEO to keyword mapping, RankKit managed everything with accuracy. We were able to rank better and faster thanks to their comprehension of search intent and material tailored to schooling. One of our best choices for long-term student acquisition, without a doubt.`,
    name: "Tapan Mori",
    designation: "Founder, MBA CET",
  },
  {
    id: 4,
    desc: `“RankKit developed a narrative rather than merely posting content. Their team recognized the tone of my brand and transformed it into a social media presence that engaged our target audience. Reach increased, engagement increased, and everything seemed purposeful and unified.`,
    name: "Akash Mistry",
    designation: "Founder, Maestro",
  },
  {
    id: 3,
    desc: `“RankKit made our brand concept a reality. Every material they provided, from campaign visuals and color strategy to logo redesign, was in line with our mission and identity. They stand out for their creativity, clarity, and consistency.`,
    name: "Yash Shetty",
    designation: "Founder, Ribbons & Balloons",
  },
];

const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 1,
    },
    "1200": {
      slidesPerView: 1,
    },
    "992": {
      slidesPerView: 1,
    },
    "768": {
      slidesPerView: 1,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: ".tp-testimonial-prev",
    nextEl: ".tp-testimonial-next",
  },
};
const TestimonialOne = () => {
  return (
    <div className="tp-testimonial-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-testimonial-slider-wrapper p-relative">
              <div className="tp-testimonial-arrow-box d-none d-lg-block">
                <button className="tp-testimonial-prev">
                  <span>
                    <PrevIcon />
                  </span>
                </button>
                <button className="tp-testimonial-next">
                  <span>
                    <NextIcon />
                  </span>
                </button>
              </div>
              <Swiper
                {...slider_setting}
                modules={[Navigation]}
                className="swiper-container tp-testimonial-slider-active fix"
              >
                {testimonial_data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="tp-testimonial-item text-center">
                      <p>{item.desc}</p>
                      <span>
                        <em>{item.name}</em> - {item.designation}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
