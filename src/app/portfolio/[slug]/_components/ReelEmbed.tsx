// components/InstagramEmbed.tsx
"use client";
import React, { useEffect } from "react";

const InstagramEmbed = ({instagramLink}: {instagramLink: string}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "true");
    script.onload = () => {
      // @ts-ignore
      if (window.instgrm) window.instgrm.Embeds.process();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container my-4">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={instagramLink}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "658px",
          minWidth: "326px",
          padding: "0",
          width: "calc(100% - 2px)",
          height: "revert-layer"
        }}
      >
        {/* <a

        
          href="https://www.instagram.com/reel/DBtYob0McaU/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View this post on Instagram
        </a> */}
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
