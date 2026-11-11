import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { BrabelhasButton } from '@/components/ui/brabelhas-button';
import { Menu, X, Calculator } from 'lucide-react';

export const Navigation = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'nav.home', id: 'hero' },
    { key: 'nav.about', id: 'about' },
    { key: 'nav.benefits', id: 'benefits' },
    { key: 'nav.courses', id: 'courses' },
    { key: 'nav.testimonials', id: 'testimonials' },
    { key: 'nav.gallery', id: 'gallery' },
    { key: 'nav.contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7a4234db-28fb-4073-9ae4-baaf2a83632c.png" 
              alt="BRABELHAS Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-smooth font-medium relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            {[['/curso-propolis','nav.propolis'],['/curso-hidromel','nav.mead'],['/calculadora-hidromel','nav.calculator']].map(([to,k]) => (
              <Link key={to} to={to} onClick={() => window.scrollTo(0, 0)} className="text-primary font-semibold hover:opacity-80 transition-smooth">
                {t(k)}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <LanguageToggle />
            <BrabelhasButton
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </BrabelhasButton>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-smooth"
                >
                  {t(item.key)}
                </button>
              ))}
              
              {/* Separador */}
              <div className="border-t border-border my-2"></div>
              
              {/* Link da Calculadora */}
              <Link
                to="/calculadora-hidromel"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="flex items-center gap-3 px-3 py-3 text-primary font-semibold hover:bg-primary/10 rounded-md transition-smooth"
              >
                <Calculator className="w-5 h-5" />
                <span>{t('nav.calculator')}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};