import React, { useRef } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { extend, useFrame, useThree } from "react-three-fiber"

extend({ OrbitControls })

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree()
  const controls = useRef()
  useFrame(state => controls.current.update())
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 3}
      minAzimuthAngle={Math.PI / 6}
      minPolarAngle={Math.PI / 6}
    />
  )
}

export default CameraControls
