import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { BrabelhasButton } from '@/components/ui/brabelhas-button';
import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useLanguage();

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/@BR_ABELHAS', '_blank');
  };

  const handleYouTubeASFClick = () => {
    window.open('https://www.youtube.com/@BRAbelhasASF', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/br_abelhas/?igsh=MWh5cXU5MWxweHR6Nw%3D%3D#', '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = t('contact.whatsapp.message');
    const phoneNumber = '555599562754';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@brabelhas.com.br';
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-background to-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Column */}
            <div>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/7a4234db-28fb-4073-9ae4-baaf2a83632c.png" 
                  alt="BRABELHAS Logo" 
                  className="h-24 w-auto mb-4"
                />
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t('footer.brand.description')}
                </p>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-3 mb-6">
                <BrabelhasButton
                  variant="instagram"
                  size="icon"
                  onClick={handleInstagramClick}
                  className="w-10 h-10"
                >
                  <Instagram className="h-5 w-5" />
                </BrabelhasButton>
                <BrabelhasButton
                  variant="youtube"
                  size="icon"
                  onClick={handleYouTubeClick}
                  className="w-10 h-10"
                >
                  <Youtube className="h-5 w-5" />
                </BrabelhasButton>
              </div>

              <LanguageToggle />
            </div>

            {/* YouTube Channels Column */}
            <div>
              <h3 className="font-bold font-playfair text-foreground mb-6 text-lg">
                {t('footer.channels')}
              </h3>
              <div className="space-y-4">
                <div 
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary cursor-pointer transition-colors group"
                  onClick={handleYouTubeClick}
                >
                  <Youtube className="h-5 w-5 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">{t('footer.youtube.main')}</p>
                    <p className="text-xs opacity-70">@BR_ABELHAS</p>
                  </div>
                </div>
                <div 
                  className="flex items-start gap-3 text-muted-foreground hover:text-amber-500 cursor-pointer transition-colors group"
                  onClick={handleYouTubeASFClick}
                >
                  <Youtube className="h-5 w-5 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">{t('footer.youtube.asf')}</p>
                    <p className="text-xs opacity-70">@BRAbelhasASF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-bold font-playfair text-foreground mb-6 text-lg">
                {t('nav.contact')}
              </h3>
              <div className="space-y-4">
                <div 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                  onClick={handleWhatsAppClick}
                >
                  <Phone className="h-5 w-5" />
                  <span>+55 55 99562754</span>
                </div>
                <div 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                  onClick={handleEmailClick}
                >
                  <Mail className="h-5 w-5" />
                  <span>contato@brabelhas.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Brasil</span>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="font-bold font-playfair text-foreground mb-6 text-lg">
                {t('footer.quick_links')}
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.about')}
                </button>
                <button 
                  onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.benefits')}
                </button>
                <button 
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.testimonials')}
                </button>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.gallery')}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} BRABELHAS. {t('footer.rights')}.
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                <Link to="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
                <div className="text-sm text-muted-foreground">
                  {t('footer.made_by').includes('cesarcostar@gmail.com') ? (
                    <>
                      {t('footer.made_by').split('–')[0]}–{' '}
                      <a 
                        href="mailto:cesarcostar@gmail.com" 
                        className="hover:text-primary transition-colors"
                      >
                        cesarcostar@gmail.com
                      </a>
                    </>
                  ) : (
                    t('footer.made_by')
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};