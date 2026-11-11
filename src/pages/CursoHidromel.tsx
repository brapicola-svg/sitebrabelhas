import { Link } from 'react-router-dom';
import { HotmartButton } from '@/components/ui/hotmart-button';
import {
  Shield, Users, Monitor, Award, Headphones, Zap, ArrowLeft, Wine, Sparkles,
  FlaskConical, Beaker, Droplets, Gauge, Leaf, Package, Star, Lock,
  Gift, BookOpen, TrendingUp, Lightbulb, RotateCcw
} from 'lucide-react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from '@/components/ui/accordion';
import victorPhoto from '@/assets/victor-carrara.jpg';

const HOTMART_URL = 'https://go.hotmart.com/PLACEHOLDER';

const modules = [
  {
    icon: BookOpen,
    title: 'Módulo 1: Introdução e Equipamentos',
    lessons: ['Apresentação & Cronograma', 'História do Hidromel', 'Água', 'Mel', 'Equipamentos']
  },
  {
    icon: Sparkles,
    title: 'Módulo 2: Limpeza e Sanitização',
    lessons: ['Limpeza e Sanitização de equipamentos e ambiente']
  },
  {
    icon: FlaskConical,
    title: 'Módulo 3: Preparo do Mosto',
    lessons: ['Mosto', 'Panela', 'Preparo', 'Fermentador e Oxigenação']
  },
  {
    icon: Gauge,
    title: 'Módulo 4: Densidade e Nutrientes',
    lessons: ['Densidade 1', 'Densidade 2', 'Nutriente', 'Adição de Nutriente e Frutas']
  },
  {
    icon: Beaker,
    title: 'Módulo 5: O Coração da Produção',
    lessons: ['Leveduras', 'Trasfega', 'Ativação', 'Fermentação', 'Cálculo do Teor Alcoólico']
  },
  {
    icon: Wine,
    title: 'Módulo 6: Clarificação, Maturação e Especialidades',
    lessons: [
      'Clarificação',
      'Maturação e Melomel',
      'Espumante',
      'Espumante Natural',
      'Hidromel Blend APIS & ASF',
      'Hidromel ASF'
    ]
  },
  {
    icon: Package,
    title: 'Módulo 7: Envase, Possibilidades e Avaliação Sensorial',
    lessons: ['Envase', 'Possibilidades', 'Teste Sensorial']
  },
];

const audience = [
  { icon: Lightbulb, title: 'Iniciantes', desc: 'Que querem um hobby gratificante e desafiador.' },
  { icon: Leaf, title: 'Apicultores', desc: 'Que querem agregar valor ao mel produzido.' },
  { icon: TrendingUp, title: 'Empreendedores', desc: 'Em um nicho lucrativo e pouco explorado.' },
  { icon: RotateCcw, title: 'Quem já tentou', desc: 'E teve resultados frustrantes na produção.' },
];

const bonuses = [
  { icon: Award, title: 'Certificado de conclusão', desc: 'Receba seu certificado digital ao concluir o curso.' },
  { icon: Gift, title: 'Bônus exclusivos', desc: 'Receitas e materiais de apoio para acelerar seus resultados.' },
  { icon: Shield, title: 'Garantia de 7 dias', desc: 'Não gostou? Devolvemos 100% do seu investimento.' },
];

const faqs = [
  {
    q: 'Para quem é esse curso?',
    a: 'É para iniciantes que querem um hobby gratificante, apicultores que desejam agregar valor ao mel, empreendedores em um nicho lucrativo e qualquer pessoa que já tentou produzir hidromel e teve resultados frustrantes.'
  },
  {
    q: 'Como funciona o "Prazo de Garantia"?',
    a: 'Você tem 7 dias após a compra para solicitar o reembolso integral, sem perguntas. Basta entrar em contato pela plataforma Hotmart.'
  },
  {
    q: 'O que é e como funciona o Certificado de Conclusão digital?',
    a: 'Ao concluir todas as aulas, você recebe automaticamente um certificado digital emitido pela plataforma Hotmart, que pode ser baixado e compartilhado.'
  },
  {
    q: 'Como acessar o produto?',
    a: 'Após a confirmação do pagamento, você receberá um e-mail com login e senha para acessar o curso na plataforma Hotmart. O acesso é imediato para pagamentos via cartão ou Pix.'
  },
  {
    q: 'Como faço para comprar?',
    a: 'Clique no botão "COMPRAR AGORA" e você será redirecionado para a página de pagamento segura da Hotmart. Aceita cartão de crédito, boleto, Pix e PayPal.'
  },
];

const CursoHidromel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-honey-50 via-white to-honey-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-honey-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/7a4234db-28fb-4073-9ae4-baaf2a83632c.png" alt="BRABELHAS" className="h-20 w-auto" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-honey-700 hover:text-honey-900 transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Início
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-honey-800 to-amber-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-honey-400 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            <Zap className="h-4 w-4" />
            Oferta por tempo limitado
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Curso de Produção de Hidromel
            <br />
            <span className="text-amber-300">e Espumante Artesanal</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 font-semibold max-w-3xl mx-auto mb-6">
            🍯 Transforme Mel Puro na Bebida Mais Antiga do Mundo
          </p>
          <p className="text-base md:text-lg text-amber-50/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Já imaginou servir uma taça de hidromel feita com suas próprias mãos? O hidromel artesanal vive um
            <strong> BOOM no Brasil</strong>, e apicultores estão multiplicando o valor do mel em até <strong>10x</strong>.
            Você não precisa de equipamentos caros nem conhecimento avançado para começar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <HotmartButton productUrl={HOTMART_URL} className="text-lg px-10 py-4 shadow-xl">
              COMPRAR AGORA — R$ 197,00
            </HotmartButton>
          </div>
          <div className="flex items-center justify-center gap-6 text-amber-100 text-sm flex-wrap">
            <span className="flex items-center gap-1"><Shield className="h-4 w-4" /> Garantia 7 dias</span>
            <span className="flex items-center gap-1"><Lock className="h-4 w-4" /> Compra segura</span>
            <span className="flex items-center gap-1"><Zap className="h-4 w-4" /> Acesso imediato</span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-white border-b border-honey-100">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-8 text-honey-700">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-amber-500" />
            <span className="font-bold text-2xl text-honey-900">+1.800</span>
            <span>alunos capacitados</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-500" />
            <span className="font-bold text-2xl text-honey-900">15+</span>
            <span>anos de experiência</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-amber-500" />
            <span className="font-bold text-2xl text-honey-900">7</span>
            <span>módulos completos</span>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-honey-900 mb-4">
            🐝 O Que Você Vai Aprender
          </h2>
          <p className="text-center text-honey-600 mb-12 max-w-2xl mx-auto">
            7 módulos completos com aulas práticas e didáticas, do zero até a comercialização
          </p>
          <Accordion type="single" collapsible className="space-y-3">
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <AccordionItem
                  key={i}
                  value={`mod-${i}`}
                  className="bg-white rounded-xl border border-honey-200 px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-amber-100 text-amber-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-honey-900">{mod.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-14 space-y-2">
                      {mod.lessons.map((lesson, li) => (
                        <li key={li} className="flex items-center gap-2 text-honey-700">
                          <Droplets className="h-4 w-4 text-amber-500 flex-shrink-0" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-honey-900 mb-12">
            🎯 Para Quem É Este Curso
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audience.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-gradient-to-br from-honey-50 to-amber-50 rounded-2xl p-6 text-center border border-honey-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-amber-700 mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-honey-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-honey-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 bg-gradient-to-br from-honey-50 to-amber-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-honey-900 mb-12">
            🎁 Você Leva Também
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonuses.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 text-center border-2 border-amber-200 shadow-md hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-honey-900 mb-2">{item.title}</h3>
                  <p className="text-honey-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sobre o Conteúdo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-honey-900 mb-8 text-center">
            🍯 Por Que a BR Abelhas
          </h2>
          <div className="bg-gradient-to-br from-honey-50 to-amber-50 rounded-2xl p-8 md:p-12 border border-honey-200 shadow-sm">
            <p className="text-lg text-honey-800 leading-relaxed mb-6">
              <strong>Anos de prática condensados</strong> em um método simples e direto. Você não vai aprender
              teoria solta da internet — vai dominar os detalhes que separam um hidromel medíocre de um
              hidromel <strong>de dar orgulho</strong>.
            </p>
            <p className="text-lg text-honey-800 leading-relaxed">
              Aprenda a partir do básico, com técnicas modernas de manejo, produção e comercialização,
              e alcance resultados reais e consistentes na sua produção de hidromel artesanal.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Cards de Destaque */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-honey-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Monitor, title: 'Curso 100% Online', desc: 'Assista de qualquer lugar, no seu ritmo. Plataforma HOTMART com acesso fácil e intuitivo.' },
              { icon: Award, title: 'Acesso por 1 Ano', desc: 'Você poderá acessar e estudar quantas vezes quiser durante 12 meses completos.' },
              { icon: Headphones, title: 'Suporte para Dúvidas', desc: 'Você nunca estará sozinho. Conte com suporte para tirar dúvidas sobre o conteúdo.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 text-center border-2 border-amber-200 shadow-md hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-honey-900 mb-2">{item.title}</h3>
                  <p className="text-honey-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Acesso Imediato */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="bg-gradient-to-r from-amber-50 to-honey-50 rounded-2xl p-8 md:p-12 border border-amber-200">
            <Zap className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-honey-900 mb-4">Acesso Imediato</h2>
            <p className="text-lg text-honey-700">
              Seu login e senha serão enviados ao seu e-mail <strong>logo após o processamento da compra</strong>.
              Comece a estudar em minutos!
            </p>
          </div>
        </div>
      </section>

      {/* Conheça o Criador */}
      <section className="py-20 bg-gradient-to-br from-honey-50 to-amber-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-honey-900 mb-8 text-center">
            Conheça melhor quem criou o conteúdo
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-honey-200 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <img
                src={victorPhoto}
                alt="Victor Carrara"
                className="w-32 h-32 rounded-full object-cover border-4 border-amber-400 shadow-lg flex-shrink-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-honey-900 mb-2">Victor Carrara</h3>
                <p className="text-amber-700 font-semibold mb-2">Médico-veterinário, apicultor e meliponicultor</p>
                <p className="text-honey-600 text-sm">+15 anos de experiência · +1.800 alunos capacitados</p>
              </div>
            </div>
            <p className="text-honey-700 leading-relaxed mb-6">
              Os cursos <strong>BR Abelhas</strong> foram criados para quem deseja transformar a paixão pelas
              abelhas em conhecimento aplicado, produtividade e renda sustentável. Com a orientação de
              <strong> Victor Carrara</strong>, você aprende técnicas modernas, manejo prático e estratégias
              usadas por profissionais que mais crescem no Brasil.
            </p>
            <p className="text-honey-700 leading-relaxed">
              Já são mais de <strong>1.800 alunos capacitados</strong>, com resultados reais no campo.
              O conteúdo é didático, atualizado e integra teoria, prática e vivência profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Preço e CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-700 via-honey-800 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-honey-300 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-amber-300 font-semibold mb-2 text-lg">Esta oferta pode terminar em breve.</p>
          <p className="text-amber-100 text-lg mb-4">por apenas</p>
          <div className="text-5xl md:text-7xl font-extrabold text-white mb-2">
            R$ 197<span className="text-3xl">,00</span>
          </div>
          <p className="text-amber-200 mb-8">ou em até 12x no cartão</p>
          <HotmartButton productUrl={HOTMART_URL} className="text-xl px-12 py-5 shadow-2xl">
            👉 GARANTA SUA VAGA AGORA
          </HotmartButton>
          <p className="text-amber-200 text-sm mt-4">pagamento 100% seguro com acesso imediato</p>
        </div>
      </section>

      {/* Garantia e Segurança */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-8 bg-amber-50 rounded-2xl border border-amber-200">
              <div className="flex-shrink-0 p-3 bg-amber-100 rounded-xl">
                <Shield className="h-8 w-8 text-amber-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-honey-900 mb-2">Garantia de 7 Dias</h3>
                <p className="text-honey-700">
                  Seu dinheiro de volta sem perguntas até 7 dias após a compra.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-8 bg-blue-50 rounded-2xl border border-blue-200">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl">
                <Lock className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-honey-900 mb-2">Compra 100% Segura</h3>
                <p className="text-honey-700">
                  Seus dados pessoais e de pagamento são confidenciais. Aproveite o conteúdo em qualquer dispositivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-honey-50 to-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-honey-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl border border-honey-200 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-honey-900 font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-honey-700 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-honey-900 text-honey-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/lovable-uploads/7a4234db-28fb-4073-9ae4-baaf2a83632c.png" alt="BRABELHAS" className="h-12 w-auto" />
          <p className="text-sm">© {new Date().getFullYear()} BRABELHAS. Todos os direitos reservados.</p>
          <Link to="/" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" /> Voltar ao Início
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default CursoHidromel;
