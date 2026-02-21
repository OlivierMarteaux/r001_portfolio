import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AboutMe from "@/components/AboutMe";
import ContactCard from "@/components/ContactCard";

export default function Home() {
  return (
    <>
      <Hero />
	  <AboutMe />
      <Experience />
	  <Education />
    </>
  );
}
