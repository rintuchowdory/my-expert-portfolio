
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const profilePic = PlaceHolderImages.find(img => img.id === 'profile-pic');

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "40+" },
    { label: "Satisfied Clients", value: "25+" },
  ];

  return (
    <section id="about" className="py-24 bg-card/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square">
              <Image
                src={profilePic?.imageUrl || "https://picsum.photos/seed/profile/600/600"}
                alt="Profile picture"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="professional person portrait"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold font-headline">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate Software Engineer with a focus on creating meaningful digital experiences. 
                My journey in tech began with a curiosity about how things work on the internet, 
                which evolved into a career dedicated to building robust and user-centric applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive in collaborative environments and enjoy solving complex problems using modern technologies 
                like React, Next.js, and TypeScript. My goal is always to deliver code that is as clean as the 
                interfaces it powers.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl border border-white/5 bg-white/5">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span className="font-medium">User Experience Design Thinking</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span className="font-medium">Agile Methodology & Team Leadership</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span className="font-medium">Advanced Performance Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
