import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Play, Maximize2, ChevronLeft, ChevronRight, Pause } from 'lucide-react';

// Import online class images
import formaturaImage from '@/assets/online-classes/formatura-curso.jpg';
import aulaOnlineImage from '@/assets/online-classes/aula-online-turma.jpg';
import cursoPrpopolisImage from '@/assets/online-classes/curso-propolis.jpg';
import aulaAoVivoImage from '@/assets/online-classes/aula-ao-vivo-100-alunos.jpg';
import cursoMeliprodutosImage from '@/assets/online-classes/curso-meliprodutos.jpg';

// Import practical beekeeping images
import victorQuadroImage from '@/assets/practical-beekeeping/victor-quadro-abelhas.jpg';
import criancaColmeiaImage from '@/assets/practical-beekeeping/crianca-colmeia.jpg';
import victorCriancaSelfieImage from '@/assets/practical-beekeeping/victor-crianca-selfie.jpg';
import equipeEquipamentoImage from '@/assets/practical-beekeeping/equipe-equipamento.jpg';
import victorManejoQuadrosImage from '@/assets/practical-beekeeping/victor-manejo-quadros.jpg';
import turmaCursoPresencialImage from '@/assets/practical-beekeeping/turma-curso-presencial.jpg';
import alunosEquipamentosCampoImage from '@/assets/practical-beekeeping/alunos-equipamentos-campo.jpg';

export const GallerySection = () => {
  const { t } = useLanguage();
  const [currentOnlineIndex, setCurrentOnlineIndex] = useState(0);
  const [currentPracticalIndex, setCurrentPracticalIndex] = useState(0);
  const [isPausedOnline, setIsPausedOnline] = useState(false);
  const [isPausedPractical, setIsPausedPractical] = useState(false);

  // Online classes gallery items
  const onlineGalleryItems = [
    {
      image: formaturaImage,
      title: 'Formatura do Curso de Apicultura',
      description: 'Cerimônia de formatura com certificados',
      badge: 'Curso Concluído',
      students: '27 alunos',
      cta: 'Próxima Turma'
    },
    {
      image: aulaOnlineImage,
      title: 'Aula Online - Turma Completa',
      description: 'Aula ao vivo com participação ativa',
      badge: 'Aula ao Vivo',
      students: 'Turma completa',
      cta: 'Participar'
    },
    {
      image: cursoPrpopolisImage,
      title: 'Curso de Própolis',
      description: 'Especialização em produção de própolis',
      badge: 'Especialização',
      students: 'Curso específico',
      cta: 'Inscrever-se'
    },
    {
      image: aulaAoVivoImage,
      title: 'Aula ao Vivo - 100+ Participantes',
      description: 'Grande audiência em aula online',
      badge: 'Destaque',
      students: '100+ alunos',
      cta: 'Próxima Aula'
    },
    {
      image: cursoMeliprodutosImage,
      title: 'Curso de Meliprodutos',
      description: 'Diversificação na apicultura',
      badge: 'Avançado',
      students: 'Curso especializado',
      cta: 'Saber Mais'
    }
  ];

  // Practical beekeeping gallery items
  const practicalGalleryItems = [
    {
      image: victorQuadroImage,
      title: 'Victor com Quadros de Abelhas',
      description: 'Manejo prático dos quadros na colmeia',
      badge: 'Prática',
      students: 'Campo',
      cta: 'Aprender Técnica'
    },
    {
      image: criancaColmeiaImage,
      title: 'Educação Apícola Infantil',
      description: 'Ensinando apicultura para crianças',
      badge: 'Educativo',
      students: 'Todas as idades',
      cta: 'Curso Família'
    },
    {
      image: victorCriancaSelfieImage,
      title: 'Victor e Jovem Apicultor',
      description: 'Momentos especiais no aprendizado',
      badge: 'Inspiração',
      students: 'Experiência real',
      cta: 'Ser Apicultor'
    },
    {
      image: equipeEquipamentoImage,
      title: 'Equipe e Equipamentos',
      description: 'Preparação para trabalho no campo',
      badge: 'Equipamentos',
      students: 'Prática profissional',
      cta: 'Conhecer Setup'
    },
    {
      image: victorManejoQuadrosImage,
      title: 'Técnicas de Manejo Profissional',
      description: 'Victor demonstrando técnicas avançadas de manejo',
      badge: 'Avançado',
      students: 'Curso presencial',
      cta: 'Curso Presencial'
    },
    {
      image: turmaCursoPresencialImage,
      title: 'Turma de Curso Presencial',
      description: 'Alunos reunidos para aprendizado prático',
      badge: 'Presencial',
      students: 'Turma completa',
      cta: 'Próxima Turma'
    },
    {
      image: alunosEquipamentosCampoImage,
      title: 'Preparação para o Campo',
      description: 'Alunos equipados para trabalho seguro',
      badge: 'Segurança',
      students: 'Proteção total',
      cta: 'Curso de Segurança'
    }
  ];

  // Auto rotation for online gallery
  useEffect(() => {
    if (!isPausedOnline && onlineGalleryItems.length > 0) {
      const interval = setInterval(() => {
        setCurrentOnlineIndex(prev => 
          prev === onlineGalleryItems.length - 1 ? 0 : prev + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPausedOnline, onlineGalleryItems.length]);

  // Auto rotation for practical gallery
  useEffect(() => {
    if (!isPausedPractical && practicalGalleryItems.length > 0) {
      const interval = setInterval(() => {
        setCurrentPracticalIndex(prev => 
          prev === practicalGalleryItems.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPausedPractical, practicalGalleryItems.length]);

  const handleWhatsAppContact = (courseTitle: string) => {
    const message = `Olá! Tenho interesse no curso: ${courseTitle}. Gostaria de mais informações sobre a próxima turma.`;
    const whatsappUrl = `https://wa.me/555599562754?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navigateOnline = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentOnlineIndex(prev => 
        prev === 0 ? onlineGalleryItems.length - 1 : prev - 1
      );
    } else {
      setCurrentOnlineIndex(prev => 
        prev === onlineGalleryItems.length - 1 ? 0 : prev + 1
      );
    }
  };

  const navigatePractical = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentPracticalIndex(prev => 
        prev === 0 ? practicalGalleryItems.length - 1 : prev - 1
      );
    } else {
      setCurrentPracticalIndex(prev => 
        prev === practicalGalleryItems.length - 1 ? 0 : prev + 1
      );
    }
  };

  const GalleryCarousel = ({ 
    items, 
    currentIndex, 
    isPaused, 
    setIsPaused, 
    navigate, 
    title,
    subtitle 
  }: {
    items: any[];
    currentIndex: number;
    isPaused: boolean;
    setIsPaused: (paused: boolean) => void;
    navigate: (direction: 'prev' | 'next') => void;
    title: string;
    subtitle: string;
  }) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold font-playfair text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      
      <div 
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Image Display */}
        <div className="relative overflow-hidden rounded-lg shadow-elegant">
          <Dialog>
            <DialogTrigger asChild>
              <div className="group cursor-pointer">
                <img loading="lazy"
                  src={items[currentIndex].image}
                  alt={items[currentIndex].title}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-4">
                    <Badge className="bg-primary text-primary-foreground mb-2">
                      {items[currentIndex].badge}
                    </Badge>
                  </div>
                  <h4 className="font-bold font-playfair text-xl mb-2">
                    {items[currentIndex].title}
                  </h4>
                  <p className="text-sm text-white/90 mb-4">
                    {items[currentIndex].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-white/20 px-3 py-1 rounded">
                      {items[currentIndex].students}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppContact(items[currentIndex].title);
                      }}
                      className="text-sm bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded transition-colors"
                    >
                      {items[currentIndex].cta}
                    </button>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                    <Maximize2 className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Pause indicator */}
                {isPaused && (
                  <div className="absolute top-4 left-4 opacity-75">
                    <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                      <Pause className="h-5 w-5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="relative">
                <img loading="lazy"
                  src={items[currentIndex].image}
                  alt={items[currentIndex].title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-bold font-playfair text-foreground mb-2">
                    {items[currentIndex].title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {items[currentIndex].description}
                  </p>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">{items[currentIndex].badge}</Badge>
                    <span className="text-sm text-muted-foreground">{items[currentIndex].students}</span>
                    <button
                      onClick={() => handleWhatsAppContact(items[currentIndex].title)}
                      className="ml-auto bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded transition-colors"
                    >
                      {items[currentIndex].cta}
                    </button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => navigate('prev')}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={() => navigate('next')}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (items === onlineGalleryItems) {
                  setCurrentOnlineIndex(index);
                } else {
                  setCurrentPracticalIndex(index);
                }
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-primary'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-6">
              {t('gallery.title')}
            </h2>
            <div className="w-24 h-1 honey-gradient mx-auto rounded-full"></div>
          </div>

          {/* Online Classes Gallery */}
          <GalleryCarousel
            items={onlineGalleryItems}
            currentIndex={currentOnlineIndex}
            isPaused={isPausedOnline}
            setIsPaused={setIsPausedOnline}
            navigate={navigateOnline}
            title="Aulas Online"
            subtitle="Cursos e treinamentos virtuais para apicultores"
          />

          {/* Practical Beekeeping Gallery */}
          <GalleryCarousel
            items={practicalGalleryItems}
            currentIndex={currentPracticalIndex}
            isPaused={isPausedPractical}
            setIsPaused={setIsPausedPractical}
            navigate={navigatePractical}
            title="Apicultura Prática"
            subtitle="Experiências reais no campo com abelhas"
          />

          {/* Featured Video */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="overflow-hidden shadow-elegant border-2 border-primary/20">
              <CardContent className="p-0">
                <div className="relative">
                  <div 
                    className="aspect-video relative cursor-pointer group overflow-hidden rounded-lg"
                    onClick={() => window.open('https://www.youtube.com/watch?v=1w1weptEcio', '_blank')}
                  >
                    {/* YouTube Thumbnail */}
                    <img loading="lazy"
                      src="https://img.youtube.com/vi/1w1weptEcio/maxresdefault.jpg"
                      alt={t('gallery.video.title')}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-12 w-12 text-white ml-1" />
                      </div>
                      <h3 className="text-xl font-bold font-playfair text-white mb-2 px-4">
                        {t('gallery.video.title')}
                      </h3>
                      <p className="text-white/90 text-sm">
                        Assista no YouTube
                      </p>
                    </div>
                  </div>
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-red-600 ml-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gallery Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold font-playfair text-primary mb-2">1,800+</div>
              <p className="text-muted-foreground">Alunos Formados</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-playfair text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-playfair text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Horas de Aula</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-playfair text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
