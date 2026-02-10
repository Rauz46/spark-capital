"use client";
import { motion } from "motion/react";

export default function MouseScroll() {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-[30px] h-[50px] rounded-full border-2 border-white/60 flex justify-center p-2 relative">
                <motion.div
                    animate={{
                        y: [0, 12, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-white mb-1"
                />
            </div>
        </div>
    );
}
