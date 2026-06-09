import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room.jsx';
import HeroLight from './HeroLight.jsx';

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return (
    <Canvas camera={{position:[0,0,15], fov:45}}>
        

        <OrbitControls 
        enablePan={false}
        enableZoom={false}//turned off zoom for better mobile experience
       maxDistance={20}
       minDistance={5}
       minPolarAngle={Math.PI/5}
       maxPolarAngle={Math.PI/2}
        />

        <HeroLight />
        <group 
        scale={isMobile? 0.6 : 1}
        position={[0,-3.5,0]}
        rotation={[0, -Math.PI/4,0]}>
            <Room/>
        </group>
    </Canvas>
  )
}

export default HeroExperience