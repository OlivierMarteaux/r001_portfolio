"use client";

import { use } from "react";
import { Privacy } from "@data/privacies";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  privacy: Privacy;
}

export default function ProjectPrivacy({ privacy }: Props) {

  return (
    <section className="max-w-4xl mx-auto space-y-8 px-6 py-12 text-slate-300">
      {/* Title */}
      <h1 className="text-4xl font-bold">📜 Privacy Policy - {privacy.title}</h1>
      <p className="text-slate-400 text-lg">Effective Date: {privacy.date}</p>

      {/* Policy Content */}
      <section className="space-y-4">
        <p>
          {privacy.title} (“we”, “our”, or “us”) respects your privacy. {privacy.description}
        </p>

        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Personal Information:</strong> {privacy.personal}
          </li>
          <li>
            <strong>Device Information:</strong> {privacy.device}
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
		  {privacy.usage.map((item, idx) => (
			<li key={idx}>{item}</li>
		  ))}
		</ul>

        <h2 className="text-2xl font-semibold">3. Third-Party Services</h2>
        <p>
          {privacy.services}
        </p>

        <h2 className="text-2xl font-semibold">4. Children’s Privacy</h2>
        <p>
          {privacy.children}
        </p>

        <h2 className="text-2xl font-semibold">5. Security</h2>
        <p>
          {privacy.security}
        </p>

        <h2 className="text-2xl font-semibold">6. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:{" "}
          <a
            href="mailto:olivier_marteaux@hotmail.com"
            className="text-blue-400 hover:underline"
          >
            olivier_marteaux@hotmail.com
          </a>
        </p>
      </section>

      {/* Back Button */}
      <Link
        href={`/projects/${privacy.id}`}
        className="bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-blue-800 transition"
      >
        <FaArrowLeft size={20} /> Back to Project
      </Link>
    </section>
  );
}