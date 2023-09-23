import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const robot_scene = "./kuma_heavy_robot_r-9000s/scene.gltf";

const Robot = () => {
  const group = useRef();

  const robot = useGLTF(robot_scene);
  const animations = robot.animations;
  // console.log({ robot });

  const { actions, names } = useAnimations(animations, group);
  console.log({ actions });
  console.log({ names });
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);

  return (
    <mesh className="mesh" ref={group}>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={robot.scene}
        scale={0.0015}
        position={[0, 2, -5.25]}
        rotation={[-0.01, -5.2, -0.1]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <Canvas
        frameLoop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserverDrawingBuffer: true }}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot />

        <Preload all />
      </Canvas>
    </Suspense>
  );
};

export default RobotCanvas;
