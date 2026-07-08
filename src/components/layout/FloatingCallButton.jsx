import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href="tel:+18058726302"
        className="relative flex items-center justify-center w-14 h-14 bg-amber hover:bg-amber-hover text-navy rounded-full shadow-lg shadow-amber/30 transition-all duration-200 hover:scale-[1.08] active:scale-[0.95]"
        aria-label="Call Heritage Bay"
      >
        <span className="absolute inset-0 rounded-full bg-amber animate-pulse-ring" />
        <Phone className="w-6 h-6 relative z-10" />
      </a>
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-navy text-white text-xs font-semibold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Call Heritage Bay
      </div>
    </div>
  );
}