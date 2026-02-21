"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `hover:text-sky-400 transition ${
      pathname === path ? "text-sky-400" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
	  <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
		{/* Top line: Avatar + Name */}
		<div className="flex items-center gap-3">
		  <img
			src="/avatar.jpg"
			alt="Olivier Marteaux Android Developer"
			className="w-10 h-10 rounded-full object-cover"
		  />
		  <h1 className="font-bold text-lg">Olivier Marteaux</h1>
		</div>

		{/* Divider */}
		<div className="border-t border-slate-700"></div>

		{/* Bottom line: Links evenly spaced */}
        <div className="flex justify-evenly mt-2">
          <Link href="/" className={linkStyle("/")}>CV</Link>
		  <Link href="/skills" className={linkStyle("/skills")}>Skills</Link>
          <Link href="/projects" className={linkStyle("/projects")}>Projects</Link>
          <Link href="/contact" className={linkStyle("/contact")}>Contact</Link>
        </div>
	  </nav>
	</header>
  );
}
