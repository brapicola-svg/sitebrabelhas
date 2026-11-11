 import { Link } from 'react-router-dom';
 import { LanguageProvider } from '@/contexts/LanguageContext';
 import { HidromelCalculator } from '@/components/calculadora/HidromelCalculator';
 import { BrabelhasButton } from '@/components/ui/brabelhas-button';
 import { ArrowLeft, BookOpen, Thermometer, Wine, Users, AlertTriangle, GraduationCap } from 'lucide-react';
 
 const CalculadoraHidromelContent = () => {
   const benefits = [
     'Avaliar a qualidade da fermentação',
     'Identificar o perfil sensorial da bebida',
     'Padronizar receitas e reproduzir lotes',
     'Estimar tempo de maturação',
     'Classificar o estilo do hidromel',
     'Garantir segurança e conformidade em produção comercial',
   ];
 
   const audiences = [
     { icon: '🐝', text: 'Apicultores' },
     { icon: '🍯', text: 'Produtores de hidromel artesanal' },
     { icon: '🏭', text: 'Produtores comerciais' },
     { icon: '🎓', text: 'Estudantes e pesquisadores' },
     { icon: '🍷', text: 'Entusiastas da fermentação' },
   ];
 
   const steps = [
     'Informe a densidade inicial do mosto antes da fermentação',
     'Informe a densidade final após a fermentação',
     'Informe as temperaturas em que as medições foram realizadas',
     'Clique em calcular para obter o resultado estimado',
   ];
 
   return (
     <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
       {/* Header */}
       <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-elegant border-b border-border/50">
         <div className="container mx-auto px-4">
           <div className="flex items-center justify-between h-20">
             <Link to="/" className="flex items-center gap-3">
               <img 
                 src="/lovable-uploads/7a4234db-28fb-4073-9ae4-baaf2a83632c.png" 
                 alt="BRABELHAS Logo" 
                 className="h-16 w-auto"
               />
             </Link>
             <Link to="/">
               <BrabelhasButton variant="outline" size="sm">
                 <ArrowLeft className="w-4 h-4 mr-2" />
                 Voltar ao Início
               </BrabelhasButton>
             </Link>
           </div>
         </div>
       </header>
 
       {/* Main Content */}
       <main className="container mx-auto px-4 py-12">
         <div className="max-w-4xl mx-auto">
           {/* Hero Section */}
           <section className="text-center mb-16">
             <span className="inline-block text-4xl mb-4">🍯</span>
             <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
               Calculadora de Teor Alcoólico do Hidromel
             </h1>
             <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
               Produzir hidromel de qualidade exige controle, precisão e compreensão do processo fermentativo. 
               Uma das etapas mais importantes na produção é a medição da densidade do mosto antes e depois 
               da fermentação, pois é por meio dessas medições que se estima o teor alcoólico da bebida e 
               se avalia o desempenho da fermentação.
             </p>
           </section>
 
           {/* O que é densidade */}
           <section className="mb-16">
             <div className="bg-white rounded-2xl shadow-elegant p-8 border border-border/50">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 rounded-full bg-primary/10">
                   <BookOpen className="w-6 h-6 text-primary" />
                 </div>
                 <h2 className="text-2xl font-bold font-playfair text-foreground">
                   O que é a densidade do mosto?
                 </h2>
               </div>
               
               <p className="text-muted-foreground mb-6 leading-relaxed">
                 A densidade é uma medida que indica a quantidade de açúcares dissolvidos no líquido. 
                 No hidromel, ela permite acompanhar o quanto do açúcar do mel foi convertido em álcool pela levedura.
               </p>
 
               <p className="text-muted-foreground mb-6">
                 Durante a produção, são realizadas duas medições principais:
               </p>
 
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                   <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                     <span className="text-primary">🔹</span> Densidade Inicial (OG)
                   </h3>
                   <p className="text-sm text-muted-foreground">
                     <strong>Original Gravity</strong> - Representa a quantidade de açúcares presentes no mosto antes do 
                     início da fermentação. Quanto maior essa densidade, maior tende a ser o potencial alcoólico do hidromel.
                   </p>
                 </div>
                 <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20">
                   <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                     <span className="text-secondary">🔹</span> Densidade Final (FG)
                   </h3>
                   <p className="text-sm text-muted-foreground">
                     <strong>Final Gravity</strong> - É a medição realizada após a fermentação. Ela indica quanto açúcar 
                     restou na bebida e ajuda a determinar se o hidromel ficou mais seco ou mais doce.
                   </p>
                 </div>
               </div>
             </div>
           </section>
 
           {/* Temperatura */}
           <section className="mb-16">
             <div className="bg-white rounded-2xl shadow-elegant p-8 border border-border/50">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 rounded-full bg-secondary/10">
                   <Thermometer className="w-6 h-6 text-secondary" />
                 </div>
                 <h2 className="text-2xl font-bold font-playfair text-foreground">
                   Por que a temperatura influencia na medição?
                 </h2>
               </div>
               
               <p className="text-muted-foreground leading-relaxed">
                 Os densímetros utilizados na produção de hidromel geralmente são calibrados para medições 
                 em torno de <strong>20°C</strong>. Quando a leitura é feita em temperaturas mais elevadas, o líquido 
                 se torna menos denso, podendo gerar pequenas distorções nos valores medidos.
               </p>
               <p className="text-muted-foreground mt-4 leading-relaxed">
                 Por isso, ao utilizar a calculadora abaixo, a <strong>correção de temperatura é aplicada 
                 automaticamente</strong> para aumentar a precisão dos resultados.
               </p>
             </div>
           </section>
 
           {/* Calculadora */}
           <section className="mb-16">
             <HidromelCalculator />
           </section>
 
           {/* Como utilizar */}
           <section className="mb-16">
             <div className="bg-white rounded-2xl shadow-elegant p-8 border border-border/50">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 rounded-full bg-primary/10">
                   <GraduationCap className="w-6 h-6 text-primary" />
                 </div>
                 <h2 className="text-2xl font-bold font-playfair text-foreground">
                   Como utilizar a calculadora
                 </h2>
               </div>
               
               <p className="text-muted-foreground mb-6">
                 Para calcular o teor alcoólico estimado do seu hidromel:
               </p>
 
               <div className="space-y-3">
                 {steps.map((step, index) => (
                   <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                     <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                       {index + 1}
                     </span>
                     <p className="text-foreground pt-1">{step}</p>
                   </div>
                 ))}
               </div>
 
               <p className="text-muted-foreground mt-6 text-sm">
                 A calculadora aplicará automaticamente as correções necessárias e apresentará o teor 
                 alcoólico aproximado da bebida.
               </p>
             </div>
           </section>
 
           {/* Importância */}
           <section className="mb-16">
             <div className="bg-white rounded-2xl shadow-elegant p-8 border border-border/50">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 rounded-full bg-primary/10">
                   <Wine className="w-6 h-6 text-primary" />
                 </div>
                 <h2 className="text-2xl font-bold font-playfair text-foreground">
                   Por que calcular o teor alcoólico é importante?
                 </h2>
               </div>
               
               <p className="text-muted-foreground mb-6">
                 Conhecer o teor alcoólico do hidromel é fundamental para:
               </p>
 
               <div className="grid md:grid-cols-2 gap-3">
                 {benefits.map((benefit, index) => (
                   <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/5">
                     <span className="text-secondary">✔</span>
                     <span className="text-foreground">{benefit}</span>
                   </div>
                 ))}
               </div>
 
               <p className="text-muted-foreground mt-6 leading-relaxed">
                 Além disso, o controle da fermentação permite ao produtor entender o comportamento das 
                 leveduras, ajustar processos e aprimorar continuamente suas receitas.
               </p>
             </div>
           </section>
 
           {/* Aplicação prática */}
           <section className="mb-16">
             <div className="bg-white rounded-2xl shadow-elegant p-8 border border-border/50">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 rounded-full bg-secondary/10">
                   <Users className="w-6 h-6 text-secondary" />
                 </div>
                 <h2 className="text-2xl font-bold font-playfair text-foreground">
                   Aplicação prática para produtores
                 </h2>
               </div>
               
               <p className="text-muted-foreground mb-6">
                 Essa ferramenta foi desenvolvida para auxiliar:
               </p>
 
               <div className="flex flex-wrap gap-3">
                 {audiences.map((audience, index) => (
                   <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
                     <span>{audience.icon}</span>
                     <span className="text-foreground font-medium">{audience.text}</span>
                   </div>
                 ))}
               </div>
 
               <p className="text-muted-foreground mt-6 leading-relaxed">
                 Ela permite acompanhar a evolução da fermentação, melhorar o controle da produção e 
                 contribuir para a obtenção de hidroméis mais equilibrados e padronizados.
               </p>
             </div>
           </section>
 
           {/* Disclaimer */}
           <section className="mb-16">
            <div className="bg-muted rounded-2xl p-8 border border-border">
               <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                  <h2 className="text-xl font-bold font-playfair text-foreground mb-3">
                     📌 Importante lembrar
                   </h2>
                  <p className="text-muted-foreground leading-relaxed">
                     Os resultados apresentados são <strong>estimativas técnicas</strong> baseadas em cálculos 
                     amplamente utilizados na produção de bebidas fermentadas. Pequenas variações podem ocorrer 
                     devido a fatores como tipo de levedura, composição do mel e condições de fermentação.
                   </p>
                 </div>
               </div>
             </div>
           </section>
 
           {/* CTA */}
           <section className="text-center">
             <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-10 border border-primary/20">
               <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground mb-4">
                 Quer aprender mais sobre produção de hidromel?
               </h2>
               <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                 Conheça nosso curso completo de Hidromel e domine todas as técnicas de produção, 
                 desde a escolha do mel até a maturação perfeita.
               </p>
               <Link to="/#courses">
                <BrabelhasButton variant="primary" size="lg">
                   🍯 Conhecer Curso de Hidromel
                 </BrabelhasButton>
               </Link>
             </div>
           </section>
         </div>
       </main>
 
       {/* Footer Simples */}
       <footer className="bg-muted/50 border-t border-border/50 py-8 mt-16">
         <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
             <Link to="/" className="flex items-center gap-3">
               <img 
                 src="/lovable-uploads/7a4234db-28fb-4073-9ae4-baaf2a83632c.png" 
                 alt="BRABELHAS Logo" 
                 className="h-12 w-auto"
               />
             </Link>
             <p className="text-sm text-muted-foreground">
               © {new Date().getFullYear()} BRABELHAS. Todos os direitos reservados.
             </p>
             <Link to="/">
               <BrabelhasButton variant="ghost" size="sm">
                 Voltar ao Início
               </BrabelhasButton>
             </Link>
           </div>
         </div>
       </footer>
     </div>
   );
 };
 
 const CalculadoraHidromel = () => {
   return (
     <LanguageProvider>
       <CalculadoraHidromelContent />
     </LanguageProvider>
   );
 };
 
 export default CalculadoraHidromel;