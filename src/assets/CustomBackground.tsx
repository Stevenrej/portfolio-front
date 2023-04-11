import React from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { degreesToRadians, mix } from 'popmotion';
import '../styles.css';

const color = '#6e7ee8';

const Icosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} rotation-x={8}>
      <icosahedronGeometry args={[0.75, 1]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};


const Star = ({ p }: { p: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  React.useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(degreesToRadians(80), degreesToRadians(100), Math.random());
    const xAngle = degreesToRadians(360) * p;
    ref.current?.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.04;
      ref.current.rotation.y += 0.02;
    }
  });

  const randomNumber = Math.round(Math.random() * 10);

  return (
    <mesh ref={ref} rotation-x={randomNumber} rotation-y={randomNumber}>
      <tetrahedronGeometry args={[0.025, 0]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};




const BackgroundElements = ({ numStars = 700 }: { numStars?: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.004;
    }
  });

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={i / numStars} key={`star-${i}`} />);
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
