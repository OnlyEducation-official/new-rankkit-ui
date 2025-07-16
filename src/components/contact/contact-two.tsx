import React from "react";
import Image from "next/image";
import ContactForm from "../form/contact-form";
import Social from "../social/social";
import shape from "@/assets/img/inner-about/about/shape-1.png";

export default function ContactTwo() {
  return (
    <div
      style={{ height: "90vh" }}
      className="cn-contactform-area cn-contactform-style p-relative pb-100 mt-90"
    >
      <div className="h-100 w-100 d-flex flex-column flex-xl-row justify-content-center align-items-center">
        {/* Left side: Social icons (only visible on XL) */}
        <div className="ab-2-hero-social-wrap d-none d-xl-block me-5">
          <div className="ab-2-hero-social">
            <Social />
          </div>
          <div className="ab-2-hero-social-text">
            <span>Follow us</span>
          </div>
        </div>

        {/* Right side: Contact form */}
        <div className="container w-100 custom-mt-sm">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="ab-about-category-title-box mb-40 p-relative">
                <h4 className="ab-about-category-title">
                  Send a Message <br />
                  <span>Contact Us</span>
                </h4>
                <Image
                  className="ab-about-shape-1 d-none d-xl-block"
                  src={shape}
                  alt="shape"
                />
              </div>
            </div>
            <div className="col-xl-7">
              <div className="cn-contactform-wrap">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
