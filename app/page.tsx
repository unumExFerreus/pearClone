import Hero from "@/components/hero/Hero";
import Highlights from "@/components/highlights/Highlights";
import Features from "@/components/features/Features";
import dynamic from "next/dynamic";
import Chip from "@/components/chip/Chip";
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

      <section aria-label="Features">
        <Features />
      </section>

      <section aria-label="Chip">
        <Chip />
      </section>
    </>
  );
}
