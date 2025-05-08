import { OrbitControls, Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect, Suspense } from 'react';
import * as THREE from "three";

const parameters = {
    count: 30000,
    size: 1.5,
    radius: 6,
    branches: 3,
    spin: 1,
    randomness: 0.3,
    randomnessPower: 3,
    insideColor: "#38bdf8",
    outsideColor: "blue",
};
const positions = new Float32Array(parameters.count * 3);
const colors = new Float32Array(parameters.count * 3);
const colorInside = new THREE.Color(parameters.insideColor);
const colorOutside = new THREE.Color(parameters.outsideColor);



const generateUniverse = () => {

    for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3;
        const radius = Math.random() * parameters.radius;
        const spinAngle = radius * parameters.spin;
        const branchAngle =
            ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

        const randomX =
            Math.pow(Math.random(), parameters.randomnessPower) *
            (Math.random() < 0.5 ? 1 : -1) *
            parameters.randomness *
            radius;
        const randomY =
            Math.pow(Math.random(), parameters.randomnessPower) *
            (Math.random() < 0.5 ? 1 : -1) *
            parameters.randomness *
            radius;
        const randomZ =
            Math.pow(Math.random(), parameters.randomnessPower) *
            (Math.random() < 0.5 ? 1 : -1) *
            parameters.randomness *
            radius;

        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

        const mixedColor = colorInside.clone();
        mixedColor.lerp(colorOutside, radius / parameters.radius);
        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
    }
};

generateUniverse();

const UniversePoints = ({ ...props }) => {

    const scroll = useScroll()
    const { camera } = useThree()
    const univRef = useRef<THREE.Points>(null)
    const vec = new THREE.Vector3();

    useFrame((state, delta) => {
        if (scroll) {
            const offset = 1 - scroll.offset
            state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
            state.camera.lookAt(Math.cos((offset * Math.PI) / 3) * -1, 0, 0)
        } else {
            console.log("No scroll")
        }

        if (univRef.current) {
            univRef.current.rotation.y += 0.001
        }
    })
    return (
        <points ref={univRef} {...props}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                    usage={THREE.DynamicDrawUsage}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                    usage={THREE.DynamicDrawUsage}
                />
            </bufferGeometry>
            <pointsMaterial attach="material" vertexColors size={parameters.size} sizeAttenuation={false} />
        </points>
    );

}



export default function Universe() {
    return (<UniversePoints />)
}
