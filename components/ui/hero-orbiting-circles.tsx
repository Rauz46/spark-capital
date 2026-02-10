"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";

export function HeroOrbitingCircles() {
    return (
        <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-visible">

            {/* Central Glow Vortex / 3D Depth */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite] opacity-30" style={{ borderStyle: 'dotted' }} />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite_reverse] opacity-20" style={{ borderStyle: 'dashed' }} />

            {/* Central Element - Professional Woman with Holographic Polish */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-white/30 shadow-[0_0_80px_rgba(59,130,246,0.3)] z-10 flex items-center justify-center bg-black/40 backdrop-blur-md overflow-hidden ring-12 ring-white/5 group">
                <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                    alt="Professional Woman"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-1000 brightness-110 contrast-110"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 mix-blend-screen opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(255,255,255,0.2)]" />
            </div>

            {/* Orbiting Circles */}

            {/* Outer Orbit 2 - Small Glowing Particles (Orbital Debris) */}
            <OrbitingCircles className="size-[4px] border-none bg-blue-400 shadow-[0_0_10px_#60A5FA]" radius={200} duration={40} delay={0} path={false} />
            <OrbitingCircles className="size-[4px] border-none bg-purple-400 shadow-[0_0_10px_#A855F7]" radius={200} duration={40} delay={20} path={false} />
            <OrbitingCircles className="size-[3px] border-none bg-[#BAFF00] shadow-[0_0_10px_#BAFF00]" radius={300} duration={50} delay={10} path={false} />

            {/* Inner Ring - Fund 1 (Left) */}
            <OrbitingCircles
                className="size-[100px] border-none bg-transparent"
                duration={30}
                delay={0}
                radius={160}
            >
                <div className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#BAFF00]/30 to-emerald-500/30 border border-[#BAFF00]/50 backdrop-blur-xl text-center p-2 cursor-pointer hover:scale-110 transition-all duration-500 group shadow-[0_0_40px_rgba(186,255,0,0.3)] hover:shadow-[0_0_60px_rgba(186,255,0,0.5)]">
                    <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <span className="text-[#BAFF00] font-bold text-xl leading-none tracking-tight group-hover:text-white transition-colors relative z-10 drop-shadow-lg">Fund 1</span>
                    <span className="text-white font-medium text-[9px] leading-tight mt-1 relative z-10">Idea to Scale</span>
                </div>
            </OrbitingCircles>

            {/* Inner Ring - Fund 2 (Right) */}
            <OrbitingCircles
                className="size-[100px] border-none bg-transparent"
                duration={30}
                delay={15}
                radius={160}
            >
                <div className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-500/30 border border-blue-400/50 backdrop-blur-xl text-center p-2 cursor-pointer hover:scale-110 transition-all duration-500 group shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]">
                    <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <span className="text-blue-200 font-bold text-xl leading-none tracking-tight group-hover:text-white transition-colors relative z-10 drop-shadow-lg">Fund 2</span>
                    <span className="text-white font-medium text-[9px] leading-tight mt-1 relative z-10">Growth &<br />Breakeven</span>
                </div>
            </OrbitingCircles>

            {/* Outer Ring - External (Right/Far) */}
            <OrbitingCircles
                className="size-[110px] border-none bg-transparent"
                radius={260}
                duration={45}
                reverse
                path={false}
            >
                <div className="relative flex flex-col items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400/50 backdrop-blur-xl text-center p-2 cursor-pointer hover:scale-110 transition-all duration-500 group shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)]">
                    <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <span className="text-purple-200 font-bold text-xl leading-none tracking-tight group-hover:text-white relative z-10 drop-shadow-lg">External</span>
                    <span className="text-white font-medium text-[10px] leading-tight mt-1 relative z-10">Multimillion<br />Revenue</span>
                </div>
            </OrbitingCircles>

            {/* Decorative Outer Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] h-[320px] rounded-full border border-white/5" />
                <div className="w-[520px] h-[520px] rounded-full border border-white/5" />
            </div>

        </div>
    );
}
