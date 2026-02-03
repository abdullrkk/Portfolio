/**
 * Server-side GitHub API utilities
 * Fetches data on the server to improve performance and reduce client-side JS
 */

// Revalidate cached data every hour (3600 seconds)
const REVALIDATE_INTERVAL_SECONDS = 3600;

export interface GitHubRepo {
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

/**
 * Fetch GitHub repositories on the server
 * This reduces client-side JavaScript and improves performance
 */
export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        next: { revalidate: REVALIDATE_INTERVAL_SECONDS },
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch GitHub repos:', response.statusText);
      return [];
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}
