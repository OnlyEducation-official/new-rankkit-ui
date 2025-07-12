'use client';

import React from 'react';
import { scroller } from 'react-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
// import Image from 'next/image';
// import { Leaf, ScrollDownTwo,UpArrowFour} from '@/components/svg';

// images
import full_image from '../../../../../public/assets/img/inner-project/portfolio-details-3/portfolio-img-1.jpg';
import full_image_2 from '../../../../../public/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg';
import port_img_1 from '../../../../../public/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg';
import port_img_2 from '../../../../../public/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg';
import port_img_3 from '../../../../../public/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg';
import port_img_4 from '../../../../../public/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg';
import port_img_5 from '../../../../../public/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg';
import { Leaf, ScrollDownTwo, UpArrowFour } from '@/components/svg';
import Image from 'next/image';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { useGSAP } from '@gsap/react';
import { charAnimation, titleAnimation } from '@/utils/title-animation';
import { projectThreeAnimation } from '@/utils/project-anim';

// slider images
const slider_images = [port_img_3,port_img_4,port_img_5,port_img_4];

// slider setting

export default function PortfolioDetailsThreeArea() {
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
  return (
    <>
      {/* details are */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
          <div className="container container-1560">
            <div className="row">
                <div className="col-xl-12">
                  <div className="tp-project-details-3-title-box">
                      <h2 className="tp-section-title-160 mb-50 tp-char-animation">Mockups Google Pixel</h2>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                  <div className="tp-project-details-3-scroll smooth">
                      <a onClick={scrollTo} className="pointer">
                        <span>
                            <ScrollDownTwo/>
                        </span>
                        Scroll to Explore
                      </a>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tp-project-details-3-link mt-30 text-start text-md-end">
                      <a href="#">
                        Visit  Website
                        <span>
                            <UpArrowFour/>
                        </span>
                      </a>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details are */}

      {/* full image */}
      <div className="tp-project-details-3-full-width-thumb mb-120">
          <Image data-speed=".8" src={full_image} alt="port-img" style={{ height: 'auto' }}/>
      </div>
      {/* full image */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  <div className="showcase-details-2-section-box">
                      <h4 className="showcase-details-2-section-title tp-char-animation">Daring Colors</h4>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3">
                  <div className="showcase-details-2-section-left">
                      <span className="ab-inner-subtitle mb-25">
                        <Leaf/>
                        An introduction
                      </span>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="showcase-details-2-content-right tp_title_anim">
                      <p className="pb-25">Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.</p>
                      <p>Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details area */}

    {/*details thumb */}
        <div id="xyz" className="tp-project-details-3-thumb mb-120">
          <div className="container container-1560">
            <div className="row">
                <div className="col-xl-12">
                  <div className="tp-project-details-3-thumb-box">
                    <Image data-speed=".8" src={full_image_2} alt="port-img" style={{ height: 'auto' }}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
    {/* details thumb */}

    {/* details area */}
    <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="showcase-details-2-section-title tp-char-animation">The Goal</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      An introduction
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.</p>
                    <p>Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* details area */}

    {/* details thumb */}
    <div className="tp-project-details-3-thumb mb-90">
        <div className="container">
          <div className="row">
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30">
                    <Image className="w-100" src={port_img_1} alt="port-img" style={{height:'auto'}}/>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30">
                  <Image className="w-100" src={port_img_2} alt="port-img" style={{height:'auto'}}/>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* details thumb */}

    {/* details area */}
    <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                    <h4 className="showcase-details-2-section-title tp-char-animation">The Goal</h4>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                    <span className="ab-inner-subtitle mb-25">
                      <Leaf/>
                      An introduction
                    </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                    <p className="pb-25">Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.</p>
                    <p>Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    {/* details area */}

    
    </>
  )
}
