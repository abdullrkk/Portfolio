'use client';

    import { motion } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';
    import { Briefcase, GraduationCap } from 'lucide-react';

    const experiences = [
      {
        type: 'work',
        icon: Briefcase,
        title: 'Blockchain & Cloud Engineer',
        company: 'GIKI University - Research Projects',
        period: '2023 - Present',
        description:
          'Building production-grade Hyperledger Fabric networks with AI integration, developing Kubernetes-deployed microservices, and conducting high-performance computing research with CUDA and OpenMP.',
        achievements: [
          'Built AI-enabled pharmaceutical supply chain on Hyperledger Fabric with IoT integration',
          'Developed SHA-256 parallelization achieving 10x speedup using CUDA and OpenMP',
          'Deployed containerized applications using Docker Compose and Kubernetes',
        ],
      },
      {
        type: 'work',
        icon: Briefcase,
        title: 'Unity Developer Intern',
        company: 'Mindstorm Studios',
        period: '2022 - 2023',
        description:
          'Developed gameplay features for mobile games using Unity and C#. Focused on performance optimization and implementing game mechanics.',
        achievements: [
          'Implemented gameplay features shipped in production games',
          'Optimized game performance reducing load times by 30%',
          'Collaborated with designers to implement smooth animations',
        ],
      },
      {
        type: 'work',
        icon: Briefcase,
        title: 'SAP Systems Intern',
        company: 'Engro Corporation',
        period: '2022',
        description:
          'Assisted with SAP enterprise systems and business process automation in a Fortune 500 company environment.',
        achievements: [
          'Learned enterprise-scale IT infrastructure management',
          'Assisted in SAP module configurations and testing',
          'Documented business processes and system workflows',
        ],
      },
      {
        type: 'education',
        icon: GraduationCap,
        title: 'Bachelor of Science in Computer Science',
        company: 'Ghulam Ishaq Khan Institute (GIKI)',
        period: '2021 - Present (Expected 2025)',
        description:
          'Senior year student focusing on distributed systems, cloud computing, blockchain technology, and software engineering. Active in technical projects and leadership roles.',
        achievements: [
          'GPA: 3.5/4.0',
          'Founded Save the Beach environmental initiative',
          'Led marketing team at tech startup',
        ],
      },
    ];

    export default function Experience() {
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      return (
        <section id="experience" className="section-padding relative bg-slate-950/50">
          <div className="container mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  My <span className="text-gradient">Journey</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Professional experience and educational background
                </p>
              </div>

              {/* Timeline */}
              <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

                {/* Timeline Items */}
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      } flex-col md:gap-8`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 z-10">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                          <exp.icon className="w-8 h-8 text-blue-400" />
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className={`md:w-1/2 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="glassmorphism rounded-2xl p-6 hover:bg-white/5 transition-all"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                              <p className="text-blue-400 font-medium">{exp.company}</p>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                              {exp.period}
                            </span>
                          </div>

                          <p className="text-gray-400 mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                <span className="text-blue-400 mt-1">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      );
    }