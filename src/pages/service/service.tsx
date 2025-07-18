import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "../../../public/assets/img/inner-service/service/web developement.jpg";
import ser_img_2 from "../../../public/assets/img/inner-service/service/branding.jpg";
import ser_img_3 from "../../../public/assets/img/inner-service/service/media.jpg";
import ser_img_4 from "../../../public/assets/img/inner-service/service/Creatornest.png";
import ser_img_5 from "../../../public/assets/img/inner-service/service/seo.jpg";
import ser_img_6 from "../../../public/assets/img/inner-service/service/digital.jpg";
import { RightArrow, ShapeTwo } from "@/components/svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Creative Studio",
    title: "Web Development",
    text: "We create custom websites that are tailored to your business goals. Whether it’s a landing page, corporate site, or web app, we ensure performance, security, and seamless user experience.",
    lists: [
      "Custom Website Development",
      "Web Application Development",
      "E-commerce Solutions",
      "Maintenance & Support",
    ],
    url: "web-development",
  },
  {
    id: 2,
    img: ser_img_4,
    subtitle: "Creative Studio",
    title: "CreatorNest",
    text: "CreatorNest is our platform designed for content creators, influencers, and artists to manage their brand, monetize their audience, and collaborate creatively.",
    lists: [
      "Creator Brand Development",
      "Monetization Strategies",
      "Digital Portfolio Setup",
      "Campaign Management",
    ],
    url: "creator-nest",
  },
  {
    id: 3,
    img: ser_img_2,
    subtitle: "Creative Studio",
    title: "Branding & Multimedia Designing",
    text: "From logos to complete brand systems, we craft compelling visuals that express your identity and connect with your audience on every platform.",
    lists: [
      "Logo & Brand Identity Design",
      "Marketing Collaterals (brochures, posters, etc.)",
      "Motion Graphics & Animations",
      "Brand Style Guidelines",
    ],
    url: "Branding-Multimedia-Designing",
  },
  {
    id: 4,
    img: ser_img_3,
    subtitle: "Creative Studio",
    title: "Media Production",
    text: "We produce high-quality visual and audio content that captures attention and communicates your brand message across multiple platforms.",
    lists: [
      "Video Production",
      "Photography Services",
      "Audio/Podcast Editing",
      "Content Scripting & Storyboarding",
    ],
    url: "media-production",
  },
  {
    id: 5,
    img: ser_img_5,
    subtitle: "Creative Studio",
    title: "SEO Services",
    text: "Our SEO experts optimize your online presence to drive organic traffic, improve ranking, and enhance user engagement through on-page and off-page strategies.",
    lists: [
      "Keyword Research & Optimization",
      "On-Page & Technical SEO",
      "SEO Audits & Reporting",
      "Link Building",
    ],
    url: "seo-services",
  },
     {
    id: 6,
    img: ser_img_6,
    subtitle: "Creative Studio",
    title: "Digital Marketing",
    text: "We connect your brand with the right audience using data-driven campaigns, helping you reach your marketing goals through effective online channels.",
    lists: [
      "Social Media Marketing",
      "Paid Advertising (Google, Meta, etc.)",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    url: "digital-marketing",
  },
  //      {
  //   id: 7,
  //   img: ser_img_4,
  //   subtitle: "Creative Studio",
  //   title: "WordPress Development",
  //   text: "We develop dynamic WordPress websites with intuitive interfaces, optimized speed, and full scalability, tailored to your content needs and business goals.",
  //   lists: [
  //     "Custom WordPress Themes",
  //     "CMS Optimization",
  //     "WooCommerce Development",
  //     "Plugin Integration & Customization",
  //   ],
  //   url: "wordpress-development",
  // },
];

export default function Service() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "100%" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href={`/services/${item.url}`}
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
