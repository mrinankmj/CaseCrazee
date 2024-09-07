import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer  from "./MacContainer"
import { div } from 'three/webgpu'


const App = () => {
  return (
    <div className='w-full h-full '>
      <div className="absolute text-white top-32 left-1/2 -translate-x-1/2">
      <h3 className='text-7xl tracking-tighter font-[700]'>macbook pro.</h3></div>
    <Canvas camera={{fov: 20, position:[0,-10,220]}}>
      <OrbitControls />
      <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']} />
      <ScrollControls pages={3} onScroll={(e) => console.log(e)}>
        <MacContainer />
     </ScrollControls>
    </Canvas>
    </div>
  );
};

export default App
