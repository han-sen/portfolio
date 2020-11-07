import React, { useRef, useState, useEffect } from "react"
import { useFrame } from "react-three-fiber"

export default function Orbiters() {
  const boxSize = [0.25, 0.25, 0.25]
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.005
  })
  return (
    <group ref={ref}>
      <mesh position={[-6.5, 6, 0]}>
        <icosahedronBufferGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh position={[6.5, 6, 12]}>
        <octahedronBufferGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh position={[6.5, 6, -12]}>
        <tetrahedronBufferGeometry />
        <meshNormalMaterial />
      </mesh>
    </group>
  )
}
