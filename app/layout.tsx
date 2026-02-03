import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Your Name - Frontend Developer & UI/UX Designer",
  description: "Portfolio showcasing cutting-edge web development and stunning UI/UX design work",
  keywords: ["Frontend Developer", "UI/UX Designer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "Your Portfolio",
    title: "Your Name - Frontend Developer & UI/UX Designer",
    description: "Portfolio showcasing cutting-edge web development and stunning UI/UX design work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Frontend Developer",
    description: "Portfolio showcasing cutting-edge web development and stunning UI/UX design work",
    creator: "@yourhandle",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
