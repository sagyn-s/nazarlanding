"use client";
import React from "react";

export const Video = () => {
    return (
      <div className="h-[30rem] md:h-[50rem] w-full flex items-center justify-center relative">
        <div className="h-[20rem] md:h-[30rem] relative w-full flex items-center justify-center">
          <iframe
            width="60%"
            height="100%"
            src="https://www.youtube.com/embed/gZWNBIaZ0Jc?si=Bbf4Nob9YMcJJjfr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };