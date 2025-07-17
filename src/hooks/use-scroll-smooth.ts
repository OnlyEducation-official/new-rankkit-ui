"use client";
import { gsap } from "gsap";
import { useState } from "react";
import { ScrollSmoother } from "@/plugins";
import { useGSAP } from "@gsap/react";

export default function useScrollSmooth() {
  const [isScrollSmooth, setIsScrollSmooth] = useState<boolean>(true);

  useGSAP(() => {
    // Kill any existing smoother instance before creating new one
    if (ScrollSmoother.get()) {
      ScrollSmoother.get().kill();
    }

    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (smoothWrapper && smoothContent && isScrollSmooth) {
      gsap.config({ nullTargetWarn: false });

      const smoother = ScrollSmoother.create({
        wrapper: smoothWrapper,
        content: smoothContent,
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      // Force scroll to top to fix jump-to-bottom bug
      smoother.scrollTo(0, false);
    }
  }, []);
}
