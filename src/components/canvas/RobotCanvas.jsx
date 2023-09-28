import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

import helpers from "../../utils/helpers";

const robot_scene = "./kuma_heavy_robot_r-9000s/scene.gltf";

const Robot = (props) => {
  const { isMobile } = props;
  const group = useRef();

  const robot = useGLTF(robot_scene);
  const animations = robot.animations;

  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);

  return (
    <mesh className="mesh" ref={group}>
      <hemisphereLight intensity={1} groundColor="white" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.52}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={robot.scene}
        scale={isMobile ? 0.002 : 0.0015}
        position={isMobile ? [-15, -4, -7] : [0, 0, -3.7]}
        rotation={[-0.01, -4.3, -0.1]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  const { mediaQueryFunc } = helpers;
  const [isMobile, setIsMobile] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    mediaQueryFunc("change", 640, setIsMobile);
  }, []);

  return (
    <Canvas
      // frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserverDrawingBuffer: true }}
    >
      {isMobile ? null : (
        <OrbitControls
          enableRotate={isMobile ? false : true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
      )}

      <Robot isMobile={isMobile} />
      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
