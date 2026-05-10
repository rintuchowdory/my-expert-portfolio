"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <Link href="/" className="font-headline text-xl font-bold tracking-tight">
              Rintu<span className="text-primary">Chowdory</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Innovating at the intersection of AI and Web Technology.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/Rintu-chowdory" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {year} Rintu Chowdory. Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> in Germany.
          </div>
        </div>
      </div>
    </footer>
  );
}