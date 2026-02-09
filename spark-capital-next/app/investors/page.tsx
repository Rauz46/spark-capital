import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function InvestorsPage() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            {/* Hero Section */}
            <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">Investor Information</h1>
                    <p className="font-sans text-xl md:text-2xl text-white/80 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
                        Join us in building the next generation of enterprise AI companies
                    </p>
                </div>
            </section>

            {/* Fund 2 Section */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 space-y-6">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 font-semibold rounded-full text-sm">Open to Limited Partners</span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Fund 2 – Growth Capital</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            With Fund 2, our aim is to enable LPs to participate in startup investing after early validation
                            and revenue milestones are achieved. This means, Fund 2 comes in as growth capital for the
                            startups and also the transition to a new leader for the next phase of the startup&apos;s growth.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Fund 2 takes 20 to 30% equity, with 10 to 20% allocated to incoming leadership, resulting in a
                            planned and transparent dilution of Fund 1. Fund II follows an LP-first structure where investor
                            capital is returned first.
                        </p>
                        <Button asChild size="lg" className="mt-4">
                            <Link href="/contact">Become an LP</Link>
                        </Button>
                    </div>
                    <div className="order-1 lg:order-2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/fund-2-investors-main.png"
                            alt="Fund 2 Investors"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Fund 1 Section */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/fund-2-diagram.png"
                                alt="Fund 1 Diagram"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Fund 1 – Pre-seed Investing</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our Fund 1 invests and owns 100% of new startups that are incubated from ideas generated
                                internally via our Venture Studio. It invests in our Venture Studio startups with an objective
                                to achieve 3 key milestones – initial set of paying customers and getting the startup to
                                breakeven, and then to at least $1 million in ARR.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We achieve this through our Venture Studio which has a repeatable model of launching, scaling
                                and exiting startups to Fund 2 and External Investors. This ensures that our startups are past
                                the Death Valley curve, the stage where most startups fail, and where most Angel Investors and
                                VCs lose capital.
                            </p>
                            <Button asChild variant="outline" size="lg" className="mt-4">
                                <Link href="/portfolio">View Portfolio</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Phase Model (Reused) */}
            <section className="bg-primary py-20 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our 3 Phase Investment Model</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Phase 1 */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors text-center">
                            <h3 className="text-2xl font-bold mb-2">Phase 1</h3>
                            <h4 className="text-secondary font-semibold mb-4">Pre-seed via Fund 1</h4>
                            <p className="text-white/80 leading-relaxed">
                                Fund 1 invests and initially owns 100% of new startups incubated via our Venture Studio; and builds the startups from idea to $1M ARR.
                            </p>
                        </div>
                        {/* Phase 2 */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors text-center">
                            <h3 className="text-2xl font-bold mb-2">Phase 2</h3>
                            <h4 className="text-secondary font-semibold mb-4">Seed via Fund 2</h4>
                            <p className="text-white/80 leading-relaxed">
                                Fund 2 takes 20-30% equity, with another 10-20% allocated for a proven sales leader to accelerate to multimillion revenue.
                            </p>
                        </div>
                        {/* Phase 3 */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors text-center">
                            <h3 className="text-2xl font-bold mb-2">Phase 3</h3>
                            <h4 className="text-secondary font-semibold mb-4">Series A External</h4>
                            <p className="text-white/80 leading-relaxed">
                                External Investors enter the cap table. The startup operates fully independently as a fast growing tech company.
                            </p>
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
