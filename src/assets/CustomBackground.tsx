import React from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { degreesToRadians, mix } from 'popmotion';
import '../styles.css';

const color = '#ffffff';

const Icosahedron = () => (
  <mesh rotation-x={0.07}>
    <icosahedronGeometry args={[0.5, 1]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p }: { p: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  React.useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(degreesToRadians(80), degreesToRadians(100), Math.random());
    const xAngle = degreesToRadians(360) * p;
    ref.current?.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });
  
  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.025, 0.025, 0.025]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

const BackgroundElements = ({ numStars = 1000 }: { numStars?: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.004;
    }
  });

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={i / numStars} />);
  }

  return (
    <group ref={groupRef}>
      <Icosahedron />
      {stars}
    </group>
  );
};

const CustomBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="custom-bg-container">
        <Canvas>
          <BackgroundElements />
        </Canvas>
      </div>
      <div className="content-container">{children}</div>
    </>
  );
};

export default CustomBackground;
