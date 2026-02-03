'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Blockchain Intern',
    company: 'Algoryte',
    period: 'August 2025',
    description:
        'Explored Hyperledger Fabric architecture and smart contract development through hands-on implementation and real-world use case analysis.',
    achievements: [
      'Studied Hyperledger Fabric architecture and smart contract fundamentals through hands-on tutorials',
      'Analyzed 10+ real-world blockchain use cases in supply chain and fintech domains',
      'Applied learnings to BlockTrack agricultural supply chain project',
    ],
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Business Development & Data Analytics Intern',
    company: 'Industrial Development Engineering Associates (IDEA)',
    period: 'June 2025 – July 2025',
    description:
        'Built interactive data visualization dashboards and applied NLP techniques for customer insights and lead optimization.',
    achievements: [
      'Built 5+ interactive Power BI and Tableau dashboards processing 10,000+ data points',
      'Applied NLP to classify 2,000+ customer feedback entries with 85% accuracy',
      'Improved lead tracking efficiency by 40% through data-driven insights',
    ],
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Unity Developer Intern',
    company: 'Mindstorm Studios',
    period: 'June 2024 – August 2024',
    description:
        'Developed game environments and features using Unity and C# for mobile gaming platforms.',
    achievements: [
      'Developed 3+ game environments using Unity and C#',
      'Enhanced player engagement by 20% through optimized gameplay mechanics',
      'Collaborated with cross-functional teams in agile development environment',
    ],
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'SAP Systems Intern',
    company: 'Engro Corporation',
    period: 'July 2024 – August 2024',
    description:
        'Automated enterprise workflows and generated analytical reports within SAP ERP system (HCM, MM, FICO modules).',
    achievements: [
      'Automated 15+ operational tasks using custom scripts, reducing processing time by 30%',
      'Prepared 20+ analytical reports for business intelligence and decision-making',
      'Gained hands-on experience with SAP ERP modules (HCM, MM, FICO)',
    ],
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Bachelor of Science in Computer Science',
    company: 'Ghulam Ishaq Khan Institute (GIKI)',
    period: 'Sep 2022 - June 2026',
    description:
        '100% Merit-Based Scholarship. Focusing on distributed systems, blockchain technology, data analytics, and software engineering. Active in technical projects and leadership roles.',
    achievements: [
      'Founded SaveTheBeachPakistan – Led 50 volunteers in 20+ clean-up drives, collecting 5 tons of waste',
      'Head Member, Giki Consulting Group – Campus Coordinator, Huawei Cloud Pakistan',
      'Reading tech articles, exploring marketing strategies, and enjoying novels',
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