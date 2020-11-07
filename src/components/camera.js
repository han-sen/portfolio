import React, { useEffect, useRef, useState } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { extend, useFrame, useThree } from "react-three-fiber"

extend({ OrbitControls })

export default function CameraControls(props) {
  const {
    camera,
    gl: { domElement },
  } = useThree()
  const controls = useRef()
  useFrame(state => {
    controls.current.update()
  })
  const [userCanRotate, setUserCanRotate] = useState(true)
  // const [autoRotate, setAutoRotate] = useState(false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (window.innerWidth <= 768) {
        setUserCanRotate(false)
        props.setAutoRotate(true)
      }
    }
  }, [])

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={props.autoRotate}
      enableZoom={false}
      enableRotate={userCanRotate}
      // maxAzimuthAngle={Math.PI / 3}
      // maxPolarAngle={Math.PI / 3}
      minAzimuthAngle={Math.PI / 6}
      minPolarAngle={Math.PI / 6}
    />
  )
}
