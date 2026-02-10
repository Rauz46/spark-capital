import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Spotlight } from "@/components/ui/spotlight";
import MouseScroll from "@/components/ui/mouse-scroll";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Rocket, Lightbulb, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      {/* Hero Section - Redesigned to Match Screenshot */}
      <section className="relative h-screen w-full overflow-hidden bg-primary">
        {/* Spotlight Effect - Moved outside to ensure visibility */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 z-40"
          fill="white"
        />
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0 h-full w-full"
          gradientBackgroundStart="rgb(0, 60, 200)" // Bright Royal Blue Base
          gradientBackgroundEnd="rgb(0, 40, 160)" // Slightly darker for depth
          firstColor="0, 120, 255" // Vivid Azure
          secondColor="120, 50, 255" // Vivid Purple
          thirdColor="0, 180, 255" // Bright Cyan/Blue
          fourthColor="100, 50, 255" // Deep Purple (Replaced Green)
          fifthColor="80, 0, 200" // Indigo
          blendingValue="overlay" // Stronger contrast/pop
        >
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 z-[5] opacity-20 pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
          </div>



          <div className="absolute z-50 inset-0 flex items-center justify-center p-4 md:p-12 text-white pointer-events-none">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center h-full">

              {/* Left Content */}
              <div className="space-y-6 text-left pointer-events-auto z-10">
                <div className="relative">
                  <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight drop-shadow-lg">
                    A New Way to Invest <br />
                    in <span className="font-serif italic text-white drop-shadow-md">New Ventures</span>
                  </h1>
                </div>

                <p className="font-sans text-base md:text-lg text-white/90 max-w-xl leading-relaxed text-justify">
                  We are a Venture Capital firm that invests in Enterprise AI Startups
                  via our Venture Studio. We do this via a unique two fund model. Fund
                  1 invests and initially owns 100% of new startups that are incubated
                  from ideas generated internally via our Venture Studio. While Fund 2
                  invests only after a startup gets to breakeven and is on track to
                  $1million in ARR. Fund 2's growth capital accelerates the startups to
                  multimillion revenue and readies it for external investors.
                </p>

                {/* Mouse Scroll Animation - Replaces CTA */}
                <div className="pt-8 flex justify-start">
                  <MouseScroll />
                </div>
              </div>

              {/* Right Content - Fund Cycle Diagram */}
              <div className="relative w-full h-full min-h-[400px] flex items-center justify-center pointer-events-auto">
                <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">

                  <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent">

                    {/* Central Image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl z-20 bg-blue-900">
                      <Image
                        src="/images/business-meeting-contact.webp"
                        alt="Startups"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Fund 1 - Inner Circle */}
                    <OrbitingCircles
                      className="size-[50px] border-none bg-transparent"
                      duration={20}
                      delay={20}
                      radius={100}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div className="p-3 bg-cyan-500 rounded-full shadow-lg">
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-bold text-white mt-1 bg-black/50 px-2 rounded">Fund 1</span>
                      </div>
                    </OrbitingCircles>

                    {/* Fund 2 - Middle Circle */}
                    <OrbitingCircles
                      className="size-[50px] border-none bg-transparent"
                      duration={20}
                      delay={10}
                      radius={160}
                      reverse
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div className="p-3 bg-purple-500 rounded-full shadow-lg">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-bold text-white mt-1 bg-black/50 px-2 rounded">Fund 2</span>
                      </div>
                    </OrbitingCircles>

                    {/* External - Outer Circle */}
                    <OrbitingCircles
                      className="size-[50px] border-none bg-transparent"
                      radius={220}
                      duration={25}
                      delay={20}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div className="p-3 bg-green-500 rounded-full shadow-lg">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-bold text-white mt-1 bg-black/50 px-2 rounded">External</span>
                      </div>
                    </OrbitingCircles>
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
