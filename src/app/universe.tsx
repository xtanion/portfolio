import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader, BufferGeometryNode } from '@react-three/fiber'
import * as THREE from "three";

// Parameters
const geometry = new THREE.BufferGeometry();
const parameters = {
    count: 100000,
    size: 0.7,
    radius: 5,
    branches: 3,
    spin: 1,
    randomness: 0.7,
    randomnessPower: 3,
    insideColor: "#ed124f",
    outsideColor: "#025fdd",
};
const positions = new Float32Array(parameters.count * 3);
const colors = new Float32Array(parameters.count * 3);
const colorInside = new THREE.Color(parameters.insideColor);
const colorOutside = new THREE.Color(parameters.outsideColor);

// Galaxy
const generateGalaxy = () => {

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
    // geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    // geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Points
    // const points = new THREE.Points(geometry, material);
    // scene.add(points);
};
generateGalaxy();


function MyPoints() {
    return (
        <points>
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

    return (
        <div className='w fixed top-0 left-0 w-svw h-svh'>
            <Canvas className='galaxy max-w-full'
                camera={{
                    fov: 75,
                    aspect: 2,
                    near: 0.1,
                    far: 1000,
                    position: [-2, 2, 3],
                    rotation: [0, 0, 0]
                }}>

                <MyPoints />

                <OrbitControls autoRotate />
            </Canvas>

        </div>

    )
}