import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import IntroAnimation from "@/components/IntroAnimation";
import { SlideSection } from "@/components/MotionProvider";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <CustomCursor />

      <div className="min-h-screen">
        <Header />

        <main className="page-single-scroll bg-white">
          <SlideSection direction="top" index={0} animateOnEnter={false}>
            <Hero />
          </SlideSection>

          <SlideSection direction="right" index={1}>
            <About />
          </SlideSection>

          <SlideSection direction="left" index={2}>
            <Skills />
          </SlideSection>

          <SlideSection direction="right" index={3}>
            <Experience />
          </SlideSection>

          <SlideSection direction="left" index={4}>
            <Projects />
          </SlideSection>
          <SlideSection direction="bottom" index={6}>
            <Contact />
          </SlideSection>
        </main>
      </div>
    </>
  );
}
