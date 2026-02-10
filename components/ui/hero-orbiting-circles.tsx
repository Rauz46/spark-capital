"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { User } from "lucide-react";

export function HeroOrbitingCircles() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background/0">

            {/* Central Element - Woman Image Placeholder */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="flex flex-col items-center justify-center text-white/70 z-20">
                    <User size={64} className="mb-2 opacity-50" />
                    <span className="text-xs text-center px-4 font-mono">Image Placeholder<br />(Professional Woman)</span>
                </div>
            </div>

            {/* Orbiting Circles */}

            {/* Inner Ring - Fund 1 (Left) */}
            <OrbitingCircles
                className="size-[80px] border-none bg-transparent"
                duration={25}
                delay={0}
                radius={140}
            >
                <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-[#BAFF00]/10 border border-[#BAFF00]/30 backdrop-blur-sm text-center p-1 cursor-pointer hover:scale-110 transition-transform group">
                    <span className="text-[#BAFF00] font-bold text-lg leading-none group-hover:text-white transition-colors">Fund 1</span>
                    <span className="text-[#BAFF00]/70 text-[8px] leading-tight mt-1 group-hover:text-white/90">Idea to Scale</span>
                </div>
            </OrbitingCircles>

            {/* Inner Ring - Fund 2 (Right) */}
            <OrbitingCircles
                className="size-[80px] border-none bg-transparent"
                duration={25}
                delay={12.5}
                radius={140}
            >
                <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-center p-1 cursor-pointer hover:scale-110 transition-transform group">
                    <span className="text-white font-bold text-lg leading-none">Fund 2</span>
                    <span className="text-white/70 text-[8px] leading-tight mt-1">Growth & Breakeven</span>
                </div>
            </OrbitingCircles>

            {/* Outer Ring - External (Right/Far) */}
            <OrbitingCircles
                className="size-[90px] border-none bg-transparent"
                radius={220}
                duration={35}
                reverse
            >
                <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm text-center p-1 cursor-pointer hover:scale-110 transition-transform group">
                    <span className="text-blue-300 font-bold text-lg leading-none group-hover:text-white">External</span>
                    <span className="text-blue-300/70 text-[9px] leading-tight mt-1 group-hover:text-white/90">Multimillion Revenue</span>
                </div>
            </OrbitingCircles>
        </div>
    );
}
