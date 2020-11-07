import React, { useState, useEffect } from "react"
import { useSpring, a, config } from "react-spring/three"
import { useLoader } from "react-three-fiber"
import { TextureLoader } from "three"
import sliderUrl from "../assets/img/slider2.png"
import quoteUrl from "../assets/img/quotes.png"
import crossUrl from "../assets/img/x-mark.png"
import logoUrl from "../assets/img/fakeLogo.png"

export default function MockUp(props) {
  const [isBig, setIsBig] = useState(false)
  const { position } = useSpring({
    position: isBig ? [1, 0.25, 0] : [1, -2, 0],
    config: { tension: 180, friction: 18 },
  })
  const { sliderPosition } = useSpring({
    sliderPosition: isBig ? [-2.75, 0.275, 0] : [-2.75, 0.275, -4],
    config: config.slow,
  })
  const { planeRotation } = useSpring({
    planeRotation: isBig
      ? [-Math.PI / 2, 0, Math.PI / 2]
      : [-Math.PI / 2, 0, -Math.PI / 2],
    config: config.molasses,
  })
  const depth = 0.5
  const sliderTexture = useLoader(TextureLoader, sliderUrl)
  const quoteTexture = useLoader(TextureLoader, quoteUrl)
  const crossTexture = useLoader(TextureLoader, crossUrl)
  const logoTexture = useLoader(TextureLoader, logoUrl)

  useEffect(() => {
    setIsBig(true)
    setTimeout(() => props.setAutoRotate(true), 1000)
  })
  return (
    <a.group position={position}>
      {/* fake logo */}
      <mesh position={[-6.5, 0, 3]}>
        <boxBufferGeometry args={[1, depth, 2]} />
        <meshNormalMaterial />
      </mesh>
      <a.mesh
        position={[-6.5, 0.275, 3]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <planeBufferGeometry args={[1.5, 0.75, 2]} />
        <meshBasicMaterial map={logoTexture} transparent={true} roughness={0} />
      </a.mesh>

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
        position={sliderPosition}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <planeBufferGeometry args={[4, 4, 4]} />
        <meshBasicMaterial
          map={sliderTexture}
          transparent={true}
          roughness={0}
        />
      </a.mesh>

      {/* triple block row */}
      <mesh position={[1, 0, 3]}>
        <boxBufferGeometry args={[2, depth, 2]} />
        <meshNormalMaterial />
      </mesh>

      <a.mesh position={[1, 0.275, 3]} rotation={planeRotation}>
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

      <a.mesh position={[1, 0.275, 0]} rotation={planeRotation}>
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

      <a.mesh position={[1, 0.275, -3]} rotation={planeRotation}>
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
