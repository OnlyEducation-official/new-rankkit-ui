import React from "react";
import Image from "next/image";

// images
import port_1 from "../../../public/assets/img/portfolio-img/123123.svg";
import port_2 from "../../../public/assets/img/portfolio-img/education.gif";

// import port_3 from "../../../public/assets/img/portfolio-img/neetgyaan.png";
// import port_4 from "../../../public/assets/img/portfolio-img/neet.gif";

import port_5 from "../../../public/assets/img/portfolio-img/tktlogoas.png";
import port_6 from "../../../public/assets/img/portfolio-img/gif.gif";

// import port_7 from "../../../public/assets/img/portfolio-img/only engineering.png";
// import port_8 from "../../../public/assets/img/portfolio-img/only.gif";

// import port_9 from "../../../public/assets/img/portfolio-img/MbACETlogo.png";
// import port_10 from "../../../public/assets/img/portfolio-img/mba.gif";

import port_11 from "../../../public/assets/img/portfolio-img/kalp.png";
import port_12 from "../../../public/assets/img/portfolio-img/kalp.gif";

import port_13 from "../../../public/assets/img/portfolio-img/bake.png";
import port_14 from "../../../public/assets/img/portfolio-img/bake.gif";

import port_15 from "../../../public/assets/img/portfolio-img/toyroomlogo.png";
import port_16 from "../../../public/assets/img/portfolio-img/toy.gif";

import port_17 from "../../../public/assets/img/portfolio-img/cossyboxcard.png";
import port_18 from "../../../public/assets/img/portfolio-img/cossy-box-gif.gif";

import port_19 from "../../../public/assets/img/portfolio-img/ITClogocard.png";
import port_20 from "../../../public/assets/img/portfolio-img/itc_gif.gif";

import Link from "next/link";

// portfolio data
const project_data = [
  {
    id: 1,
    img_1: port_5,
    img_2: port_6,
    video_1: "/videos/the-kerala-table.mp4",
    meta: "OCT 2024 . Creative",
    title: "The Kerala Table",
    slug: "the-kerala-table",
  },
  {
    id:2,
    img_1: port_19,
    img_2: port_20,
    video_1: "/videos/the-kerala-table.mp4",
    meta: "OCT 2024 . Creative",
    title: "ITC",
    slug: "itc",
  },
  {
    id: 3,
    img_1: port_17,
    img_2: port_18,
    video_1: "/videos/the-kerala-table.mp4",
    meta: "OCT 2024 . Creative",
    title: "Cossy Box",
    slug: "cossy-box",
  },
  {
    id: 7,
    img_1: port_13,
    img_2: port_14,
    video_1: "/videos/bake-ur-day.mp4",
    meta: "SEP 2024 . Creative",
    title: "Bake Ur Day",
    slug: "bake-ur-day",
  },
  {
    id: 8,
    img_1: port_15,
    img_2: port_16,
    video_1: "/videos/toy-room.mp4",
    meta: "SEP 2024 . Creative",
    title: "Toy Room",
    slug: "toy-room",
  },
  {
    id: 1,
    img_1: port_1,
    img_2: port_2,
    video_1: "/videos/the-kerala-table.mp4",
    meta: "DEC 2024 . Creative",
    title: "Only Education",
    slug: "only-education",
  },
  {
    id: 6,
    img_1: port_11,
    img_2: port_12,
    video_1: "/videos/kalp.mp4",
    meta: "SEP 2024 . Creative",
    title: "KALP",
    slug: "kalp",
  },
  // {
  //   id: 5,
  //   img_1: port_9,
  //   img_2: port_10,
  //   video_1: "/videos/the-kerala-table.mp4",
  //   meta: "SEP 2024 . Creative",
  //   title: "MBACET",
  //   slug: "mba-cet",
  // },
  // {
  //   id: 4,
  //   img_1: port_7,
  //   img_2: port_8,
  //   video_1: "/videos/the-kerala-table.mp4",
  //   meta: "SEP 2024 . Creative",
  //   title: "Only Engineering",
  //   slug: "only-engineering",
  // },
  // {
  //   id: 2,
  //   img_1: port_3,
  //   img_2: port_4,
  //   video_1: "/videos/the-kerala-table.mp4",
  //   meta: "NOV 2024 . Creative",
  //   title: "NEET Gyan",
  //   slug: "neet-gyan",
  // },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFour({ style_2 = false }: IProps) {
  return (

    <>
   
    <div
      className={`tp-project-3-area ${
        style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"
      }`}
    >
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Latest <span>Projects</span>
                </h4>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item, i) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_2}
                        alt="port-img"
                        style={{
                          height: "auto",
                          width: "-webkit-fill-available",
                        }}
                    
                      />
                      {/* <video
                        src="/assets/img/portfolio-img/tkt reel.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: "100%", height: "auto", borderRadius:"20px", objectFit:"cover"}}
                      ></video> */}
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <span className="tp-project-3-meta">{item.meta} </span>
                      <h4 className="tp-project-3-title-sm">
                        {item.title}
                      </h4>
                      <Link
                        className="tp-btn-project-sm"
                        href={`/portfolio/${item.slug}`}

                      >
                        See Project
                      </Link>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_1}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
