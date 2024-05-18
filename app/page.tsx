import Hero from "@/components/hero/Hero";
import Highlights from "@/components/highlights/Highlights";
import Model3D from "@/components/model/Model3D";

export default function Home() {
  return (
    <>
      <section aria-label="Hero">
        <Hero />
      </section>
      <section aria-label="Highlights">
        <Highlights />
      </section>
      <section aria-label="3d model">
        <Model3D />
      </section>
    </>
  );
}
