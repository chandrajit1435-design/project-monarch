"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "./Reveal";

function StatCard({
value,
suffix,
label,
delay,
}: {
value: number;
suffix: string;
label: string;
delay: number;
}) {
const { ref, inView } = useInView({
triggerOnce: true,
threshold: 0.5,
});

return (
<motion.div
ref={ref}
initial={{
opacity: 0,
y: 30,
}}
animate={
inView
? {
opacity: 1,
y: 0,
}
: {}
}
transition={{
duration: 0.5,
delay,
}}
className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
text-center


    transition-all
    duration-300

    hover:-translate-y-2
    hover:border-pink-500/40
    hover:shadow-[0_0_40px_rgba(224,0,90,0.15)]
  "
>
  <h3
    className="
      text-5xl
      font-black
      text-pink-600
    "
  >
    {inView ? (
      <CountUp
        start={0}
        end={value}
        duration={2}
      />
    ) : (
      0
    )}

    {suffix}
  </h3>

  <p className="text-white/80 mt-3">
    {label}
  </p>
</motion.div>


);
}

export default function Stats() {
const stats = [
[20, "+", "Scrims"],
[2, "", "Events"],
[2, "", "Premier Seasons"],
[95, "%", "Activity"],
];

return ( 
<Reveal>
<section
   id="stats"
   className="py-24 max-w-6xl mx-auto px-6"
 > <h2 className="text-5xl font-black mb-12">
KINGDOM RECORDS </h2>


  <div className="grid md:grid-cols-4 gap-6">
    {stats.map(
      ([value, suffix, label], index) => (
        <StatCard
          key={label}
          value={value as number}
          suffix={suffix as string}
          label={label as string}
          delay={index * 0.1}
        />
      )
    )}
  </div>
</section>
</Reveal>


);
}
