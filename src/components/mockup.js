import React, { useRef, useState, useEffect } from "react"
import { Canvas, extend, useFrame, useThree } from "react-three-fiber"
import { useSpring, a } from "react-spring/three"
import { useLoader } from "react-three-fiber"
import { TextureLoader } from "three"
import imageUrl from "../assets/img/placeholder-image-dots.png"
import quoteUrl from "../assets/img/quotes.png"
import crossUrl from "../assets/img/x-mark.png"

export default function MockUp() {
  const [isBig, setIsBig] = useState(false)

  const { position } = useSpring({
    position: isBig ? [1, 0.25, 0] : [1, -2, 0],
  })
  const depth = 0.5
  const texture = useLoader(TextureLoader, imageUrl)
  const quoteTexture = useLoader(TextureLoader, quoteUrl)
  const crossTexture = useLoader(TextureLoader, crossUrl)

  useEffect(() => {
    setIsBig(true)
  })

  return (
    <a.group position={position}>
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
      {/* hero texture plane */}
      <a.mesh
        position={[-2.75, 0.275, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <planeBufferGeometry args={[2.75, 2.75, 2.75]} />
        <meshBasicMaterial map={texture} transparent={true} roughness={0} />
      </a.mesh>

      {/* triple block row */}
      <mesh position={[1, 0, 3]}>
        <boxBufferGeometry args={[2, depth, 2]} />
        <meshNormalMaterial />
      </mesh>

      <a.mesh
        position={[1, 0.275, 3]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <planeBufferGeometry args={[1.75, 1.75, 1.75]} />
        <meshBasicMaterial
          map={crossTexture}
          transparent={true}
          roughness={1}
        />
      </a.mesh>

      <mesh position={[1, 0, 0]}>
        <boxBufferGeometry args={[2, depth, 2]} />
        <meshNormalMaterial />
      </mesh>

      <a.mesh
        position={[1, 0.275, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <planeBufferGeometry args={[1.75, 1.75, 1.75]} />
        <meshBasicMaterial
          map={crossTexture}
          transparent={true}
          roughness={1}
        />
      </a.mesh>

      <mesh position={[1, 0, -3]}>
        <boxBufferGeometry args={[2, depth, 2]} />
        <meshNormalMaterial />
      </mesh>

      <a.mesh
        position={[1, 0.275, -3]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <planeBufferGeometry args={[1.75, 1.75, 1.75]} />
        <meshBasicMaterial
          map={crossTexture}
          transparent={true}
          roughness={1}
        />
      </a.mesh>

      {/* text bars */}
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

      {/* bottom right texture plane */}
      <a.mesh
        position={[4, 0.275, -3]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <planeBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          map={quoteTexture}
          transparent={true}
          roughness={1}
        />
      </a.mesh>
    </a.group>
  )
}
