import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/components/providers/theme-provider";
import TrackVisitor from "@/components/statistics/TrackVisitor";
import SmoothLayout from "@/features/layout/SmoothLayout"; // Path to the SmoothLayout component

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Mohamad Rabbani | Full-Stack Software Engineer",
    template: "%s | MRabbani",
  },
  description:
    "Full-stack software engineer architecting high-performance web systems with technical rigor and 2026 spatial design principles.",
  keywords: [
    "Software Architect",
    "Next.js 15",
    "TypeScript Engineering",
    "Systems Design",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Mohamad Rabbani" }],
  creator: "Mohamad Rabbani",
  metadataBase: new URL("https://your-portfolio-domain.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-domain.com",
    title: "Mohamad Rabbani | Full-Stack Developer",
    description:
      "Engineering digital experiences with technical rigor and polished design.",
    siteName: "MRabbani Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MRabbani Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamad Rabbani | Software Engineer",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/assets/logo/icon.png",
    shortcut: "/assets/logo/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.variable,
          "font-sans antialiased bg-white dark:bg-[#030712] text-slate-900 dark:text-slate-50 selection:bg-sky-500/30",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 2026 Background Context: Static noise & radial glows */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-500/5 blur-[120px] dark:bg-sky-500/[0.03]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px] dark:bg-indigo-500/[0.03]" />
          </div>

          <TrackVisitor />

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />

            {/* The Spatial Wrapper: Handles Smooth Scroll, Transitions, and Grain */}
            <SmoothLayout>
              <main className="flex-grow pt-20 lg:pt-0">{children}</main>
            </SmoothLayout>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
