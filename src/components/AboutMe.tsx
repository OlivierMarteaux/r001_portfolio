import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="mb-4">
      <h3 className="text-2xl font-semibold mb-6">About Me</h3>

      <div className="space-y-8">
        
          <p className="text-slate-400">
            I’m a motivated Android developer with a background in high‑precision engineering and a strong passion for mobile app design. Throughout my training to become a developer — from completing Google’s Android Basics program to earning the OpenClassrooms Android Developer certificate — I’ve built a portfolio of over 50 <Link href="/projects" className="text-sky-400 hover:text-sky-300 underline">Android projects</Link>, all available on GitHub. These range from concept apps to fully featured mobile experiences, showcasing my hands-on mastery of Jetpack Compose, Kotlin, and modern app architecture. With a sharp problem-solving mindset developed through years in the aerospace industry, I bring both rigor and creativity to designing user-focused, robust applications.
          </p>
		  

      </div>
	  
    </section>
  );
}
