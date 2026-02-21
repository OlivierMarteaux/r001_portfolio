import { projects } from "@/data/projects";  // Import your project data (adjust the path)

export default function sitemap() {
  // Generate URLs for static pages
  const staticPages = [
    { url: "https://oliviermarteaux.dev/", lastModified: new Date() },
    { url: "https://oliviermarteaux.dev/projects", lastModified: new Date() },
    { url: "https://oliviermarteaux.dev/skills", lastModified: new Date() },
    { url: "https://oliviermarteaux.dev/contact", lastModified: new Date() },
  ];

  // Generate dynamic URLs for each project
  const dynamicPages = projects.map((project) => ({
    url: `https://oliviermarteaux.dev/projects/${project.id}`,
    lastModified: new Date(),
  }));

  // Combine static and dynamic URLs
  return [...staticPages, ...dynamicPages];
}