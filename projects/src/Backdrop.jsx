import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';


export default function ThreeBackdrop() {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1}} camera={{ fov: 50, position: [0, 0, 0] }}>
        <Sparkles position={[0,0,-1]} scale={2.5} color={"#ff0"} size={20} count={30} speed={.1} opacity={0.1}/>
    </Canvas>
  )
}