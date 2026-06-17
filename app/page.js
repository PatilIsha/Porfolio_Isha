import AboutSection from "./components/homepage/about";
import Certifications from "./components/homepage/certifications";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Reveal from "./components/helper/reveal";

export default function Home() {
  return (
    <div suppressHydrationWarning >
      <Reveal><HeroSection /></Reveal>
      <Reveal><AboutSection /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Education /></Reveal>
      <Reveal><Certifications /></Reveal>
      <Reveal><ContactSection /></Reveal>
    </div>
  )
};
