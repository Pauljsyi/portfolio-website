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

const Robot = (props) => {
  const { clicked, setClicked, isMobile } = props;
  const group = useRef();

  const robot = useGLTF(robot_scene);
  const animations = robot.animations;

  const { actions, names } = useAnimations(animations, group);
  console.log({ actions });
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);

  const handleOnClick = () => {
    actions[names[0]].reset().fadeIn(0.5).play();
    setClicked(!clicked);
  };

  return (
    <mesh className="mesh" ref={group} onClick={handleOnClick}>
      <hemisphereLight intensity={1} groundColor="white" />
      <pointLight intensity={1} />
      {/* <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <primitive
        object={robot.scene}
        scale={isMobile ? 0.0015 : 0.0015}
        position={isMobile ? [-20, 0, -7] : [0, 0, -3.7]}
        rotation={[-0.01, -5.2, -0.1]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    console.log({ mediaQuery });
    setIsMobile(mediaQuery.matches);
    console.log({ isMobile });
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
        <Robot isMobile={isMobile} clicked={clicked} setClicked={setClicked} />
        <Preload all />
      </Canvas>
    </Suspense>
  );
};

export default RobotCanvas;
