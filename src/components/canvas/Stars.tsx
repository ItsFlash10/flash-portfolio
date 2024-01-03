import { useState, useRef, Suspense, Ref } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
// import { inSphere } from 'maath/random/dist/maath-random.esm';

interface IStarsProps {}

const Stars: React.FC<IStarsProps> = (props) => {
  // const ref = useRef<any>();
  // const [sphere] = useState(() =>
  //   inSphere(new Float32Array(5000), { radius: 1.2 })
  // );

  // useFrame((state, delta) => {
  //   ref.current.rotation.x -= delta / 10;
  //   ref.current.rotation.y -= delta / 15;
  // });

  // return (
  //   <group rotation={[0, 0, Math.PI / 4]}>
  //     <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
  //       <PointMaterial
  //         transparent
  //         color="#f272c8"
  //         size={0.002}
  //         sizeAttenuation={true}
  //         depthWrite={false}
  //       />
  //     </Points>
  //   </group>
  // );
  return <></>
};

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-auto w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
