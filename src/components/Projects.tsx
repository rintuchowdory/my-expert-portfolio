"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowUpRight, ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Projects() {
  const projects = [
    {
      id: "project-1",
      title: "AntragGPT",
      description: "AI-powered application platform that simplifies complex document processing and submission using advanced LLMs.",
      tags: ["TypeScript", "AI", "OpenAI"],
      link: "#",
      repo: "https://github.com/Rintu-chowdory/antraggpt",
      image: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl
    },
    {
      id: "project-2",
      title: "Islamic Hub",
      description: "A comprehensive digital ecosystem for Islamic resources, providing community tools and educational content.",
      tags: ["TypeScript", "Firebase", "React"],
      link: "#",
      repo: "https://github.com/Rintu-chowdory/islamic-hub",
      image: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl
    },
    {
      id: "project-3",
      title: "Schufa Open Platform",
      description: "An innovative open-platform integration for credit scoring insights and financial transparency.",
      tags: ["TypeScript", "API", "Finance"],
      link: "#",
      repo: "https://github.com/Rintu-chowdory/schufa-open-platform",
      image: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl
    },
    {
      id: "project-4",
      title: "Aura AI",
      description: "A sophisticated AI assistant template designed for seamless user interaction and intelligent automation.",
      tags: ["JavaScript", "LLM", "Template"],
      link: "#",
      repo: "https://github.com/Rintu-chowdory/Aura-AI",
      image: PlaceHolderImages.find(img => img.id === 'project-4')?.imageUrl
    },
    {
      id: "project-5",
      title: "Tesla Chatbot",
      description: "A Python-based intelligent conversational agent tailored for automotive customer experience simulations.",
      tags: ["Python", "NLP", "Tesla API"],
      link: "#",
      repo: "https://github.com/Rintu-chowdory/tesla-chatbot",
      image: PlaceHolderImages.find(img => img.id === 'project-5')?.imageUrl
    },
    {
      id: "project-6",
      title: "Luftlinie",
      description: "A precise distance calculation tool optimized for web performance and spatial mapping.",
      tags: ["CSS", "JavaScript", "Maps"],
      link: "#",
      repo: "https://github.com/Rintu-chowdory/luftlinie",
      image: PlaceHolderImages.find(img => img.id === 'project-6')?.imageUrl
    }
  ];

  return (
    <section id="projects" className="py-24 bg-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold font-headline tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A collection of high-impact open-source contributions and personal projects, 
              ranging from AI-driven tools to financial integrations.
            </p>
          </div>
          <Button variant="outline" size="lg" className="glass-card" asChild>
            <a href="https://github.com/Rintu-chowdory" target="_blank">View GitHub Profile</a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <CardHeader className="p-0 relative h-64 overflow-hidden">
                <Image
                  src={project.image || "https://picsum.photos/seed/project/800/600"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button variant="secondary" size="icon" className="rounded-full shadow-lg" asChild>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button size="icon" className="rounded-full shadow-lg bg-primary" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-0.5 rounded text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <CardTitle className="mb-3 flex items-center justify-between group-hover:text-primary transition-colors">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Link href={project.repo} target="_blank" className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
                  View Repository <ArrowRight className="w-3 h-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
