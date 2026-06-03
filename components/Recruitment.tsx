"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Recruitment() {
return ( 
<Reveal>
<section
   id="join"
   className="py-32 px-6"
 > <div className="max-w-6xl mx-auto">


    <div className="text-center mb-16">

      <p
        className="
          uppercase
          tracking-[0.4em]
          text-pink-500
          mb-4
        "
      >
        Recruitment
      </p>

      <h2
        className="
          text-5xl
          md:text-6xl
          font-black
        "
      >
        JOIN THE
        <span className="text-pink-500">
          {" "}KINGDOM
        </span>
      </h2>

      <p
        className="
          mt-6
          text-white/80
          max-w-2xl
          mx-auto
        "
      >
        Project Monarch is searching for one final
        player to complete the starting Valorant
        roster.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      <motion.div
        whileHover={{ y: -6 }}
        className="
          rounded-3xl
          border
          border-pink-500/20
          bg-black/30
          backdrop-blur-xl
          p-10

          transition-all
          duration-300

          hover:border-pink-500/40
          hover:shadow-[0_0_40px_rgba(224,0,90,0.15)]
        "
      >
        <p
          className="
            uppercase
            tracking-[0.25em]
            text-pink-500
            mb-6
          "
        >
          Roster Status
        </p>

        <div className="flex gap-3 mb-8">
          <div className="h-3 flex-1 rounded-full bg-pink-500" />
          <div className="h-3 flex-1 rounded-full bg-pink-500" />
          <div className="h-3 flex-1 rounded-full bg-pink-500" />
          <div className="h-3 flex-1 rounded-full bg-pink-500" />
          <div className="h-3 flex-1 rounded-full bg-white/15" />
        </div>

        <h3 className="text-6xl font-black">
          4 / 5
        </h3>

        <p className="text-white/70 mt-2">
          Starting Roster Filled
        </p>

        <div className="mt-10">

          <div className="flex justify-between py-3 border-b border-white/10">
            <span>Flex</span>
            <span className="text-green-400">
              Filled
            </span>
          </div>

          <div className="flex justify-between py-3 border-b border-white/10">
            <span>Duelist</span>
            <span className="text-green-400">
              Filled
            </span>
          </div>

          <div className="flex justify-between py-3 border-b border-white/10">
            <span>Controller</span>
            <span className="text-green-400">
              Filled
            </span>
          </div>

          <div className="flex justify-between py-3 border-b border-white/10">
            <span>Sentinel</span>
            <span className="text-green-400">
              Filled
            </span>
          </div>

          <div className="flex justify-between py-3">
            <span>Initiator</span>
            <span className="text-pink-500 font-semibold">
              Open
            </span>
          </div>

        </div>
      </motion.div>

      <motion.div
        whileHover={{ y: -6 }}
        className="
          rounded-3xl
          border
          border-white/10
          bg-black/30
          backdrop-blur-xl
          p-10

          transition-all
          duration-300

          hover:border-pink-500/40
          hover:shadow-[0_0_40px_rgba(224,0,90,0.15)]
        "
      >
        <p
          className="
            uppercase
            tracking-[0.25em]
            text-pink-500
            mb-6
          "
        >
          Final Position
        </p>

        <h3 className="text-5xl font-black">
          Initiator
        </h3>

        <p
          className="
            mt-6
            text-white/70
            leading-relaxed
          "
        >
          We are looking for a dedicated player
          who values communication, consistency,
          and long-term growth. If you're looking
          to help build something from the ground
          up, we'd love to hear from you.
        </p>

        <div className="mt-10 space-y-4">

          <div className="flex items-center gap-3">
            <span className="text-pink-500">✓</span>
            <span>Strong communication</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-pink-500">✓</span>
            <span>Consistent availability</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-pink-500">✓</span>
            <span>Team-first mindset</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-pink-500">✓</span>
            <span>Willingness to improve</span>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <a
            href="https://forms.gle/A4Lcx86RHnoR8VjY7"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              text-center

              px-8
              py-4

              rounded-2xl

              bg-pink-600

              font-semibold

              transition-all
              duration-300

              hover:bg-pink-500
              hover:scale-105

              hover:shadow-[0_0_40px_rgba(224,0,90,0.4)]
            "
          >
            Apply Now
          </a>

          <a
            href="https://discord.gg/UhE2nNRCR"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              text-center

              px-8
              py-4

              rounded-2xl

              border
              border-white/20

              backdrop-blur-md

              transition-all
              duration-300

              hover:border-pink-500/50
              hover:scale-105
              hover:bg-white/5
            "
          >
            Join Discord
          </a>

        </div>

      </motion.div>

    </div>

  </div>
</section>
</Reveal>

);
}
