"use client";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  const handleClick = (platform: string) => {
    trackEvent(`om_contact_${platform}_click`);
  };

  return (
    <section className="flex flex-col items-start gap-4">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-slate-400 mb-4">
        Feel free to reach out for opportunities or collaboration.
      </p>

      <div className="flex flex-wrap gap-4">
        {/* Email */}
        <a
          href="mailto:olivier_marteaux@hotmail.com"
          className="bg-sky-500 px-3 py-3 rounded-xl text-black font-semibold flex items-center gap-2 hover:bg-sky-600 transition"
          onClick={() => handleClick("email")}
        >
          <FaEnvelope size={20} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/olivier-marteaux/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 px-3 py-3 rounded-xl text-white hover:bg-blue-800 transition"
          onClick={() => handleClick("linkedin")}
        >
          <FaLinkedin size={20} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/OlivierMarteaux"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 px-3 py-3 rounded-xl text-white hover:bg-gray-900 transition"
          onClick={() => handleClick("github")}
        >
          <FaGithub size={20} />
        </a>

        {/* X */}
        <a
          href="https://x.com/OlivierMarteaux"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black px-3 py-3 rounded-xl text-white hover:bg-gray-800 transition"
          onClick={() => handleClick("x")}
        >
          <FaXTwitter size={20} />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/olivier.marteaux"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-3 py-3 rounded-xl text-white hover:opacity-90 transition"
          onClick={() => handleClick("instagram")}
        >
          <FaInstagram size={20} />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@oliviermarteaux"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 px-3 py-3 rounded-xl text-white hover:bg-red-700 transition"
          onClick={() => handleClick("youtube")}
        >
          <FaYoutube size={20} />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@olivier.marteaux"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black px-3 py-3 rounded-xl text-white hover:bg-gray-800 transition"
          onClick={() => handleClick("tiktok")}
        >
          <FaTiktok size={20} />
        </a>
      </div>
    </section>
  );
}