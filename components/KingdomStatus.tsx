"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function KingdomStatus() {
const stats = [
{
value: "2026",
label: "Founded",
},
{
value: "Open",
label: "Recruitment",
},
{
value: "Valorant",
label: "Current Focus",
},
{
value: "0",
label: "Official Matches",
},
];

return ( 
  <Reveal> 
   <section
   id="status"
   className="py-32 px-6"
 > <div className="max-w-7xl mx-auto">


    <div className="text-center mb-20">

      <p
        className="
          uppercase
          tracking-[0.4em]
          text-pink-500
          mb-4
        "
      >
        Foundation
      </p>

      <h2
        className="
          text-5xl
          md:text-6xl
          font-black
        "
      >
        KINGDOM
        <span className="text-pink-500">
          {" "}STATUS
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
        Every kingdom starts with a vision.
        Project Monarch is currently building
        its foundation, roster, and community.
      </p>

    </div>

    <div
      className="
        grid
        md:grid-cols-4
        gap-8
      "
    >
      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{
            y: -8,
          }}
          className="
            rounded-3xl

            border
            border-white/10

            bg-black/30
            backdrop-blur-xl

            p-8
            text-center

            transition-all
            duration-300

            hover:border-pink-500/40
            hover:shadow-[0_0_40px_rgba(224,0,90,0.15)]
          "
        >
          <h3
            className="
              text-4xl
              font-black
              text-pink-500
            "
          >
            {item.value}
          </h3>

          <p
            className="
              mt-3
              uppercase
              tracking-[0.2em]
              text-white/70
              text-sm
            "
          >
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="
        mt-16

        rounded-3xl

        border
        border-pink-500/20

        bg-gradient-to-r
        from-black/60
        via-[#320014]/40
        to-black/60

        backdrop-blur-xl

        p-10
        text-center
      "
    >
      <h3
        className="
          text-3xl
          font-black
          mb-4
        "
      >
        Building A Legacy
      </h3>

      <p
        className="
          text-white/80
          max-w-3xl
          mx-auto
          leading-relaxed
        "
      >
        Project Monarch is currently focused on
        establishing a competitive Valorant roster,
        developing talent, and building a community
        driven by consistency, teamwork, and growth.
        The kingdom is young, but every legacy begins
        with a first step.
      </p>
    </motion.div>

  </div>
</section>
</Reveal>


);
}
