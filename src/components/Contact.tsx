"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold font-headline">Let's Connect</h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Looking for a technical partner or have a question about my projects? 
                I'm currently available for interesting collaborations and senior roles.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-bold">Rintuchowdory@outlook.de</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-bold">52499 Baesweiler, Germany</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted border border-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-bold">+49 176 82029425</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-white/10 p-8 rounded-2xl shadow-xl glass-card relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <MessageSquare className="w-32 h-32" />
             </div>
             
             <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
               <div className="grid sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <Label htmlFor="name">Full Name</Label>
                   <Input id="name" placeholder="John Doe" required className="bg-background/50 border-white/10" />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="email">Email Address</Label>
                   <Input id="email" type="email" placeholder="john@example.com" required className="bg-background/50 border-white/10" />
                 </div>
               </div>
               <div className="space-y-2">
                 <Label htmlFor="subject">Subject</Label>
                 <Input id="subject" placeholder="Project Inquiry" required className="bg-background/50 border-white/10" />
               </div>
               <div className="space-y-2">
                 <Label htmlFor="message">Message</Label>
                 <Textarea 
                   id="message" 
                   placeholder="How can I help you today?" 
                   required 
                   className="min-h-[150px] bg-background/50 border-white/10"
                 />
               </div>
               <Button type="submit" className="w-full h-12 gap-2 text-lg" disabled={loading}>
                 {loading ? "Sending..." : "Send Message"}
                 <Send className="w-5 h-5" />
               </Button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}
