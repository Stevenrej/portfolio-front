import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useRef, useLayoutEffect, useState } from 'react';
import {
  useTransform,
  useTime,
  useMotionValue,
  useScroll,
  MotionValue,
} from 'framer-motion';
import { degreesToRadians, progress, mix } from 'popmotion';
import '../styles.css';

const color = '#111111';

const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[5, 0]} /> {/* Change the first argument to adjust the size */}
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p }: { p: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(degreesToRadians(80), degreesToRadians(100), Math.random());
    const xAngle = degreesToRadians(360) * p;
    ref.current?.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });
  
  return (
    <mesh ref={ref}>
      <boxGeometry args={[25, 25, 25]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

const BackgroundElements = ({ numStars = 100, scrollYProgress }: { numStars?: number, scrollYProgress: MotionValue<number> }) => {
  const gl = useThree((state) => state.gl);
  const yAngle = useTransform(scrollYProgress, [0, 1], [0.001, degreesToRadians(180)]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), time.get() * 0.0005);
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
};

const CustomBackground = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      <div className="custom-bg-container">
        <Canvas>
          <BackgroundElements scrollYProgress={scrollYProgress} />
        </Canvas>
      </div>
      <div className="content-container">{children}</div>
    </>
  );
};

export default CustomBackground;
