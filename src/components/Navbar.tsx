
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-headline text-2xl font-bold tracking-tight">
              Pro<span className="text-primary">Folio</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <Link href="/storyteller">
                <Button variant="ghost" size="sm" className="gap-2 text-secondary">
                  <Wand2 className="w-4 h-4" />
                  Storyteller
                </Button>
              </Link>
              <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-white/10 absolute top-full left-0 w-full p-4 flex flex-col gap-4 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium p-2 hover:bg-muted rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/storyteller" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="outline" className="w-full gap-2 text-secondary">
              <Wand2 className="w-4 h-4" />
              AI Storyteller
            </Button>
          </Link>
          <Button className="w-full gap-2">
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>
      )}
    </nav>
  );
}
