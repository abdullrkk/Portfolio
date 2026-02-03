import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";

// Configure fonts with next/font/google
// These will be automatically self-hosted by Next.js during build
// and served from the application, eliminating render-blocking requests
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Abdul Rahman Khan - Frontend Developer & Cloud Engineering Enthusiast",
  description: "Portfolio showcasing cutting-edge web development, blockchain projects, and cloud engineering skills",
  keywords: ["Frontend Developer", "Cloud Engineering", "React", "Next.js", "TypeScript", "Blockchain"],
  authors: [{ name: "Abdul Rahman Khan" }],
  creator: "Abdul Rahman Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "Abdul Rahman Khan Portfolio",
    title: "Abdul Rahman Khan - Frontend Developer & Cloud Engineering Enthusiast",
    description: "Portfolio showcasing cutting-edge web development, blockchain projects, and cloud engineering skills",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rahman Khan - Frontend Developer",
    description: "Portfolio showcasing cutting-edge web development and cloud engineering skills",
    creator: "@abdullrkk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.github.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
