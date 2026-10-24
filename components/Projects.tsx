"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, Star, Code } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/cysof/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const liveProjects = [
    {
      title: "FarmRide",
      category: "AgroTech Marketplace",
      description: "Digital marketplace connecting Nigerian farmers, buyers, and transporters seamlessly.",
      url: "https://farmride.com.ng/",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      tech: ["Django", "Next.js", "PostgreSQL", "Python"]
    },
    {
      title: "Mandc Cakes",
      category: "Cake eCommerce Platform",
      description: "Custom eCommerce web application built for ordering cakes, managing bakery products, and online sales.",
      url: "https://mandccakes.com",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
      tech: ["React", "Node.js", "eCommerce", "Tailwind CSS"]
    },
    {
      title: "Zertek Realty Home",
      category: "Real Estate Tech",
      description: "Modern real estate platform for property browsing, listings, and client inquiries.",
      url: "https://zertekrealtyhome.online/",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      tech: ["React", "Tailwind CSS", "REST API"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Featured & Live Projects</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Explore active production platforms and live GitHub repositories from my development pipeline.
          </p>
        </div>

        {/* Live Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {liveProjects.map((project, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col group">
              
              {/* Mockup Browser Header */}
              <div className="bg-slate-200 dark:bg-slate-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-white dark:bg-slate-900 px-3 py-1 rounded-md text-[11px] text-slate-500 font-mono truncate max-w-[140px]">
                  {project.url}
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-orange-500">
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Browser Image Preview with Scroll Hover Effect */}
              <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-1000 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">{project.category}</span>
                  <h3 className="text-xl font-bold mt-1 text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-sm text-orange-600 dark:text-orange-400 hover:text-orange-700 pt-2"
                >
                  Visit Live Platform <ExternalLink size={15} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic GitHub Repositories Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> Latest GitHub Repositories (@cysof)
            </h3>
            <a href="https://github.com/cysof?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-orange-600 hover:underline">
              View All on GitHub →
            </a>
          </div>

          {loading ? (
            <div className="text-center py-12 text-slate-500">Loading repositories from GitHub...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-orange-500 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Code className="text-orange-500 group-hover:scale-110 transition-transform" size={22} />
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Star size={14} className="text-amber-500" /> {repo.stargazers_count}
                      </span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors truncate">
                      {repo.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 line-clamp-2">
                      {repo.description || "No description provided."}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                    <span className="font-semibold text-orange-600 dark:text-orange-400">{repo.language || "Code"}</span>
                    <span>View Repo →</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}