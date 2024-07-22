"use client"

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import blur from '../assets/images/blur.webp'
// import paint from '../assets/images/paint.jpg'
// import paint from '../assets/images/grain.webp'
import paint from '../assets/images/wut.png'
import { TextureLoader } from "three";
import { Suspense, useContext, useRef } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function Scene() {
  const { mode } = useContext(ThemeContext)
  const paintMap = useLoader(TextureLoader, paint.src)
  const blurMap = useLoader(TextureLoader, blur.src)
  const sphereGroup: any = useRef()
  useFrame(() => {
    sphereGroup.current.rotation.x += 0.003
  })
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight />
      <group position={[-7, -2, 0]} ref={sphereGroup}>
        <mesh>
          <sphereGeometry args={[4, 50, 50]} />
          <meshStandardMaterial map={paintMap} />
        </mesh>
        <mesh>
          <sphereGeometry args={[4, 50, 50]} />
          <meshStandardMaterial map={blurMap} transparent={true} opacity={1} color={mode === 'light' ? 0xffffff : 0x000000} />
        </mesh>
      </group>
    </>
  )
}

function Background() {

  return (
    <>
      <div id="backgroundAnim">
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default Background