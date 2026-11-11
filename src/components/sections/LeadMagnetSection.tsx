import { useLanguage } from '@/contexts/LanguageContext';
import { HotmartButton } from '@/components/ui/hotmart-button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Star, CheckCircle, Shield } from 'lucide-react';
import ebookCover from '@/assets/ebook-propolis-capa.png';

export const LeadMagnetSection = () => {
  const { t } = useLanguage();

  const ebookBenefits = [
    t('leadmagnet.benefit1'),
    t('leadmagnet.benefit2'),
    t('leadmagnet.benefit3')
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-elegant border-2 border-primary/20">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* E-book Preview */}
                <div className="relative bg-gradient-to-br from-amber-100 to-amber-50 p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <img 
                      src={ebookCover} 
                      alt="E-book Produção de Própolis - Abelhas Sem Ferrão" 
                      className="w-64 md:w-72 lg:w-80 h-auto mx-auto mb-6 drop-shadow-2xl"
                    />
                    <div className="flex items-center justify-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="max-w-md mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <span className="text-sm font-semibold text-primary uppercase tracking-wide">E-book</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground mb-4">
                      {t('leadmagnet.title')}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {t('leadmagnet.subtitle')}
                    </p>

                    {/* Benefits List */}
                    <ul className="space-y-3 mb-6">
                      {ebookBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-foreground">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="mb-6 text-center lg:text-left">
                      <span className="text-3xl font-bold text-primary">{t('leadmagnet.price')}</span>
                      <p className="text-sm text-muted-foreground">{t('leadmagnet.installments')}</p>
                    </div>

                    <HotmartButton
                      productUrl="https://pay.hotmart.com/X104328707P?checkoutMode=2"
                      className="w-full text-lg py-6"
                    >
                      {t('leadmagnet.cta')}
                    </HotmartButton>

                    {/* Guarantee Badge */}
                    <div className="flex items-center justify-center gap-2 text-sm text-green-600 mt-4">
                      <Shield className="h-4 w-4" />
                      <span>{t('leadmagnet.guarantee')}</span>
                    </div>

                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Pagamento seguro via Hotmart
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};