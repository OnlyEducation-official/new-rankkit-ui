'use client';

import React from 'react';
import portfolioData from './portfolio.json';
import { scroller } from 'react-scroll';
import { Leaf, ScrollDownTwo, UpArrowFour } from "@/components/svg";
import Image from 'next/image';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { useGSAP } from '@gsap/react';
import { charAnimation, titleAnimation } from '@/utils/title-animation';
import { projectThreeAnimation } from '@/utils/project-anim';
import img from '../../../../../public/assets/img/portfolio-img/phoneonlyedu2.png';
import HeaderTwo from '@/layouts/headers/header-two';
import FooterOne from '@/layouts/footers/footer-one';

type Props = {
  project: {
    title: string;
    website: string;
    banner: string;
    sections: {
      heading: string;
      description: string;
      image?: string;
      images?: {
        type: 'image' | 'video';
        src: string;
      }[];
      tagline?: string;
    }[];
  };
};

export default function PortfolioDetailsThreeArea({ project }: Props) {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectThreeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  // Assume we are showing the first project
  // const project = portfolioData[0];

  return (
    <>
                   <HeaderTwo />

      {/* Header */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
        <div className="container container-1560">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-details-3-title-box">
                <h2 className="tp-section-title-160 mb-50 tp-char-animation">{project.title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="tp-project-details-3-scroll smooth">
                <a onClick={scrollTo} className="pointer">
                  <span><ScrollDownTwo /></span>
                  Scroll to Explore
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tp-project-details-3-link mt-30 text-start text-md-end">
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <span><UpArrowFour /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      {/* <div className="tp-project-details-3-full-width-thumb mb-120">
        <Image data-speed=".8" src={project.banner} alt="port-img" width={1560} height={800} 
                        style={{ width: "100%", height: "100%", aspectRatio: '1.95 / 1' }} />
      </div> */}
      <div className="tp-project-details-3-thumb mb-120" >
              <div className="container container-1560">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-project-details-3-thumb-box">
                      <Image
                        data-speed=".8"
                        src={project.banner}
                        alt="portfolio-section-img"
                        width={1560}
                        height={800}
                        style={{  aspectRatio: '1.95 / 1' }}
                        // objectFit='fill'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

      {/* Sections */}
      {project.sections.map((section, index) => (
        <div key={index}>
          <div className="showcase-details-2-area pb-180">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                    <h4 className={`showcase-details-2-section-title tp-char-animation ${(index + 2) % 2 === 0 ? 'text-lg-start' : 'text-lg-end'}`}>
                      {section.heading}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className={`col-xl-3  ${(index + 2) % 2 === 0 ? 'order-xl-0' : 'order-xl-1'}`}>
                  <div className={`showcase-details-2-section-left ${(index + 2) % 2 === 0 ? 'text-lg-start' : 'text-lg-end'}`}>
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf /> {section.tagline}
                    </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right tp_title_anim">
                    <p className={` ${ (index + 2) % 2 === 0 ? 'me-0' : 'ms-0' }`}>{section.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Single Image */}
          {/* {section.image && (
            <div className="tp-project-details-3-thumb mb-120" id={index === 0 ? "xyz" : ""}>
              <div className="container container-1560">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-project-details-3-thumb-box">
                      <Image
                        data-speed=".8"
                        src={section.image}
                        alt="portfolio-section-img"
                        width={1920}
                        height={1080}
                        style={{ width: "100%", height: "100%", aspectRatio: '1.95 / 1' }}
                        // objectFit='fill'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}

          {/* Two Images */}
          {section.images && (
            <div className="mb-90">
              <div className="container">
                <div className="row">
                  {section.images.map((obj, imgIdx) => (
                    <div className={`col-lg-6 ${imgIdx > 0 && 'd-none d-lg-block'}`} key={imgIdx}>
                      <div className="mb-30 text-center">
                        {obj.type === 'image' && (
                          <Image
                            data-speed=".8"
                            src={obj.src}
                            alt="portfolio-section-img"
                            width={500}
                            height={680}
                            style={{ aspectRatio: '0.74 / 1' }}
                          />
                        )} 
                        {obj.type === 'video' && (
                          <video
                            src={obj.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            width={500}
                            height={680}
                            style={{ aspectRatio: '0.74 / 1' }}
                          ></video>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
                    <FooterOne />
    </>
  );
}
