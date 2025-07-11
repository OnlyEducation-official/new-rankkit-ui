import React from "react";
import Image from "next/image";

// images
import sv_1 from "../../../../../public/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "../../../../../public/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "../../../../../public/assets/img/inner-service/sercive-details/sv-details-3.jpg";
import { DataContentType } from "../page";

export default function ServiceDetailsArea({data}: {data: DataContentType}) {
  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                {data?.hero?.tagline || 'Design Studio'}
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                {/* Logo and branding */}
                {data?.hero?.heading}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim fs-5">
                  {data?.hero?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={data?.coverImg}
                  alt="service-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">
                  {data?.features?.description}
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {data?.features?.services?.map((ele) => (
                    <li key={ele.title}>
                      <p className="m-0" style={{ color: '#1E1E1E' }}>{ele?.title}</p>
                      <p className="m-0" style={{ color: '#5d5d63' }}>{ele?.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={data?.features?.featureImg}
                  alt="service-img"
                  style={{ aspectRatio: 1 / 1.618, width: '70%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container">
        <div className="row d-flex">
          <div className="col-xl-5 col-lg-5 order-2 order-lg-0">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb ">
                <Image
                  data-speed="0.4"
                  src={data?.whyChooseUs?.characteristicsImg}
                  alt="service-img"
                  style={{ aspectRatio: 1 / 1.618, width: '70%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              {/* <div className="service-details__left-text pb-20 service-details__banner-text">
                <p className="text-1 tp_title_anim fs-1">
                 Why Choose Rankkit!
                </p>
                <p>
                  {data?.whyChooseUs?.description}
                </p>
              </div> */}
              <div className="service-details__fea-list">
                <ul>
                  {data?.whyChooseUs?.characteristics?.map((ele) => (
                    <li key={ele.title}>
                      <p className="m-0" style={{ color: '#1E1E1E' }}>{ele?.title}</p>
                      <p className="m-0" style={{ color: '#5d5d63' }}>{ele?.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
      {/*  */}
    </div>
  );
}
