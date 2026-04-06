"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import ProjectPrivacy from "@/components/ProjectPrivacy";
import { privacies } from "@/data/privacies";

interface Props {
  params: Promise<{ id: string }>;
}

export default function PrivacyPage({ params }: Props) {
  const { id } = use(params); // unwrap the promise
  const privacy = privacies.find((p) => p.id === id);

  if (!privacy) return notFound();

  return <ProjectPrivacy privacy={privacy} />;
}