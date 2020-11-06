import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
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
          <gridHelper args={[16, 16, `white`, `gray`]} />
          <Suspense fallback={null}>
            <MockUp />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}
