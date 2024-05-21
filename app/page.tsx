import Hero from "@/components/hero/Hero";
import Highlights from "@/components/highlights/Highlights";
import dynamic from "next/dynamic";
const Model3D = dynamic(() => import("../components/model/Model3D"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <section aria-label="Hero">
        <Hero />
      </section>
      <section aria-label="Highlights">
        <Highlights />
      </section>
      <section id="touchTrigger" aria-label="3d model">
        <Model3D />
      </section>
    </>
  );
}
