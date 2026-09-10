import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Trailing Interactive Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Landing Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills & Technical Competence */}
        <Skills />

        {/* Work Experience / Timeline */}
        <Experience />

        {/* Projects Showcase with Category Filtering */}
        <Projects />

        {/* Education & Academic Credentials */}
        {/* <Education /> */}
        {/* GitHub Contribution Activity */}

        {/* Contact Form & Messaging Board */}
        <Contact />
      </main>

      {/* Footer Navigation & Signoff */}
      <Footer />
    </>
  );
}
