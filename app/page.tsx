import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroScribbles } from "@/components/ui/hero-scribbles";
import { HeroImage } from "@/components/ui/hero-image";
import MouseScroll from "@/components/ui/mouse-scroll";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      {/* ══════════════ HERO SECTION — Cinematic Redesign ══════════════ */}
      <section className="relative h-screen w-full overflow-hidden bg-primary">

        {/* Layer 0 — Gradient Animation Background */}
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0 h-full w-full z-[1]"
          gradientBackgroundStart="rgb(0, 60, 200)"
          gradientBackgroundEnd="rgb(0, 40, 160)"
          firstColor="0, 120, 255"
          secondColor="120, 50, 255"
          thirdColor="0, 180, 255"
          fourthColor="100, 50, 255"
          fifthColor="80, 0, 200"
          blendingValue="overlay"
        />

        {/* Layer 1 — Cinematic Grid + Vignette */}
        <div
          className="absolute inset-0 z-[3] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
            animation: "gridPulse 4s ease-in-out infinite",
          }}
        />

        {/* Layer 1.5 — Scan Line */}
        <div
          className="absolute inset-x-0 top-0 z-[4] h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 70%, transparent 100%)",
            animation: "scanLine 10s linear infinite",
          }}
        />

        {/* Layer 2 — Scribbles */}
        <HeroScribbles />

        {/* Layer 10 — Main Content */}
        <div className="absolute z-[10] inset-0 flex items-center justify-center px-4 md:px-8 text-white pointer-events-none">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 h-full">

            {/* Center Text Column */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl pointer-events-auto z-10 lg:flex-1">

              {/* Badge */}
              <span
                className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs md:text-sm font-mono tracking-widest text-white/80 uppercase"
                style={{
                  opacity: 0,
                  animation: "heroFadeUp 0.8s cubic-bezier(0.4,0,0.2,1) 0.3s forwards",
                }}
              >
                AI-First Venture Studio
              </span>

              {/* Main Heading */}
              <h1
                className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] leading-[1.1] tracking-[-0.04em]"
                style={{
                  opacity: 0,
                  animation: "heroFadeUp 1.2s cubic-bezier(0.4,0,0.2,1) 0.5s forwards",
                  textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.08)",
                }}
              >
                A New Way to Invest
                <br />
                <span className="italic font-serif">in New Ventures.</span>
              </h1>

              {/* Subheading */}
              <p
                className="mt-6 text-lg md:text-xl lg:text-[22px] font-sans font-normal text-white/85 leading-relaxed max-w-[800px]"
                style={{
                  opacity: 0,
                  animation: "heroFadeUp 0.8s cubic-bezier(0.4,0,0.2,1) 1s forwards",
                }}
              >
                We invest in Enterprise AI Startups via our Venture Studio, building companies from idea to scale.
              </p>

              {/* Description */}
              <p
                className="mt-5 text-sm md:text-base lg:text-lg font-sans font-normal text-white/70 leading-[1.7] max-w-[700px]"
                style={{
                  opacity: 0,
                  animation: "heroFadeUp 0.8s cubic-bezier(0.4,0,0.2,1) 1.3s forwards",
                }}
              >
                Spark Capital is a Venture Capital firm that invests in post-revenue enterprise AI startups through a unique two-fund model — from idea incubation to multimillion-dollar growth.
              </p>

              {/* Mouse Scroll */}
              <div
                className="mt-10"
                style={{
                  opacity: 0,
                  animation: "heroFadeUp 0.6s cubic-bezier(0.4,0,0.2,1) 1.6s forwards",
                }}
              >
                <MouseScroll />
              </div>
            </div>

            {/* Right Image Composition — Desktop only */}
            <div
              className="hidden lg:flex items-center justify-center lg:flex-1"
              style={{
                opacity: 0,
                animation: "heroFadeUp 1s cubic-bezier(0.4,0,0.2,1) 1.5s forwards",
              }}
            >
              <HeroImage />
            </div>

          </div>
        </div>
      </section>

      {/* Fund Flow Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Unique Fund Flow</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A systematic approach to building and scaling enterprise AI startups through our Venture Studio model.
          </p>
        </div>
        <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-border">
          <Image
            src="/images/fund-flow-diagram.png"
            alt="Spark Capital Fund Flow"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Three Phase Model */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="relative z-10 text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-white">Our 3 Phase Investment Model</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Phase 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="text-cyan-400 font-bold text-lg mb-2">Phase 1</div>
                <h3 className="font-heading text-2xl font-bold mb-4">Pre-seed via Fund 1</h3>
                <p className="text-white/80 leading-relaxed">
                  Fund 1 invests and initially owns 100% of new startups incubated via our Venture Studio; and builds the startups from idea to $1M ARR.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="text-purple-400 font-bold text-lg mb-2">Phase 2</div>
                <h3 className="font-heading text-2xl font-bold mb-4">Seed via Fund 2</h3>
                <p className="text-white/80 leading-relaxed">
                  Fund 2 takes 20-30% equity, with another 10-20% allocated for a proven sales leader to accelerate to multimillion revenue.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="text-green-400 font-bold text-lg mb-2">Phase 3</div>
                <h3 className="font-heading text-2xl font-bold mb-4">Series A External</h3>
                <p className="text-white/80 leading-relaxed">
                  External Investors enter the cap table. The startup operates fully independently as a fast growing tech company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-background-portfolio.png"
            alt="Background"
            fill
            className="object-cover brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">Ready to Invest in the Future?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join our network of Limited Partners and invest in post-revenue enterprise AI startups.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg h-14 px-8 rounded-full">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
