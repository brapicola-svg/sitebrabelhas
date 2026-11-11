import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { BrabelhasButton } from '@/components/ui/brabelhas-button';

import { Badge } from '@/components/ui/badge';
import { BookOpen, Flower, Zap, Droplets, Sparkles, Users, Youtube } from 'lucide-react';
import asfLogo from '@/assets/asf-logo.jpg';



export const CoursesSection = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = (courseName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o curso: ${courseName}`);
    window.open(`https://wa.me/555599562754?text=${message}`, '_blank');
  };

  const handleYouTubeASFClick = () => {
    window.open('https://www.youtube.com/@BRAbelhasASF', '_blank');
  };

  const courseCategories = [
    {
      id: 'basic',
      icon: BookOpen,
      title: t('courses.categories.basic.title'),
      description: t('courses.categories.basic.description'),
      color: 'bg-honey-100/50 border-honey-200',
      courses: [
        t('courses.basic.productive'),
        t('courses.basic.productiveAdvanced')
      ]
    },
    {
      id: 'asf',
      icon: Flower,
      title: t('courses.categories.asf.title'),
      description: t('courses.categories.asf.description'),
      color: 'bg-honey-50/70 border-honey-200',
      courses: [
        t('courses.asf.practical'),
        t('courses.asf.practicalAdvanced'),
        t('courses.asf.propolis')
      ]
    },
    {
      id: 'specialized',
      icon: Zap,
      title: t('courses.categories.specialized.title'),
      description: t('courses.categories.specialized.description'),
      color: 'bg-amber-100/50 border-amber-200',
      courses: [
        t('courses.specialized.division'),
        t('courses.specialized.queens'),
        t('courses.specialized.wax')
      ]
    },
    {
      id: 'products',
      icon: Droplets,
      title: t('courses.categories.products.title'),
      description: t('courses.categories.products.description'),
      color: 'bg-amber-50/70 border-amber-200',
      courses: [
        t('courses.products.propolisApis'),
        t('courses.products.pollen'),
        t('courses.products.mead'),
        t('courses.products.apitoxin'),
        t('courses.products.honeyCompound'),
        t('courses.products.royalJelly'),
        t('courses.products.allProducts')
      ]
    },
    {
      id: 'special',
      icon: Sparkles,
      title: t('courses.categories.special.title'),
      description: t('courses.categories.special.description'),
      color: 'bg-honey-100/40 border-honey-300',
      courses: [
        t('courses.special.telluric'),
        t('courses.special.soap')
      ]
    },
    {
      id: 'personalized',
      icon: Users,
      title: t('courses.categories.personalized.title'),
      description: t('courses.categories.personalized.description'),
      color: 'bg-amber-100/40 border-amber-300',
      courses: [
        t('courses.personalized.mentoring'),
        t('courses.personalized.projects')
      ]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-honey-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-honey-900 mb-6">
            {t('courses.title')}
          </h2>
          <p className="text-xl text-honey-700 max-w-3xl mx-auto leading-relaxed">
            {t('courses.subtitle')}
          </p>
        </div>

        {/* Course Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className={`${category.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/70">
                      <IconComponent className="h-6 w-6 text-honey-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-honey-900">{category.title}</h3>
                      <p className="text-sm text-honey-600">{category.description}</p>
                    </div>
                  </div>

                  {/* Courses List */}
                  <div className="space-y-3 mb-6">
                    {category.courses.map((course, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs bg-white/50 border-honey-200 text-honey-700 hover:bg-honey-100">
                          {course}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  {/* ASF Propolis Course - Featured Card */}
                  {category.id === 'asf' && (
                    <div className="mb-4 p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 shadow-md">
                      <Badge className="mb-3 bg-green-500 text-white hover:bg-green-600 text-xs font-bold">
                        {t('courses.asf.propolis.badge')}
                      </Badge>
                      <h4 className="font-bold text-green-900 mb-2">
                        {t('courses.asf.propolis')}
                      </h4>
                      <p className="text-sm text-green-700 mb-4">
                        {t('courses.asf.propolis.description')}
                      </p>
                      <a
                        href="/curso-propolis"
                        className="inline-flex items-center justify-center w-full rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2.5 px-4 transition-all shadow-md text-sm"
                      >
                        {t('courses.asf.propolis.cta')}
                      </a>
                    </div>
                  )}

                  {/* Hidromel Course - Featured Card */}
                  {category.id === 'products' && (
                    <div className="mb-4 p-4 rounded-lg bg-gradient-to-br from-amber-50 to-honey-50 border-2 border-amber-300 shadow-md">
                      <Badge className="mb-3 bg-amber-500 text-white hover:bg-amber-600 text-xs font-bold">
                        {t('courses.mead.badge')}
                      </Badge>
                      <h4 className="font-bold text-amber-900 mb-2">
                        {t('courses.mead.title')}
                      </h4>
                      <p className="text-sm text-amber-700 mb-4">
                        {t('courses.mead.description')}
                      </p>
                      <a
                        href="/curso-hidromel"
                        className="inline-flex items-center justify-center w-full rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-2.5 px-4 transition-all shadow-md text-sm"
                      >
                        {t('courses.mead.cta')}
                      </a>
                    </div>
                  )}

                  {/* ASF Channel Featured Card */}
                  {category.id === 'asf' && (
                    <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200">
                      <div className="flex items-center gap-3 mb-3">
                        <img 
                          src={asfLogo} 
                          alt="BR Abelhas ASF" 
                          className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-md"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-amber-900">
                            {t('courses.categories.asf.channelCta')}
                          </p>
                          <p className="text-xs text-amber-700">@BRAbelhasASF</p>
                        </div>
                      </div>
                      <BrabelhasButton
                        variant="youtubeAsf"
                        size="sm"
                        className="w-full"
                        onClick={handleYouTubeASFClick}
                      >
                        <Youtube className="mr-2 h-4 w-4" />
                        {t('courses.categories.asf.channelCta')}
                      </BrabelhasButton>
                    </div>
                  )}

                  {/* CTA Button */}
                  <BrabelhasButton
                    variant="secondary"
                    className="w-full"
                    onClick={() => handleWhatsAppClick(category.title)}
                  >
                    {t('courses.cta')}
                  </BrabelhasButton>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-honey-200">
            <h3 className="text-2xl font-bold text-honey-900 mb-4">
              {t('courses.bottomCta.title')}
            </h3>
            <p className="text-honey-700 mb-6">
              {t('courses.bottomCta.description')}
            </p>
            <BrabelhasButton
              variant="primary"
              size="lg"
              onClick={() => handleWhatsAppClick('Consultoria Personalizada')}
            >
              {t('courses.bottomCta.button')}
            </BrabelhasButton>
          </div>
        </div>
      </div>
    </section>
  );
};