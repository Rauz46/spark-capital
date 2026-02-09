import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Globe, Rocket } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            {/* Hero Section */}
            <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">About Us</h1>
                    <p className="font-sans text-xl md:text-2xl text-white/80 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
                        Pioneering the future of Enterprise AI through our unique Venture Studio model
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/our-story-main.png"
                            alt="Our Story"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
                            <Users size={16} />
                            <span>Who We Are</span>
                        </div>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl">Our Story</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Spark Capital is a US based Venture Capital firm with its headquarters in Tampa, Florida. We are
                            focused on investing in early stage Enterprise AI startups.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We believe that the traditional VC model is broken for early stage deep tech startups. Founders
                            spend too much time fundraising and not enough time building. We fixed this by creating a Venture
                            Studio model that provides capital, operational support, and a clear path to exit.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="p-4 bg-slate-50 rounded-lg border border-border">
                                <h3 className="font-bold text-3xl text-primary mb-1">10+</h3>
                                <p className="text-sm text-muted-foreground">Startups Incubated</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-border">
                                <h3 className="font-bold text-3xl text-primary mb-1">$50M+</h3>
                                <p className="text-sm text-muted-foreground">Assets Under Mgt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy / Rocket Studio */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center gap-2 text-secondary font-bold uppercase tracking-wider text-sm mb-4">
                            <Rocket size={16} />
                            <span>What We Do</span>
                        </div>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">Rocket Venture Studio</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Rocket is our internal Venture Studio that incubates and scales startups. We don&apos;t just invest; we
                            co-build. Our team of engineers, product managers, and growth hackers work side-by-side with
                            founders to turn ideas into scalable businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3">Ideation</h3>
                            <p className="text-muted-foreground">
                                We generate ideas internally based on market needs and validate them with real customers before writing a single line of code.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3">Incubation</h3>
                            <p className="text-muted-foreground">
                                Fund 1 provides the initial capital to build the MVP. Our studio team handles engineering, design, and operations.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" /></svg>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3">Scale</h3>
                            <p className="text-muted-foreground">
                                Once product-market fit is achieved, Fund 2 fuels growth to $1M+ ARR and prepares the company for Series A.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="bg-primary rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden">
                    {/* Map Background Illustration (Conceptual) */}
                    <div className="absolute inset-0 opacity-10">
                        <Image src="/images/cta-background-portfolio.png" alt="World Map" fill className="object-cover" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <div className="flex items-center justify-center gap-2 text-cyan-400 font-bold uppercase tracking-wider text-sm">
                            <Globe size={16} />
                            <span>Global Reach</span>
                        </div>
                        <h2 className="font-heading font-bold text-3xl md:text-5xl">Built in the US. <br />Scaling Globally.</h2>
                        <p className="text-xl text-white/80">
                            Headquartered in Tampa, FL with a presence in San Jose, Dallas, and London.
                            We are building a global network of founders and investors.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                                <MapPin size={16} className="text-red-400" /> Tampa (HQ)
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                                <MapPin size={16} className="text-red-400" /> San Jose
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                                <MapPin size={16} className="text-red-400" /> Dallas
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                                <MapPin size={16} className="text-red-400" /> London
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                                <MapPin size={16} className="text-red-400" /> Dubai
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                                <MapPin size={16} className="text-red-400" /> Chennai
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                                <MapPin size={16} className="text-red-400" /> Bangalore
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
                    <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">Partner With Us</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        Whether you are an investor, founder, or corporate partner, we want to hear from you.
                    </p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg h-14 px-8 rounded-full">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
