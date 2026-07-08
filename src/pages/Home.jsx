import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import AnimatedStats from '@/components/home/AnimatedStats';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyHeritageBay from '@/components/home/WhyHeritageBay';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import CTASection from '@/components/shared/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AnimatedStats />
      <ServicesPreview />
      <WhyHeritageBay />
      <ProjectShowcase />
      <CTASection />
    </>
  );
}