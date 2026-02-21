"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: Props) {
  const { id } = use(params); // unwrap the promise
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}