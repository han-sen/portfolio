import React, { useRef, Suspense, useState } from "react"
import { Canvas } from "react-three-fiber"
import CameraControls from "./camera"
import MockUp from "./mockup"
import Orbiters from "./orbiters"
import styles from "../styles/components/hero.module.scss"

export default function Scene() {
  const [autoRotate, setAutoRotate] = useState(false)
  return (
    <div className={styles.canvas_wrap}>
      {typeof window !== `undefined` && (
        <Canvas
          pixelRatio={window.devicePixelRatio}
          camera={{
            position: [12, 12, 12],
          }}
        >
          <CameraControls
            autoRotate={autoRotate}
            setAutoRotate={setAutoRotate}
          />
          <Suspense fallback={null}>
            <MockUp setAutoRotate={setAutoRotate} />
          </Suspense>
          <Orbiters />
          <gridHelper args={[16, 16, `white`, `gray`]} />
        </Canvas>
      )}
    </div>
  )
}
