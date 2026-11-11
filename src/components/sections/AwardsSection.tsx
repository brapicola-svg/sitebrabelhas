import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import goldMedal from '@/assets/awards/gold-medal.jpg';
import silverMedal from '@/assets/awards/silver-medal.jpg';
import { Trophy, Star, Award } from 'lucide-react';

export const AwardsSection = () => {
  const { t } = useLanguage();

  const awards = [
    {
      id: 'gold',
      image: goldMedal,
      position: '1º Lugar',
      product: 'awards.gold.product',
      event: 'awards.event',
      organization: 'FARGS-RS',
      date: '15/08/2025',
      type: 'gold',
      icon: Trophy
    },
    {
      id: 'silver', 
      image: silverMedal,
      position: '2º Lugar',
      product: 'awards.silver.product',
      event: 'awards.event',
      organization: 'FARGS-RS',
      date: '15/08/2025',
      type: 'silver',
      icon: Award
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
            <Star className="w-4 h-4 mr-2" />
            {t('awards.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
            {t('awards.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('awards.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((award) => {
            const IconComponent = award.icon;
            return (
              <Card 
                key={award.id} 
                className={`overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg group ${
                  award.type === 'gold' 
                    ? 'border-yellow-400/50 hover:border-yellow-400 bg-gradient-to-br from-yellow-50/50 to-amber-50/30 dark:from-yellow-900/20 dark:to-amber-900/10' 
                    : 'border-slate-400/50 hover:border-slate-400 bg-gradient-to-br from-slate-50/50 to-gray-50/30 dark:from-slate-900/20 dark:to-gray-900/10'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <img 
                        src={award.image} 
                        alt={`${award.position} - ${t(award.product)}`}
                        className="w-24 h-24 object-contain mx-auto transition-transform group-hover:scale-110"
                      />
                      <div className={`absolute -top-2 -right-2 p-2 rounded-full ${
                        award.type === 'gold' ? 'bg-yellow-400' : 'bg-slate-400'
                      }`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                    <Badge 
                      variant={award.type === 'gold' ? 'default' : 'secondary'}
                      className={`mb-2 ${
                        award.type === 'gold' 
                          ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black' 
                          : 'bg-gradient-to-r from-slate-400 to-slate-600 text-white'
                      }`}
                    >
                      {award.position}
                    </Badge>

                    <h3 className="font-semibold text-lg">
                      {t(award.product)}
                    </h3>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium">
                        {t(award.event)}
                      </p>
                      <p>
                        {award.organization}
                      </p>
                      <p>
                        {award.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            {t('awards.footer')}
          </p>
        </div>
      </div>
    </section>
  );
};