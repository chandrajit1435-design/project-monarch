"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function DiscordWidget() {
  return (
  <Reveal>
    <section
      id="discord"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <p
            className="
              uppercase
              tracking-[0.4em]
              text-pink-500
              mb-4
            "
          >
            Community
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
            Meet the team, connect with the community,
            find scrims, stay updated on recruitment,
            and follow Project Monarch's journey.
          </p>

        </div>

        <motion.div
          whileHover={{ y: -5 }}
          className="
            rounded-3xl

            border
            border-pink-500/20

            bg-black/30
            backdrop-blur-xl

            p-12

            transition-all
            duration-300

            hover:border-pink-500/40
            hover:shadow-[0_0_50px_rgba(224,0,90,0.2)]
          "
        >

          <div className="grid md:grid-cols-3 gap-8 mb-12">

            <div className="text-center">
              <h3 className="text-5xl font-black text-pink-500">
                50+
              </h3>

              <p className="text-white/70 mt-2">
                Members
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-black text-pink-500">
                Daily
              </h3>

              <p className="text-white/70 mt-2">
                Activity
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-black text-pink-500">
                Open
              </h3>

              <p className="text-white/70 mt-2">
                Recruitment
              </p>
            </div>

          </div>

          <div className="max-w-3xl mx-auto text-center">

            <h3
              className="
                text-3xl
                font-black
                mb-6
              "
            >
              Become Part Of The Monarch Community
            </h3>

            <p
              className="
                text-white/70
                leading-relaxed
                mb-10
              "
            >
              Whether you're looking to compete,
              improve, find teammates, or simply
              support the organization, our Discord
              server is the central hub for everything
              Project Monarch.
            </p>

            <a
              href="https://discord.gg/UhE2nNRCR"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center

                px-10
                py-4

                rounded-2xl

                bg-pink-600

                font-semibold
                text-white

                transition-all
                duration-300

                hover:bg-pink-500
                hover:scale-105

                hover:shadow-[0_0_40px_rgba(224,0,90,0.4)]
              "
            >
              Join Discord
            </a>

          </div>

        </motion.div>

      </div>
    </section>
	</Reveal>
  );
}