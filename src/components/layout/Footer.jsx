import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export default function Footer() {
  return (
    <footer className="bg-onyx text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <div className="mb-4">
              <img
                src={IMAGES.logoColor}
                alt="Heritage Bay Plumbing"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Old-School Work Ethic. New-School Technology.
            </p>
            <p className="text-amber text-sm font-semibold">
              UA Signatory Contractor · UA Local 403
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber mb-6">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="block text-white/60 hover:text-amber transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+18058726302" className="flex items-center gap-3 text-white/60 hover:text-amber transition-colors text-sm">
                <Phone className="w-4 h-4 text-amber shrink-0" />
                (805) 872-6302 <span className="text-white/40">· Office</span>
              </a>
              <a href="tel:+18058726378" className="flex items-center gap-3 text-white/60 hover:text-amber transition-colors text-sm">
                <Phone className="w-4 h-4 text-amber shrink-0" />
                (805) 872-6378 <span className="text-white/40">· Field</span>
              </a>
              <a href="mailto:jmurray@heritagebayplumbing.com" className="flex items-center gap-3 text-white/60 hover:text-amber transition-colors text-sm break-all">
                <Mail className="w-4 h-4 text-amber shrink-0" />
                jmurray@heritagebayplumbing.com
              </a>
              <a href="mailto:amacri@heritagebayplumbing.com" className="flex items-center gap-3 text-white/60 hover:text-amber transition-colors text-sm break-all">
                <Mail className="w-4 h-4 text-amber shrink-0" />
                amacri@heritagebayplumbing.com
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-amber shrink-0" />
                Mon–Fri 7:00 AM – 5:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-white/40 text-xs">
            © 2026 Heritage Bay Plumbing Inc. All Rights Reserved. · Licensed · Insured · Bonded · UA Signatory Contractor
          </p>
        </div>
      </div>
    </footer>
  );
}