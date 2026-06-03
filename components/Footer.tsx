"use client";

import { motion } from "framer-motion";

export default function Footer() {
return (
<footer
className="
mt-32


    border-t
    border-white/10

    bg-black/20
    backdrop-blur-xl
  "
>
  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="text-center">

      <img
        src="/monarch-logo.png"
        alt="Project Monarch"
        className="h-20 mx-auto mb-6"
      />

      <h2
        className="
          text-3xl
          md:text-4xl
          font-black
        "
      >
        PROJECT
        <span className="text-pink-600">
          {" "}MONARCH
        </span>
      </h2>

      <p
        className="
          mt-4
          text-white/70
          max-w-xl
          mx-auto
        "
      >
        Building a competitive esports
        organization focused on growth,
        teamwork, and long-term success.
      </p>

      {/* Social Icons */}

      <div
        className="
          flex
          justify-center
          gap-5
          mt-10
        "
      >
        <a
          href="https://discord.gg/UhE2nNRCR"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group

            w-14
            h-14

            flex
            items-center
            justify-center

            rounded-2xl

            bg-white/5
            border
            border-white/10

            transition-all
            duration-300

            hover:scale-110
            hover:border-pink-500/50
            hover:bg-pink-500/10
            hover:shadow-[0_0_25px_rgba(224,0,90,0.25)]
          "
        >
          <img
            src="/discord.svg"
            alt="Discord"
            className="
              w-6
              h-6

              opacity-80

              transition-all
              duration-300

              group-hover:opacity-100
            "
          />
        </a>

        <a
          href="https://www.instagram.com/pm_kaiju/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group

            w-14
            h-14

            flex
            items-center
            justify-center

            rounded-2xl

            bg-white/5
            border
            border-white/10

            transition-all
            duration-300

            hover:scale-110
            hover:border-pink-500/50
            hover:bg-pink-500/10
            hover:shadow-[0_0_25px_rgba(224,0,90,0.25)]
          "
        >
          <img
            src="/instagram.svg"
            alt="Instagram"
            className="
              w-6
              h-6

              opacity-80

              transition-all
              duration-300

              group-hover:opacity-100
            "
          />
        </a>
      </div>

      {/* Navigation */}

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-8
          mt-12
        "
      >
        <a
          href="#about"
          className="
            text-white/70
            hover:text-pink-500
            transition
          "
        >
          About
        </a>

        <a
          href="#stats"
          className="
            text-white/70
            hover:text-pink-500
            transition
          "
        >
          Records
        </a>

        <a
          href="#roster"
          className="
            text-white/70
            hover:text-pink-500
            transition
          "
        >
          Roster
        </a>

        <a
          href="#media"
          className="
            text-white/70
            hover:text-pink-500
            transition
          "
        >
          Media
        </a>

        <a
          href="#join"
          className="
            text-white/70
            hover:text-pink-500
            transition
          "
        >
          Recruitment
        </a>
      </div>

      {/* Watermark */}

      <motion.h1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 1,
        }}
        className="
          mt-20

          text-6xl
          md:text-8xl

          font-black

          text-white/[0.03]

          select-none
          pointer-events-none
        "
      >
        PROJECT MONARCH
      </motion.h1>

      {/* Copyright */}

      <div className="mt-8">

        <p className="text-white/40">
          © 2026 Project Monarch
        </p>

        <p className="text-white/25 text-sm mt-2">
          Lead • Protect • Fight • Dominate
        </p>

      </div>

    </div>

  </div>
</footer>


);
}
