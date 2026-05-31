"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img
            src="/monarch-logo.png"
            className="h-10"
            alt="Project Monarch"
          />

          <span className="font-bold tracking-[0.3em] text-sm">
            PROJECT MONARCH
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#stats">KINGDOM</a>
          <a href="#roster">ROSTER</a>
          <a href="#join">RECRUITMENT</a>
        </div>
      </div>
    </nav>
  );
}