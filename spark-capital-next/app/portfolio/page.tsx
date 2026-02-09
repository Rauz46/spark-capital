import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function PortfolioPage() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-16">
            {/* Hero Section */}
            <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">Our Portfolio</h1>
                    <p className="font-sans text-xl md:text-2xl text-white/80 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
                        A Unique Startup Investment Opportunity
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Our portfolio features Enterprise AI startups built and scaled through our venture studio–led
                        investment model. Each company follows a deliberate two-fund journey designed to reduce early-stage
                        risk and accelerate returns.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        <strong>Fund I</strong> incubates and fully owns startups from idea to validation, revenue, and
                        breakeven. Once traction is proven and the path to $1M ARR is clear, <strong>Fund II</strong> steps
                        in, deploying growth capital to scale these companies to multi-million-dollar revenues and prepare
                        them for external investors.
                    </p>
                </div>
            </section>

            {/* Startup Grid */}
            <section className="container mx-auto px-4 md:px-6">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-16">Portfolio Companies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Ignitho */}
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="p-0">
                            <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-t-xl flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Ignitho</h3>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-muted-foreground">Ignitho delivers Agentic AI for the Enterprise through its AI Engineering Services.</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                                <a href="https://ignitho.com/" target="_blank" rel="noopener noreferrer">Find out more →</a>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Piqual */}
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="p-0">
                            <div className="h-40 bg-gradient-to-br from-pink-400 to-rose-500 rounded-t-xl flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Piqual</h3>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-muted-foreground">Piqual is an end-to-end AI-enabled B2B lead generation platform designed for sales teams.</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                                <a href="https://www.piqual.com/" target="_blank" rel="noopener noreferrer">Find out more →</a>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Talentou */}
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="p-0">
                            <div className="h-40 bg-gradient-to-br from-sky-400 to-blue-500 rounded-t-xl flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Talentou</h3>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-muted-foreground">Talentou is an AI enabled Talent Scouting Product company for Enterprise.</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                                <a href="https://talentou.com/" target="_blank" rel="noopener noreferrer">Find out more →</a>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Prodeia */}
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="p-0">
                            <div className="h-40 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-t-xl flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Prodeia</h3>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-muted-foreground">An End-To-End Enterprise Innovation Platform for Productizing Ideas using AI.</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                                <a href="https://www.prodeia.com/" target="_blank" rel="noopener noreferrer">Find out more →</a>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Caimue */}
                    <Card className="hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full z-10">Coming Soon</div>
                        <CardHeader className="p-0">
                            <div className="h-40 bg-gradient-to-br from-teal-200 to-pink-200 rounded-t-xl flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-primary">Caimue</h3>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-muted-foreground">Caimue is an AI-powered platform currently in development.</p>
                        </CardContent>
                        <CardFooter>
                            <Button disabled variant="outline" className="w-full opacity-50 cursor-not-allowed">
                                Coming Soon
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Pipeline */}
                    <Card className="hover:shadow-lg transition-shadow duration-300 border-dashed border-2 bg-slate-50">
                        <CardHeader className="p-0 h-40 flex items-center justify-center">
                            <div className="relative h-20 w-20">
                                <Image src="/images/rocket-icon.png" alt="Rocket" fill className="object-contain" />
                            </div>
                        </CardHeader>
                        <CardContent className="text-center">
                            <h3 className="font-bold text-xl mb-2">More in Pipeline</h3>
                            <p className="text-muted-foreground">B2B SaaS and enterprise AI products</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Rocket Venture Studio */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl bg-white">
                            <Image
                                src="/images/rocket-cycle.gif"
                                alt="Rocket Cycle"
                                fill
                                className="object-contain" // Changed to contain for GIF
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="relative h-16 w-16">
                                    <Image src="/images/rocket-icon.png" alt="Rocket" fill className="object-contain brightness-0 invert" />
                                </div>
                                <h2 className="font-heading font-bold text-3xl md:text-4xl">Rocket Venture Studio</h2>
                            </div>
                            <p className="text-lg text-white/90 leading-relaxed">
                                Rocket is a Venture Studio that incubates and scales Enterprise AI Startups via ideas that are
                                generated internally. We are fully owned by Fund 1 from Spark Capital, a US market focused VC
                                firm with its headquarters in Tampa, Florida.
                            </p>
                            <p className="text-lg text-white/90 leading-relaxed">
                                We build investment ready startups using a Launch-Scale-Exit-Repeat model. Rocket&apos;s objective is
                                to get each startup it incubates to initial paying customers and then to at least $1 million
                                ARR. Post which the startup exits our Venture Studio and becomes an independent company under
                                Spark Capital&apos;s portfolio.
                            </p>
                            <Button asChild variant="secondary" size="lg" className="mt-4">
                                <Link href="/about">Meet the Rocket Team</Link>
                            </Button>
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
                    <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">Interested in Our Portfolio?</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        Learn more about how we build and scale enterprise AI startups.
                    </p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg h-14 px-8 rounded-full">
                        <Link href="/investors">Investor Information</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
