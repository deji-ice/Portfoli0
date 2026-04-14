import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const WorkSection = dynamic(() => import("@/components/WorkSection"));
const ContactMe = dynamic(() => import("@/components/ContactMe"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-6 h-6 border-2 border-slate-900/20 border-t-slate-900 rounded-full animate-spin" />
  </div>
);

export default function Home() {
  return (
    <div className="font-outfit text-slate-900 overflow-x-hidden scroll-smooth max-w-[1300px] mx-auto">
      <Suspense fallback={<LoadingFallback />}>
        <section id="hero">
          <Hero />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <section id="about">
          <About />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <section id="works-section">
          <WorkSection />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <section id="contact">
          <ContactMe />
        </section>
      </Suspense>
    </div>
  );
}
