import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {
  ArrowLeft,
  Shield,
  Database,
  Smartphone,
  Globe,
  Scale,
  Users,
  RefreshCw,
  Mail,
  Info,
  Target,
  Lock,
  Cookie,
  ExternalLink,
} from 'lucide-react';

const PoliticaPrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Bullet = () => (
    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
  );

  const sections = [
    {
      icon: Info,
      title: '1. Quem Somos',
      content: (
        <div className="space-y-3 text-muted-foreground">
          <p>
            A <strong>BRABELHAS</strong> é uma marca brasileira dedicada à apicultura, meliponicultura,
            produção de hidromel e à formação de apicultores por meio de cursos, conteúdos digitais e o
            aplicativo <strong>BrabelhasApp</strong>.
          </p>
          <p>
            Comprometemo-nos com a transparência no tratamento de dados pessoais dos nossos visitantes,
            alunos e leads, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>
          <p>
            <strong>Contato oficial:</strong> WhatsApp +55 55 99562754 | Instagram{' '}
            <a
              href="https://www.instagram.com/brabelhas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @brabelhas
            </a>
          </p>
        </div>
      ),
    },
    {
      icon: Scale,
      title: '2. Aplicação desta Política',
      content: (
        <>
          <p className="text-muted-foreground mb-4">Esta Política de Privacidade aplica-se a:</p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Bullet />
              <span>O site institucional <strong>brabelhas.com.br</strong>;</span>
            </li>
            <li className="flex items-start gap-2">
              <Bullet />
              <span>O aplicativo móvel <strong>BrabelhasApp</strong> (Android e iOS);</span>
            </li>
            <li className="flex items-start gap-2">
              <Bullet />
              <span>
                Os <strong>formulários de captação de leads</strong> hospedados nas plataformas Meta
                (Facebook e Instagram Lead Ads), utilizados pela Brabelhas para inscrição em cursos e eventos.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: Globe,
      title: '3. Dados Coletados pelo Site',
      content: (
        <div className="space-y-3 text-muted-foreground">
          <p>
            O site <strong>brabelhas.com.br não coleta</strong> qualquer dado pessoal de seus visitantes.
          </p>
          <p>Não utilizamos:</p>
          <ul className="space-y-2">
            {[
              'Formulários de cadastro ou contato no site',
              'Ferramentas de analytics (Google Analytics, Meta Pixel, etc.)',
              'Cookies de rastreamento ou de publicidade',
              'SDKs externos de marketing',
              'APIs de coleta comportamental',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Bullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            A navegação no site é <strong>100% anônima</strong>. Eventuais botões de contato apenas
            redirecionam o usuário para canais externos (WhatsApp, Instagram, YouTube e Hotmart).
          </p>
        </div>
      ),
    },
    {
      icon: Smartphone,
      title: '4. Dados Coletados pelo Aplicativo BrabelhasApp',
      content: (
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              O BrabelhasApp opera <strong>integralmente offline</strong>. Todas as informações inseridas
              (registros de colmeias, fotos, cálculos) ficam exclusivamente no dispositivo do usuário.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Nenhum dado é enviado a servidores externos. A Brabelhas não possui acesso remoto a essas
              informações.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Permissões de câmera, galeria e armazenamento são utilizadas apenas para funcionalidades
              locais do aplicativo.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>A desinstalação do aplicativo remove permanentemente todos os dados.</span>
          </li>
        </ul>
      ),
    },
    {
      icon: Database,
      title: '5. Dados Coletados por Formulários da Meta (Instagram/Facebook)',
      content: (
        <div className="space-y-3 text-muted-foreground">
          <p>
            Quando o usuário preenche um formulário de inscrição em curso ou evento divulgado pela
            Brabelhas no <strong>Instagram</strong> ou <strong>Facebook</strong> (Meta Lead Ads), os
            seguintes dados podem ser coletados:
          </p>
          <ul className="space-y-2">
            {[
              'Nome completo',
              'E-mail',
              'Telefone / WhatsApp',
              'Cidade / Estado (quando solicitado)',
              'Respostas a perguntas específicas do formulário',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Bullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            <strong>Importante:</strong> esses dados são coletados e armazenados pela infraestrutura da
            <strong> Meta Platforms, Inc.</strong> e ficam sujeitos também à{' '}
            <a
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Política de Privacidade do Facebook/Instagram
            </a>
            . A Brabelhas apenas <strong>acessa</strong> esses dados para a finalidade de contato.
          </p>
        </div>
      ),
    },
    {
      icon: Target,
      title: '6. Finalidade do Tratamento',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Os dados coletados pelos formulários da Meta são utilizados exclusivamente para:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Bullet />
              <span>Entrar em contato sobre o curso ou evento solicitado pelo usuário;</span>
            </li>
            <li className="flex items-start gap-2">
              <Bullet />
              <span>Confirmar inscrição e enviar informações relacionadas (datas, valores, links de acesso);</span>
            </li>
            <li className="flex items-start gap-2">
              <Bullet />
              <span>Enviar materiais e conteúdos solicitados pelo próprio interessado;</span>
            </li>
            <li className="flex items-start gap-2">
              <Bullet />
              <span>Atendimento e suporte ao aluno.</span>
            </li>
          </ul>
          <p className="text-muted-foreground mt-4">
            <strong>Não utilizamos</strong> os dados para publicidade de terceiros, e <strong>não vendemos</strong>{' '}
            informações pessoais sob nenhuma hipótese.
          </p>
        </>
      ),
    },
    {
      icon: Users,
      title: '7. Compartilhamento de Dados',
      content: (
        <div className="space-y-3 text-muted-foreground">
          <p>
            A Brabelhas <strong>não vende, aluga ou compartilha</strong> dados pessoais com terceiros para
            fins comerciais.
          </p>
          <p>
            Os dados podem ser tratados em ferramentas de comunicação (WhatsApp Business, e-mail) apenas
            para responder ao próprio titular. Pagamentos de cursos são processados pela plataforma{' '}
            <strong>Hotmart</strong>, que possui política de privacidade própria.
          </p>
        </div>
      ),
    },
    {
      icon: Shield,
      title: '8. Direitos do Titular (LGPD)',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Conforme a Lei nº 13.709/2018, você tem direito a:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            {[
              'Confirmar a existência de tratamento dos seus dados',
              'Acessar os dados que possuímos sobre você',
              'Corrigir dados incompletos, inexatos ou desatualizados',
              'Solicitar a anonimização, bloqueio ou eliminação de dados',
              'Solicitar a portabilidade dos seus dados',
              'Revogar o consentimento a qualquer momento',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Bullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-4">
            Para exercer qualquer um destes direitos, entre em contato pelo WhatsApp{' '}
            <strong>+55 55 99562754</strong>.
          </p>
        </>
      ),
    },
    {
      icon: RefreshCw,
      title: '9. Retenção e Exclusão de Dados',
      content: (
        <p className="text-muted-foreground">
          Os dados de leads coletados via formulários da Meta são mantidos pelo tempo necessário para
          cumprir a finalidade de contato e atendimento, ou até que o titular solicite sua exclusão. A
          exclusão pode ser solicitada a qualquer momento pelo nosso WhatsApp oficial.
        </p>
      ),
    },
    {
      icon: Lock,
      title: '10. Segurança',
      content: (
        <p className="text-muted-foreground">
          Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados aos quais temos
          acesso. Os dados coletados em formulários hospedados na Meta estão protegidos pela infraestrutura
          de segurança da própria plataforma.
        </p>
      ),
    },
    {
      icon: Cookie,
      title: '11. Cookies',
      content: (
        <p className="text-muted-foreground">
          O site <strong>brabelhas.com.br não utiliza</strong> cookies de rastreamento, de analytics ou de
          publicidade. Apenas cookies estritamente técnicos (quando necessários para o funcionamento do
          site) podem ser usados, sem identificar o usuário.
        </p>
      ),
    },
    {
      icon: ExternalLink,
      title: '12. Sites e Plataformas de Terceiros',
      content: (
        <p className="text-muted-foreground">
          <strong>ATENÇÃO:</strong> ao se inscrever em formulários hospedados em plataformas de terceiros
          (como Meta/Instagram/Facebook, Hotmart, YouTube), ou ao clicar em links que direcionam para
          esses sites, qualquer informação inserida fora do nosso site estará sujeita também às políticas
          de privacidade dessas plataformas. Recomendamos a leitura dos termos de cada uma delas.
        </p>
      ),
    },
    {
      icon: RefreshCw,
      title: '13. Alterações desta Política',
      content: (
        <p className="text-muted-foreground">
          Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nas
          práticas da Brabelhas ou na legislação aplicável. Recomendamos a consulta periódica desta página.
        </p>
      ),
    },
    {
      icon: Mail,
      title: '14. Contato',
      content: (
        <div className="space-y-3 text-muted-foreground">
          <p>Para dúvidas, solicitações ou exercício de direitos previstos na LGPD:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Bullet />
              <span><strong>WhatsApp:</strong> +55 55 99562754</span>
            </li>
            <li className="flex items-start gap-2">
              <Bullet />
              <span>
                <strong>Instagram:</strong>{' '}
                <a
                  href="https://www.instagram.com/brabelhas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @brabelhas
                </a>
              </span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/7a4234db-28fb-4073-9ae4-baaf2a83632c.png"
              alt="BRABELHAS Logo"
              className="h-12 w-auto"
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Início
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-3">
              Política de Privacidade
            </h1>
            <p className="text-lg text-primary font-semibold mb-4">BRABELHAS</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Esta política descreve como a Brabelhas trata dados pessoais em seu site, no aplicativo
              BrabelhasApp e nos formulários de captação de leads hospedados nas plataformas Meta
              (Instagram e Facebook).
            </p>
            <p className="text-sm text-muted-foreground/80 mt-4">
              Última atualização: abril de 2026
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="bg-card rounded-2xl shadow-elegant p-8 border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold font-playfair text-foreground">{section.title}</h2>
                  </div>
                  {section.content}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/7a4234db-28fb-4073-9ae4-baaf2a83632c.png"
                alt="BRABELHAS Logo"
                className="h-8 w-auto"
              />
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} BRABELHAS. Todos os direitos reservados.
              </span>
            </div>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Voltar ao Início
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PoliticaPrivacidade;
