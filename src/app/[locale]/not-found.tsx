// app/[locale]/not-found.tsx
"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar loaded={true} />
      <main className="min-h-screen bg-black flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-display text-[20vw] md:text-[15rem] text-g4 uppercase leading-none">
            404
          </h1>
          <h2 className="font-display text-display-md md:text-display-lg text-white uppercase mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="font-body text-body-lg text-g5 mb-8 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak dapat ditemukan.
          </p>
          <Link
            href="/id"
            className="inline-block px-8 py-3 bg-white text-black font-mono text-label-md uppercase tracking-wider hover:bg-g6 transition-colors duration-300"
          >
            Kembali ke Beranda
          </Link>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
