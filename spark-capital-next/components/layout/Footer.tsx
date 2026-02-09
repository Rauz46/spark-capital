import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Brand & Disclosure */}
                    <div className="space-y-6">
                        <div className="relative h-10 w-40">
                            <Image
                                src="/images/logo.png"
                                alt="Spark Capital"
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        <div className="text-xs text-muted-foreground space-y-4 leading-relaxed">
                            <p>
                                <strong className="text-foreground">DISCLOSURE:</strong> Spark Capital is not a registered broker-dealer, investment
                                adviser, investment manager, or registered funding portal. Neither the Securities and Exchange
                                Commission nor any state securities regulator has approved or disapproved the securities, the
                                terms of any offerings, or the accuracy or completeness of any materials presented on this
                                website.
                            </p>
                            <p>
                                Spark Capital does not make investment recommendations to you or provide any analysis, advice,
                                or opinions regarding any investment. Spark Capital does not solicit, recommend, or endorse any
                                particular security or offering. Spark Capital does not verify information provided by companies
                                or issuers and makes no representations or warranties as to the accuracy or completeness of any
                                such information.
                            </p>
                            <p>
                                The information contained on this website is provided by Spark Capital and/or third parties.
                                Spark Capital and its affiliates, directors, officers, employees, agents, or representatives
                                shall not be liable for any errors or omissions in the content of this website or for any
                                actions taken in reliance thereon.
                            </p>
                            <p>
                                This website does not constitute an offer to sell or a solicitation of an offer to buy any
                                securities. Any offering of securities will be made only through definitive offering documents
                                and only to qualified or accredited investors pursuant to applicable securities laws.
                            </p>
                            <p>
                                Investments in private companies and venture-backed businesses are speculative, involve a high
                                degree of risk, and may result in the loss of the entire investment. Past performance is not
                                indicative of future results.
                            </p>
                        </div>
                    </div>

                    {/* Links & Social */}
                    <div className="md:pl-12 space-y-8">
                        <div>
                            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
                            <nav className="flex flex-col gap-3">
                                <Link href="/investors" className="text-muted-foreground hover:text-primary transition-colors">Investors</Link>
                                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                            </nav>
                        </div>

                        <div>
                            <h3 className="font-heading font-semibold text-lg mb-4">Connect</h3>
                            <div className="flex gap-4">
                                <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Spark Capital. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
