import { useLanguage } from '@/contexts/LanguageContext';
import { BrabelhasButton } from '@/components/ui/brabelhas-button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, TrendingUp, DollarSign, MessageCircle } from 'lucide-react';

export const BenefitsSection = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = t('contact.whatsapp.message');
    const phoneNumber = '555599562754';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const benefits = [
    {
      icon: BookOpen,
      title: t('benefits.updated'),
      description: 'Cursos sempre atualizados com as mais recentes práticas e técnicas da apicultura moderna.',
    },
    {
      icon: Users,
      title: t('benefits.practical'),
      description: 'Experiência prática real em campo, com manejo direto das colmeias e equipamentos.',
    },
    {
      icon: TrendingUp,
      title: t('benefits.productivity'),
      description: 'Métodos comprovados para aumentar significativamente sua produtividade.',
    },
    {
      icon: DollarSign,
      title: t('benefits.income'),
      description: 'Estratégias eficazes para transformar sua paixão pelas abelhas em renda sustentável.',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-6">
              {t('benefits.title')}
            </h2>
            <div className="w-24 h-1 honey-gradient mx-auto rounded-full"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-honey transition-all duration-300 hover:-translate-y-2 border-0 shadow-elegant"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold font-playfair text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold font-playfair text-foreground mb-4">
                Pronto para transformar sua paixão em sucesso?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Junte-se aos mais de 1.800 alunos que já descobriram como aumentar sua produtividade e gerar renda com apicultura.
              </p>
              <BrabelhasButton 
                variant="hero" 
                size="xl"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                {t('benefits.cta')}
              </BrabelhasButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};