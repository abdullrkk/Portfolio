'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import FloatingShapes from './FloatingShapes';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* 3D Floating Shapes Background */}
            <FloatingShapes />

            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x,
                        y: mousePosition.y,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
                    animate={{
                        x: -mousePosition.x,
                        y: -mousePosition.y,
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 container mx-auto px-6 text-center"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Building modern web applications with React while exploring cloud technologies and data systems</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                >
                    <span className="block text-white mb-2">Hi, I'm</span>
                    <span className="block text-gradient animate-gradient-shift bg-[length:200%_auto]">
                        Abdul Rahman
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.div variants={itemVariants} className="mb-8">
                    <h2 className="text-2xl md:text-4xl text-gray-300 font-light">
                        Frontend Developer · <span className="text-blue-400 font-semibold">Cloud & Data Engineering Enthusiast</span>
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Senior CS student at GIKI passionate about frontend development and cloud engineering. I build responsive web applications with React, TypeScript, and modern frameworks. Currently learning Docker, Kubernetes, and cloud platforms to transition into full-stack/cloud roles.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
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
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={itemVariants}
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
            </motion.div>
        </section>
    );
}