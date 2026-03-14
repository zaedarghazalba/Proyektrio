// app/[locale]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Preloader } from "@/components/common/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

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
          <Hero />
          <Stats />
          <Services />
          <Projects />
          <About />
          <WhyChooseUs />
          <Testimonials />
          <CTA />
        </main>

        <Footer />
      </div>
    </div>
  );
}
