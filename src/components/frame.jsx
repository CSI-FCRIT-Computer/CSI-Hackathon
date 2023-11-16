import React, { useEffect, useRef } from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import Roboto from "./Roboto_Regular.json";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
function Text3d() {
  const font = new THREE.FontLoader().parse(Roboto);
  const textOptions = {
    font,
    size: 5,
    height: 1
  };
  return (
    <mesh>
      <textGeometry attach="geometry" args={["three.js", textOptions]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
export default function frame() {
  return (
    <Canvas>
      <CameraController />
      <ambientLight />
      <Text3d />
    </Canvas>
  );
}
