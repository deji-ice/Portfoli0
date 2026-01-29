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
  twitter: {
    card: "summary_large_image",
    title: "Ayodeji Atanda - Software Engineer Portfolio",
    description:
      "Ayodeji Atanda - Software Engineer Portfolio: Creating professional, scalable, and SEO-friendly websites that establish a robust online presence for small businesses through innovative web and blockchain solutions.",
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
          <SmoothScrolling>
            <main className="relative">{children}</main>
          </SmoothScrolling>
        </Providers>
      </body>
    </html>
  );
}
