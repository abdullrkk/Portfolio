'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Skill = {
  name: string;
  level: number;
  note?: string; // optional note
};

type SkillCategory = {
  category: string;
  items: Skill[];
};

const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React / Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    category: 'Backend & Data (Learning/Basics)',
    items: [
      { name: 'Node.js / Express', level: 60 },
      { name: 'Pandas / NumPy', level: 65 },
      { name: 'REST APIs', level: 70 },
      { name: 'SQL basics', level: 60 },
    ],
  },
  {
    category: 'Cloud & DevOps (Actively Learning)',
    items: [
      { name: 'Docker basics', level: 40 },
      { name: 'Git / GitHub', level: 75 },
      { name: 'Linux fundamentals', level: 55 },
      { name: 'AWS basics (exploring)', level: 30 },
    ],
  },
  {
    category: 'Tools & Workflow',
    items: [
      { name: 'JetBrains IDE', level: 85 },
      { name: 'GitHub Copilot', level: 75 },
      { name: 'Figma', level: 65 },
      { name: 'Chrome DevTools', level: 80 },
    ],
  },
  {
    category: 'Data & AI',
    items: [
      { name: 'Python', level: 70 },
      { name: 'Basic ML concepts', level: 60 },
      { name: 'Data visualization', level: 65 },
      { name: 'Jupyter / Google Colab', level: 70 },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <section id="skills" className="section-padding relative bg-slate-950/50">
        <div className="container mx-auto">
          <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  My <span className="text-gradient">Skills</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  A breakdown of my strengths, learning areas, and tools I use
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((category, categoryIndex) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                        className="glassmorphism rounded-2xl p-8 hover:bg-white/5 transition-all"
                    >
                      <h3 className="text-2xl font-bold text-white mb-8">{category.category}</h3>

                      <div className="space-y-6">
                        {category.items.map((skill, skillIndex) => (
                            <div key={skill.name}>
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-gray-300 font-medium">{skill.name}</span>
                                  {skill.note && (
                                      <span className="text-blue-400 text-sm">{skill.note}</span>
                                  )}
                                </div>
                                <span className="text-blue-400 font-semibold text-sm">
                            {skill.level}%
                          </span>
                              </div>

                              <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={inView ? { width: `${skill.level}%` } : {}}
                                    transition={{
                                      duration: 1,
                                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                      ease: 'easeOut',
                                    }}
                                />
                              </div>
                            </div>
                        ))}
                      </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
