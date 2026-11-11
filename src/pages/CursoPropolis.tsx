import { Link } from 'react-router-dom';
import { HotmartButton } from '@/components/ui/hotmart-button';
import {
  Shield, Users, Monitor, Award, Headphones, Zap, ArrowLeft, BookOpen, Leaf, FlaskConical,
  Beaker, Store, Search, Bot, Clock, Star, GraduationCap, Lock
} from 'lucide-react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from '@/components/ui/accordion';

const HOTMART_URL = 'https://go.hotmart.com/U103372614X';

const modules = [
  { icon: BookOpen, title: 'Apresentação e Cronograma' },
  { icon: Clock, title: 'Histórico e origem do nome' },
  { icon: Star, title: 'Tipos de própolis e o que dá mais retorno' },
  { icon: Beaker, title: 'Própolis e Geoprópolis' },
  { icon: Leaf, title: 'Etapas da Coleta de Resina' },
  { icon: Search, title: 'Uso e ASF coletoras de Própolis' },
  { icon: Leaf, title: 'Plantas resiníferas: lista prática' },
  { icon: Store, title: 'Meliponário de Própolis' },
  { icon: FlaskConical, title: 'Coletores' },
  { icon: GraduationCap, title: 'Manejo e Preparo' },
  { icon: Leaf, title: 'Alimentação' },
  { icon: FlaskConical, title: 'Coleta' },
  { icon: Beaker, title: 'Extrato de Própolis' },
  { icon: Bot, title: 'Equipamento e I.A na produção' },
  { icon: Store, title: 'Como vender: preço, canais e escala' },
  { icon: Search, title: 'Avaliação de Enxames' },
];

const faqs = [
  {
    q: 'Para quem é esse produto?',
    a: 'Este curso é voltado para apicultores, meliponicultores iniciantes e avançados, produtores rurais e qualquer pessoa interessada em aprender sobre a produção profissional de própolis de abelhas sem ferrão.'
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

const CursoPropolis = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-900 to-emerald-950" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-green-400 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            <Zap className="h-4 w-4" />
            Oferta por tempo limitado
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Curso de Produção de Própolis
            <br />
            <span className="text-amber-400">Torne-se um Meliponicultor Profissional</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transforme a produção de própolis em uma atividade rentável, técnica e sustentável.
            Aprenda a partir do básico e alcance resultados reais e consistentes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <HotmartButton productUrl={HOTMART_URL} className="text-lg px-10 py-4 shadow-xl">
              COMPRAR AGORA — R$ 197,00
            </HotmartButton>
          </div>
          <div className="flex items-center justify-center gap-6 text-green-200 text-sm">
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
            <span className="font-bold text-2xl text-honey-900">16</span>
            <span>módulos completos</span>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-honey-900 mb-4">
            Módulos do Curso
          </h2>
          <p className="text-center text-honey-600 mb-12 max-w-2xl mx-auto">
            Conteúdo completo e didático para você dominar a produção de própolis de abelhas sem ferrão
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-honey-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-green-100 text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-honey-400 font-medium">Módulo {String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm font-semibold text-honey-900 leading-tight">{mod.title}</p>
                  </div>
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
            Sobre o Conteúdo
          </h2>
          <div className="bg-gradient-to-br from-honey-50 to-amber-50 rounded-2xl p-8 md:p-12 border border-honey-200 shadow-sm">
            <p className="text-lg text-honey-800 leading-relaxed mb-6">
              Com o <strong>Curso de Produção de Própolis de Abelhas Sem Ferrão</strong>, torne-se um Meliponicultor Profissional.
              Aprenda a partir do básico e alcance resultados reais e consistentes.
            </p>
            <p className="text-lg text-honey-800 leading-relaxed mb-6">
              Descubra as diferenças entre própolis e geoprópolis, aprenda a montar e manejar meliponários voltados
              para própolis, e saiba como preparar extratos alcoólicos, aquosos e em cápsulas.
            </p>
            <p className="text-lg text-honey-700 leading-relaxed">
              Adquira o curso agora e <strong>transforme o conhecimento empírico em resultados reais e consistentes</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Cards de Destaque */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Monitor, title: 'Curso 100% Online', desc: 'Assista de qualquer lugar, no seu ritmo. Plataforma HOTMART com acesso fácil e intuitivo.' },
              { icon: Award, title: 'Acesso por 1 Ano', desc: 'Você poderá acessar e estudar quantas vezes quiser durante 12 meses completos.' },
              { icon: Headphones, title: 'Suporte para Dúvidas', desc: 'Você nunca estará sozinho. Conte com suporte para tirar dúvidas sobre o conteúdo.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 text-center border-2 border-green-200 shadow-md hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 mb-4">
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
            <h3 className="text-2xl font-bold text-honey-900 mb-4">🐝 BR Abelhas</h3>
            <p className="text-honey-700 leading-relaxed mb-6">
              Os cursos BR Abelhas foram criados para quem deseja transformar a paixão pelas abelhas
              em conhecimento aplicado, produtividade e renda sustentável. Com a orientação de
              <strong> Victor Carrara</strong>, médico-veterinário, apicultor e meliponicultor com
              mais de 15 anos de experiência, você aprende técnicas modernas, manejo prático e
              estratégias usadas por profissionais que mais crescem no Brasil.
            </p>
            <p className="text-honey-700 leading-relaxed">
              Já são mais de <strong>1.800 alunos capacitados</strong>, com resultados reais no campo.
              O conteúdo é didático, atualizado e integra teoria, prática e vivência profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Preço e CTA */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-amber-400 font-semibold mb-2 text-lg">Esta oferta pode terminar em breve.</p>
          <p className="text-green-200 text-lg mb-4">por apenas</p>
          <div className="text-5xl md:text-7xl font-extrabold text-white mb-2">
            R$ 197<span className="text-3xl">,00</span>
          </div>
          <p className="text-green-300 mb-8">ou em até 12x no cartão</p>
          <HotmartButton productUrl={HOTMART_URL} className="text-xl px-12 py-5 shadow-2xl">
            COMPRAR AGORA
          </HotmartButton>
          <p className="text-green-300 text-sm mt-4">pagamento 100% seguro com acesso imediato</p>
        </div>
      </section>

      {/* Garantia e Segurança */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-8 bg-green-50 rounded-2xl border border-green-200">
              <div className="flex-shrink-0 p-3 bg-green-100 rounded-xl">
                <Shield className="h-8 w-8 text-green-700" />
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

export default CursoPropolis;
