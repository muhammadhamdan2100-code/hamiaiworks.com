"use client";

import dynamic from "next/dynamic";
import { Zap, ShieldCheck, Globe2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { NodeNetwork } from "@/components/ui/NodeNetwork";

// react-simple-maps + d3-geo are ~40kB+ combined and only matter once this
// section is actually visible (it's below the fold) — code-split and skip
// SSR entirely so this weight never blocks the homepage's initial render.
const WorldMapCanvas = dynamic(
  () => import("@/components/home/WorldMapCanvas").then((m) => m.WorldMapCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="mt-14 glass-strong rounded-xl2 h-[320px] md:h-[420px] flex items-center justify-center">
        <span className="font-mono text-xs text-ink-faint">Loading map…</span>
      </div>
    ),
  }
);

const TRUST_CARDS = [
  {
    icon: Zap,
    title: "Fast AI Implementation",
    description: "Strategic AI automation solutions designed for modern businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Secure AI Automation",
    description: "Enterprise-focused workflows with privacy, reliability, and scalable architecture.",
  },
  {
    icon: Globe2,
    title: "Remote-First Company",
    description: "Delivering AI solutions globally through a distributed digital team.",
  },
];

export function GlobalPresence() {
  return (
    <section className="section relative overflow-hidden">
      {/* subtle AI network nodes around the map, matching the site's signature motif */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <NodeNetwork className="w-full h-full" />
      </div>

      <div className="section-inner relative">
        <SectionHeading
          eyebrow="Global presence"
          title="Serving Businesses Worldwide"
          description="Building intelligent AI automation systems for companies across the globe."
        />

        <WorldMapCanvas />

        {/* Trust indicator cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TRUST_CARDS.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i * 0.08}>
              <GlassCard glow="violet" className="h-full text-center">
                <card.icon className="mx-auto text-accent-violet" size={26} />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{card.description}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Button href="/contact" size="lg">
              Schedule Free AI Strategy Call
              <ArrowUpRight size={18} />
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
