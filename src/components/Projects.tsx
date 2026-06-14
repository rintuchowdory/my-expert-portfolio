"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowUpRight, ArrowRight, Globe, Wrench } from "lucide-react";
import { useState } from "react";

const ALL_PROJECTS = [
  { title: "AmtAssist", desc: "AI-powered German bureaucracy assistant.", tags: ["React","AI","Vercel"], live: "https://amtassist.vercel.app", repo: "https://github.com/rintuchowdory/amtassist", status: "live" },
  { title: "Athan App", desc: "Islamic prayer times app.", tags: ["React","Vercel"], live: "https://athan-app-puce.vercel.app", repo: "https://github.com/rintuchowdory/athan-app", status: "live" },
  { title: "Aura-AI", desc: "AI interview coach with voice mode & Cloudflare Worker proxy.", tags: ["React","Vite","Groq","Cloudflare"], live: "https://aura-ai-phi-one.vercel.app", repo: "https://github.com/rintuchowdory/Aura-AI", status: "live" },
  { title: "Bürokratie Simulator 2026", desc: "Satirical German bureaucracy simulator.", tags: ["React","Manus"], live: "https://buerosim-jagns6gc.manus.space", repo: "https://github.com/rintuchowdory/buerokratie-simulator-2026", status: "live" },
  { title: "ChatGPT Clone (NexusAI)", desc: "Dark-themed GPT clone with multi-session sidebar, streaming & voice mode. Built on Alpine Linux via QEMU.", tags: ["FastAPI","Groq","Vercel"], live: "https://chatgpt-clone-ten-steel.vercel.app", repo: "https://github.com/rintuchowdory/chatgpt-clone", status: "live" },
  { title: "Chatgpt-Rintu", desc: "ChatGPT UI built with Lovable.", tags: ["Lovable","AI"], live: "https://chatgpt-rintu.lovable.app", repo: "https://github.com/rintuchowdory/chatgpt-rintu", status: "live" },
  { title: "Clocklytics", desc: "Time analytics dashboard.", tags: ["React","Manus"], live: "https://clocklytics-s2kza6c7.manus.space", repo: "https://github.com/rintuchowdory/clocklytics", status: "live" },
  { title: "Codex Divine", desc: "Deployed on Cloudflare Pages.", tags: ["Cloudflare Pages"], live: "https://b4cda6d1.codex-divine.pages.dev/", repo: "https://github.com/rintuchowdory/codex-divine", status: "live" },
  { title: "Cool Platform", desc: "Demo platform deployed to Vercel.", tags: ["Vercel"], live: "https://cool-pltfrm.vercel.app", repo: "https://github.com/rintuchowdory/cool-pltfrm", status: "live" },
  { title: "Freelancer Toolkit Germany", desc: "Tools for German freelancers — invoice gen, tax calc.", tags: ["React","Manus"], live: "https://freelancetk-yundewau.manus.space", repo: "https://github.com/rintuchowdory/freelancer-toolkit-germany", status: "live" },
  { title: "German Call Companion", desc: "German phone call assistance app.", tags: ["Lovable","AI"], live: "https://handy-helper-helfer.lovable.app", repo: "https://github.com/rintuchowdory/german-call-companion", status: "live" },
  { title: "Germany People Finder", desc: "People search tool for Germany.", tags: ["Lovable"], live: "https://find-germany-folk.lovable.app", repo: "https://github.com/rintuchowdory/germany-people-finder", status: "live" },
  { title: "GrundgesetzGPT", desc: "AI-powered German Basic Law app using Groq Llama3-70b via Cloudflare Worker.", tags: ["React","Vite","Groq","Cloudflare"], live: "https://grundgpt-fvh7k5f7.manus.space", repo: "https://github.com/rintuchowdory/grundgesetz-gpt", status: "live" },
  { title: "Islamic Hub", desc: "Comprehensive digital ecosystem for Islamic resources.", tags: ["React","Vercel"], live: "https://islamic-hub-theta.vercel.app", repo: "https://github.com/rintuchowdory/islamic-hub", status: "live" },
  { title: "Krankenkasse Navigator", desc: "German health insurance comparison tool on GitHub Pages.", tags: ["React","Vite","Groq","GitHub Pages"], live: "https://krankenkasse-navigator.pages.dev/", repo: "https://github.com/rintuchowdory/krankenkasse-navigator", status: "live" },
  { title: "Landio Clone", desc: "Framer-exported landing page on Cloudflare Pages.", tags: ["Framer","Cloudflare"], live: "https://modern-yards-793817.framer.app/", repo: "https://github.com/rintuchowdory/landio-clone", status: "live" },
  { title: "Leben in Deutschland", desc: "Civics & life-in-Germany companion app.", tags: ["Render"], live: "https://leben-in-deutschland-sp8q.onrender.com/", repo: "https://github.com/rintuchowdory/leben-in-deutschland", status: "live" },
  { title: "My Expert Portfolio", desc: "Next.js portfolio with Genkit/Gemini AI integration.", tags: ["Next.js","Gemini","Vercel"], live: "https://my-expert-portfolio.vercel.app", repo: "https://github.com/rintuchowdory/my-expert-portfolio", status: "live" },
  { title: "My Music App", desc: "Music streaming UI.", tags: ["React","Vercel"], live: "https://my-musicapp.vercel.app", repo: "https://github.com/rintuchowdory/my-musicapp", status: "live" },
  { title: "OpenClow AI", desc: "AI-powered cloud tool.", tags: ["AI","Manus"], live: "https://openclowai-hghmf2wg.manus.space", repo: "https://github.com/rintuchowdory/openclow", status: "live" },
  { title: "Phishing Lab", desc: "Cybersecurity awareness & phishing simulation lab.", tags: ["Security","Vercel"], live: "https://phishing-lab.vercel.app", repo: "https://github.com/rintuchowdory/phishing-lab", status: "live" },
  { title: "Pitch Visualizer", desc: "Startup pitch deck visualizer.", tags: ["Replit"], live: "https://pitch-visualizer--rintuchowdory.replit.app", repo: "https://github.com/rintuchowdory/pitch-visulizer", status: "live" },
  { title: "Rintu (Personal Site)", desc: "Personal homepage on Render.", tags: ["Render"], live: "https://rintu.onrender.com", repo: "https://github.com/rintuchowdory/rintu", status: "live" },
  { title: "SaaS Auth CI Dashboard", desc: "SaaS authentication + CI/CD dashboard.", tags: ["GitHub Pages","CI/CD"], live: "https://rintuchowdory.github.io/saas-auth-ci-dashboard/", repo: "https://github.com/rintuchowdory/saas-auth-ci-dashboard", status: "live" },
  { title: "Schufa Open Platform", desc: "Open credit scoring platform alternative.", tags: ["Render","FinTech"], live: "https://schufa-open-platform.onrender.com", repo: "https://github.com/rintuchowdory/schufa-open-platform", status: "live" },
  { title: "SpiritLevel", desc: "Digital spirit level web app.", tags: ["React","Vercel"], live: "https://spirit-level-one.vercel.app", repo: "https://github.com/rintuchowdory/SpiritLevel", status: "live" },
  { title: "Tesla Chatbot", desc: "Tesla-themed AI chatbot.", tags: ["AI","Render"], live: "https://tesla-chatbot-1.onrender.com", repo: "https://github.com/rintuchowdory/tesla-chatbot", status: "live" },
  { title: "WarShip Tracker", desc: "Real-time warship tracking using Leaflet.js.", tags: ["Leaflet.js","Manus"], live: "https://warshipapp-ans4yvej.manus.space", repo: "https://github.com/rintuchowdory/warship-tracker", status: "live" },
  { title: "WhatsFlow", desc: "WhatsApp automation flow tool.", tags: ["GitHub Pages"], live: "https://rintuchowdory.github.io/WhatsFlow/", repo: "https://github.com/rintuchowdory/WhatsFlow", status: "live" },
  { title: "WhatsFlow Landing Page", desc: "Marketing landing page for WhatsFlow.", tags: ["Vercel"], live: "https://whatsflow-landing-page.vercel.app", repo: "https://github.com/rintuchowdory/whatsflow-landing-page", status: "live" },
  { title: "Flutter Portfolio App", desc: "Portfolio app in Flutter/Dart, deployed via GitHub Actions CI/CD.", tags: ["Flutter","Dart","GitHub Actions"], live: "https://rintuchowdory.github.io", repo: "https://github.com/rintuchowdory/Project-Flutter-Android", status: "live" },
  { title: "Codespaces React", desc: "React app started in GitHub Codespaces.", tags: ["React","Codespaces"], live: "https://codespaces-react-gamma-six.vercel.app", repo: "https://github.com/rintuchowdory/codespaces-react", status: "live" },
  { title: "Remix Visual Landing Page", desc: "Remix of visual landing page template.", tags: ["Vercel"], live: "https://remix-of-visual-landing-page-websit-rintu.vercel.app/", repo: "https://github.com/rintuchowdory/remix-of-visual-landing-page-website-template", status: "live" },
  { title: "WerRiefAn.de", desc: "German reverse phone lookup — React/Vite + Cloudflare Worker + KV. In active development.", tags: ["React","Cloudflare","KV"], repo: "https://github.com/rintuchowdory/werriefan", status: "wip" },
  { title: "CinemAI", desc: "Netflix-style movie app powered by Groq API.", tags: ["React","Groq"], repo: "https://github.com/rintuchowdory/cinemai", status: "wip" },
  { title: "ContractAI", desc: "AI contract analysis tool using Gemini API.", tags: ["React","Gemini"], repo: "https://github.com/rintuchowdory/contractai", status: "wip" },
  { title: "AntragGPT", desc: "AI German government form assistant.", tags: ["React","AI"], repo: "https://github.com/rintuchowdory/antraggpt", status: "wip" },
  { title: "Name statt Können", desc: "Social impact platform visualizing hiring discrimination in Germany.", tags: ["React","Vite","Tailwind"], repo: "https://github.com/rintuchowdory/name-statt-koennen", status: "wip" },
  { title: "SteuerHeld", desc: "German tax return helper app.", tags: ["React","AI"], repo: "https://github.com/rintuchowdory/steuerheld", status: "wip" },
  { title: "ARMBoost", desc: "Python/customtkinter Windows desktop optimizer for ARM64 laptops.", tags: ["Python","tkinter","ARM64"], repo: "https://github.com/rintuchowdory/arm-performance-lab", status: "wip" },
  { title: "k8s-project", desc: "WSL2 home lab with k3s — full Kubernetes Dashboard + K8s resources.", tags: ["Kubernetes","k3s","WSL2"], repo: "https://github.com/rintuchowdory/k8s-project", status: "wip" },
  { title: "DevOps Mesh", desc: "FastAPI + Astro microservices portfolio dashboard.", tags: ["FastAPI","Astro","DevOps"], repo: "https://github.com/rintuchowdory/devops-portfolio-microservice", status: "wip" },
  { title: "SkyTrace", desc: "Flight tracker using Leaflet.js and OpenSky API via Cloudflare Worker.", tags: ["Leaflet.js","Cloudflare","API"], repo: "https://github.com/rintuchowdory/flight-tracker", status: "wip" },
  { title: "OrbitWatch", desc: "Rocket & satellite tracker using Leaflet.js.", tags: ["Leaflet.js","Space API"], repo: "https://github.com/rintuchowdory/rocket-tracker", status: "wip" },
  { title: "Luftlinie", desc: "German distance calculator between cities.", tags: ["React","Maps"], repo: "https://github.com/rintuchowdory/luftlinie", status: "wip" },
  { title: "Islamischer Quiz", desc: "Islamic knowledge quiz app.", tags: ["React"], repo: "https://github.com/rintuchowdory/islamischer-quiz", status: "wip" },
  { title: "Tasbih Counter", desc: "Digital Islamic tasbih counter app.", tags: ["React","PWA"], repo: "https://github.com/rintuchowdory/tasbih-counter-app", status: "wip" },
  { title: "Free PDF Merger", desc: "Client-side PDF merge tool.", tags: ["JavaScript","PDF"], repo: "https://github.com/rintuchowdory/free-pdf-merger", status: "wip" },
  { title: "TaxEasy App", desc: "Tax filing simplification app for Germany.", tags: ["React","FinTech"], repo: "https://github.com/rintuchowdory/taxeasy-app", status: "wip" },
  { title: "Sentinel SOC", desc: "Security Operations Center dashboard.", tags: ["Security","Dashboard"], repo: "https://github.com/rintuchowdory/sentinel-soc", status: "wip" },
  { title: "Habit Tracker", desc: "Daily habit tracking app.", tags: ["React"], repo: "https://github.com/rintuchowdory/habit-tracker", status: "wip" },
  { title: "Recipe Vault", desc: "Recipe storage and discovery app.", tags: ["React"], repo: "https://github.com/rintuchowdory/recipevault", status: "wip" },
  { title: "ReiseFreunde", desc: "Travel companion app concept.", tags: ["React"], repo: "https://github.com/rintuchowdory/ReiseFreunde", status: "wip" },
  { title: "Quantum Particle Explorer", desc: "Physics visualization app.", tags: ["JavaScript","Canvas"], repo: "https://github.com/rintuchowdory/quantum-particle-explorer", status: "wip" },
  { title: "Green Balance", desc: "Interactive German climate vs. economy data platform with 7 pages.", tags: ["React","TypeScript","Replit"], live: "https://info-website-builder--chowdory.replit.app/", repo: "https://github.com/rintuchowdory/Green-Balance-Klima-Wirtschaft-im-Gleichgewicht", status: "live" },
  { title: "ASET Site", desc: "Association/organization website.", tags: ["React"], repo: "https://github.com/rintuchowdory/aset-site", status: "wip" },
  { title: "Enterprise Mono", desc: "Enterprise monorepo scaffold.", tags: ["DevOps","Monorepo"], repo: "https://github.com/rintuchowdory/enterprise-mono", status: "wip" },
];

const FEATURED = ["GrundgesetzGPT","Krankenkasse Navigator","Aura-AI","ChatGPT Clone (NexusAI)","k8s-project","Green Balance","AntragGPT","Schufa Open Platform"];

const FILTERS = [
  { key: "featured", label: "⭐ Featured" },
  { key: "live", label: "🚀 Deployed" },
  { key: "wip", label: "🔧 In Progress" },
  { key: "all", label: "All 91+" },
];

export function Projects() {
  const [filter, setFilter] = useState("featured");
  const [showAll, setShowAll] = useState(false);

  const displayed =
    filter === "featured" ? ALL_PROJECTS.filter(p => FEATURED.includes(p.title)) :
    filter === "all" ? ALL_PROJECTS :
    ALL_PROJECTS.filter(p => p.status === filter);

  const visible = showAll ? displayed : displayed.slice(0, 9);

  return (
    <section id="projects" className="py-24 bg-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold font-headline tracking-tight">
              91+ Projects on GitHub
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From AI-powered civic tools to Kubernetes home labs — a growing portfolio of production-deployed work across DevOps, full-stack, and AI engineering.
            </p>
          </div>
          <Button variant="outline" size="lg" className="glass-card" asChild>
            <a href="https://github.com/rintuchowdory" target="_blank">View GitHub Profile</a>
          </Button>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => { setFilter(f.key); setShowAll(false); }}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                filter === f.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent border-white/10 text-muted-foreground hover:text-white hover:border-primary/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden bg-card border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {project.status === "live"
                      ? <Globe className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                      : <Wrench className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
                    }
                    {FEATURED.includes(project.title) && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary px-2 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1.5">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <a href={project.repo} target="_blank" rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
                      <Github className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-0.5 rounded text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <CardTitle className="mb-2 text-base flex items-center justify-between group-hover:text-primary transition-colors">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                </CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-2 flex-1">{project.desc}</p>
              </CardContent>
              <CardFooter className="px-6 pb-5 pt-0">
                <Link href={project.repo} target="_blank" className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
                  View Repository <ArrowRight className="w-3 h-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {!showAll && displayed.length > 9 && (
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="glass-card" onClick={() => setShowAll(true)}>
              Show All {displayed.length} Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
