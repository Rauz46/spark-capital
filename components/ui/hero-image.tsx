"use client";

import Image from "next/image";

export function HeroImage() {
    return (
        <div
            className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]"
            style={{
                perspective: "1000px",
                animation: "heroFloat 6s ease-in-out infinite",
            }}
        >
            {/* Viewfinder Outer Ring */}
            <div
                className="absolute inset-0 rounded-full border border-white/20"
                style={{ animation: "viewfinderPulse 4s ease-in-out infinite" }}
            />
            <div className="absolute inset-4 rounded-full border border-white/10 border-dashed" />

            {/* Crosshair Lines */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
            <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* Corner Brackets */}
            {/* Top-Left */}
            <div className="absolute top-6 left-6">
                <div className="w-8 h-8 border-l-2 border-t-2 border-white/30" />
            </div>
            {/* Top-Right */}
            <div className="absolute top-6 right-6">
                <div className="w-8 h-8 border-r-2 border-t-2 border-white/30" />
            </div>
            {/* Bottom-Left */}
            <div className="absolute bottom-6 left-6">
                <div className="w-8 h-8 border-l-2 border-b-2 border-white/30" />
            </div>
            {/* Bottom-Right */}
            <div className="absolute bottom-6 right-6">
                <div className="w-8 h-8 border-r-2 border-b-2 border-white/30" />
            </div>

            {/* Central Image */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded-2xl overflow-hidden border border-white/20"
                style={{ animation: "heroGlow 3s ease-in-out infinite" }}
            >
                <Image
                    src="/images/business-meeting-contact.webp"
                    alt="Spark Capital - Enterprise AI Investing"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Film Scanline Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)",
                    }}
                />
                {/* Scan Line Moving */}
                <div
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{ animation: "scanLine 8s linear infinite" }}
                />
            </div>

            {/* REC Indicator */}
            <div
                className="absolute top-10 right-12 flex items-center gap-1.5"
                style={{
                    animation: "badgePopIn 0.4s ease-out forwards",
                    animationDelay: "2.2s",
                    opacity: 0,
                }}
            >
                <div
                    className="w-2 h-2 rounded-full bg-red-500"
                    style={{ animation: "recBlink 1.5s ease-in-out infinite" }}
                />
                <span className="text-[10px] font-mono text-white/50 tracking-wider">
                    LIVE
                </span>
            </div>

            {/* Badge: Fund Count */}
            <div
                className="absolute -left-4 top-[35%] px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-lg"
                style={{
                    animation: "badgePopIn 0.5s ease-out forwards",
                    animationDelay: "1.8s",
                    opacity: 0,
                }}
            >
                <span className="text-xs font-semibold text-white whitespace-nowrap">
                    3 Funds
                </span>
            </div>

            {/* Badge: AI Startups */}
            <div
                className="absolute -right-2 top-[60%] px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-lg"
                style={{
                    animation: "badgePopIn 0.5s ease-out forwards",
                    animationDelay: "2s",
                    opacity: 0,
                }}
            >
                <span className="text-xs font-semibold text-white whitespace-nowrap">
                    Enterprise AI
                </span>
            </div>

            {/* Badge: Bottom - Languages/Markets */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg"
                style={{
                    animation: "badgePopIn 0.5s ease-out forwards",
                    animationDelay: "2.4s",
                    opacity: 0,
                }}
            >
                <span className="text-[10px] font-mono text-white/70 tracking-widest whitespace-nowrap">
                    VENTURE STUDIO
                </span>
            </div>

            {/* Tick Marks around circle */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 100 100">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <line
                        key={angle}
                        x1="50"
                        y1="4"
                        x2="50"
                        y2="8"
                        stroke="white"
                        strokeWidth="0.5"
                        transform={`rotate(${angle} 50 50)`}
                    />
                ))}
            </svg>
        </div>
    );
}
