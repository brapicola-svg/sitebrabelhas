import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/sections/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedCoursesSection } from '@/components/sections/FeaturedCoursesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { AwardsSection } from '@/components/sections/AwardsSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { CoursesSection } from '@/components/sections/CoursesSection';
 import { MeadCalculatorBanner } from '@/components/sections/MeadCalculatorBanner';
import { LeadMagnetSection } from '@/components/sections/LeadMagnetSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { Footer } from '@/components/sections/Footer';

export const BrabelhasLanding = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-sans">
        <Navigation />
        <main>
          <HeroSection />
          <FeaturedCoursesSection />
          <AboutSection />
          <AwardsSection />
          <BenefitsSection />
          <CoursesSection />
           <MeadCalculatorBanner />
          <LeadMagnetSection />
          <TestimonialsSection />
          <GallerySection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};