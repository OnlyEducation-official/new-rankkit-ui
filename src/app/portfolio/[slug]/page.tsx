import React from 'react';
import portfolioData from '../[slug]/_components/portfolio.json';
import PortfolioDetailsThreeArea from './_components/portfolio-details-3-area';

export type projectType = {
    title: string;
    website: string;
    banner: string;
    bannerVideo?: string;
    sections: {
      heading: string;
      description: string;
      image?: string;
      images: {
        type: 'image' | 'video';
        src: string;
      }[];
      tagline?: string;
    }[];
  };

// get project based on slug
export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = portfolioData.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <PortfolioDetailsThreeArea project={project as projectType} />;
}
