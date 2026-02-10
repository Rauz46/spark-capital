"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
    ({ className }: { className?: string }) => {
        // Reduced number of paths for performance (taking every ~3rd path from original)
        const paths = [
            "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
            "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
            "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
            "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
            "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
            "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
            "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
            "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
            "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
            "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
            "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
            "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
            "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
            "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
            "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
            "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
            "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
            "M-23 -597C-23 -597 45 -192 509 -65C973 62 1041 467 1041 467",
            "M-2 -621C-2 -621 66 -216 530 -89C994 38 1062 443 1062 443",
            "M19 -645C19 -645 87 -240 551 -113C1015 14 1083 419 1083 419",
        ];

        return (
            <div
                className={cn(
                    "absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px]",
                    className,
                )}
            >
                <svg
                    className="pointer-events-none absolute z-0 h-full w-full"
                    width="100%"
                    height="100%"
                    viewBox="0 0 696 316"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {paths.map((path, index) => (
                        <path
                            key={`static-path-${index}`}
                            d={path}
                            stroke={`url(#linearGradient-${index})`}
                            strokeOpacity="0.4"
                            strokeWidth="0.5"
                        />
                    ))}

                    {/* Optimized Animations: Using fewer distinct animations if possible, but for now we keep per-path animation but with fewer paths */}
                    {paths.map((path, index) => (
                        <motion.path
                            key={`path-` + index}
                            d={path}
                            stroke={`url(#linearGradient-${index})`}
                            strokeOpacity="0.4"
                            strokeWidth="0.5"
                        ></motion.path>
                    ))}

                    <defs>
                        {paths.map((path, index) => (
                            <motion.linearGradient
                                id={`linearGradient-${index}`}
                                key={`gradient-${index}`}
                                initial={{
                                    x1: "0%",
                                    x2: "0%",
                                    y1: "0%",
                                    y2: "0%",
                                }}
                                animate={{
                                    x1: ["0%", "100%"],
                                    x2: ["0%", "95%"],
                                    y1: ["0%", "100%"],
                                    y2: ["0%", `${93 + Math.random() * 8}%`],
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 20, // Slower duration (20s+) reduces CPU load per frame
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    delay: Math.random() * 10,
                                }}
                            >
                                <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                                <stop stopColor="#18CCFC"></stop>
                                <stop offset="32.5%" stopColor="#6344F5"></stop>
                                <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
                            </motion.linearGradient>
                        ))}

                        <radialGradient
                            id="paint0_radial_242_278"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
                        >
                            <stop offset="0.0666667" stopColor="#d4d4d4"></stop>
                            <stop offset="0.243243" stopColor="#d4d4d4"></stop>
                            <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        );
    },
);

BackgroundBeams.displayName = "BackgroundBeams";
