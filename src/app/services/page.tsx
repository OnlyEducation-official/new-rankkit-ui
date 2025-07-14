"use client";
import { gsap } from "gsap";
import React from "react";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import ServiceHero from "@/components/service/service-hero";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";

// animation
import Service from "@/pages/service/service";
import { ServiceItems } from "@/components/service/service-five";

const ServiceMain = () => {
  return (
      <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* service hero */}
            <ServiceHero />
            {/* service hero */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        Services
                      </span>
                      <h4 className="tp-service-5-title">
                        We strongly believe that only design reinforced by{" "}
                        <br />
                        strategy can provide real results.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="">
                  <ServiceItems />

                </div>
              </div>
                  <Service />
            </div>

            {/* brand area */}
            <div className="tp-brand-4-area pt-120 pb-120">
              <div className="container">
                <div className="row gx-0">
                  {/* <BrandItems /> */}
                </div>
              </div>
            </div>
            {/* brand area */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

        </div>
      </div>
      </>
  );
};

export default ServiceMain;
