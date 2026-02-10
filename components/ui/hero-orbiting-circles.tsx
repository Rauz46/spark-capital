"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";

export function HeroOrbitingCircles() {
    return (
        <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-visible">

            {/* Central Glow Effect */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Central Element - Professional Woman */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                    alt="Professional Woman"
                    fill
                    className="object-cover object-top hover:scale-110 transition-transform duration-700"
                    priority
                />
                {/* Inner Ring Glow */}
                <div className="absolute inset-0 rounded-full border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none" />
            </div>

            {/* Orbiting Circles */}

            {/* Inner Ring - Fund 1 (Left) */}
            <OrbitingCircles
                className="size-[100px] border-none bg-transparent"
                duration={30}
                delay={0}
                radius={160}
            >
                <div className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#BAFF00]/20 to-emerald-500/20 border border-[#BAFF00]/40 backdrop-blur-md text-center p-2 cursor-pointer hover:scale-110 transition-all duration-300 group shadow-[0_0_30px_rgba(186,255,0,0.2)]">
                    <div className="absolute inset-0 bg-[#BAFF00]/10 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[#BAFF00] font-bold text-xl leading-none tracking-tight group-hover:text-white transition-colors relative z-10">Fund 1</span>
                    <span className="text-white/80 text-[9px] font-medium leading-tight mt-1 relative z-10">Idea to Scale</span>
                </div>
            </OrbitingCircles>

            {/* Inner Ring - Fund 2 (Right) */}
            <OrbitingCircles
                className="size-[100px] border-none bg-transparent"
                duration={30}
                delay={15}
                radius={160}
            >
                <div className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-500/20 border border-blue-400/40 backdrop-blur-md text-center p-2 cursor-pointer hover:scale-110 transition-all duration-300 group shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-blue-300 font-bold text-xl leading-none tracking-tight group-hover:text-white transition-colors relative z-10">Fund 2</span>
                    <span className="text-white/80 text-[9px] font-medium leading-tight mt-1 relative z-10">Growth &<br />Breakeven</span>
                </div>
            </OrbitingCircles>

            {/* Outer Ring - External (Right/Far) */}
            <OrbitingCircles
                className="size-[110px] border-none bg-transparent"
                radius={260}
                duration={45}
                reverse
                path={false} // Hide outer path for cleaner look? No, keep path but maybe subtler?
            >
                <div className="relative flex flex-col items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/40 backdrop-blur-md text-center p-2 cursor-pointer hover:scale-110 transition-all duration-300 group shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    <div className="absolute inset-0 bg-purple-500/10 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-purple-300 font-bold text-xl leading-none tracking-tight group-hover:text-white relative z-10">External</span>
                    <span className="text-white/80 text-[10px] font-medium leading-tight mt-1 relative z-10">Multimillion<br />Revenue</span>
                </div>
            </OrbitingCircles>

            {/* Decorative Outer Dashed Circle (Instead of Path) */}
            <svg className="absolute inset-0 size-full pointer-events-none opacity-20 animate-[spin_60s_linear_infinite]" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="260" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 10" />
            </svg>

        </div>
    );
}
