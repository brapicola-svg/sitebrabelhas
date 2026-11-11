import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BrabelhasButton } from '@/components/ui/brabelhas-button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ChevronLeft, ChevronRight, Play, MessageCircle } from 'lucide-react';

export const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = {
    pt: [
      {
        name: "Ana Paula Silva",
        location: "São Paulo, SP",
        rating: 5,
        content: "O curso da BRABELHAS mudou completamente minha forma de ver a apicultura. Em 6 meses, triplicei minha produção de mel e agora tenho uma renda extra consistente. Victor é um professor excepcional!",
        course: "Curso de Apicultura Avançada"
      },
      {
        name: "João Marcos Santos",
        location: "Minas Gerais, MG",
        content: "Excelente conteúdo! Aprendi técnicas que não encontrava em lugar nenhum. Hoje tenho 50 colmeias e uma produção de 2 toneladas por ano. Recomendo para todos que querem prosperar na apicultura.",
        course: "Curso Completo de Meliponicultura",
        rating: 5
      },
      {
        name: "Camila Rodrigues",
        location: "Rio Grande do Sul, RS",
        content: "Transformei meu hobby em negócio rentável! O conhecimento do Victor é impressionante e a didática é perfeita. Consegui recuperar o investimento em menos de 1 ano.",
        course: "Curso de Apicultura para Iniciantes",
        rating: 5
      }
    ],
    en: [
      {
        name: "Ana Paula Silva",
        location: "São Paulo, SP",
        rating: 5,
        content: "The BRABELHAS course completely changed my approach to beekeeping. In 6 months, I tripled my honey production and now have a consistent extra income. Victor is an exceptional teacher!",
        course: "Advanced Beekeeping Course"
      },
      {
        name: "João Marcos Santos",
        location: "Minas Gerais, MG",
        content: "Excellent content! I learned techniques I couldn't find anywhere else. Today I have 50 hives and produce 2 tons per year. I recommend it to everyone who wants to prosper in beekeeping.",
        course: "Complete Stingless Beekeeping Course",
        rating: 5
      },
      {
        name: "Camila Rodrigues",
        location: "Rio Grande do Sul, RS",
        content: "I turned my hobby into a profitable business! Victor's knowledge is impressive and his teaching method is perfect. I recovered my investment in less than 1 year.",
        course: "Beekeeping Course for Beginners",
        rating: 5
      }
    ]
  };

  const currentTestimonials = testimonials[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % currentTestimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % currentTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
  };

  const handleWhatsAppClick = () => {
    const message = t('contact.whatsapp.message');
    const phoneNumber = '555599562754';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="honey-gradient text-white px-4 py-2 text-sm font-semibold shadow-honey mb-4">
              {t('hero.proof')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-6">
              {t('social.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('social.cta')}
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <Card className="shadow-elegant border-0">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                    "{currentTestimonials[currentTestimonial].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-lg">
                      {currentTestimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {currentTestimonials[currentTestimonial].location}
                    </p>
                    <Badge variant="outline" className="text-primary border-primary">
                      {currentTestimonials[currentTestimonial].course}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <BrabelhasButton
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </BrabelhasButton>
            <BrabelhasButton
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </BrabelhasButton>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {currentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Video Testimonial Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-playfair text-foreground mb-6">
              Depoimento em Vídeo
            </h3>
            <Card className="max-w-2xl mx-auto overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <video 
                  controls 
                  className="w-full h-full aspect-video rounded-lg"
                  preload="none"
                >
                  <source src="/videos/video_vitor.mp4" type="video/mp4" />
                  <p className="text-muted-foreground p-4">
                    Seu navegador não suporta a reprodução de vídeo.
                  </p>
                </video>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <BrabelhasButton 
              variant="hero" 
              size="xl"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Quero ser o próximo sucesso
            </BrabelhasButton>
          </div>
        </div>
      </div>
    </section>
  );
};