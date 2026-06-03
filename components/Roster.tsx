"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const players = [
{
ign: "SEISHIN",
role: "Duelist",
rank: "Diamond 1",
agents: ["Raze", "Neon", "Sova"],
country: "India",
image: "/players/seishin.jpg",
},

{
ign: "BOLT",
role: "Sentinel",
rank: "Diamond 3",
agents: ["Cypher", "Chamber", "Killjoy"],
country: "India",
image: "/players/Bolt.jpg",
},

{
ign: "SHURA",
role: "IGL • Controller",
rank: "Diamond 2",
agents: ["Omen", "Astra", "Viper"],
country: "India",
image: "/players/shura.jpg",
},

{
ign: "ZEN",
role: "Vice-IGL • Flex",
rank: "Platinum 3",
agents: ["Cypher", "Jett", "Omen"],
country: "India",
image: "/players/zen.jpg",
},

{
ign: "MONARCH",
role: "Initiator",
rank: "Recruiting",
agents: ["--"],
country: "--",
image: "/players/placeholder.png",
},
];

export default function Roster() {
return ( 
<Reveal>
<section
   id="roster"
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
        Kingdom
      </p>

      <h2
        className="
          text-5xl
          md:text-6xl
          font-black
        "
      >
        THE
        <span className="text-pink-500">
          {" "}ROSTER
        </span>
      </h2>

    </div>

    <div
      className="
        grid
        md:grid-cols-2
        lg:grid-cols-5
        gap-6
      "
    >
      {players.map((player) => (
        <motion.div
          key={player.ign + player.role}
          whileHover={{
            y: -10,
          }}
          className="
            group

            overflow-hidden
            rounded-3xl

            border
            border-white/10

            bg-black/30
            backdrop-blur-xl

            hover:border-pink-500/40

            transition-all
            duration-500

            hover:shadow-[0_0_50px_rgba(224,0,90,0.2)]
          "
        >
          <div className="relative overflow-hidden">

            <img
              src={player.image}
              alt={player.ign}
			  style={{
                transform: "translateZ(0)",
               }}
              className="
                h-72
                w-full
                object-cover

                transition-transform
                duration-700

                group-hover:scale-105
				
				will-change-transform
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black
                via-black/20
                to-transparent
              "
            />
          </div>

          <div className="p-6">

            <h3
              className="
                text-2xl
                font-black
              "
            >
              {player.ign}
            </h3>

            <p
              className="
                text-pink-500
                uppercase
                tracking-[0.15em]
                mt-1
              "
            >
              {player.role}
            </p>

            <div className="mt-6 space-y-3">

              <div className="flex justify-between">
                <span className="text-white/60">
                  Peak Rank
                </span>

                <span>
                  {player.rank}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">
                  Country
                </span>

                <span>
                  {player.country}
                </span>
              </div>

            </div>

            <div className="mt-6">

              <p
                className="
                  text-white/60
                  text-sm
                  mb-2
                "
              >
                Main Agents
              </p>

              <div className="flex flex-wrap gap-2">
                {player.agents.map((agent) => (
                  <span
                    key={agent}
                    className="
                      px-3
                      py-1

                      rounded-full

                      text-xs

                      bg-pink-500/10
                      border
                      border-pink-500/20
                    "
                  >
                    {agent}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>
</Reveal>


);
}
