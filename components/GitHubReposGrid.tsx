'use client';

import { motion } from 'framer-motion';
import { Github, Star, GitFork } from 'lucide-react';
import { memo } from 'react';
import type { GitHubRepo } from '@/lib/github';

interface GitHubReposGridProps {
  repos: GitHubRepo[];
  inView: boolean;
}

function GitHubReposGrid({ repos, inView }: GitHubReposGridProps) {
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-3xl font-bold text-white mb-8 text-center">
        Recent from <span className="text-gradient">GitHub</span>
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
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
    </motion.div>
  );
}

export default memo(GitHubReposGrid);
