"use client"

import { motion } from "framer-motion"

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020617]">

      {/* base glow */}
      <div className="absolute inset-0 opacity-60">
        <div className="aurora-layer layer1" />
        <div className="aurora-layer layer2" />
        <div className="aurora-layer layer3" />
      </div>

      {/* fade bottom into projects */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-black" />
    </div>
  )
}