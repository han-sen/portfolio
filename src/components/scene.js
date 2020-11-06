import React, { useRef, Suspense } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import CameraControls from "./camera"
import MockUp from "./mockup"
import styles from "../styles/components/hero.module.scss"

export default function Scene() {
  return (
    <div className={styles.canvas_wrap}>
      {typeof window !== `undefined` && (
        <Canvas
          pixelRatio={window.devicePixelRatio}
          camera={{
            position: [12, 12, 12],
          }}
        >
          <CameraControls />
          <Suspense fallback={null}>
            <MockUp />
          </Suspense>
          <gridHelper args={[16, 16, `white`, `gray`]} />
        </Canvas>
      )}
    </div>
  )
}
