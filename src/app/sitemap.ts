import { projects } from "@/data/projects";  // Import your project data (adjust the path)
import { privacies } from "@/data/privacies";

export default function sitemap() {
  // Generate URLs for static pages
  const staticPages = [
    { url: "https://oliviermarteaux.dev/", lastModified: new Date() },
    { url: "https://oliviermarteaux.dev/projects", lastModified: new Date() },
    { url: "https://oliviermarteaux.dev/skills", lastModified: new Date() },
    { url: "https://oliviermarteaux.dev/contact", lastModified: new Date() },
	{ url: "https://brickbreaker.oliviermarteaux.dev/", lastModified: new Date() },
  ];

  // Generate dynamic URLs for each project
  const dynamicPages = projects.map((project) => ({
    url: `https://oliviermarteaux.dev/projects/${project.id}`,
    lastModified: new Date(),
  }));
  
  // Generate dynamic URLs for each privacy
  const privacyPages = privacies.map((privacy) => ({
	  url: `https://oliviermarteaux.dev/projects/${privacy.id}/privacy-policy`,
	  lastModified: new Date(),
	}));

  // Combine static and dynamic URLs
  return [...staticPages, ...dynamicPages, ...privacyPages];
}