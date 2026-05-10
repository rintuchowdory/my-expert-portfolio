
"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wand2, Copy, Check, Sparkles, Loader2, RefreshCw } from "lucide-react";
import { generateProjectNarrative } from "@/ai/flows/generate-project-narrative";
import { toast } from "@/hooks/use-toast";

export default function StorytellerPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    projectName: "",
    technicalDetails: "",
    impactStatements: "",
    audience: "recruiters",
    style: "professional"
  });

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const output = await generateProjectNarrative(formData);
      setResult(output);
    } catch (error) {
      console.error("Narrative generation failed:", error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "There was an error generating your story. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Assistant
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Project Storyteller</h1>
          <p className="text-muted-foreground text-lg">
            Struggling to describe your work? Let AI craft audience-specific narratives 
            for your portfolio based on your technical achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="bg-card border-white/10 glass-card">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Provide the raw data about your project.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="projectName">Project Name</Label>
                  <Input 
                    id="projectName" 
                    placeholder="e.g. NextGen Dashboard" 
                    value={formData.projectName}
                    onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tech">Technical Details</Label>
                  <Textarea 
                    id="tech" 
                    placeholder="e.g. Built with Next.js 14, used server actions, PostgreSQL with Prisma..." 
                    value={formData.technicalDetails}
                    onChange={(e) => setFormData({...formData, technicalDetails: e.target.value})}
                    required
                    className="bg-background/50 min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="impact">Impact Statements</Label>
                  <Textarea 
                    id="impact" 
                    placeholder="e.g. Increased user engagement by 40%, reduced page load by 2s..." 
                    value={formData.impactStatements}
                    onChange={(e) => setFormData({...formData, impactStatements: e.target.value})}
                    required
                    className="bg-background/50 min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Target Audience</Label>
                    <Select 
                      value={formData.audience} 
                      onValueChange={(v) => setFormData({...formData, audience: v})}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recruiters">Recruiters</SelectItem>
                        <SelectItem value="fellow developers">Developers</SelectItem>
                        <SelectItem value="clients">Potential Clients</SelectItem>
                        <SelectItem value="general">General Public</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Narrative Style</Label>
                    <Select 
                      value={formData.style} 
                      onValueChange={(v) => setFormData({...formData, style: v})}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="technical">Highly Technical</SelectItem>
                        <SelectItem value="storytelling">Creative Story</SelectItem>
                        <SelectItem value="concise">Bullet Points / Concise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 gap-2 text-lg" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating Narrative...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      Generate Story
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className={`h-full border-white/10 glass-card transition-all duration-500 ${!result && 'opacity-50'}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle>Generated Narrative</CardTitle>
                {result && (
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={copyToClipboard} title="Copy to clipboard">
                      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={handleGenerate} title="Regenerate">
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-20 space-y-4 text-muted-foreground italic">
                    <Loader2 className="w-12 h-12 animate-spin text-primary" />
                    <p className="animate-pulse">Thinking about your project...</p>
                  </div>
                ) : result ? (
                  <div className="prose prose-invert max-w-none">
                    <div className="whitespace-pre-wrap leading-relaxed text-foreground/90 bg-black/20 p-6 rounded-lg border border-white/5">
                      {result}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 text-muted-foreground">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-2">
                      <Sparkles className="w-8 h-8 opacity-20" />
                    </div>
                    <p>Fill out the form and click generate <br /> to see the magic happen.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {result && (
              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20 text-sm">
                <Sparkles className="w-5 h-5 text-primary shrink-0" />
                <p className="text-muted-foreground italic">
                  Tip: You can change the target audience or style to see how the narrative adapts!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
