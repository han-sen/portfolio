import React, { useRef, useState, Suspense } from "react"
import { Canvas, extend, useFrame, useThree } from "react-three-fiber"
import { useSpring, a } from "react-spring/three"
import { useLoader } from "react-three-fiber"
import { TextureLoader } from "three"
import imageUrl from "../assets/img/placeholder-image.png"

const MockUp = () => {
  const [isBig, setIsBig] = useState(false)

  const { position, planePosition, size } = useSpring({
    position: isBig ? [1, 0.25, 0] : [1, -2, 0],
    planePosition: isBig ? [-2.75, 0.5, 0] : [-2.75, 0, 0],
    size: isBig ? [1, 1, 1] : [0.5, 0.5, 0.5],
  })
  const depth = 0.5
  const texture = useLoader(TextureLoader, imageUrl)

  return (
    <a.group position={position} onClick={() => setIsBig(!isBig)}>
      <mesh position={[-6.5, 0, 3]}>
        <boxBufferGeometry args={[1, depth, 2]} />
        <meshNormalMaterial />
      </mesh>

      <mesh position={[-6.5, 0, -3.5]}>
        <boxBufferGeometry args={[1, depth, 1]} />
        <meshNormalMaterial />
      </mesh>

      <mesh position={[-6.5, 0, -1.5]}>
        <boxBufferGeometry args={[1, depth, 1]} />
        <meshNormalMaterial />
      </mesh>

      {/* hero plane */}
      <mesh position={[-3, 0, 0]}>
        <boxBufferGeometry args={[4, depth, 8]} />
        <meshNormalMaterial />
      </mesh>
      {/* texture plane */}
      <a.mesh
        position={planePosition}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <planeBufferGeometry args={[2.75, 2.75, 2.75]} />
        <meshBasicMaterial map={texture} transparent={true} roughness={1} />
      </a.mesh>

      <mesh position={[1, 0, 3]}>
        <boxBufferGeometry args={[2, depth, 2]} />
        <meshNormalMaterial />
      </mesh>

      <mesh position={[1, 0, 0]}>
        <boxBufferGeometry args={[2, depth, 2]} />
        <meshNormalMaterial />
      </mesh>

      <mesh position={[1, 0, -3]}>
        <boxBufferGeometry args={[2, depth, 2]} />
        <meshNormalMaterial />
      </mesh>

      <mesh position={[3.25, 0, 1.5]}>
        <boxBufferGeometry args={[0.5, depth, 5]} />
        <meshNormalMaterial />
      </mesh>

      <mesh position={[4.75, 0, 2.5]}>
        <boxBufferGeometry args={[0.5, depth, 3]} />
        <meshNormalMaterial />
      </mesh>

      <mesh position={[4, 0, -3]}>
        <boxBufferGeometry args={[2, depth, 2]} />
        <meshNormalMaterial />
      </mesh>
    </a.group>
  )
}

export default MockUp
