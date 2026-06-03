"use client";

import { useEffect, useState } from "react";

export default function Loader() {
const [loading, setLoading] = useState<boolean>(true);
const [fadeOut, setFadeOut] = useState<boolean>(false);

useEffect(() => {
const fadeTimer = setTimeout(() => {
setFadeOut(true);
}, 2500);


const removeTimer = setTimeout(() => {
  setLoading(false);
}, 3200);

return () => {
  clearTimeout(fadeTimer);
  clearTimeout(removeTimer);
};


}, []);

if (!loading) return null;

return (
<div
className={`         fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-black
        transition-opacity duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
> <div className="relative">


    <div
      className="
        absolute
        inset-0
        scale-150
        rounded-full
        bg-pink-600/30
        blur-3xl
        animate-pulse
      "
    />

    <img
      src="/monarch-logo.png"
      alt="Project Monarch"
      className="
        relative
        w-40
        md:w-48
        animate-pulse
      "
    />

  </div>

  <h2
    className="
      mt-8
      uppercase
      tracking-[0.4em]
      text-white/80
      text-sm
      md:text-base
    "
  >
    Entering The Kingdom
  </h2>

  <div
    className="
      mt-8
      h-[3px]
      w-64
      overflow-hidden
      rounded-full
      bg-white/10
    "
  >
    <div
      className="
        h-full
        bg-pink-600
        animate-loader
      "
    />
  </div>
</div>

);
}
