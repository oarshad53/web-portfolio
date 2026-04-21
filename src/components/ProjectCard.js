"use client"

import Link from "next/link"

export default function ProjectCard({
  icon,
  title,
  href,
  size = "md"
}) {

  const sizeStyles = {
    sm: "p-3 text-sm",
    md: "p-5 text-base",
    lg: "p-6 text-lg"
  }

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-4 rounded-xl
        bg-white/5 border border-white/10 backdrop-blur-md
        hover:bg-white/10 hover:scale-[1.03] hover:-translate-y-1
        transition duration-200 ease-out
        relative overflow-hidden group
        ${sizeStyles[size]}
      `}
    >

      {/* 🌟 glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute -inset-10 bg-purple-500/10 blur-2xl" />
      </div>

      {/* icon */}
      <img
        src={icon}
        className="w-10 h-10 relative z-10"
      />

      {/* text */}
      <span className="text-white/80 font-medium relative z-10">
        {title}
      </span>

    </Link>
  )
}