import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroCarousel from './HeroCarousel';

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Full-screen image carousel (sits behind the translucent fixed navbar) */}
      <HeroCarousel />

      {/* Headline + CTA band */}
      <div className="bg-gradient-to-b from-navy to-onyx">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-xs sm:text-sm font-semibold text-amber tracking-wider uppercase">
              UA Signatory Contractor · 30 Years Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-5"
          >
            COMMERCIAL PLUMBING BUILT TO PERFORM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="text-xl sm:text-2xl font-heading text-amber mb-6"
          >
            Old-School Work Ethic. New-School Technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="text-base sm:text-lg text-white/70 font-body font-medium mb-10 leading-relaxed"
          >
            New Construction · Renovation · Multi-Family · Commercial · Industrial · Santa Cruz to Calabasas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-amber hover:bg-amber-hover text-navy font-bold text-sm px-8 py-4 rounded transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] tracking-wide uppercase"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+18058726302"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold text-sm px-8 py-4 rounded transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] tracking-wide uppercase"
            >
              <Phone className="w-4 h-4" />
              Call (805) 872-6302
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-white/40 text-xs sm:text-sm font-medium tracking-wide"
          >
            Proud UA Signatory Contractor · UA Local 403 · San Luis Obispo, CA
          </motion.p>
        </div>
      </div>
    </section>
  );
}
