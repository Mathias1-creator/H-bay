import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { submitLead } from '@/lib/submitLead';

const SERVICE_OPTIONS = ['New Construction Plumbing', 'Renovation & Tenant Improvement', 'Industrial Plumbing'];
const TIME_SLOTS = ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function AppointmentBooking({ hideTitle = false }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const isToday = (day) => day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
  const isPast = (day) => new Date(viewYear, viewMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const isWeekend = (day) => {
    const dow = new Date(viewYear, viewMonth, day).getDay();
    return dow === 0 || dow === 6;
  };
  const isSelected = (day) => selectedDate && selectedDate.day === day && selectedDate.month === viewMonth && selectedDate.year === viewYear;

  const selectDay = (day) => {
    if (isPast(day) || isWeekend(day)) return;
    setSelectedDate({ day, month: viewMonth, year: viewYear });
    setSelectedTime('');
  };

  const formattedDate = selectedDate
    ? `${MONTHS[selectedDate.month]} ${selectedDate.day}, ${selectedDate.year}`
    : '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead({
        full_name: form.name,
        email: form.email,
        phone: form.phone,
        project_type: form.service || undefined,
        project_description: `APPOINTMENT REQUEST — Date: ${formattedDate} at ${selectedTime}. Service: ${form.service}. Notes: ${form.notes}`,
        preferred_contact: 'Phone',
        status: 'new',
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const inputCls = 'w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-amber transition-colors';
  const labelCls = 'block text-white/50 text-xs font-semibold uppercase tracking-wide mb-1.5';

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-amber" />
        </div>
        <h3 className="text-2xl font-heading text-white mb-3">Appointment Requested</h3>
        <p className="text-white/50 text-sm max-w-xs mb-2">
          We've received your request for <span className="text-amber font-semibold">{formattedDate} at {selectedTime}</span>.
        </p>
        <p className="text-white/40 text-sm">We'll confirm within 24 hours.</p>
        <button
          onClick={() => { setSubmitted(false); setSelectedDate(null); setSelectedTime(''); setForm({ name: '', email: '', phone: '', service: '', notes: '' }); }}
          className="mt-8 text-amber text-sm font-semibold hover:text-amber-hover transition-colors"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <div>
      {!hideTitle && <h2 className="text-2xl font-heading text-white mb-8">Book an Appointment</h2>}

      {/* Calendar */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-5">
          <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-4 h-4 text-white/60" />
          </button>
          <span className="text-white font-semibold text-sm">{MONTHS[viewMonth]} {viewYear}</span>
          <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/10 transition-colors">
            <ChevronRight className="w-4 h-4 text-white/60" />
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map(d => (
            <div key={d} className="text-center text-xs font-bold text-white/30 py-1">{d}</div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-y-1">
          {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const past = isPast(day);
            const weekend = isWeekend(day);
            const disabled = past || weekend;
            const selected = isSelected(day);
            const todayDay = isToday(day);
            return (
              <button
                key={day}
                onClick={() => selectDay(day)}
                disabled={disabled}
                className={`mx-auto w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-150 ${
                  selected ? 'bg-amber text-navy font-bold' :
                  todayDay && !disabled ? 'border border-amber text-amber' :
                  disabled ? 'text-white/15 cursor-not-allowed' :
                  'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        <p className="text-white/25 text-xs mt-4 text-center">Weekends unavailable · Mon–Fri only</p>
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div className="mb-6">
          <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-3">Available Times — {formattedDate}</p>
          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map(t => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`py-2.5 rounded-lg text-xs font-semibold border transition-all duration-150 ${
                  selectedTime === t
                    ? 'bg-amber border-amber text-navy'
                    : 'border-white/15 text-white/60 hover:border-white/40 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Form — only show when date + time selected */}
      {selectedDate && selectedTime && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-3 bg-amber/10 border border-amber/20 rounded-lg text-amber text-sm font-semibold text-center">
            {formattedDate} at {selectedTime}
          </div>

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

          <div>
            <label className={labelCls}>Phone</label>
            <input className={inputCls} placeholder="(805) 000-0000" value={form.phone} onChange={set('phone')} />
          </div>

          <div>
            <label className={labelCls}>Service Type</label>
            <select className={`${inputCls} appearance-none`} value={form.service} onChange={set('service')}>
              <option value="">Select a service…</option>
              {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className={labelCls}>Notes</label>
            <textarea rows={3} className={`${inputCls} resize-none`} placeholder="Anything we should know before your appointment…" value={form.notes} onChange={set('notes')} />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber hover:bg-amber-hover text-navy font-bold text-sm py-4 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] tracking-wide uppercase disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Booking…' : 'Book Now'}
          </button>
        </form>
      )}

      {selectedDate && !selectedTime && (
        <p className="text-white/30 text-sm text-center py-4">Select a time slot above to continue</p>
      )}
      {!selectedDate && (
        <p className="text-white/30 text-sm text-center py-4">Select a date above to see available times</p>
      )}
    </div>
  );
}