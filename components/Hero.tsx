'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useEffect, useState, memo } from 'react';
import { useIsMobile } from '@/lib/useIsMobile';
import { throttle } from '@/lib/throttle';

function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const isMobile = useIsMobile();

    useEffect(() => {
        // Skip mousemove tracking on mobile for performance
        if (isMobile) return;
        
        const handleMouseMove = throttle((e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        }, 100); // Throttle to every 100ms
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isMobile]);

    const statsVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
                    animate={{
                        x: mousePosition.x,
                        y: mousePosition.y,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
                    animate={{
                        x: -mousePosition.x,
                        y: -mousePosition.y,
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* Content - No animations for LCP elements */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                {/* Main Heading - NO ANIMATION for LCP */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                    <span className="block text-white mb-2">Hi, I&apos;m</span>
                    <span className="block text-gradient animate-gradient-shift bg-[length:200%_auto]">
                        Abdul Rahman
                    </span>
                </h1>

                {/* Subtitle - NO ANIMATION for LCP */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-4xl text-gray-300 font-light">
                        Frontend Developer · <span className="text-blue-400 font-semibold">Cloud & Data Engineering Enthusiast</span>
                    </h2>
                </div>

                {/* Description - NO ANIMATION for LCP */}
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Senior CS student at GIKI passionate about frontend development and cloud engineering. I build responsive web applications with React, TypeScript, and modern frameworks. Currently learning Docker, Kubernetes, and cloud platforms to transition into full-stack/cloud roles.
                </p>

                {/* CTA Buttons - Minimal animation */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Primary Button */}
                    <Button variant="gradient" size="lg" className="group" asChild>
                        <a href="#projects">
                            View My Work
                            <motion.span
                                className="ml-2 inline-block"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </a>
                    </Button>

                    {/* Secondary Button */}
                    <Button variant="outline" size="lg" asChild>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            View Resume
                        </a>
                    </Button>
                </div>

                {/* Stats - Below the fold, can have animations */}
                <motion.div
                    variants={statsVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                    {[
                        { number: '15+', label: 'Projects Completed' },
                        { number: '3+', label: 'Years Learning & Building' },
                        { number: '4', label: 'Internships & Leadership Roles' },
                        { number: '100%', label: 'Passion for Engineering' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="glassmorphism p-6 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default memo(Hero);