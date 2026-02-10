"use client";

/**
 * Premium geometric scribbles for the hero banner.
 * VC/startup themed with fluorescent green accents.
 */
export function HeroScribbles() {
    return (
        <div
            className="absolute inset-0 z-[2] pointer-events-none overflow-hidden"
            aria-hidden="true"
        >
            {/* ── Corner Brackets — Green accented ── */}

            {/* Top-Left */}
            <div className="absolute top-[5%] left-[3%]">
                <div className="w-14 h-14 md:w-20 md:h-20 border-l border-t border-[#BAFF00]/20" />
            </div>

            {/* Top-Right */}
            <div className="absolute top-[5%] right-[3%]">
                <div className="w-14 h-14 md:w-20 md:h-20 border-r border-t border-[#BAFF00]/20" />
            </div>

            {/* Bottom-Left */}
            <div className="absolute bottom-[5%] left-[3%]">
                <div className="w-14 h-14 md:w-20 md:h-20 border-l border-b border-[#BAFF00]/20" />
            </div>

            {/* Bottom-Right */}
            <div className="absolute bottom-[5%] right-[3%]">
                <div className="w-14 h-14 md:w-20 md:h-20 border-r border-b border-[#BAFF00]/20" />
            </div>

            {/* ── Floating data points — VC metrics ── */}

            {/* Top-left metric */}
            <div
                className="absolute top-[12%] left-[6%] opacity-[0.15]"
                style={{ animation: "scribbleFloat 7s ease-in-out infinite" }}
            >
                <div className="flex items-center gap-2">
                    <div className="w-6 h-px bg-[#BAFF00]/60" />
                    <span className="text-[9px] font-mono text-[#BAFF00]/60 tracking-wider">$1M ARR</span>
                </div>
            </div>

            {/* Right side metric */}
            <div
                className="absolute top-[18%] right-[6%] opacity-[0.12]"
                style={{ animation: "scribbleFloat 8s ease-in-out 2s infinite" }}
            >
                <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono text-[#BAFF00]/60 tracking-wider">SERIES A</span>
                    <div className="w-6 h-px bg-[#BAFF00]/60" />
                </div>
            </div>

            {/* Bottom-left metric */}
            <div
                className="absolute bottom-[18%] left-[5%] opacity-[0.12]"
                style={{ animation: "scribbleFloat 6s ease-in-out 1s infinite" }}
            >
                <div className="flex items-center gap-2">
                    <div className="w-4 h-px bg-[#BAFF00]/60" />
                    <span className="text-[9px] font-mono text-[#BAFF00]/60 tracking-wider">BREAKEVEN</span>
                </div>
            </div>

            {/* ── Thin accent lines ── */}

            {/* Horizontal line — upper left */}
            <div
                className="absolute top-[25%] left-[3%] w-20 md:w-32 h-px bg-gradient-to-r from-[#BAFF00]/15 to-transparent"
                style={{ animation: "scribbleFloat 8s ease-in-out infinite" }}
            />

            {/* Horizontal line — lower right */}
            <div
                className="absolute bottom-[28%] right-[3%] w-20 md:w-32 h-px bg-gradient-to-l from-[#BAFF00]/15 to-transparent"
                style={{ animation: "scribbleFloat 7s ease-in-out 2s infinite" }}
            />

            {/* Vertical line — left */}
            <div
                className="absolute top-[40%] left-[8%] w-px h-16 md:h-24 bg-gradient-to-b from-[#BAFF00]/10 to-transparent"
                style={{ animation: "scribbleFloat 6s ease-in-out 1s infinite" }}
            />

            {/* Vertical line — right */}
            <div
                className="absolute top-[38%] right-[5%] w-px h-16 md:h-20 bg-gradient-to-b from-transparent via-[#BAFF00]/10 to-transparent"
                style={{ animation: "scribbleFloat 9s ease-in-out 3s infinite" }}
            />

            {/* ── Growth chart sketch — right side ── */}
            <svg
                className="absolute top-[70%] right-[6%] w-20 h-12 md:w-28 md:h-16 opacity-[0.12]"
                style={{ animation: "scribbleFloat 6s ease-in-out 1.5s infinite" }}
                viewBox="0 0 120 60"
                fill="none"
                stroke="#BAFF00"
                strokeWidth="1"
                strokeLinecap="round"
            >
                <polyline points="5,50 25,42 45,35 65,20 85,12 105,5" strokeDasharray="100" style={{ strokeDashoffset: 0, animation: "drawLine 3s ease forwards" }} />
                <polyline points="85,12 105,5 105,15" strokeWidth="0.8" />
            </svg>

            {/* ── Dotted circles — radar pings ── */}

            {/* Ping — top center */}
            <div
                className="absolute top-[8%] left-[40%] w-8 h-8 md:w-12 md:h-12 rounded-full border border-dashed border-[#BAFF00]/10"
                style={{ animation: "viewfinderPulse 4s ease-in-out infinite" }}
            />

            {/* Ping — bottom right */}
            <div
                className="absolute bottom-[12%] right-[25%] w-6 h-6 md:w-10 md:h-10 rounded-full border border-[#BAFF00]/8"
                style={{ animation: "viewfinderPulse 5s ease-in-out 2s infinite" }}
            />

            {/* ── Small floating dots ── */}
            {[
                { top: "15%", left: "20%", delay: "0s" },
                { top: "25%", right: "22%", delay: "1.5s" },
                { top: "65%", left: "12%", delay: "2.5s" },
                { top: "72%", right: "15%", delay: "0.8s" },
                { top: "50%", left: "5%", delay: "3.5s" },
                { top: "45%", right: "4%", delay: "2s" },
                { top: "82%", left: "30%", delay: "1s" },
                { top: "10%", right: "40%", delay: "4s" },
            ].map((dot, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-[#BAFF00]/25"
                    style={{
                        top: dot.top,
                        left: (dot as any).left,
                        right: (dot as any).right,
                        animation: `twinkle 3s ease-in-out ${dot.delay} infinite`,
                    }}
                />
            ))}

            {/* ── Cross marks ── */}
            <div className="absolute top-[30%] left-[18%] opacity-[0.08]">
                <div className="relative w-3 h-3">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-[#BAFF00] -translate-y-1/2" />
                    <div className="absolute left-1/2 top-0 h-full w-px bg-[#BAFF00] -translate-x-1/2" />
                </div>
            </div>

            <div className="absolute bottom-[25%] right-[18%] opacity-[0.08]">
                <div className="relative w-3 h-3">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-[#BAFF00] -translate-y-1/2" />
                    <div className="absolute left-1/2 top-0 h-full w-px bg-[#BAFF00] -translate-x-1/2" />
                </div>
            </div>

            {/* ── Diagonal accents ── */}
            <div
                className="absolute bottom-[15%] left-[25%] w-24 h-px bg-gradient-to-r from-[#BAFF00]/10 to-transparent origin-left rotate-[-25deg]"
                style={{ animation: "scribbleFloat 10s ease-in-out 1s infinite" }}
            />

            <div
                className="absolute top-[20%] right-[28%] w-16 h-px bg-gradient-to-l from-[#BAFF00]/10 to-transparent origin-right rotate-[15deg]"
                style={{ animation: "scribbleFloat 8s ease-in-out 4s infinite" }}
            />
        </div>
    );
}
