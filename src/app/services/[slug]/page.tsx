import React from 'react'
import SingleServicePage from './_components/Index'
import { StaticImageData } from 'next/image';
import coverImg from "../../../../public/assets/img/inner-service/sercive-details/web_service_cover2.jpg";
import web_service_1 from "../../../../public/assets/img/inner-service/sercive-details/web_service_1.jpg";
import web_service_2 from "../../../../public/assets/img/inner-service/sercive-details/web_service_2.jpg";

type ServiceType = {
    title: string;
    description: string;
};

export type DataContentType =  {
    hero: {
        tagline: string;
        heading: string;
        description: string;
    };
    coverImg: StaticImageData;
    features: {
        description: string;
        services: ServiceType[];
        featureImg: StaticImageData;
    };
    whyChooseUs: {
        description: string;
        characteristics: ServiceType[];
        characteristicsImg: StaticImageData;
    };
}

const webDesign: DataContentType = {
    hero: {
        tagline: 'Design Studio',
        heading: 'Web Designing',
        description: `Web designing is the process of creating visually appealing, user-friendly websites that offer seamless navigation and functionality. It combines creativity, layout structuring, responsive design, and user experience principles to build websites that engage and convert visitors effectively.`,
    },
    coverImg: coverImg,
    features: {
        description: `At RankKit, we create responsive, user-focused websites that combine visual appeal with functionality. Our web design services are tailored to build strong digital identities and deliver real business results.`,
        services: [
            {
                title: 'Custom Website UI/UX Design:',
                description: 'We craft visually stunning and user-centric interfaces tailored to your brand identity. Every layout is optimized for intuitive navigation and seamless user engagement.'
            },
            {
                title: 'Responsive Design Across Devices:',
                description: 'Your website will look pixel-perfect on all screen sizes mobiles, tablets, and desktops ensuring consistent user experience and higher retention.'
            },
            {
                title: 'Landing Page Design for Campaigns:',
                description: 'Conversion-focused landing pages built for product launches, ad campaigns, or lead generation with A/B tested layouts and CTA optimization.',
            },
            {
                title: 'Corporate Website Design:',
                description: 'Sleek and professional designs for businesses looking to establish credibility and authority in their domain.',
            },
            {
                title: 'Portfolio & Personal Brand Sites:',
                description: 'Clean, modern designs for artists, consultants, and professionals who want a standout online presence.',
            },
        ],
        featureImg: web_service_1,
    },
    whyChooseUs: {
        description: `We craft purposeful, scalable, and high-converting web designs tailored to your brand, industry, and growth goals.`,
        characteristics: [
            {
                title: 'Wireframing & Prototyping:',
                description: 'Before development, we deliver interactive mockups using tools like Figma or Adobe XD, giving clients clarity on functionality and flow.'
            },
            {
                title: 'Design System Creation:',
                description: 'Establish a unified brand look with custom typography, color palettes, iconography, and UI components across your digital presence.'
            },
            {
                title: 'SEO & Speed-Optimized Layouts:',
                description: 'Lightweight designs with clean code structure that prioritize performance and search engine visibility.'
            },
            {
                title: 'Accessibility Compliant Design (ADA, WCAG):',
                description: 'We ensure your website is inclusive, usable by all audiences, and compliant with accessibility standards.'
            },
            {
                title: 'Rebranding & Website Redesign:',
                description: 'Give your outdated website a modern facelift without compromising performance or SEO equity.'
            },
        ],
        characteristicsImg: web_service_2,
    }
};
// const digitalMarketingServices: DataContentType = {
//     hero: {
//         tagline: 'Design Studio',
//         heading: 'Digital Marketing',
//         description: `RankKit offers result-focused digital marketing services—covering SEO, social media, ads, email, and content. We combine smart automation, real-time analytics, and creative strategy to turn traffic into leads, and leads into lasting business growth.`,
//     },
//     coverImg: coverImg,
//     features: {
//         description: `RankKit delivers 360° digital marketing—from SEO, Google Ads, and social media to email automation, content, and influencer campaigns—powered by analytics, AI tools, and funnel strategies that drive measurable business growth.`,
//         services: [
//             '360° Digital Marketing Strategy',
//             'Search Engine Marketing (Google Ads)',
//             'Social Media Marketing (Paid & Organic)',
//             'Email Marketing & Automation',
//             'Performance Analytics & Reporting',
//             'Influencer & Affiliate Marketing Campaigns',
//             `Reputation & Review Management`,
//         ],
//         featureImg: web_service_1,
//     },
//     whyChooseUs: {
//         description: `RankKit blends performance marketing, automation, and creative execution to turn traffic into revenue with data-driven, platform-agnostic strategies.`,
//         characteristics: [
//             'Performance-Driven',
//             'Omnichannel Expertise',
//             'Industry-Specific Targeting',
//             'Real-Time Analytics & ROI Tracking',
//             'Creatives ads',
//             'Automation That Saves Time',
//             'Funnel & Landing Page Optimization',
//         ],
//         characteristicsImg: web_service_2,
//     }
// };



export default function page() {
    return (
        <SingleServicePage data={webDesign} />
    )
}
