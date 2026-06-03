"use client";

import { motion } from "framer-motion";

export default function MatchCenter() {
return ( <section
   id="matches"
   className="py-24 px-6"
 > <div className="max-w-6xl mx-auto">


    <div className="text-center mb-16">

      <p className="uppercase tracking-[0.4em] text-pink-500 mb-4">
        Competitive
      </p>

      <h2 className="text-5xl font-black">
        MATCH CENTER
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="
          rounded-3xl
          border
          border-pink-500/20
          bg-black/40
          backdrop-blur-xl
          p-10
        "
      >
        <p className="text-pink-500 uppercase tracking-[0.2em]">
          Upcoming Match
        </p>

        <div className="mt-8 text-center">

          <h3 className="text-3xl font-black">
            PROJECT MONARCH
          </h3>

          <p className="my-4 text-white/60">
            VS
          </p>

          <h3 className="text-3xl font-black">
            TEAM PHOENIX
          </h3>

          <p className="mt-6 text-white/80">
            June 15 • 8:00 PM IST
          </p>

          <button
            className="
              mt-8
              px-8
              py-3
              rounded-xl
              bg-pink-600
              hover:bg-pink-500
              transition
            "
          >
            WATCH LIVE
          </button>

        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="
          rounded-3xl
          border
          border-white/10
          bg-black/40
          backdrop-blur-xl
          p-10
        "
      >
        <p className="text-pink-500 uppercase tracking-[0.2em]">
          Recent Results
        </p>

        <div className="space-y-5 mt-8">

          <div className="flex justify-between">
            <span>Project Monarch</span>
            <span className="text-green-400">
              WIN 2-0
            </span>
          </div>

          <div className="flex justify-between">
            <span>Project Monarch</span>
            <span className="text-green-400">
              WIN 2-1
            </span>
          </div>

          <div className="flex justify-between">
            <span>Project Monarch</span>
            <span className="text-red-400">
              LOSS 1-2
            </span>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-4 mt-10">

          <div className="text-center">
            <h3 className="text-3xl font-black">
              18
            </h3>
            <p className="text-white/60">
              Wins
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black">
              4
            </h3>
            <p className="text-white/60">
              Losses
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black">
              82%
            </h3>
            <p className="text-white/60">
              Win Rate
            </p>
          </div>

        </div>
      </motion.div>

    </div>
  </div>
</section>


);
}
