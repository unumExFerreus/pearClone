import { Suspense } from "react";
import IPhone from "./IPhone";

import Lights from "./Lights";
import {
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import * as THREE from "three";
import Loader from "./Loader";

const ModelView = ({
  index,
  groupRef,
  controlRef,
  gsapType,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-[85%] mx-[7.5%] md:w-full md:mx-0 h-full absolute ${index === 2 ? "right-[-85%] md:right-[-100%]" : ""}`}
    >
      {/* Ambient light */}
      <ambientLight intensity={1} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls       
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
