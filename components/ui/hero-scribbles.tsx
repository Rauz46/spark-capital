"use client";

/**
 * Subtle geometric decorations for the hero banner.
 * Premium, minimal aesthetic — thin lines, dots, and geometric shapes.
 */
export function HeroScribbles() {
    return (
        <div
            className="absolute inset-0 z-[2] pointer-events-none overflow-hidden"
            aria-hidden="true"
        >
            {/* ── Corner Brackets ── */}

            {/* Top-Left Corner */}
            <div className="absolute top-[6%] left-[4%] opacity-[0.12]">
                <div className="w-16 h-16 md:w-24 md:h-24 border-l border-t border-white/40" />
            </div>

            {/* Top-Right Corner */}
            <div className="absolute top-[6%] right-[4%] opacity-[0.12]">
                <div className="w-16 h-16 md:w-24 md:h-24 border-r border-t border-white/40" />
            </div>

            {/* Bottom-Left Corner */}
            <div className="absolute bottom-[6%] left-[4%] opacity-[0.12]">
                <div className="w-16 h-16 md:w-24 md:h-24 border-l border-b border-white/40" />
            </div>

            {/* Bottom-Right Corner */}
            <div className="absolute bottom-[6%] right-[4%] opacity-[0.12]">
                <div className="w-16 h-16 md:w-24 md:h-24 border-r border-b border-white/40" />
            </div>

            {/* ── Thin Accent Lines ── */}

            {/* Horizontal line - upper left */}
            <div
                className="absolute top-[20%] left-[3%] w-20 md:w-32 h-px bg-gradient-to-r from-white/20 to-transparent"
                style={{ animation: "scribbleFloat 8s ease-in-out infinite" }}
            />

            {/* Horizontal line - lower right */}
            <div
                className="absolute bottom-[25%] right-[3%] w-20 md:w-32 h-px bg-gradient-to-l from-white/20 to-transparent"
                style={{ animation: "scribbleFloat 7s ease-in-out 2s infinite" }}
            />

            {/* Vertical line - left */}
            <div
                className="absolute top-[40%] left-[8%] w-px h-16 md:h-24 bg-gradient-to-b from-white/15 to-transparent"
                style={{ animation: "scribbleFloat 6s ease-in-out 1s infinite" }}
            />

            {/* Vertical line - right */}
            <div
                className="absolute top-[35%] right-[6%] w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-white/15 to-transparent"
                style={{ animation: "scribbleFloat 9s ease-in-out 3s infinite" }}
            />

            {/* ── Small Dots ── */}
            {[
                { top: "12%", left: "15%", delay: "0s" },
                { top: "18%", right: "25%", delay: "1.5s" },
                { top: "72%", left: "10%", delay: "2.5s" },
                { top: "78%", right: "18%", delay: "0.8s" },
                { top: "45%", left: "6%", delay: "3.5s" },
                { top: "55%", right: "5%", delay: "2s" },
            ].map((dot, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white/20"
                    style={{
                        top: dot.top,
                        left: (dot as any).left,
                        right: (dot as any).right,
                        animation: `twinkle 4s ease-in-out ${dot.delay} infinite`,
                    }}
                />
            ))}

            {/* ── Subtle Geometric Rings ── */}

            {/* Ring - top right area */}
            <div
                className="absolute top-[10%] right-[12%] w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/[0.06]"
                style={{ animation: "viewfinderPulse 5s ease-in-out infinite" }}
            />

            {/* Ring - bottom left area */}
            <div
                className="absolute bottom-[15%] left-[14%] w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/[0.06]"
                style={{ animation: "viewfinderPulse 6s ease-in-out 2s infinite" }}
            />

            {/* ── Small Cross Marks ── */}

            {/* Cross - upper area */}
            <div className="absolute top-[28%] left-[22%] opacity-[0.08]">
                <div className="relative w-3 h-3">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white -translate-y-1/2" />
                    <div className="absolute left-1/2 top-0 h-full w-px bg-white -translate-x-1/2" />
                </div>
            </div>

            {/* Cross - lower area */}
            <div className="absolute bottom-[30%] right-[20%] opacity-[0.08]">
                <div className="relative w-3 h-3">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white -translate-y-1/2" />
                    <div className="absolute left-1/2 top-0 h-full w-px bg-white -translate-x-1/2" />
                </div>
            </div>

            {/* ── Diagonal Accent ── */}
            <div
                className="absolute bottom-[12%] left-[30%] w-24 h-px bg-gradient-to-r from-white/10 to-transparent origin-left rotate-[-30deg]"
                style={{ animation: "scribbleFloat 10s ease-in-out 1s infinite" }}
            />

            <div
                className="absolute top-[15%] right-[30%] w-20 h-px bg-gradient-to-l from-white/10 to-transparent origin-right rotate-[20deg]"
                style={{ animation: "scribbleFloat 8s ease-in-out 4s infinite" }}
            />
        </div>
    );
}
