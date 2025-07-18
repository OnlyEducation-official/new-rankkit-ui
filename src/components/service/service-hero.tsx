import React from "react";
import Image from "next/image";

// image
import services_cover from "../../../public//assets/img/inner-service/hero/services_cover.png";
// import ser_hero_shape from "../../../public//assets/img/inner-service/hero/hero-shape-1.jpg";

export default function ServiceHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
                Experience <br /> the best services.
              </h4>
              <p className="tp_fade_bottom">
                Fulfilled direction use continual set him propriety continued.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src={services_cover}
                  alt="ser_hero-img"
                  style={{height:"auto"}}
                />
              </div>
              {/* <Image
                className="sv-hero-thumb-shape d-none d-lg-block"
                src={ser_hero_shape}
                alt="ser_hero-shape"
                style={{height:"auto"}}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
