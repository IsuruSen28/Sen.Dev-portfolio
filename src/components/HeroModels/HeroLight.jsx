import React from 'react'
import * as THREE from 'three'

const HeroLight = () => {
  return (
    <>
        <spotLight position={[3,6,4]}
        intensity={100}
        angle={.2}
        penumbra={.3}
        color='white'
        />
        <spotLight position={[4,5,4]}
        intensity={80}
        angle={.3}
        penumbra={.5}
        color='#4cc9f0'
        />
        <spotLight position={[-3,5,5]}
        intensity={80}
        angle={.3}
        penumbra={1}
        color='#9d4edd'
        />

        <primitive
        object={new THREE.RectAreaLight('#A259FF',8 ,3, 2)}/>
        position={[1,3,4]}
        intensity={15}
        rotation={[-Math.PI/4, Math.PI/4, 0]}

        <pointLight 
        position={[0,1,0]} 
        intensity={10} 
        color='#7209b7'/>
    </>
  )
}

export default HeroLight