import React from 'react';
import { Phone, Mail, Clock, Shield } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import AppointmentBooking from '@/components/contact/AppointmentBooking';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

function ContactInfo() {
  return (
    <div className="flex flex-col gap-5 mb-10">
      <a href="tel:+18058726302" className="flex items-center gap-4 group">
        <div className="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center shrink-0">
          <Phone className="w-5 h-5 text-amber" />
        </div>
        <div>
          <p className="text-amber text-xl font-heading group-hover:text-amber-hover transition-colors">(805) 872-6302</p>
          <p className="text-white/40 text-xs">Primary</p>
        </div>
      </a>

      <a href="mailto:jmurray@heritagebayplumbing.com" className="flex items-center gap-4 group">
        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5 text-white/60" />
        </div>
        <p className="text-white/80 text-sm font-bold group-hover:text-amber transition-colors break-all">jmurray@heritagebayplumbing.com</p>
      </a>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
          <Clock className="w-5 h-5 text-white/60" />
        </div>
        <div>
          <p className="text-white/80 text-sm font-bold">Monday – Friday</p>
          <p className="text-white/50 text-sm">7:00 AM – 5:00 PM</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 bg-amber/10 rounded-lg border border-amber/20 mt-1">
        <Shield className="w-5 h-5 text-amber shrink-0" />
        <p className="text-amber text-sm font-semibold">UA Signatory · UA Local 403 · San Luis Obispo, CA</p>
      </div>
    </div>
  );
}

function SectionHeader({ label, title }) {
  return (
    <div className="mb-8">
      <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-2 block">{label}</span>
      <h2 className="text-2xl font-heading text-white">{title}</h2>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero
        title="Let's Talk About Your Project"
        subtitle="Call, email, or fill out the form — we respond fast."
        breadcrumb="Contact"
      />

      {/* Contact info strip */}
      <section className="bg-navy border-b border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactInfo />
        </div>
      </section>

      {/* Two-column: Quote + Calendar */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Request a Quote */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <SectionHeader label="Project Inquiry" title="Request a Quote" />
              <ContactForm />
            </div>

            {/* Book Appointment */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <SectionHeader label="Schedule a Visit" title="Book an Appointment" />
              <AppointmentBooking hideTitle />
            </div>

          </div>
        </div>
      </section>

      {/* Service Area Band */}
      <section className="bg-onyx py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            Serving Central & Southern California — Monterey to Simi Valley and everywhere in between.
          </p>
        </div>
      </section>
    </>
  );
}