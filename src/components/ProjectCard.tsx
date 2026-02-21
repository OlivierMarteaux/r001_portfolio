"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaPlay, FaArrowRight } from "react-icons/fa";

interface Props {
  project: {
    id: string;
	cardTitle: string;
    cardSkills: string; // NEW
    cardDescription: string;
    title: string;
	description: string;
	features: string[];
    techStack: { [key: string]: string };
    github: string;
    demo?: string;
  };
}

export default function ProjectCard({ project }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_LENGTH = 140; // adjust to your preference

  const isLong = project.cardDescription.length > MAX_LENGTH;
  const displayedText =
    !isExpanded && isLong
	  ? project.cardDescription.slice(0, MAX_LENGTH)
	  : project.cardDescription;

  return (
    <>
      {/* Card */}
      <div
		
		className="bg-gradient-to-br from-slate-800 via-slate-500 to-slate-700 p-6 rounded-2xl hover:scale-105 transition transform"
		>
        
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{project.cardTitle}</h3>

        {/* Skills (NEW – emphasized) */}
        <p className="text-sm font-medium text-sky-300 tracking-wide mb-3">
          {project.cardSkills}
        </p>

        {/* Description */}
        <p className="text-slate-200 mb-4 leading-relaxed">
		  {displayedText}
		  {isLong && (
			<>
			  {!isExpanded && "... "}
			  <button
				onClick={() => setIsExpanded(!isExpanded)}
				className="text-sky-400 hover:underline ml-1"
			  >
				{isExpanded ? "See less" : "See more"}
			  </button>
			</>
		  )}
		</p>

        {/* Links */}
        <div className="flex gap-4">
		{/*<a
            href={github}
            target="_blank"
            className="text-sky-400 hover:underline"
          >
            View on GitHub →
		</a>*/}
		  
			{/* GitHub Button */}
			<a
			  href={project.github}
			  target="_blank"
			  rel="noopener noreferrer"
			  className="bg-gray-800 px-3 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-gray-900 transition"
			>
				<FaGithub size={20} />
			</a>
			
			{project.demo && (
			  <button
				onClick={() => setIsModalOpen(true)}
				className="bg-green-600 px-3 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-green-700 transition"
			  >
				<FaPlay size={20} />
			  </button>
			)}
			
			<Link
			  href={`/projects/${project.id}`} // project page URL
			  className="bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-blue-800 transition"
			>
				<FaArrowRight size={20} /> Go to Project
			</Link>

			{/*{demo && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-green-400 hover:underline"
            >
              Watch Demo →
            </button>
			)}*/}
        </div>
      </div>

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
    </>
  );
}