"use client";

import { useState } from "react";
import { FaGithub, FaPlay, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

interface Props {
  project: ProjectDetail;
}

export default function ProjectDetail({ project }: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	
  return (
    <section className="max-w-6xl mx-auto space-y-8 px-6 py-12">
      {/* Title */}
      <h2 className="text-4xl font-bold">{project.title}</h2>

      {/* Description */}
      <p className="text-slate-400 text-lg leading-relaxed">{project.description}</p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-gray-900 transition"
          >
            <FaGithub size={20} /> GitHub
          </a>
        )}
        {project.demo && (
		  <button
			onClick={() => setIsModalOpen(true)}
			className="bg-green-600 px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-green-700 transition"
		  >
			<FaPlay size={20} /> Play Video
		  </button>
		)}
      </div>

      {/* Features */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">🧠 Features</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          {project.features.map((feature, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: feature }} />
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">🛠️ Tech Stack</h3>
        <table className="table-auto border border-gray-700 border-collapse text-slate-300 w-full">
          <tbody>
            {Object.entries(project.techStack).map(([key, value]) => (
              <tr key={key}>
                <td className="border border-gray-700 px-4 py-2 font-medium">{key}</td>
                <td className="border border-gray-700 px-4 py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Back Button */}
      <Link href="/projects" className="bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-blue-800 transition">
        <FaArrowLeft size={20} /> Back to projects
      </Link>
	  
	  {/* Modal */}
      {isModalOpen && project.demo && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="
				relative
				bg-white/10
				backdrop-blur-xl
				border border-white/20
				rounded-3xl
				shadow-2xl
				overflow-hidden
				p-4
			 "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white text-xl font-bold z-10"
            >
              ×
            </button>

            <video
              className="w-[300px] h-[600px] md:w-[400px] md:h-[800px] rounded-2xl shadow-lg"
              controls
              autoPlay
            >
              <source src={project.demo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
	  
    </section>
  );
}