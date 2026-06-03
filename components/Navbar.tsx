"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
const [visible, setVisible] = useState(true);
const [activeSection, setActiveSection] = useState("");

// Navbar hide/show

useEffect(() => {
let lastScrollY = window.scrollY;


const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < 100) {
    setVisible(true);
  } else if (currentScrollY > lastScrollY) {
    setVisible(false);
  } else {
    setVisible(true);
  }

  lastScrollY = currentScrollY;
};

window.addEventListener("scroll", handleScroll);

return () => {
  window.removeEventListener("scroll", handleScroll);
};


}, []);

// Active section detection

useEffect(() => {
const sections = document.querySelectorAll("section[id]");


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

return () => observer.disconnect();


}, []);

return (
<motion.nav
initial={{ y: 0 }}
animate={{
y: visible ? 0 : -120,
}}
transition={{
duration: 0.35,
ease: "easeInOut",
}}
className="
fixed
top-0
left-0
right-0
z-50
"
>
  <div
    className="
      w-full
      px-8
      lg:px-16
      h-20

      flex
      items-center
      justify-between
    "
  >
    {/* Logo */}

    <a
      href="#"
      className="flex items-center gap-4"
    >
      <img
        src="/monarch-logo.png"
        alt="Project Monarch"
        className="h-10 w-auto"
      />

      <span
        className="
          font-bold
          tracking-[0.3em]
          text-sm
          uppercase
        "
      >
        PROJECT MONARCH
      </span>
    </a>

    {/* Navigation */}

    <div
      className="
        hidden
        md:flex
        items-center
        gap-14

        text-sm
        uppercase

        tracking-[0.12em]
      "
    >
      <NavLink
  href="#home"
  active={activeSection === "home"}
      >
        Home
      </NavLink>

	  <NavLink
        href="#about"
        active={activeSection === "about"}
      >
        About
      </NavLink>

      <NavLink
        href="#stats"
        active={activeSection === "stats"}
      >
        Kingdom
      </NavLink>

      <NavLink
        href="#roster"
        active={activeSection === "roster"}
      >
        Roster
      </NavLink>

      <NavLink
        href="#media"
        active={activeSection === "media"}
      >
        Media
      </NavLink>

      <NavLink
        href="#join"
        active={activeSection === "join"}
      >
        Recruitment
      </NavLink>
    </div>
  </div>
</motion.nav>


);
}

function NavLink({
href,
children,
active,
}: {
href: string;
children: React.ReactNode;
active: boolean;
}) {
return (
<a
href={href}
className={`
group
relative


    transition-all
    duration-300

    ${
      active
        ? `
          text-pink-400
          font-bold
          scale-110
          drop-shadow-[0_0_12px_rgba(224,0,90,0.8)]
        `
        : `
          text-white
          hover:text-pink-400
          hover:scale-110
          hover:font-bold
          hover:drop-shadow-[0_0_12px_rgba(224,0,90,0.8)]
        `
    }
  `}
>
  {children}

  <span
    className={`
      absolute
      left-0
      -bottom-2

      h-[2px]
      bg-pink-500

      transition-all
      duration-300

      ${
        active
          ? "w-full"
          : "w-0 group-hover:w-full"
      }
    `}
  />
</a>


);
}
