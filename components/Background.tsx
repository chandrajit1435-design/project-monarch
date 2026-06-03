"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
const [offset, setOffset] = useState({
x: 0,
y: 0,
});

useEffect(() => {
const handleMouseMove = (e: MouseEvent) => {
const x =
(e.clientX - window.innerWidth / 2) / 30;


  const y =
    (e.clientY - window.innerHeight / 2) / 30;

  setOffset({ x, y });
};

window.addEventListener(
  "mousemove",
  handleMouseMove
);

return () => {
  window.removeEventListener(
    "mousemove",
    handleMouseMove
  );
};


}, []);

return ( <div className="fixed inset-0 -z-10 overflow-hidden">


  <motion.img
    src="/monarch-banner.png"
    alt=""
    animate={{
      x: offset.x,
      y: offset.y,
      scale: 1.08,
    }}
    transition={{
      type: "spring",
      stiffness: 25,
      damping: 20,
    }}
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60" />

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-pink-900/20
      via-black/20
      to-black
    "
  />

</div>


);
}
