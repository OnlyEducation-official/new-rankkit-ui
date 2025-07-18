// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// // service images
// import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
// import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
// import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
// import s_4 from "@/assets/img/home-01/service/service-icon-4.png";

// // service data
// const service_data = [
//   {
//     id: 1,
//     title: "VIDEO CREATION",
//     desc: "Every frame is planned with intent. From scripting to final edit, we design stories that move your audience and your brand.",
//     icon: s_1,
//   },
//   {
//     id: 2,
//     title: "ART DIRECTION",
//     desc: "More than just visuals, it’s how ideas feel. We guide the creative energy to align with your brand’s soul and strategy.",
//     icon: s_2,
//   },
//   {
//     id: 3,
//     title: "WEB DESIGN",
//     desc: "We don’t just build websites. We create experiences that are functional, beautiful, and built to keep users engaged.",
//     icon: s_3,
//   },
//   {
//     id: 4,
//     title: "BRAND STRATEGY",
//     desc: "Smart thinking meets sharp positioning. We map your voice, vision, and value to a brand blueprint that actually works.",
//     icon: s_4,
//   },
// ];

// const ServiceOne = () => {
//   return (
//     <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
//       <div className="container container-1630">
//         <div className="row">
//           <div className="col-xl-6 col-lg-6">
//             <div className="tp-service-title-box p-relative">
//               <h4 className="tp-section-title tp_fade_bottom">
//                 Thoughtful
//                 <br />
//                 <span>Process</span>
//               </h4>
//             </div>
//             <div className="tp-service-left-btn tp-btn-bounce">
//               <Link className="tp-btn-border" href="/services">
//                 <span className="tp-btn-border-wrap">
//                   <span className="text-1">See All Services</span>
//                   <span className="text-2">See All Services</span>
//                 </span>
//               </Link>
//             </div>
//           </div>
//           <div className="col-xl-6 col-lg-6">
//             <div className="tp-service-right-wrap">
//               {service_data.map((s, i) => (
//                 <div
//                   key={s.id}
//                   className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
//                 >
//                   <div className="tp-service-icon">
//                     <Image src={s.icon} alt="icon" style={{ height: "auto" }} />
//                   </div>
//                   <div className="tp-service-content">
//                     <h4 className="tp-service-title-sm order-0">
//                       <Link href="/services">{s.title}</Link>
//                     </h4>
//                     <p className="order-1">{s.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceOne;






import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/home-03/service/sv-icon-1.png';

const service_data = [
  {
    id: 1,
    title: "Web Development",
    desc: "We create custom websites that are tailored to your business goals. Whether it’s a landing page, corporate site, or web app, we ensure performance, security, and seamless user experience.",
    category: ["E-commerce", "Ui/ UX", "Prototyping"],
    link:"/services/web-development"
  },
  {
    id: 4,
    title: "CreatorNest",
    desc: "CreatorNest is our platform designed for content creators, influencers, and artists to manage their brand, monetize their audience, and collaborate creatively.",
    category: [ "Portfolio Setup", "Brand Creator", "Monetization "],
    link:"/services/creator-nest"
  },
  {
    id: 2,
    title: "Branding",
    desc: "From logos to complete brand systems, we craft compelling visuals that express your identity and connect with your audience on every platform.",
    category: ["Motion Graphics", "Animations", "Marketing "],
    link:"/services/Branding-Multimedia-Designing"
  },
  {
    id: 3,
    title: "Media Production",
    desc: "We produce high-quality visual and audio content that captures attention and communicates your brand message across multiple platforms.",
    category: ["Podcast Editing", "Video Production", "Photography"],
    link:"/services/media-production"
  },
  {
    id: 5,
    title: "SEO Services",
    desc: "Our SEO experts optimize your online presence to drive organic traffic, improve ranking, and enhance user engagement through on-page and off-page strategies.",
    category: [ "SEO Audits", "Link Building", "Keyword Research "],
    link:"/services/seo-services"
  },
  {
    id: 6,
    title: "Digital Marketing",
    desc: "We connect your brand with the right audience using data-driven campaigns, helping you reach your marketing goals through effective online channels.",
    category: [ "Email Marketing", "Paid Advertising", "Social Media "],
    link:"/services/digital-marketing"
  },
];
export default function ServiceOne() {
  
  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <div className="tp-service-3-title-box mb-60 p-relative">
                <div className="tp-service-3-icon">
                  <Image src={icon} alt="icon" />
                </div>
                <span className="tp-section-subtitle-2 tp_fade_bottom">
                  <span>
                    <FirstBracket />
                  </span>
                  <span className="tp-subtitle-text tp_text_invert">
                    Our approach
                  </span>
                  <span>
                    <FirstBracketTwo />
                  </span>
                </span>
                <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                  Creative <br /> development studio
                </h4>
              </div>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div className="hover-bg tp-btn-zikzak-sm">
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom container">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href={`${item.link}`} className="">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  <div className="tp-service-3-category">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                 href={`${item.link}`}
                  >
                    <span className="zikzak-content" style={{ color: "#0b0b63 !important" }}>
                      See <br /> Details
                      <RightArrow clr="#0b0b63" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
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

