"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20 uppercase">
                Senior Software Engineer
              </span>
              <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight tracking-tight">
                Rintu <br />
                <span className="gradient-text">Chowdory</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Building scalable digital solutions and AI-powered systems. Based in Baesweiler, Germany.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8 gap-2 text-lg" asChild>
                <a href="#projects">
                  Explore Projects
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg glass-card" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-muted-foreground pt-4">
              <a href="https://github.com/Rintu-chowdory" target="_blank" className="hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in zoom-in-95 duration-700">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={heroImage?.imageUrl || "https://picsum.photos/seed/hero/800/800"}
                alt={heroImage?.description || "Hero illustration"}
                width={800}
                height={800}
                className="object-cover hover:scale-105 transition-transform duration-1000"
                data-ai-hint="abstract tech"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-white/10 p-4 rounded-xl shadow-xl glass-card animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <span className="text-xs font-bold">AI</span>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-semibold">Latest Work</div>
                  <div className="text-sm font-bold">AntragGPT Engine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}