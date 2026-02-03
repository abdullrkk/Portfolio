import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: 'Inter, Poppins, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
