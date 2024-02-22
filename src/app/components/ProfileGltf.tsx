// "use client";
import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
// import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Earth } from './Earth';
import isMobile from '../check';

export default function ProfileGltf() {
    const mobile = isMobile();
    return (
        <Canvas camera={{ position: [25, 0, 1] }} shadows>
            <ambientLight color={"0x222222"} />
            <directionalLight
                position={[1.0, 1.0, 1.4]}
                castShadow
                intensity={Math.PI * 2}
            />
            <Earth/>
            {/* <primitive
                object={gltf.scene}
                position={[0, 0, 0]}
                children-0-castShadow
            /> */}
            {!mobile ?
                <OrbitControls autoRotate enablePan={false} enableZoom={false} /> : <> </>}
        </Canvas>
    )
}