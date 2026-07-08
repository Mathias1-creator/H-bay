import React, { useState } from 'react';
import { Phone, Mail, Clock, Shield, MapPin } from 'lucide-react';
import { submitLead } from '@/lib/submitLead';

const TABS = [
  { id: 'contact', label: 'Contact Us', submit: 'Send Message' },
  { id: 'services', label: 'Explore Services', submit: 'Get Service Info' },
  { id: 'quote', label: 'Request a Quote', submit: 'Request My Quote' },
  { id: 'appointment', label: 'Book Appointment', submit: 'Book Now' },
];

const TIME_OPTIONS = ['Morning (7–11am)', 'Afternoon (12–4pm)', 'Evening (4–6pm)'];

const SERVICE_OPTIONS = ['New Construction Plumbing', 'Renovation & Tenant Improvement', 'Industrial Plumbing'];

const EMPTY_FORM = {
  name: '', email: '', phone: '', message: '',
  service: '', notes: '',
  projectType: '', sqft: '', startDate: '',
  appointmentService: '', preferredDate: '', preferredTime: '',
};

export default function GetInTouch() {
  const [activeTab, setActiveTab] = useState('contact');
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const setVal = (field, val) => setForm((f) => ({ ...f, [field]: val }));

  const activeTabConfig = TABS.find((t) => t.id === activeTab);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead({
        full_name: form.name,
        email: form.email,
        phone: form.phone,
        project_description: [
          activeTab === 'contact' ? form.message : '',
          activeTab === 'services' ? `Service interest: ${form.service}. ${form.message}` : '',
          activeTab === 'quote' ? `Project Type: ${form.projectType}. ~${form.sqft} sq ft. Start: ${form.startDate}. Notes: ${form.notes}` : '',
          activeTab === 'appointment' ? `Service: ${form.appointmentService}. Date: ${form.preferredDate}. Time: ${form.preferredTime}. Notes: ${form.notes}` : '',
        ].filter(Boolean).join(''),
        project_type: form.projectType || form.service || form.appointmentService || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const inputCls = 'w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-amber transition-colors';
  const labelCls = 'block text-white/60 text-xs font-semibold uppercase tracking-wide mb-1.5';

  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1 h-5 bg-amber rounded-full shrink-0" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white">
            Let's Start Your Project
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT — Contact info + map */}
          <div className="order-2 lg:order-1 flex flex-col gap-8">
            <div className="space-y-5">
              <a href="tel:+18058726302" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-amber/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-amber text-xl font-heading group-hover:text-amber-hover transition-colors">(805) 872-6302</p>
                  <p className="text-white/30 text-xs">Primary Line</p>
                </div>
              </a>

              <a href="mailto:jmurray@heritagebayplumbing.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white/50" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-bold group-hover:text-amber transition-colors break-all">jmurray@heritagebayplumbing.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white/50" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-bold">Monday – Friday</p>
                  <p className="text-white/40 text-sm">7:00 AM – 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white/50" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-bold">San Luis Obispo, CA</p>
                  <p className="text-white/40 text-sm">Serving Central & Southern California</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-white/10 h-[280px] lg:flex-1">
              <iframe
                title="Heritage Bay Plumbing Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52937.07838912725!2d-120.70380!3d35.28275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ec940fa7b07f73%3A0x4e1f5a3e3a4b2d1d!2sSan%20Luis%20Obispo%2C%20CA!5e0!3m2!1sen!2sus!4v1680000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-2 p-4 bg-amber/10 rounded-lg border border-amber/20">
              <Shield className="w-4 h-4 text-amber shrink-0" />
              <p className="text-amber text-xs font-semibold">Licensed & Insured · UA Local 403 · Response within 24 hours</p>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="order-1 lg:order-2">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-amber text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-heading text-white mb-3">Message Received</h3>
                <p className="text-white/50 text-sm max-w-xs">We'll be in touch within 24 hours. Thank you for reaching out to Heritage Bay Plumbing.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); }}
                  className="mt-8 text-amber text-sm font-semibold hover:text-amber-hover transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                {/* Tab pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-amber text-navy'
                          : 'bg-white/8 text-white/50 hover:bg-white/15 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Common fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Name *</label>
                      <input required className={inputCls} placeholder="Your full name" value={form.name} onChange={set('name')} />
                    </div>
                    <div>
                      <label className={labelCls}>Email *</label>
                      <input required type="email" className={inputCls} placeholder="you@company.com" value={form.email} onChange={set('email')} />
                    </div>
                  </div>

                  {/* Phone — all tabs except services */}
                  {activeTab !== 'services' && (
                    <div>
                      <label className={labelCls}>Phone</label>
                      <input className={inputCls} placeholder="(805) 000-0000" value={form.phone} onChange={set('phone')} />
                    </div>
                  )}

                  {/* Contact Us */}
                  {activeTab === 'contact' && (
                    <div>
                      <label className={labelCls}>Message *</label>
                      <textarea required rows={4} className={`${inputCls} resize-none`} placeholder="Tell us about your project…" value={form.message} onChange={set('message')} />
                    </div>
                  )}

                  {/* Explore Services */}
                  {activeTab === 'services' && (
                    <>
                      <div>
                        <label className={labelCls}>Service of Interest *</label>
                        <select required className={`${inputCls} appearance-none`} value={form.service} onChange={set('service')}>
                          <option value="">Select a service…</option>
                          {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Message</label>
                        <textarea rows={4} className={`${inputCls} resize-none`} placeholder="What would you like to know?" value={form.message} onChange={set('message')} />
                      </div>
                    </>
                  )}

                  {/* Request a Quote */}
                  {activeTab === 'quote' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Project Type *</label>
                          <select required className={`${inputCls} appearance-none`} value={form.projectType} onChange={set('projectType')}>
                            <option value="">Select type…</option>
                            {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className={labelCls}>Approx. Square Footage</label>
                          <input className={inputCls} placeholder="e.g. 5,000 sq ft" value={form.sqft} onChange={set('sqft')} />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Target Start Date</label>
                        <input type="date" className={inputCls} value={form.startDate} onChange={set('startDate')} />
                      </div>
                      <div>
                        <label className={labelCls}>Additional Notes</label>
                        <textarea rows={3} className={`${inputCls} resize-none`} placeholder="Any other details…" value={form.notes} onChange={set('notes')} />
                      </div>
                    </>
                  )}

                  {/* Book Appointment */}
                  {activeTab === 'appointment' && (
                    <>
                      <div>
                        <label className={labelCls}>Service Type *</label>
                        <select required className={`${inputCls} appearance-none`} value={form.appointmentService} onChange={set('appointmentService')}>
                          <option value="">Select a service…</option>
                          {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Preferred Date *</label>
                        <input required type="date" className={inputCls} value={form.preferredDate} onChange={set('preferredDate')} />
                      </div>
                      <div>
                        <label className={labelCls}>Preferred Time</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {TIME_OPTIONS.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setVal('preferredTime', t)}
                              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                                form.preferredTime === t
                                  ? 'bg-amber border-amber text-navy'
                                  : 'border-white/20 text-white/50 hover:border-white/40 hover:text-white'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Notes</label>
                        <textarea rows={3} className={`${inputCls} resize-none`} placeholder="Anything we should know before your appointment…" value={form.notes} onChange={set('notes')} />
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber hover:bg-amber-hover text-navy font-bold text-sm py-4 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] tracking-wide uppercase disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                  >
                    {loading ? 'Sending…' : activeTabConfig.submit}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}