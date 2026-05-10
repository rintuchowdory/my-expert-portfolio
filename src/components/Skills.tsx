
"use client";

import { Badge } from "@/components/ui/badge";

export function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion", "GraphQL"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Firebase", "REST APIs"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "Jest", "Playwright"],
    },
    {
      title: "Design",
      skills: ["Figma", "Adobe XD", "UI/UX Principles", "Responsive Design", "Prototypes"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold font-headline">Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive list of the technologies I've mastered and use daily to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-8 rounded-2xl bg-card border border-white/10 hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-xl font-bold mb-6 font-headline group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-muted text-foreground hover:bg-primary hover:text-white transition-all cursor-default py-1.5 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
