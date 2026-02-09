"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed w-full top-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Using a placeholder text logo if image is not ready, or the image if available */}
                    <div className="relative h-10 w-40">
                        <Image
                            src="/images/logo.png"
                            alt="Spark Capital"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/investors"
                        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                        Investors
                    </Link>
                    <Link
                        href="/portfolio"
                        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                        About
                    </Link>
                    <Button asChild size="sm" className="font-semibold">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t animate-in slide-in-from-top-5">
                    <nav className="flex flex-col p-4 gap-4">
                        <Link
                            href="/"
                            className="text-base font-medium p-2 hover:bg-muted rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/investors"
                            className="text-base font-medium p-2 hover:bg-muted rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Investors
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-base font-medium p-2 hover:bg-muted rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/about"
                            className="text-base font-medium p-2 hover:bg-muted rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Button asChild className="w-full mt-2">
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                Get in Touch
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
