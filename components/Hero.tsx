"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {

  const [offset,setOffset] = useState({x:0,y:0});

  useEffect(()=>{

    const move=(e:MouseEvent)=>{

      const x=(e.clientX-window.innerWidth/2)/40;
      const y=(e.clientY-window.innerHeight/2)/40;

      setOffset({x,y});
    };

    window.addEventListener("mousemove",move);

    return ()=>window.removeEventListener("mousemove",move);

  },[]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <motion.img
        src="/monarch-banner.jpg"
        alt=""
        animate={{
          x:offset.x,
          y:offset.y,
          scale:1.05
        }}
        transition={{
          type:"spring",
          stiffness:30
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"/>

      <div className="relative z-10 text-center px-6">

        <motion.img
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          src="/monarch-logo.png"
          className="w-40 mx-auto mb-8"
        />

        <motion.h1
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.3}}
          className="text-7xl md:text-9xl font-black"
        >
          PROJECT
          <span className="text-pink-600"> MONARCH</span>
        </motion.h1>

        <p className="mt-6 tracking-[0.4em] uppercase text-gray-300">
          Lead • Protect • Fight • Dominate
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-pink-600 px-8 py-4 rounded-xl hover:bg-pink-500 transition">
            Join The Kingdom
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-xl backdrop-blur-md">
            Watch Highlights
          </button>

        </div>

      </div>

    </section>
  );
}