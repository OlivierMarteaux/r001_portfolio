import { FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="flex flex-col items-start gap-4">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-slate-400 mb-4">
        Feel free to reach out for opportunities or collaboration.
      </p>

      <div className="flex gap-4">
        {/* Email Button */}
			{/*<a
          href="mailto:olivier_marteaux@hotmail.com"
          className="bg-sky-500 px-6 py-3 rounded-xl text-black font-semibold flex items-center gap-2"
        >
          Send Email
			</a>*/}
		<a
          href="mailto:olivier_marteaux@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 px-3 py-3 rounded-xl text-black font-semibold flex items-center gap-2"
        >
          <FaEnvelope size={20} />
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/olivier-marteaux/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 px-3 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-blue-800 transition"
        >
          <FaLinkedin size={20} />
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/OlivierMarteaux"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 px-3 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-gray-900 transition"
        >
          <FaGithub size={20} />
        </a>
		
		{/* X Button */}
		<a
		  href="https://x.com/OlivierMarteaux"
		  target="_blank"
		  rel="noopener noreferrer"
		  className="bg-black px-3 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-gray-800 transition"
		>
		  <FaXTwitter size={20} />
		</a>

		{/* Instagram Button */}
		<a
		  href="https://instagram.com/olivier.marteaux"
		  target="_blank"
		  rel="noopener noreferrer"
		  className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-3 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:opacity-90 transition"
		>
		  <FaInstagram size={20} />
		</a>
		
		{/* Youtube Button */}
		<a
		  href="https://www.youtube.com/@oliviermarteaux"
		  target="_blank"
		  rel="noopener noreferrer"
		  className="bg-red-500 px-3 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:opacity-90 transition"
		>
		  <FaYoutube size={20} />
		</a>
		
      </div>
    </section>
  );
}