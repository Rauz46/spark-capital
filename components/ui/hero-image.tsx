"use client";

import Image from "next/image";

export function HeroImage() {
    return (
        <div
            className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px]"
            style={{ perspective: "1200px" }}
        >
            {/* Animated outer glow ring */}
            <div
                className="absolute inset-[-20px] rounded-full"
                style={{
                    background: "conic-gradient(from 0deg, transparent 0%, #BAFF00 10%, transparent 20%, transparent 50%, #BAFF00 60%, transparent 70%)",
                    opacity: 0.15,
                    animation: "heroImageSpin 8s linear infinite",
                    filter: "blur(8px)",
                }}
            />

            {/* Viewfinder Outer Ring — pulsing */}
            <div
                className="absolute inset-0 rounded-full border border-white/15"
                style={{ animation: "viewfinderPulse 3s ease-in-out infinite" }}
            />

            {/* Inner dashed ring */}
            <div
                className="absolute inset-6 rounded-full border border-dashed border-white/10"
                style={{ animation: "heroImageSpinReverse 20s linear infinite" }}
            />

            {/* Crosshairs */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Diagonal crosshairs */}
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    background: "linear-gradient(45deg, transparent 48.5%, rgba(255,255,255,0.04) 49%, rgba(255,255,255,0.04) 51%, transparent 51.5%), linear-gradient(-45deg, transparent 48.5%, rgba(255,255,255,0.04) 49%, rgba(255,255,255,0.04) 51%, transparent 51.5%)",
                }}
            />

            {/* Corner Brackets with green accent */}
            {/* Top-Left */}
            <div className="absolute top-8 left-8">
                <div className="w-8 h-8 border-l-2 border-t-2 border-[#BAFF00]/40" />
            </div>
            {/* Top-Right */}
            <div className="absolute top-8 right-8">
                <div className="w-8 h-8 border-r-2 border-t-2 border-[#BAFF00]/40" />
            </div>
            {/* Bottom-Left */}
            <div className="absolute bottom-8 left-8">
                <div className="w-8 h-8 border-l-2 border-b-2 border-[#BAFF00]/40" />
            </div>
            {/* Bottom-Right */}
            <div className="absolute bottom-8 right-8">
                <div className="w-8 h-8 border-r-2 border-b-2 border-[#BAFF00]/40" />
            </div>

            {/* Central Image — floating with glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-2xl overflow-hidden border border-white/15"
                style={{
                    animation: "heroFloat 6s ease-in-out infinite",
                    boxShadow: "0 0 40px rgba(186,255,0,0.08), 0 20px 60px rgba(0,0,0,0.4)",
                }}
            >
                <Image
                    src="/images/business-meeting-contact.webp"
                    alt="Spark Capital - Enterprise AI Investing"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Scanline overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
                    }}
                />
                {/* Moving scan line */}
                <div
                    className="absolute inset-x-0 h-px"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(186,255,0,0.3), transparent)",
                        animation: "scanLine 6s linear infinite",
                    }}
                />
                {/* Green corner glow */}
                <div
                    className="absolute top-0 left-0 w-20 h-20"
                    style={{
                        background: "radial-gradient(circle at 0% 0%, rgba(186,255,0,0.15), transparent 70%)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-20 h-20"
                    style={{
                        background: "radial-gradient(circle at 100% 100%, rgba(186,255,0,0.15), transparent 70%)",
                    }}
                />
            </div>

            {/* LIVE Indicator */}
            <div className="absolute top-10 right-12 flex items-center gap-1.5">
                <div
                    className="w-2 h-2 rounded-full bg-[#BAFF00]"
                    style={{ animation: "recBlink 1.5s ease-in-out infinite" }}
                />
                <span className="text-[10px] font-mono text-[#BAFF00]/60 tracking-wider">LIVE</span>
            </div>

            {/* Badge: Fund Count — glassmorphism with green border */}
            <div
                className="absolute -left-6 top-[30%] px-3 py-1.5 rounded-lg bg-black/30 backdrop-blur-md border border-[#BAFF00]/20 shadow-lg"
                style={{ animation: "badgeFloat 4s ease-in-out infinite" }}
            >
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#BAFF00]" />
                    <span className="text-xs font-semibold text-white whitespace-nowrap">3 Active Funds</span>
                </div>
            </div>

            {/* Badge: AI Startups */}
            <div
                className="absolute -right-4 top-[55%] px-3 py-1.5 rounded-lg bg-black/30 backdrop-blur-md border border-[#BAFF00]/20 shadow-lg"
                style={{ animation: "badgeFloat 5s ease-in-out 1s infinite" }}
            >
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#BAFF00]" />
                    <span className="text-xs font-semibold text-white whitespace-nowrap">Enterprise AI</span>
                </div>
            </div>

            {/* Bottom badge */}
            <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-[#BAFF00]/20 shadow-lg"
                style={{ animation: "badgeFloat 4.5s ease-in-out 0.5s infinite" }}
            >
                <span className="text-[10px] font-mono text-[#BAFF00]/70 tracking-widest whitespace-nowrap">
                    VENTURE STUDIO
                </span>
            </div>

            {/* Orbiting particles */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-1"
                    style={{
                        animation: `heroParticleOrbit ${8 + i * 0.5}s linear infinite`,
                        transformOrigin: "0 0",
                        transform: `rotate(${angle}deg) translateX(${170 + i * 10}px)`,
                    }}
                >
                    <div
                        className="w-1 h-1 rounded-full bg-[#BAFF00]/40"
                        style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite` }}
                    />
                </div>
            ))}

            {/* Tick marks around the circle */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 100 100">
                {Array.from({ length: 36 }, (_, i) => i * 10).map((angle) => (
                    <line
                        key={angle}
                        x1="50"
                        y1={angle % 90 === 0 ? "2" : "4"}
                        x2="50"
                        y2={angle % 90 === 0 ? "8" : "7"}
                        stroke={angle % 90 === 0 ? "#BAFF00" : "white"}
                        strokeWidth={angle % 90 === 0 ? "0.7" : "0.3"}
                        transform={`rotate(${angle} 50 50)`}
                    />
                ))}
            </svg>
        </div>
    );
}
