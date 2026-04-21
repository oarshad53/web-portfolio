"use client";

import StarBackground from "./AuroraBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6">
      <StarBackground />

      <div className="z-10">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          Omar Arshad
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Computer Engineering Student
        </p>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Embedded Systems • PCB Design • Low-Level Programming
        </p>

        <div className="mt-10">
          <a
            href="#projects"
            className="px-6 py-3 border border-[#8B5CF6] rounded-md hover:bg-[#8B5CF6]/20 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}