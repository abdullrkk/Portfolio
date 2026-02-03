'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, memo } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string;
}

// Featured projects (manually curated)
const featuredProjects = [
  {
    title: 'AI-Enhanced Blockchain Supply Chain (Hyperledger Fabric)',
    description:
        'Blockchain-based supply chain system built on Hyperledger Fabric integrating AI and IoT for real-time monitoring and automated compliance. Smart contracts (chaincode) ensure transparency and immutability, while off-chain AI models analyze IoT sensors to maintain agriculture quality standards and optimize logistics workflows.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    tech: ['Hyperledger Fabric', 'Smart Contracts', 'Blockchain', 'AI Models', 'IoT', 'Supply Chain Optimization'],
    github: 'https://github.com/Shgit29/BlockTrack-.git',
  },
  {
    title: 'Chess Analytics & Performance Optimization Platform',
    description:
        'End-to-end chess analytics system powered by the Stockfish engine to classify inaccuracies, mistakes, and blunders from PGN files. Includes game phase detection (opening, middlegame, endgame), win-rate analysis by error type, personalized training prescriptions, CSV data pipelines, and an interactive React dashboard for visualization and insights.',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80',
    tech: ['Python', 'Stockfish', 'Pandas', 'Data Analysis', 'React', 'Chart.js'],
    github: 'https://github.com/abdullrkk/chess-analytics-frontend.git',
  },
  {
    title: 'AI-Driven Local Event Finder',
    description:
        'Intelligent event discovery platform that provides personalized event recommendations based on user preferences and location. Built with a responsive UI and modular architecture. Features filtering, booking flow, cart system, and scalable frontend design. Designed for real-time data integration and future AI recommendation engine expansion.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'],
    github: 'https://github.com/abdullrkk/event-finder.git',
  },
  {
    title: 'High-Performance SHA-256 Parallel Implementation',
    description:
        'Parallelized implementation of the SHA-256 cryptographic hashing algorithm using OpenMP, MPI, Pthreads, and CUDA. Includes benchmarking, performance comparison, and scalability analysis across CPU and GPU architectures. Demonstrates deep understanding of cryptography, parallel computing, thread management, and optimization techniques with a web dashboard for live testing.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tech: ['C/C++', 'OpenMP', 'MPI', 'Pthreads', 'CUDA', 'Cryptography', 'Parallel Computing'],
    github: 'https://github.com/abdullrkk/Hashing-at-Lightspeed.git',
  },
];

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [githubRepos, setGithubRepos] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub repos
    fetch('https://api.github.com/users/abdullrkk/repos?sort=updated&per_page=6')
        .then((res) => res.json())
        .then((data: Project[]) => {
          setGithubRepos(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
      <section id="projects" className="section-padding relative">
        <div className="container mx-auto">
          <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Some of my recent work showcasing my skills and creativity
              </p>
            </motion.div>

            {/* Featured Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {featuredProjects.map((project, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full bg-slate-900/50 border-slate-800 overflow-hidden group">
                      <div className="relative overflow-hidden aspect-video">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                      </div>

                      <CardHeader>
                        <CardTitle className="text-white group-hover:text-gradient transition-all">
                          {project.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                              <span
                                  key={tech}
                                  className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                              >
                          {tech}
                        </span>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button variant="outline" size="sm" className="flex-1" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
              ))}
            </div>

            {/* GitHub Repos Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Recent from <span className="text-gradient">GitHub</span>
              </h3>

              {loading ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="glassmorphism rounded-lg p-6 animate-pulse">
                          <div className="h-6 bg-slate-700 rounded mb-4" />
                          <div className="h-4 bg-slate-700 rounded mb-2" />
                          <div className="h-4 bg-slate-700 rounded w-2/3" />
                        </div>
                    ))}
                  </div>
              ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {githubRepos.map((repo) => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glassmorphism rounded-lg p-6 hover:bg-white/5 transition-all group"
                            whileHover={{ y: -5 }}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {repo.name}
                            </p>
                            <Github className="w-5 h-5 text-gray-400" />
                          </div>

                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {repo.description || 'No description available'}
                          </p>

                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            {repo.language && (
                                <span className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full bg-blue-400" />
                                  {repo.language}
                        </span>
                            )}
                            <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                              {repo.stargazers_count}
                      </span>
                            <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                              {repo.forks_count}
                      </span>
                          </div>
                        </motion.a>
                    ))}
                  </div>
              )}

              <div className="text-center mt-12">
                <Button variant="gradient" size="lg" asChild>
                  <a href="https://github.com/abdullrkk" target="_blank" rel="noopener noreferrer">
                    View All Projects on GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}

export default memo(Projects);