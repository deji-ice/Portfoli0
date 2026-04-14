import "./globals.css";
import NavBar from "@/components/NavBar";
import Script from "next/script";
import { Outfit } from "next/font/google";
import dynamic from "next/dynamic";
import SmoothScrolling from "@/components/SmoothScrolling";
import SVGLoader from "@/components/SVGloader";

// Optimize font loading
// const programme = localFont({
//   src: [
//     {
//       path: "../public/fonts/Programme-Regular.woff2",
//       weight: "400",
//     },
//   ],
//   variable: "--font-outfit",
//   preload: true,
// });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

// const montecatiniPro = localFont({
//   src: [
//     {
//       path: "../public/fonts/MontecatiniPro-StrettoUltra.woff2",
//       weight: "700",
//     },
//   ],
//   variable: "--font-montecatiniPro",
//   preload: true,
// });

const NowPlaying = dynamic(() => import("@/components/NowPlaying"), {
  loading: () => <div className="h-6 bg-slate-900" />,
});

export const metadata = {
  metadataBase: new URL("https://ayodejiatanda.vercel.app"),
  viewport: { width: "device-width", initialScale: 1 },
  title: "Ayodeji Atanda - Software Engineer Portfolio",
  verification: {
    google: "ltfOnPx-NMzt2vBROfh-jAQr5R-U7ynE-3t3kmMTJGo",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  description:
    "Ayodeji Atanda - Software Engineer Portfolio: Creating professional, scalable, and SEO-friendly websites that establish a robust online presence for small businesses through innovative web and blockchain solutions.",
  keywords: [
    "Ayodeji Atanda",
    "Deji ice",
    "Lagos",
    "Nigeria",
    "JavaScript",
    "React",
    "Frontend Engineer",
    "Smart Contracts",
    "blockchain",
    "Web3",
    "Solidity",
    "Ethers.js",
    "Hardhat",
    "Tailwind CSS",
    "Web development",
    "Frontend development",
    "Frontend developer",
    "Fullstack developer",
    "Graphic designer",
    "typescipt",
    "Next.js",
    "Web Development Portfolio",
    "Web Performance Optimization",
    "Portfolio Showcase",
    "SEO-Friendly Websites",
    "Software developer",
    "Freelance",
    "Portfolio website",
    "HTML/CSS",
    "Technical Skills",
    "SEO Optimization",
    "Web Developer",
  ],
  robots: {
    googleBot: {
      index: true,
    },
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ayodeji Atanda - Software Engineer Portfolio",
    description:
      "Software Engineer creating professional, scalable, and SEO-friendly websites with innovative web and blockchain solutions.",
    siteName: "Ayodeji Atanda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayodeji Atanda - Software Engineer Portfolio",
    description:
      "Software Engineer creating professional, scalable, and SEO-friendly websites with innovative web and blockchain solutions.",
    creator: "@dejiXice",
  },
};

import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${outfit.variable}  font-sans scroll-smooth`}>
      <head>
        {/* <meta name="theme-color" content="#FAF9F6" /> */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

      <body className="antialiased overflow-x-hidden bg-[#ebebf3]">
        <Providers>
          <SVGLoader />
          <NowPlaying />
          <NavBar />

          {/* Floating social links — fixed on left side, desktop only */}
          <div className="hidden xl:flex fixed left-6 bottom-0 z-30 flex-col items-center gap-5">
            <a
              href="https://github.com/deji-ice"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-slate-800 transition-colors duration-200"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/DEJIxICE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-slate-400 hover:text-slate-800 transition-colors duration-200"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ayodeji-atanda/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-slate-800 transition-colors duration-200"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:ayodejiatanda1@gmail.com"
              aria-label="Email"
              className="text-slate-400 hover:text-slate-800 transition-colors duration-200"
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            {/* Vertical line extending to bottom */}
            <div className="w-px h-24 bg-slate-300" />
          </div>

          <SmoothScrolling>
            <main className="relative z-10 xl:pl-14">{children}</main>
          </SmoothScrolling>
        </Providers>
      </body>
    </html>
  );
}
