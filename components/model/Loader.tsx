import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html className="w-full h-full flex justify-center items-center">
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-[#f5f5f5] blur-2xl animate-ping"></div>
      </div>
    </Html>
  );
};

export default Loader;
