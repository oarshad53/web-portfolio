"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function Orb() {
  const mesh = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // gentle floating + rotation
    mesh.current.rotation.y = t * 0.4
    mesh.current.rotation.x = t * 0.2

    mesh.current.position.y = Math.sin(t * 1.5) * 0.15
    mesh.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05)
  })

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.6, 1]} />

      <meshStandardMaterial
        color="#a855f7"
        wireframe
        emissive="#7c3aed"
        emissiveIntensity={1.4}
        roughness={0.3}
        metalness={0.6}
      />
    </mesh>
  )
}

export default function ThreeOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      
      {/* 🌌 lighting */}
      <ambientLight intensity={0.5} />

      <pointLight
        position={[5, 5, 5]}
        color="#a855f7"
        intensity={2.5}
      />

      <pointLight
        position={[-5, -5, -5]}
        color="#1e67c6"
        intensity={1.2}
      />

      {/* 🧊 orb */}
      <Orb />

      {/* 👀 controls */}
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  )
}