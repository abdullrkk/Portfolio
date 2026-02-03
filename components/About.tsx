'use client';

              import { motion } from 'framer-motion';
              import { useInView } from 'react-intersection-observer';
              import { Code2, Palette, Rocket, Users } from 'lucide-react';
              import { Card, CardContent } from './ui/card';
              import Image from 'next/image';
              import { memo } from 'react';

              const highlights = [
                {
                  icon: Code2,
                  title: 'Production-Ready Code',
                  description: 'Building scalable, observable systems with proper testing and CI/CD pipelines.',
                },
                {
                  icon: Palette,
                  title: 'Modern Frontend',
                  description: 'Crafting responsive UIs with React, TypeScript, and modern animation libraries.',
                },
                {
                  icon: Rocket,
                  title: 'Cloud & DevOps',
                  description: 'Deploying containerized applications with Docker, Kubernetes, and cloud platforms.',
                },
                {
                  icon: Users,
                  title: 'Community Leadership',
                  description: 'Leading initiatives and fostering collaboration for impactful change.',
                },
              ];

              function About() {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });

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
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: 'easeOut' },
                  },
                };

                return (
                  <section id="about" className="section-padding relative">
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
                            About <span className="text-gradient">Me</span>
                          </h2>
                          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
                          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A passionate developer dedicated to creating exceptional digital experiences
                          </p>
                        </motion.div>

                        {/* Main Content */}
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          {/* Image/Visual Side */}
                          <motion.div variants={itemVariants} className="relative">
                            <div className="relative w-full aspect-square max-w-md mx-auto">
                              <motion.div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"
                                animate={{
                                  scale: [1, 1.1, 1],
                                  rotate: [0, 5, 0],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                              />
                              <div className="relative glassmorphism rounded-2xl h-full w-full overflow-hidden">
                                <Image
                                  src="/images/profile.jpeg"
                                  alt="Profile Picture"
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-cover"
                                  priority
                                />
                              </div>
                            </div>
                          </motion.div>

                          {/* Text Content */}
                          <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-gray-400 leading-relaxed">
                              I'm Abdul Rahman Khan — a senior Computer Science student at GIKI with strong frontend development skills and a passion for learning cloud technologies. I specialize in React, TypeScript, and modern web frameworks. I build clean, responsive user interfaces and I'm currently expanding my skillset into cloud engineering and backend systems.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                              My technical foundation includes data analysis, basic AI/ML concepts, and solid frontend engineering. I've completed internships at Algoryte (Blockchain development) and IDEA (Business Development & Data Analytics), where I gained hands-on experience with Hyperledger Fabric and built data-driven insights using Power BI and NLP. I'm actively learning Docker, Kubernetes, and cloud platforms through hands-on projects and coursework.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                              I founded the environmental initiative "Save the Beach" where I led community events and coordinated teams. Outside of coding, I enjoy reading tech blogs, contributing to open source, and traveling.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-4">
                              {[
                                'React',
                                'TypeScript',
                                'Docker',
                                'Kubernetes',
                                'Next.js',
                                'SAP',
                                'Unity',
                                'PostgreSQL',
                                'GitHub Actions',
                                'AI/ML Basics',
                                'Hyperledger Fabric',
                              ].map((tech) => (
                                <span
                                  key={tech}
                                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </div>

                        {/* Highlights Grid */}
                        <motion.div
                          variants={containerVariants}
                          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                          {highlights.map((item, index) => (
                            <motion.div key={index} variants={itemVariants}>
                              <Card className="h-full bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-colors">
                                <CardContent className="p-6 text-center">
                                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4">
                                    <item.icon className="w-8 h-8 text-blue-400" />
                                  </div>
                                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                                  <p className="text-gray-400 text-sm">{item.description}</p>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    </div>
                  </section>
                );
              }

              export default memo(About);