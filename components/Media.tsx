"use client";

import { useState } from "react";
import VideoModal from "./VideoModal";
import Reveal from "./Reveal";

const videos = [
{
title: "Frag Movie",
description: "Best plays, aces, and clutch moments.",
video: "/videos/fragmovie.mp4",
thumbnail: "/thumbnails/fragmovie.jpg",
},
{
title: "Tournament Highlights",
description: "Official matches and competitive runs.",
video: "/videos/tournament.mp4",
thumbnail: "/thumbnails/tournament.jpg",
},
{
title: "Team Showcase",
description: "Meet the players behind Project Monarch.",
video: "/videos/showcase.mp4",
thumbnail: "/thumbnails/showcase.jpg",
},
];

export default function Media() {
const [selectedVideo, setSelectedVideo] =
useState<string | null>(null);

return (
<>
<VideoModal
video={selectedVideo ?? ""}
open={selectedVideo !== null}
onClose={() => setSelectedVideo(null)}
/>

 <Reveal>
  <section
    id="media"
    className="py-32 px-6"
  >
    <div className="max-w-7xl mx-auto">

      <div className="mb-16 text-center">

        <p className="text-pink-600 uppercase tracking-[0.35em] mb-4">
          Content
        </p>

        <h2 className="text-5xl md:text-6xl font-black">
          MEDIA
          <span className="text-pink-600">
            {" "}VAULT
          </span>
        </h2>

      </div>

      <div className="grid lg:grid-cols-3 gap-10">

        {videos.map((item) => (
          <div
            key={item.title}
            onClick={() =>
              setSelectedVideo(item.video)
            }
            className="
              group
              cursor-pointer

              transition-all
              duration-500

              hover:-translate-y-3
              hover:scale-[1.02]
            "
          >
            <div
              className="
                overflow-hidden
                rounded-3xl

                border
                border-white/10

                bg-black

                shadow-[0_0_40px_rgba(224,0,90,0.10)]

                hover:border-pink-500/50

                hover:shadow-[0_0_60px_rgba(224,0,90,0.25)]

                transition-all
                duration-500
              "
            >
              <video
                poster={item.thumbnail}
                muted
                loop
                playsInline
                preload="metadata"
				 onMouseEnter={(e) => {
                   e.currentTarget.play().catch(() => {});
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.pause();
                   e.currentTarget.currentTime = 0;
				   e.currentTarget.load();
                 }}
                className="
                  w-full
                  aspect-video
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-105
                "
              >
                <source
                  src={item.video}
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="mt-5">

              <h3
                className="
                  text-xl
                  font-bold

                  transition-colors
                  duration-300

                  group-hover:text-pink-400
                "
              >
                {item.title}
              </h3>

              <p className="text-white/80 mt-2">
                {item.description}
              </p>

            </div>
          </div>
        ))}

      </div>

    </div>
  </section>
 </Reveal> 
</>


);
}
