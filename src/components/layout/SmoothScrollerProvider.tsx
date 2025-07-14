'use client';

import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { servicePanel } from '@/utils/panel-animation';
import { charAnimation, fadeAnimation } from '@/utils/title-animation';
import { useGSAP } from '@gsap/react';
import React from 'react'

function SmoothScrollerProvider({children}: {children: React.ReactNode}) {
    useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });
  return (
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div>{children}</div>
        </div>
      </div>
  )
}

export default SmoothScrollerProvider