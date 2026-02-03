import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { fetchGitHubRepos } from '@/lib/github';

export default async function Home() {
  // Fetch GitHub repos on the server for better performance
  const githubRepos = await fetchGitHubRepos('abdullrkk');

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated background gradient mesh */}
      <div className="fixed inset-0 gradient-mesh opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects githubRepos={githubRepos} />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
