// app/[locale]/page.tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { Preloader } from "@/components/common/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Lazy load sections with SSR disabled for better performance
const Hero = dynamic(() => import("@/components/sections/Hero").then(mod => ({ default: mod.Hero })), {
  ssr: false,
  loading: () => <SectionSkeleton type="hero" />
});
const Stats = dynamic(() => import("@/components/sections/Stats").then(mod => ({ default: mod.Stats })), {
  loading: () => <SectionSkeleton type="stats" />
});
const Services = dynamic(() => import("@/components/sections/Services").then(mod => ({ default: mod.Services })), {
  loading: () => <SectionSkeleton type="services" />
});
const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <SectionSkeleton type="projects" />
});
const About = dynamic(() => import("@/components/sections/About").then(mod => ({ default: mod.About })), {
  loading: () => <SectionSkeleton type="about" />
});
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs").then(mod => ({ default: mod.WhyChooseUs })), {
  loading: () => <SectionSkeleton type="whyChooseUs" />
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <SectionSkeleton type="testimonials" />
});
const CTA = dynamic(() => import("@/components/sections/CTA").then(mod => ({ default: mod.CTA })), {
  loading: () => <SectionSkeleton type="cta" />
});

// Section Skeleton Components for loading states
function SectionSkeleton({ type }: { type: string }) {
  return (
    <section className="py-16 md:py-32 px-4 md:px-8 lg:px-16 bg-black animate-pulse">
      <div className="max-w-content mx-auto">
        <div className="h-64 md:h-96 bg-g2 rounded-lg" />
      </div>
    </section>
  );
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePreloaderComplete = () => {
    setPreloaderComplete(true);
  };

  if (isLoading) {
    return null;
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${preloaderComplete ? "opacity-100" : "opacity-0"}`}>
        <Navbar loaded={preloaderComplete} />

        <main>
          <Suspense fallback={<SectionSkeleton type="hero" />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<SectionSkeleton type="stats" />}>
            <Stats />
          </Suspense>
          <Suspense fallback={<SectionSkeleton type="services" />}>
            <Services />
          </Suspense>
          <Suspense fallback={<SectionSkeleton type="projects" />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionSkeleton type="about" />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionSkeleton type="whyChooseUs" />}>
            <WhyChooseUs />
          </Suspense>
          <Suspense fallback={<SectionSkeleton type="testimonials" />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<SectionSkeleton type="cta" />}>
            <CTA />
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}
