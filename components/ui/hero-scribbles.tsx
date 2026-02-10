"use client";

export function HeroScribbles() {
    return (
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden="true">

            {/* Rocket - Top Left */}
            <svg
                className="absolute top-[8%] left-[5%] w-28 h-28 md:w-36 md:h-36 opacity-[0.12]"
                style={{ animation: "scribbleFloat 5s ease-in-out infinite" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M50 15 C50 15 65 30 65 55 L55 65 L45 65 L35 55 C35 30 50 15 50 15Z" />
                <circle cx="50" cy="42" r="5" />
                <path d="M35 55 L25 60 L35 50" />
                <path d="M65 55 L75 60 L65 50" />
                <path d="M42 65 L40 80 L50 72 L60 80 L58 65" />
            </svg>

            {/* Trending Chart - Top Right */}
            <svg
                className="absolute top-[10%] right-[6%] w-24 h-24 md:w-32 md:h-32 opacity-[0.15]"
                style={{ animation: "scribbleFloat 6s ease-in-out 1s infinite" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
            >
                <path d="M15 80 L35 55 L55 65 L75 25 L85 30" strokeDasharray="200" style={{ animation: "drawLine 3s ease forwards 1s" }} />
                <path d="M75 25 L85 25 L85 35" />
                <line x1="10" y1="85" x2="90" y2="85" strokeOpacity="0.3" />
                <line x1="10" y1="85" x2="10" y2="15" strokeOpacity="0.3" />
            </svg>

            {/* Lightbulb - Left Side */}
            <svg
                className="absolute top-[45%] left-[3%] w-20 h-20 md:w-28 md:h-28 opacity-[0.1]"
                style={{ animation: "scribbleFloat 7s ease-in-out 2s infinite" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
            >
                <path d="M50 15 C30 15 20 30 20 45 C20 58 35 62 35 75 L65 75 C65 62 80 58 80 45 C80 30 70 15 50 15Z" />
                <line x1="38" y1="80" x2="62" y2="80" />
                <line x1="40" y1="85" x2="60" y2="85" />
                <line x1="45" y1="90" x2="55" y2="90" />
                <path d="M40 45 L50 35 L60 45" strokeOpacity="0.5" />
            </svg>

            {/* Target / Bullseye - Right Side */}
            <svg
                className="absolute top-[50%] right-[4%] w-24 h-24 md:w-28 md:h-28 opacity-[0.1]"
                style={{ animation: "scribbleFloat 5.5s ease-in-out 0.5s infinite" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
            >
                <circle cx="50" cy="50" r="35" />
                <circle cx="50" cy="50" r="22" />
                <circle cx="50" cy="50" r="10" />
                <circle cx="50" cy="50" r="3" fill="white" fillOpacity="0.3" />
            </svg>

            {/* Handshake - Bottom Left */}
            <svg
                className="absolute bottom-[12%] left-[6%] w-24 h-24 md:w-30 md:h-30 opacity-[0.1]"
                style={{ animation: "scribbleFloat 6.5s ease-in-out 1.5s infinite" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M15 50 L30 35 L45 40 L55 35 L65 40 L50 55 L40 50" />
                <path d="M85 50 L70 35 L55 35" />
                <path d="M50 55 L60 60 L55 65 L45 60Z" />
                <line x1="5" y1="55" x2="25" y2="45" />
                <line x1="95" y1="55" x2="75" y2="45" />
            </svg>

            {/* Dollar / Growth - Bottom Right */}
            <svg
                className="absolute bottom-[10%] right-[7%] w-20 h-20 md:w-24 md:h-24 opacity-[0.12]"
                style={{ animation: "scribbleFloat 5s ease-in-out 3s infinite" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
            >
                <circle cx="50" cy="50" r="35" />
                <path d="M50 25 L50 75" />
                <path d="M38 38 C38 30 62 30 62 40 C62 48 38 48 38 58 C38 68 62 68 62 60" />
            </svg>

            {/* Star Sparkles - Scattered */}
            {[
                { top: "15%", left: "25%", delay: "0s", size: "w-5 h-5" },
                { top: "22%", right: "30%", delay: "1.5s", size: "w-4 h-4" },
                { top: "70%", left: "18%", delay: "2.5s", size: "w-6 h-6" },
                { top: "75%", right: "22%", delay: "0.8s", size: "w-4 h-4" },
                { top: "35%", left: "12%", delay: "3.5s", size: "w-3 h-3" },
                { top: "60%", right: "12%", delay: "2s", size: "w-5 h-5" },
            ].map((star, i) => (
                <svg
                    key={i}
                    className={`absolute ${star.size} opacity-[0.2]`}
                    style={{
                        top: star.top,
                        left: star.left,
                        right: (star as any).right,
                        animation: `twinkle 3s ease-in-out ${star.delay} infinite`,
                    }}
                    viewBox="0 0 24 24"
                    fill="white"
                >
                    <path d="M12 2L13.5 9L20 8L14.5 12L17 19L12 14.5L7 19L9.5 12L4 8L10.5 9Z" />
                </svg>
            ))}

            {/* Focus Rings - Corners */}
            <svg
                className="absolute top-[5%] right-[18%] w-16 h-16 md:w-20 md:h-20 opacity-[0.08]"
                style={{ animation: "viewfinderPulse 4s ease-in-out infinite" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="white"
                strokeWidth="1"
            >
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="30" strokeDasharray="5 5" />
                <circle cx="50" cy="50" r="20" />
            </svg>

            <svg
                className="absolute bottom-[8%] left-[20%] w-14 h-14 md:w-18 md:h-18 opacity-[0.06]"
                style={{ animation: "viewfinderPulse 5s ease-in-out 2s infinite" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="white"
                strokeWidth="1"
            >
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="25" strokeDasharray="4 4" />
            </svg>

            {/* Annotation - "Invest" */}
            <span
                className="absolute top-[18%] left-[35%] text-white/[0.08] text-sm md:text-base font-sans italic tracking-widest"
                style={{ animation: "scribbleFloat 8s ease-in-out 4s infinite" }}
            >
                invest
            </span>

            {/* Annotation - "Scale" */}
            <span
                className="absolute bottom-[20%] right-[28%] text-white/[0.08] text-xs md:text-sm font-sans italic tracking-widest"
                style={{ animation: "scribbleFloat 7s ease-in-out 2s infinite" }}
            >
                scale
            </span>

            {/* Wavy Underline */}
            <svg
                className="absolute bottom-[35%] left-[8%] w-40 h-4 opacity-[0.06]"
                style={{ animation: "scribbleFloat 6s ease-in-out 1s infinite" }}
                viewBox="0 0 200 20"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            >
                <path d="M0 10 Q25 0 50 10 Q75 20 100 10 Q125 0 150 10 Q175 20 200 10" strokeDasharray="200" style={{ animation: "drawLine 4s ease forwards 2s" }} />
            </svg>
        </div>
    );
}
