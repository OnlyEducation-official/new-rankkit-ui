// 'use client';

import React from 'react'
import SingleServicePage from './_components/Index'
import { StaticImageData } from 'next/image';
import coverImg from "../../../../public/assets/img/inner-service/sercive-details/web_service_cover2.jpg";
import web_service_1 from "../../../../public/assets/img/inner-service/sercive-details/web_service_1.jpg";
import web_service_2 from "../../../../public/assets/img/inner-service/sercive-details/web_service_2.jpg";
import digital_marketing_cover from "../../../../public/assets/img/inner-service/sercive-details/digital_marketing.png";
import digi_mark_social_media from "../../../../public/assets/img/inner-service/sercive-details/digi_mark_social_media.jpg";
import digi_mark_social_media_2 from "../../../../public/assets/img/inner-service/sercive-details/digi_mark_social_media_3.jpg";
import wordpress_cover from "../../../../public/assets/img/inner-service/sercive-details/wordpress_cover.png";
import wordpress_1 from "../../../../public/assets/img/inner-service/sercive-details/wordpress_1.png";
import wordpress_2 from "../../../../public/assets/img/inner-service/sercive-details/wordpress_2.png";
import digimark_n1 from "../../../../public/assets/img/inner-service/sercive-details/digi_mark_n1.jpg";
import branding_1 from "../../../../public/assets/img/inner-service/sercive-details/branding_1.png";
import branding_cover from "../../../../public/assets/img/inner-service/sercive-details/branding_cover.png";
import seo_1 from "../../../../public/assets/img/inner-service/sercive-details/seo_1.png";
import seo_2 from "../../../../public/assets/img/inner-service/sercive-details/seo_2.png";
import seo_cover from "../../../../public/assets/img/inner-service/sercive-details/seo_cover.png";
import branding_2 from "../../../../public/assets/img/inner-service/sercive-details/branding_2.png";
import media_cover from "../../../../public/assets/img/inner-service/sercive-details/media_cover.png";
import media_1 from "../../../../public/assets/img/inner-service/sercive-details/media_1.png";
import media_2 from "../../../../public/assets/img/inner-service/sercive-details/media_2.png";
import nest_cover from "../../../../public/assets/img/inner-service/sercive-details/nest_cover.png";
import nest_1 from "../../../../public/assets/img/inner-service/sercive-details/nest_1.png";
import nest_2 from "../../../../public/assets/img/inner-service/sercive-details/nest_2.png";
import { notFound } from 'next/navigation';

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
        characteristics: ServiceType[];
        characteristicsImg: StaticImageData;
    };
}

// Ready
const creatorNest: DataContentType = {
    hero: {
        tagline: 'Marketing Agency',
        heading: 'CreatorNest',
        description: `Turn your content into a career with CreatorNest — from niche discovery and platform strategy to studio shoots, monetization funnels, and brand deals, we help you grow, stand out, and earn as a full-time creator.`,
    },
    coverImg: nest_cover,
    features: {
        description: `Explore our all-in-one creator enablement program — designed to support influencers with branding, content, collaborations, and monetization so they can build authentic influence and unlock consistent revenue streams.`,
        services: [
            {
                title: 'Creator Development & Branding Strategy:',
                description: 'We help aspiring creators discover their niche, craft their personal brand, and define their unique online voice—setting the foundation for long-term audience growth.'
            },
            {
                title: 'Platform Strategy & Optimization:',
                description: 'From Instagram and YouTube to LinkedIn and Threads, we create personalized platform strategies—complete with content calendars, hashtags, posting schedules, and growth frameworks.'
            },
            {
                title: 'Content Planning & Scripting:',
                description: 'Our creative team works with you to develop a weekly content pipeline—scripts, hooks, visuals, and captions tailored to your niche and platform algorithm.'
            },
            {
                title: 'Studio Access & Professional Shoots:',
                description: 'Access RankKit’s fully-equipped production studio for high-quality photo and video shoots. We handle lighting, framing, editing, and post-production to give you content that stands out.'
            },
            {
                title: 'Influencer Growth Funnels:',
                description: `We set up creator funnels—from follower acquisition to DMs, email lists, and community building—so you're not just getting views, but building a loyal fanbase.`
            },
        ],
        featureImg: nest_1,
    },
    whyChooseUs: {
        characteristics: [
            {
                title: 'Monetization Roadmap:',
                description: 'We map out monetization pathways—brand deals, affiliate marketing, digital product sales, UGC gigs, and subscriptions—based on your audience size and content style.'
            },
            {
                title: 'Collaboration & Network Growth:',
                description: 'Get connected to like-minded creators, early-stage brands, and collaboration opportunities that accelerate your credibility and content visibility.'
            },
            {
                title: 'Brand Pitch Decks & Media Kits:',
                description: 'We design professional influencer decks and media kits that help you pitch yourself to agencies, platforms, and sponsors with authority.'
            },
            {
                title: 'Influencer Onboarding Support:',
                description: 'We guide you through agency tie-ups, brand contracts, PR deals, and ad campaign compliance to help you navigate the business side of influence.'
            },
            {
                title: 'Analytics & Performance Tracking:',
                description: 'Get monthly reports with engagement breakdowns, content performance, and audience insights to optimize future content and growth strategies.'
            },
        ],
        characteristicsImg: nest_2,
    },
};

// Ready
const mediaProduction: DataContentType = {
    hero: {
        tagline: 'Media Production Agency',
        heading: 'Media Production',
        description: `Bring your brand to life with cinematic videos, product shoots, podcasts, and short-form content — our media production services cover everything from creative direction to editing, built to engage audiences and amplify your message visually.`,
    },
    coverImg: media_cover,
    features: {
        description: `Explore our full-spectrum media production offerings — crafted to deliver stunning visual narratives through brand films, reels, motion graphics, and more, tailored for today’s multi-platform digital landscape.`,
        services: [
            {
                title: 'Brand Films & Promotional Videos:',
                description: 'Script-to-screen production of cinematic brand films, corporate promos, and ad films that connect emotionally and convert commercially.'
            },
            {
                title: 'Product Shoots & Visual Showcases:',
                description: 'High-resolution product photography and 360° video walkthroughs tailored for e-commerce, catalogues, and brand portfolios.'
            },
            {
                title: 'Reels, Shorts & Viral Content Production:',
                description: 'Short-form, platform-optimized videos for Instagram, YouTube Shorts, and Facebook Reels designed to capture attention and drive engagement.'
            },
            {
                title: 'Studio Shoots & Green Screen Filming:',
                description: 'In-house studio setups with controlled lighting, backgrounds, and chroma keying for interviews, ads, and VFX-rich content.'
            },
            {
                title: 'Event Coverage (Live & Edited):',
                description: 'Professional multi-camera coverage for launches, conferences, and celebrations with post-production highlights and trailers.'
            },
        ],
        featureImg: media_2,
    },
    whyChooseUs: {
        characteristics: [
            {
                title: 'Podcast & Webinar Production:',
                description: 'End-to-end production of audio and video podcasts, including scripting, setup, editing, branding, and distribution-ready files.'
            },
            {
                title: 'Motion Graphics & Explainer Videos:',
                description: 'Animated videos with voiceovers, custom illustrations, and kinetic typography to simplify complex ideas and boost conversions.'
            },
            {
                title: 'Creative Direction & Storyboarding:',
                description: 'Concept ideation, scripting, and moodboarding to align your visual content with brand tone, message, and target audience.'
            },
            {
                title: 'Post-Production & Video Editing:',
                description: 'Seamless editing, color grading, transitions, SFX, and royalty-free music integration using Premiere Pro, DaVinci Resolve, and After Effects.'
            },
            {
                title: 'YouTube Channel Branding & Management:',
                description: 'Thumbnails, intros, outros, metadata optimization, and publishing calendars to grow your YouTube presence strategically.'
            },
        ],
        characteristicsImg: media_1,
    },
};

// Ready
const seo: DataContentType = {
    hero: {
        tagline: 'Digital Marketing Agency',
        heading: 'SEO Services',
        description: `Drive long-term organic growth with our end-to-end SEO services — from technical audits and keyword strategy to link building, content optimization, and local SEO — all designed to boost rankings, traffic, and conversions sustainably.`,
    },
    coverImg: seo_cover,
    features: {
        description: `Explore our comprehensive SEO solutions built to elevate your search performance — combining deep technical expertise, content strategy, and white-hat practices to improve visibility, rankings, and measurable online impact.`,
        services: [
            {
                title: 'Comprehensive SEO Audit & Strategy:',
                description: 'In-depth technical, on-page, and off-page audits to identify gaps, backed by a custom SEO roadmap aligned with your business goals.'
            },
            {
                title: 'On-Page SEO Optimization:',
                description: 'We fine-tune meta titles, descriptions, headings, content structure, image alt tags, internal linking, and keyword density for maximum visibility.'
            },
            {
                title: 'Technical SEO Services:',
                description: 'Optimization of site speed, mobile responsiveness, XML sitemaps, robots.txt, canonical tags, and structured data for flawless crawling and indexing.'
            },
            {
                title: 'Local SEO & Google Business Profile Optimization:',
                description: 'Improve your visibility in local search results with accurate NAP citations, local backlinks, geo-targeted content, and GBP enhancements.'
            },
            {
                title: 'Keyword Research & Competitor Analysis:',
                description: 'Identify high-traffic, low-competition keywords with strategic insights into what your competitors are ranking for using tools like SEMrush, Ahrefs, and Google Keyword Planner.'
            },
        ],
        featureImg: seo_1,
    },
    whyChooseUs: {
        characteristics: [
            {
                title: 'High-Quality Link Building:',
                description: 'Secure white-hat backlinks from reputable websites through guest posting, niche directories, press releases, and outreach campaigns.'
            },
            {
                title: 'Content Optimization & Strategy:',
                description: 'Update and repurpose existing content, implement topic clusters, and produce new keyword-rich pages that rank and convert.'
            },
            {
                title: 'E-A-T & Core Web Vitals Compliance:',
                description: 'Boost your Expertise, Authoritativeness, and Trustworthiness along with Lighthouse-based performance improvements.'
            },
            {
                title: 'Monthly SEO Reporting & Analytics:',
                description: 'Transparent reports including keyword positions, traffic sources, bounce rates, and actionable next-step strategies.'
            },
            {
                title: 'Penalty Recovery & SEO Consulting:',
                description: 'Recover from Google algorithm penalties or manual actions with targeted audits, disavow files, and long-term corrective plans.'
            },
        ],
        characteristicsImg: seo_2,
    }
};

// Ready
const wordPress: DataContentType = {
    hero: {
        tagline: 'Design Studio',
        heading: 'WordPress Development',
        description: `We build high-performance, SEO-optimized WordPress websites tailored to your business — from custom themes and WooCommerce stores to multilingual setups, plugin development, and blazing-fast speed, all crafted for scalability, flexibility, and lasting impact.`,
    },
    coverImg: wordpress_cover,
    features: {
        description: `Explore our end-to-end WordPress development services — designed to deliver fast, secure, and scalable websites that look great, rank well, and function flawlessly across e-commerce, blogs, portfolios, and enterprise solutions.`,
        services: [
            {
                title: 'Custom WordPress Website Design & Build:',
                description: 'We develop fully customized WordPress sites with tailored themes, clean layouts, and performance-focused functionality no bloated page builders.'
            },
            {
                title: 'Theme Development & Customization:',
                description: 'Whether it’s building a theme from scratch or modifying existing ones (Astra, GeneratePress, Hello Elementor), we align design with your brand’s identity.'
            },
            {
                title: 'Plugin Development & Integration:',
                description: 'We create and integrate powerful plugins that extend your site’s capabilities, from booking systems to CRM syncing and more.'
            },
            {
                title: 'WooCommerce Store Setup:',
                description: 'Robust e-commerce solutions powered by WooCommerce, including payment gateways, cart customizations, shipping integrations, and coupon systems.'
            },
            {
                title: 'Blog, Portfolio & News Website Development:',
                description: 'Feature-rich templates designed for bloggers, publishers, and creative professionals looking for clean content-focused layouts.'
            },
        ],
        featureImg: wordpress_2,
    },
    whyChooseUs: {
        characteristics: [
            {
                title: 'Multilingual & Multi-site WordPress Solutions:',
                description: 'BuiExpand globally with WPML or Polylang-based multilingual capabilities, or manage multiple sites with a single WordPress Multisite installation.'
            },
            {
                title: 'SEO-Ready Setup:',
                description: 'Our WordPress builds include structured metadata, XML sitemaps, schema, optimized slugs, and fast-loading themes to maximize Google visibility.'
            },
            {
                title: 'Security, Backup & Maintenance:',
                description: 'Regular updates, firewall configuration, brute-force protection, automated backups, and uptime monitoring ensure site integrity.'
            },
            {
                title: 'Speed Optimization:',
                description: 'Implement caching, lazy loading, image compression, and database optimization to ensure blazing-fast page speeds.'
            },
            {
                title: 'Elementor, Gutenberg & Page Builder Expertise:',
                description: 'Whether you prefer block editing or visual drag-and-drop, we optimize performance and design with your preferred builder.'
            },
        ],
        characteristicsImg: wordpress_1,
    }
};

// Ready
const branding: DataContentType = {
    hero: {
        tagline: 'Design Studio',
        heading: 'Branding & Multimedia Designing',
        description: `Craft powerful brand identities with our end-to-end Branding & Multimedia Design services — from logos and packaging to motion graphics, pitch decks, and social media creatives — designed to elevate your visual presence across all touchpoints.`,
    },
    coverImg: branding_cover,
    features: {
        description: `Discover a full suite of creative services tailored to build and scale your brand — from strategic logo design to immersive videos, social creatives, packaging, and UI design that drives engagement and recall.`,
        services: [
            {
                title: 'Logo & Visual Identity Design:',
                description: 'From logos to brand colors, typography, and design systems we create identities that are timeless, memorable, and scalable across platforms.'
            },
            {
                title: 'Corporate Branding & Brand Guidelines:',
                description: 'Develop a consistent brand voice and visual system with detailed brand books including tone, color usage, iconography, and layouts.'
            },
            {
                title: 'Packaging & Print Design:',
                description: 'Visually compelling packaging, brochures, business cards, and offline creatives that align with your brand and stand out in the market.'
            },
            {
                title: 'Presentation & Pitch Deck Design:',
                description: 'Investor-ready and client-facing pitch decks, reports, and presentations designed to communicate your value with clarity and impact.'
            },
            {
                title: 'Digital Assets & Social Media Creatives:',
                description: 'Scroll-stopping visuals, banners, thumbnails, and templates optimized for platforms like Instagram, Facebook, LinkedIn, and YouTube.'
            },
        ],
        featureImg: branding_1,
    },
    whyChooseUs: {
        characteristics: [
            {
                title: 'Video Editing & Motion Graphics:',
                description: 'Professionally edited promotional videos, reels, explainer animations, and brand stories using Adobe Premiere, After Effects, and DaVinci Resolve.'
            },
            {
                title: 'UI Design for Apps & Dashboards:',
                description: 'Interface design systems for SaaS products, mobile apps, and enterprise tools blending functionality with visual appeal.'
            },
            {
                title: 'Illustration & Iconography Services:',
                description: 'Custom illustrations, icons, and vector graphics that add character and enhance user experience across your digital products.'
            },
            {
                title: 'Event Branding & Environmental Graphics:',
                description: 'Design for stalls, standees, backdrops, and event merchandise creating a cohesive brand experience during exhibitions or launches.'
            },
            {
                title: 'Multimedia Strategy Consulting:',
                description: 'We help you plan your creative direction across mediums balancing aesthetics, messaging, and user psychology for brand growth.'
            },
        ],
        characteristicsImg: branding_2,
    }
};

// Ready
const digitalMarketing: DataContentType = {
    hero: {
        tagline: 'Design Studio',
        heading: 'Digital Marketing',
        description: `Boost your brand’s visibility and conversions with full-funnel digital marketing — from SEO and Google Ads to email automation, influencer campaigns, and AI-driven strategies, all backed by real-time analytics and measurable business growth.`,
    },
    coverImg: digital_marketing_cover,
    features: {
        description: `Explore our complete suite of digital marketing services built for impact — combining strategy, content, performance ads, and automation to help your brand connect, convert, and scale across every major online platform.`,
        services: [
            {
                title: '360° Digital Marketing Strategy',
                description: 'Comprehensive strategies that encompass all aspects of digital marketing to drive growth and engagement.'
            },
            {
                title: 'Search Engine Marketing (Google Ads)',
                description: 'Targeted advertising campaigns on Google to increase visibility and drive traffic.'
            },
            {
                title: 'Social Media Marketing (Paid & Organic)',
                description: 'Engaging social media strategies that build brand awareness and foster community.'
            },
            {
                title: 'Email Marketing & Automation',
                description: 'Personalized email campaigns that nurture leads and drive conversions.'
            },
            {
                title: 'Performance Analytics & Reporting',
                description: 'In-depth analysis of campaign performance to inform strategy and optimize results.'
            },
            {
                title: 'Influencer & Affiliate Marketing Campaigns',
                description: 'Leveraging partnerships to expand reach and drive sales.'
            },
            {
                title: `Reputation & Review Management`,
                description: 'Strategies to enhance online reputation and manage customer feedback.'
            },
        ],
        featureImg: digi_mark_social_media_2,
    },
    whyChooseUs: {
        characteristics: [
            {
                title: 'Performance-Driven',
                description: 'Our strategies are focused on delivering measurable results and ROI.'
            },
            {
                title: 'Omnichannel Expertise',
                description: 'We integrate marketing efforts across all channels for a cohesive strategy.'
            },
            {
                title: 'Industry-Specific Targeting',
                description: 'Tailored marketing approaches that resonate with your specific audience.'
            },
            {
                title: 'Real-Time Analytics & ROI Tracking',
                description: 'Continuous monitoring and optimization of campaigns for maximum impact.'
            },
            {
                title: 'Creatives ads',
                description: 'Eye-catching ad designs that capture attention and drive engagement.'
            },
            {
                title: 'Automation That Saves Time',
                description: 'Streamlined processes that enhance efficiency and reduce manual effort.'
            },
            {
                title: 'Funnel & Landing Page Optimization',
                description: 'Optimizing user journeys to increase conversions and drive sales.'
            },
        ],
        characteristicsImg: digimark_n1,
    }
};

// Ready
const webDevelopment: DataContentType = {
    hero: {
        tagline: 'Design Studio',
        heading: 'Web Development',
        description: `We build custom, scalable web solutions — from dynamic web apps and PWAs to headless CMS sites and e-commerce platforms — using modern tech stacks, secure code, and SEO-optimized architecture built to grow with your business.`,
    },
    coverImg: coverImg,
    features: {
        description: `Discover our full-stack web development services tailored to your product goals — blending performance, scalability, and clean architecture across custom apps, CMS builds, APIs, and secure e-commerce platforms.`,
        services: [
            {
                title: 'Custom Web Application Development:',
                description: 'We build dynamic, feature-rich web apps tailored to your business logic, from CRM systems to booking platforms and internal tools.'
            },
            {
                title: 'Full-Stack Development (Frontend + Backend):',
                description: 'Our developers specialize in modern tech stacks like MERN, MEAN, and LAMP, delivering complete solutions from UI to server logic.'
            },
            {
                title: 'CMS-Based Development:',
                description: 'We develop content-driven websites using WordPress, Joomla, or custom CMS solutions for easy scalability and control.',
            },
            {
                title: 'API Integration & Development:',
                description: 'Connect your platform with third-party services like payment gateways, CRMs, analytics, and social platforms with secure API integration.',
            },
            {
                title: 'Progressive Web Apps (PWAs):',
                description: 'Build web apps that behave like native mobile apps installable, offline-capable, and lightning fast.',
            },
        ],
        featureImg: web_service_1,
    },
    whyChooseUs: {
        characteristics: [
            {
                title: 'E-commerce Web Development:',
                description: 'Custom-coded or platform-based (Shopify, WooCommerce, Magento) e-commerce sites built for growth, security, and seamless transactions.'
            },
            {
                title: 'Headless Website Architecture:',
                description: 'Develop headless CMS-powered websites using Next.js or Nuxt for faster performance and flexible frontend control.'
            },
            {
                title: 'Database Architecture & Optimization:',
                description: 'We design and optimize robust databases using MySQL, PostgreSQL, MongoDB, and Firebase to support high-traffic applications.'
            },
            {
                title: 'Version Control & CI/CD Pipelines:',
                description: 'Maintain code integrity and ensure smooth deployment with Git-based workflows and automated build pipelines.'
            },
            {
                title: 'Secure, SEO-Friendly Codebase:',
                description: 'Every website we build is optimized for speed, SEO, and security following OWASP and Google PageSpeed standards.'
            },
        ],
        characteristicsImg: web_service_2,
    }
};

const serviceData: Record<string, DataContentType> = {
    "web-development": webDevelopment,
    "digital-marketing": digitalMarketing,
    "Branding-Multimedia-Designing": branding,
    "seo-services": seo,
    "wordpress-development": wordPress,
    "media-production": mediaProduction,
    "creator-nest": creatorNest,
}


export default function page({ params: {slug} }: { params: { slug: string } }) {
    return (
        serviceData[slug] ? (
            <SingleServicePage data={serviceData[slug]} />
        ) : (
            notFound()
        )
    )
}
