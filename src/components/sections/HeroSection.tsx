import { useLanguage } from '@/contexts/LanguageContext';
import { BrabelhasButton } from '@/components/ui/brabelhas-button';
import { Badge } from '@/components/ui/badge';
import { Instagram, MessageCircle, Youtube } from 'lucide-react';

export const HeroSection = () => {
  const { t, language } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = language === 'pt' 
      ? 'Olá! Quero informações sobre o próximo curso de apicultura.'
      : "Hi! I'd like information about the next beekeeping course.";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/555599562754?text=${encodedMessage}`, '_blank');
  };

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/@BR_ABELHAS', '_blank');
  };

  const handleYouTubeASFClick = () => {
    window.open('https://www.youtube.com/@BRAbelhasASF', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/br_abelhas/?igsh=MWh5cXU5MWxweHR6Nw%3D%3D#', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Decorative honey drip lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/40 to-transparent animate-fade-in-down stagger-3"></div>
      <div className="absolute top-0 right-1/3 w-px h-48 bg-gradient-to-b from-primary/30 to-transparent animate-fade-in-down stagger-4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Proof Badge */}
          <div className="mb-8 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
            <Badge className="honey-gradient shimmer-gradient animate-shimmer text-white px-6 py-2.5 text-sm font-semibold shadow-honey border-0 hover-lift cursor-default">
              {t('hero.proof')}
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair text-foreground mb-6 leading-tight opacity-0 animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up text-balance" style={{ animationDelay: '0.35s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.5s' }}>
              <BrabelhasButton 
                variant="hero" 
                size="xl"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto hover-lift hover-glow transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                {t('hero.cta.primary')}
              </BrabelhasButton>
            </div>
            
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                <BrabelhasButton 
                  variant="youtube" 
                  size="lg"
                  onClick={handleYouTubeClick}
                  className="hover-lift transition-all duration-300"
                >
                  <Youtube className="h-4 w-4" />
                  {t('hero.cta.youtube')}
                </BrabelhasButton>
              </div>
              
              <div className="opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.7s' }}>
                <BrabelhasButton 
                  variant="youtubeAsf" 
                  size="lg"
                  onClick={handleYouTubeASFClick}
                  className="hover-lift transition-all duration-300"
                >
                  <Youtube className="h-4 w-4" />
                  {t('hero.cta.youtube_asf')}
                </BrabelhasButton>
              </div>
              
              <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
                <BrabelhasButton 
                  variant="instagram" 
                  size="lg"
                  onClick={handleInstagramClick}
                  className="hover-lift transition-all duration-300"
                >
                  <Instagram className="h-4 w-4" />
                  {t('hero.cta.instagram')}
                </BrabelhasButton>
              </div>
            </div>
          </div>

          {/* Professional Credential */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <p className="text-sm text-muted-foreground font-medium">
              {t('hero.credential')}
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <BrabelhasButton
        variant="floating"
        size="floating-icon"
        onClick={handleWhatsAppClick}
        className="animate-glow hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="h-6 w-6" />
      </BrabelhasButton>

    </section>
  );
};
