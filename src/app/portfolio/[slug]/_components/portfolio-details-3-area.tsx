'use client';

import React from 'react';
import portfolioData from './portfolio.json';
import { scroller } from 'react-scroll';
import { Leaf, ScrollDownTwo, UpArrowFour } from '@/components/svg';
import Image from 'next/image';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { useGSAP } from '@gsap/react';
import { charAnimation, titleAnimation } from '@/utils/title-animation';
import { projectThreeAnimation } from '@/utils/project-anim';

type Props = {
  project: {
    title: string;
    website: string;
    banner: string;
    sections: {
      heading: string;
      description: string;
      image?: string;
      images?: string[];
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
      <div className="tp-project-details-3-full-width-thumb mb-120">
        <Image data-speed=".8" src={project.banner} alt="port-img" width={1920} height={1080} />
      </div>

      {/* Sections */}
      {project.sections.map((section, index) => (
        <div key={index}>
          <div className="showcase-details-2-area pb-120">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                    <h4 className="showcase-details-2-section-title tp-char-animation">
                      {section.heading}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf /> An introduction
                    </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right tp_title_anim">
                    <p>{section.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Single Image */}
          {section.image && (
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
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Two Images */}
          {section.images && (
            <div className="tp-project-details-3-thumb mb-90">
              <div className="container">
                <div className="row">
                  {section.images.map((img, imgIdx) => (
                    <div className="col-xl-6" key={imgIdx}>
                      <div className="tp-project-details-3-thumb-box mb-30">
                        <Image
                          className="w-100"
                          src={img}
                          alt={`section-img-${imgIdx}`}
                          width={960}
                          height={540}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
