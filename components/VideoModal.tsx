"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface VideoModalProps {
video: string;
open: boolean;
onClose: () => void;
}

export default function VideoModal({
video,
open,
onClose,
}: VideoModalProps) {
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  window.addEventListener("keydown", handleEscape);

  return () => {
    window.removeEventListener(
      "keydown",
      handleEscape
    );
  };
}, [onClose]);
return ( <AnimatePresence>
{open && (
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
onClick={onClose}
className="
fixed
inset-0
z-[9999]


        flex
        items-center
        justify-center

        bg-black/90
        backdrop-blur-md

        p-6
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}
        transition={{
          duration: 0.25,
        }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative

          w-full
          max-w-6xl

          overflow-hidden
          rounded-3xl

          border
          border-pink-500/30

          bg-black

          shadow-[0_0_80px_rgba(224,0,90,0.25)]
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4

            z-10

            flex
            items-center
            justify-center

            w-10
            h-10

            rounded-full

            bg-black/60

            text-white
            text-xl

            hover:bg-pink-600

            transition
          "
        >
          ×
        </button>

        <video
          src={video}
          controls
          autoPlay
          playsInline
          className="
            w-full
            max-h-[85vh]
            object-contain
            bg-black
          "
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


);
}
