import React, { useState } from 'react';
import { submitLead } from '@/lib/submitLead';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: '', company_name: '', phone: '', email: '',
    project_type: '', project_location: '', project_description: '',
    preferred_contact: 'Phone', project_timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitLead(formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-10 text-center">
        <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-amber" />
        </div>
        <h3 className="text-2xl font-heading text-white mb-3">Request Sent!</h3>
        <p className="text-white/60">We typically respond within one business day.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label className="text-white/80 text-sm mb-1.5 block">Full Name *</Label>
          <Input required value={formData.full_name} onChange={e => handleChange('full_name', e.target.value)} className="bg-white/10 border-white/20 text-white placeholder:text-white/30" placeholder="John Smith" />
        </div>
        <div>
          <Label className="text-white/80 text-sm mb-1.5 block">Company Name</Label>
          <Input value={formData.company_name} onChange={e => handleChange('company_name', e.target.value)} className="bg-white/10 border-white/20 text-white placeholder:text-white/30" placeholder="ABC Construction" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label className="text-white/80 text-sm mb-1.5 block">Phone Number *</Label>
          <Input required type="tel" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} className="bg-white/10 border-white/20 text-white placeholder:text-white/30" placeholder="(805) 555-0000" />
        </div>
        <div>
          <Label className="text-white/80 text-sm mb-1.5 block">Email Address *</Label>
          <Input required type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} className="bg-white/10 border-white/20 text-white placeholder:text-white/30" placeholder="john@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label className="text-white/80 text-sm mb-1.5 block">Project Type</Label>
          <Select value={formData.project_type} onValueChange={v => handleChange('project_type', v)}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {['New Construction', 'Renovation & Tenant Improvement', 'Industrial', 'Multi-Family', 'Not Sure'].map(t => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-white/80 text-sm mb-1.5 block">Project Timeline</Label>
          <Select value={formData.project_timeline} onValueChange={v => handleChange('project_timeline', v)}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              {['Immediate', 'Within 3 Months', '3-6 Months', 'Planning Phase'].map(t => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label className="text-white/80 text-sm mb-1.5 block">Project Location</Label>
        <Input value={formData.project_location} onChange={e => handleChange('project_location', e.target.value)} className="bg-white/10 border-white/20 text-white placeholder:text-white/30" placeholder="City, CA" />
      </div>

      <div>
        <Label className="text-white/80 text-sm mb-1.5 block">Project Description</Label>
        <Textarea
          value={formData.project_description}
          onChange={e => handleChange('project_description', e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/30 min-h-[120px]"
          placeholder="Tell us about your project scope, timeline, and any specific requirements..."
        />
      </div>

      <div>
        <Label className="text-white/80 text-sm mb-2 block">Preferred Contact Method</Label>
        <RadioGroup value={formData.preferred_contact} onValueChange={v => handleChange('preferred_contact', v)} className="flex gap-6">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="Phone" id="phone" className="border-white/40 text-amber" />
            <Label htmlFor="phone" className="text-white/70 text-sm cursor-pointer">Phone</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="Email" id="email" className="border-white/40 text-amber" />
            <Label htmlFor="email" className="text-white/70 text-sm cursor-pointer">Email</Label>
          </div>
        </RadioGroup>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber hover:bg-amber-hover text-navy font-bold text-sm py-4 rounded transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] tracking-wide uppercase flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : 'Send My Request'}
      </button>
      <p className="text-white/30 text-xs text-center">We typically respond within one business day.</p>
    </form>
  );
}