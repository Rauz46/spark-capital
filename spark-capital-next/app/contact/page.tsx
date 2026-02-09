"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Loader2 } from "lucide-react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <div className="flex flex-col gap-16 pb-16">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">Get in Touch</h1>
                    <p className="font-sans text-xl md:text-2xl text-white/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
                        Have questions? We are here to help. Reach out to our team.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="container mx-auto px-4 md:px-6 -mt-10 md:-mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="bg-white shadow-lg border-none">
                            <CardContent className="p-8 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                                        <p className="text-muted-foreground">
                                            400 N Tampa St<br />
                                            Suite 1500<br />
                                            Tampa, FL 33602, USA
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                        <a href="mailto:info@sparkcapital.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            info@sparkcapital.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                        <a href="tel:+18135550123" className="text-muted-foreground hover:text-primary transition-colors">
                                            +1 (813) 555-0123
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-primary text-white shadow-lg border-none">
                            <CardContent className="p-8">
                                <h3 className="font-heading font-bold text-2xl mb-4">For Investors</h3>
                                <p className="text-white/80 mb-6">
                                    Interested in becoming a Limited Partner or learning more about our funds?
                                </p>
                                <Button asChild variant="secondary" className="w-full">
                                    <Link href="/investors">Investor Information</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="bg-white shadow-lg border-none h-full">
                            <CardContent className="p-8 md:p-12">
                                <div className="mb-8">
                                    <h2 className="font-heading font-bold text-3xl mb-2">Send us a Message</h2>
                                    <p className="text-muted-foreground">Fill out the form below and we will get back to you shortly.</p>
                                </div>

                                {isSubmitted ? (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-500">
                                        <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <h3 className="font-bold text-2xl text-green-800 mb-2">Message Sent!</h3>
                                        <p className="text-green-700 mb-6">
                                            Thank you for reaching out. We have received your message and will respond as soon as possible.
                                        </p>
                                        <Button onClick={() => setIsSubmitted(false)} variant="outline">Send Another Message</Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    required
                                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    required
                                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                            <select
                                                id="subject"
                                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                            >
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Investment Opportunity">Investment Opportunity</option>
                                                <option value="Partnership">Partnership</option>
                                                <option value="Media/Press">Media/Press</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={6}
                                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-y"
                                                placeholder="How can we help you?"
                                            ></textarea>
                                        </div>

                                        <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : "Send Message"}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
