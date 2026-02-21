import { projects } from "@/data/projects";  // Import your project data (adjust the path)

export default function sitemap() {
  // Generate URLs for static pages
  const staticPages = [
    { url: "https://yourdomain.com", lastModified: new Date() },
    { url: "https://yourdomain.com/projects", lastModified: new Date() },
    { url: "https://yourdomain.com/skills", lastModified: new Date() },
    { url: "https://yourdomain.com/contact", lastModified: new Date() },
  ];

  // Generate dynamic URLs for each project
  const dynamicPages = projects.map((project) => ({
    url: `https://yourdomain.com/projects/${project.id}`,
    lastModified: new Date(),
  }));

  // Combine static and dynamic URLs
  return [...staticPages, ...dynamicPages];
}