import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, breadcrumb, bgImage }) {
  return (
    <section className="relative pt-24 md:pt-28 overflow-hidden">
      <div className="absolute inset-0">
        {bgImage ? (
          <>
            <img src={bgImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/85" />
          </>
        ) : (
          <div className="w-full h-full bg-navy" />
        )}
        {/* Subtle amber gradient on left */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-amber/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-white/40 text-sm mb-6"
          >
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white/70">{breadcrumb}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}