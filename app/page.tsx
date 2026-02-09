import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      {/* Hero Section - Redesigned */}
      <section className="relative h-screen w-full overflow-hidden bg-primary">
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0 h-full w-full"
          gradientBackgroundStart="rgb(5, 5, 40)" // Deep Navy
          gradientBackgroundEnd="rgb(20, 20, 80)" // Dark Blue-Purple
          firstColor="37, 99, 235" // Royal Blue
          secondColor="139, 92, 246" // Vibrant Purple
          thirdColor="59, 130, 246" // Pure Blue (removed Cyan to avoid green tint)
          fourthColor="192, 38, 211" // Fuchsia
          fifthColor="79, 70, 229" // Indigo (replaced Green)
          blendingValue="hard-light"
        >
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 z-[5] opacity-20 pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
          </div>

          <div className="absolute z-50 inset-0 flex items-center justify-center p-4 md:p-12 text-white pointer-events-none">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

              {/* Left Content */}
              <div className="space-y-8 text-left pointer-events-auto z-10">
                <div className="relative">
                  <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight drop-shadow-2xl">
                    Venture Studio led <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-x">
                      Startup Investing
                    </span>
                  </h1>
                </div>

                <p className="font-sans text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                  Join us in building the next generation of enterprise AI companies.
                  From idea to exit, we are with you every step of the way.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 h-14 rounded-full shadow-2xl shadow-blue-900/30 transition-all hover:scale-105">
                    <Link href="/contact">Start Investing</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-transparent border-white/40 text-white hover:bg-white/10 font-medium text-lg px-8 h-14 rounded-full backdrop-blur-md transition-all hover:border-white/60">
                    <Link href="/portfolio">View Portfolio</Link>
                  </Button>
                </div>
              </div>

              {/* Right Content - Bento Grid & Orbiting Circles */}
              <div className="relative w-full h-full min-h-[500px] flex items-center justify-center pointer-events-auto">

                {/* Orbiting Circles Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 scale-75 md:scale-100">
                  <OrbitingCircles radius={150} duration={30} delay={0} className="border-none bg-transparent">
                    <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
                  </OrbitingCircles>
                  <OrbitingCircles radius={250} duration={40} delay={10} reverse className="border-none bg-transparent">
                    <div className="h-6 w-6 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
                  </OrbitingCircles>
                  <OrbitingCircles radius={350} duration={50} delay={20} className="border-none bg-transparent">
                    <div className="h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
                  </OrbitingCircles>
                </div>

                {/* Bento Grid Layout - Cleaned up */}
                <div className="relative z-10 grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-lg aspect-square p-4">

                  {/* Fund 1 Card */}
                  <div className="bento-card col-span-1 row-span-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/10 transition-all duration-500 group shadow-2xl">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-blue-500/50 transition-all group-hover:-translate-y-1">
                      <Rocket className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-white mb-1">Fund 1</h3>
                      <p className="text-sm text-white/60">Pre-seed Incubation</p>
                    </div>
                  </div>

                  {/* Fund 2 Card */}
                  <div className="bento-card col-span-1 row-span-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/10 transition-all duration-500 group delay-75 shadow-2xl">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-purple-500/50 transition-all group-hover:-translate-y-1">
                      <TrendingUp className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-white mb-1">Fund 2</h3>
                      <p className="text-sm text-white/60">Growth Capital</p>
                    </div>
                  </div>

                  {/* External Investors Card (Wide) */}
                  <div className="bento-card col-span-2 row-span-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex items-center justify-between hover:bg-white/10 transition-all duration-500 group delay-150 relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                      <h3 className="font-heading font-bold text-3xl text-white mb-2">External Investors</h3>
                      <p className="text-base text-white/60 max-w-[280px]">Series A+ funding from top-tier VCs worldwide</p>
                    </div>
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/50 transition-all group-hover:scale-110 relative z-10">
                      <Users className="text-white" size={40} />
                    </div>
                    {/* Decorative glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-500/10 blur-[80px] rounded-full"></div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </BackgroundGradientAnimation>
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
