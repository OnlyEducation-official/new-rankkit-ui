"use client";
import React from "react";
import ProjectTextLine from "./project-text-line";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// project images
import p_1 from "../../../public/assets/img/portfolio-img/onlyedu h.png";
import p_2 from "../../../public/assets/img/portfolio-img/bud.png";
import p_3 from "../../../public/assets/img/portfolio-img/mbacet h.png";
import p_4 from "../../../public/assets/img/portfolio-img/kalp h.png";
import p_5 from "../../../public/assets/img/portfolio-img/tkt h.png";
import p_6 from "../../../public/assets/img/portfolio-img/toyroom h.png";
import p_7 from "../../../public/assets/img/portfolio-img/logoITC h.png";
import p_8 from "../../../public/assets/img/portfolio-img/cossybox h.png";

// type
type IProject = {
  id: number;
  cls: string;
  cls_2: string;
  img: StaticImageData;
  link:String;
};

const project_data: IProject[] = [
  
  {
    id: 4,
    cls: "tp-project-mr",
    cls_2: "height-3",
    img: p_8,
    link:"/portfolio/cossybox"
  },
  {
    id: 3,
    cls: "",
    cls_2: "height-1",
    img: p_1,
    link:"/portfolio/only-education"
  },
  {
    id: 1,
    cls: "",
    cls_2: "height-6",
    img: p_6,
    link:"/portfolio/toy-room",
  },
  {
    id: 5,
    cls: "tp-project-mr",
    cls_2: "height-3",
    img: p_3,
    link:"/portfolio/mba-cet"
  },
  
  
  
  
  {
    id: 6,
    cls: "",
    cls_2: "height-5",
    img: p_5,
    link:"/portfolio/the-kerala-table"
  },
  {
    id: 2,
    cls: "",
    cls_2: "height-6",
    img: p_7,
    link:"/portfolio/itc",
  },
  {
    id: 7,
    cls: "text-end",
    cls_2: "height-2 d-inline-flex justify-content-end",
    img: p_2,
    link:"/portfolio/bake-ur-day"
  },
  
  {
    id: 8,
    cls: "",
    cls_2: "height-4",
    img: p_4,
    link:"/portfolio/kalp"
  },
  
];

function ProjectItem({ item }: { item: IProject }) {
  return (
    <div className={`tp-project-item ${item.cls} mb-200`}>
      <div
        className={`tp-project-img ${item.cls_2} fix not-hide-cursor`}
        data-cursor="View<br>Demo"
      >
        <Link className="cursor-hide" href={`${item.link}`}>
          <Image data-speed=".8" src={item.img} alt="project-img" style={{ height: "auto", width:"500px" }} />
        </Link>
      </div>
    </div>
  );
}

// prop type
type IProps = {
  style_2?: boolean;
};
const ProjectOne = ({style_2=false}:IProps) => {
  return (
    <>
      <div className={`${style_2 ? "tp-project-area-2" : "tp-project-area"} fix`}>
        {!style_2 && (
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <ProjectTextLine />
              </div>
            </div>
          </div>
        )}
        <div className="tp-project-gallery-wrapper">
          <div className="container container-1630">
            <div className="tp-project-gallery-top pb-50">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-left-wrap">
                    {project_data.slice(0, 4).map((item, i) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-right-wrap">
                    {project_data.slice(4, 8).map((item) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}

                    <div className="tp-project-btn tp-btn-trigger">
                      <div className="tp-btn-bounce">
                        <Link
                          className="tp-btn-border"
                          href="/portfolio"
                        >
                          <span className="tp-btn-border-wrap">
                            <span className="text-1">View all projects</span>
                            <span className="text-2">View all projects</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!style_2 && (
          <div className="container-fluid p-0">
  <div className="row g-0">
    <div className="col-xl-12">
      <div className="tp-project-full-img-wrap p-relative fix" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="https://only-education-strapi-media.s3.ap-south-1.amazonaws.com/rankkit_02909bc981.mp4" type="video/mp4" />
        </video>

        {/* Overlay content */}
        <div className="tp-project-full-img" data-speed="auto" style={{ position: "relative", zIndex: 1 }}>
          {/* You can put text or other content here */}
        </div>
      </div>
    </div>
  </div>
</div>

          )}
        </div>
      </div>
    </>
  );
};

export default ProjectOne;
