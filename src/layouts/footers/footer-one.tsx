"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerOneAnimation, footerTwoAnimation } from "@/utils/footer-anim"; 
import logo from "@/assets/img/logo/logo-white.png";

const footer_links = [
  { link: "/", title: "Home" },
  { link: "/portfolio", title: "Projects" },
  { link: "/services", title: "What we do" },

  // { link: "/blog-modern", title: "Blog" },
  { link: "/contact-us", title: "Contact" },
];
export default function FooterOne() {
  const [isActive, setIsActive] = React.useState(false);
  useEffect(() => {
    footerOneAnimation();
  }, []);
  return (
    <footer>
      {/* footer area start */}
      <div className="tp-footer-area  black-bg  d-flex flex-column justify-content-between  py-5">
        <div className="container-fluid">
          <div className="tp-footer-wrap">
            <div className="row align-items-end">
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-menu menu-anim">
                  <ul className="counter-row tp-text-anim">
                    {footer_links.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={isActive ? "" : "active"}
                      >
                        <a href={item.link}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-middle-wrap">
                  <div className="tp-footer-content">
                    <h4 className="tp-footer-big-title footer-big-text">
                      {"Let's"} Contact!
                    </h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Say hello at:
                        </h4>
                        <div className="tp-footer-widget-info">
                          <div className="tp-footer-widget-info-mail tp_fade_bottom">
                            <a href="mailto:contact@rankkit.in">
                              info@rankkit.in
                            </a>
                          </div>
                          <div className="tp-footer-widget-info-location tp_fade_bottom">
                            <a
                              href="https://www.google.com/maps/@54.581385,-101.7562167,7.5z?entry=ttu"
                              target="_blank"
                            >
                              Ambience Court, 1702-1703,
                              <br /> Phase 2, Sector 19E. <br /> San Navi
                              Mumbai, MH, India
                              <br />
                              400703
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Stalk us
                        </h4>
                        <ul className="tp-footer-widget-social">
                          <li className="tp_fade_bottom" style={{marginRight:"5px"}}>
                            <a href="https://www.facebook.com/share/16bcwx6NY3/">Facebook</a>
                          </li>
                          <li className="tp_fade_bottom">
                            <a href="https://www.instagram.com/rankkitofficial/">Instagram</a>
                          </li>
                          {/* <li className="tp_fade_bottom">
                            <a href="#">Behance</a>
                          </li>
                          <li className="tp_fade_bottom">
                            <a href="#">Dribbble</a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer area end */}

        {/* copyright area start */}
        {/* <div className="container-fluid">
          <div className="tp-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-4">
                <div className="tp-copyright-logo text-center text-md-start">
                  <Link href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-md-8">
                <div className="tp-copyright-text text-center text-md-end">
                  <p>
                    Copyright © {new Date().getFullYear()} Themepure. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* copyright area end */}
      </div>
        <div style={{ 
          textAlign: "center", 
          color: "#fff", 
          paddingBlock: "16px", 
          background: '#f02a36', 
          fontSize: "16px", 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '18px', paddingInlineEnd: '3px' }}>©</span>
           Rankkit, All Rights Reserved.
        </div>
      {/* footer area start */}
    </footer>
  );
}
