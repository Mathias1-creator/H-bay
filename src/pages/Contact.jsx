import React from 'react';
import { Phone, Mail, Clock, Shield } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

function ContactCard({ icon: Icon, label, value, sublabel, href }) {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <a
      ref={ref}
      href={href}
      className={`group flex items-center gap-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber/20 group-hover:scale-105 transition-all duration-300">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-amber" />
      </div>
      <div className="min-w-0">
        <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1.5">{label}</p>
        <p className="text-white text-lg sm:text-xl font-heading leading-tight group-hover:text-amber transition-colors break-words">
          {value}
        </p>
        {sublabel && <p className="text-white/40 text-sm mt-1.5">{sublabel}</p>}
      </div>
    </a>
  );
}

export default function Contact() {
  const [infoRef, infoVisible] = useScrollAnimation(0.2);

  return (
    <>
      <PageHero
        title="Let's Talk About Your Project"
        subtitle="Tap to call or email — we respond fast."
        breadcrumb="Contact"
      />

      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <ContactCard
              icon={Phone}
              label="Call — Office"
              value="(805) 872-6302"
              sublabel="Office Line"
              href="tel:+18058726302"
            />
            <ContactCard
              icon={Phone}
              label="Call — Field"
              value="(805) 872-6378"
              sublabel="Field Line"
              href="tel:+18058726378"
            />
            <ContactCard
              icon={Mail}
              label="Email Us"
              value={<>jmurray@<wbr />heritagebayplumbing.com</>}
              href="mailto:jmurray@heritagebayplumbing.com"
            />
            <ContactCard
              icon={Mail}
              label="Email Us"
              value={<>amacri@<wbr />heritagebayplumbing.com</>}
              href="mailto:amacri@heritagebayplumbing.com"
            />
          </div>

          <div
            ref={infoRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-5 transition-all duration-700 ${
              infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-white/60" />
              </div>
              <div>
                <p className="text-white/80 text-sm font-bold">Monday – Friday</p>
                <p className="text-white/50 text-sm">7:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-amber/10 border border-amber/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-amber" />
              </div>
              <p className="text-amber text-sm font-semibold leading-snug">
                UA Signatory · UA Local 403 · Licensed, Insured & Bonded
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Band */}
      <section className="bg-onyx py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            Serving Central & Southern California — Santa Cruz to Calabasas and everywhere in between.
          </p>
        </div>
      </section>
    </>
  );
}
