"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import useSticky from "@/hooks/use-sticky";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import image from "@/assets/img/logo/image.png";

const HeaderOne = () => {
  const { sticky, headerRef, headerFullWidth } = useSticky();
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="tp-header-height" ref={headerRef}>
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-mob-space tp-transparent pl-60 pr-60 z-index-9 ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="tp-header-logo">
                  <Link className="logo-1 w-full" href="/">
                    <Image
                      src={image}
                      alt="logo"
                      width={300}
                      height={150}
                      className="logo-main-img"
                    />
                  </Link>
                  <Link className="logo-2" href="/">
                    <Image
                      src="https://only-education-strapi-media.s3.ap-south-1.amazonaws.com/logo_rankkit_final_new_6a043d8af6.svg"
                      alt="logo"
                      width={85}
                      height={26}
                      className="logo-sticky-img"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 d-none d-xl-block">
                <div className="tp-header-menu header-main-menu text-center">
                  <nav className="tp-main-menu-content">
                    {/* header menus */}
                    <HeaderMenus />
                    {/* header menus */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg col-6">
                <div className="tp-header-bar text-end">
                  <button
                    className="tp-offcanvas-open-btn"
                    onClick={() => setOpenOffCanvas(true)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffCanvas}
      />
      {/* off canvas */}
    </>
  );
};

export default HeaderOne;
