import { useLanguage } from '@/contexts/LanguageContext';
import { BrabelhasButton } from '@/components/ui/brabelhas-button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import victorCarrara from '@/assets/victor-carrara.jpg';

export const AboutSection = () => {
  const { t, language } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = t('contact.whatsapp.message');
    const phoneNumber = '555599562754';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-6">
                  {t('about.title')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
                  {t('about.content')}
                </p>
                <BrabelhasButton 
                  variant="primary" 
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t('about.cta')}
                </BrabelhasButton>
              </div>
            </div>

            {/* Placeholder for Victor's image */}
            <div className="relative">
              <Card className="overflow-hidden shadow-elegant">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={victorCarrara} 
                      alt="Victor Carrara - Veterinário especialista em abelhas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-playfair text-foreground mb-6">
              {t('mission.title')}
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('mission.content')}
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16">
            <Card className="honey-gradient p-8 text-center shadow-honey">
              <h3 className="text-2xl md:text-3xl font-bold font-playfair text-white mb-4">
                {t('why.title')}
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                {t('why.content')}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};