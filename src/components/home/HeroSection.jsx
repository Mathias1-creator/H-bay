import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/images';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Commercial plumbing construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-xs sm:text-sm font-semibold text-amber tracking-wider uppercase">
              UA Signatory Contractor · 30 Years Experience · Launching May 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading text-white leading-[1.1] mb-6"
          >
            COMMERCIAL PLUMBING BUILT TO PERFORM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/80 font-body font-medium mb-10 leading-relaxed"
          >
            New Construction · Renovation · Multi-Family · Commercial · Industrial · Monterey to Simi Valley
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
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
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white/40 text-xs sm:text-sm font-medium tracking-wide"
          >
            Proud UA Signatory Contractor · UA Local 403 · San Luis Obispo, CA
          </motion.p>
        </div>
      </div>
    </section>
  );
}