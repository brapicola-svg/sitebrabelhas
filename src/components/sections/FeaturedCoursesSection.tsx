import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Flower, Wine } from 'lucide-react';

export const FeaturedCoursesSection = () => {
  const { t } = useLanguage();
  const courses = [
    { to: '/curso-propolis', icon: Flower, title: t('featured.propolis.title'), desc: t('featured.propolis.desc') },
    { to: '/curso-hidromel', icon: Wine, title: t('courses.mead.title'), desc: t('courses.mead.description') },
  ];
  return (
    <section className="py-16 bg-gradient-to-br from-honey-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-honey-900 mb-3">{t('featured.title')}</h2>
          <p className="text-honey-700">{t('featured.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {courses.map(({ to, icon: Icon, title, desc }) => (
            <Card key={to} className="border-amber-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <Icon className="h-8 w-8 text-amber-600 mb-3" />
                <h3 className="text-xl font-bold text-honey-900 mb-2">{title}</h3>
                <p className="text-sm text-honey-700 mb-4 flex-1">{desc}</p>
                <p className="text-2xl font-bold text-amber-700 mb-4">R$ 197,00</p>
                <Link to={to} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center justify-center gap-2 rounded-lg honey-gradient text-primary-foreground font-semibold py-2.5 px-4 shadow-md">
                  {t('featured.cta')} <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
