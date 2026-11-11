 import { Link } from 'react-router-dom';
 import { Calculator, ArrowRight, Beaker } from 'lucide-react';
 import { BrabelhasButton } from '@/components/ui/brabelhas-button';
 
 export const MeadCalculatorBanner = () => {
   return (
     <section className="py-16 bg-gradient-to-br from-amber-50 via-primary-light to-yellow-50">
       <div className="container mx-auto px-4">
         <div className="max-w-4xl mx-auto">
           <div className="bg-white/80 backdrop-blur-sm border-2 border-primary/40 rounded-2xl p-8 md:p-12 shadow-honey hover:scale-[1.02] transition-all duration-300">
             <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
               {/* Icon */}
               <div className="flex-shrink-0">
                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-full honey-gradient flex items-center justify-center shadow-lg">
                   <Calculator className="w-10 h-10 md:w-12 md:h-12 text-white" />
                 </div>
               </div>
               
               {/* Content */}
               <div className="flex-1 text-center md:text-left">
                 <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                   <Beaker className="w-5 h-5 text-primary" />
                   <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                     Ferramenta Gratuita
                   </span>
                 </div>
                 
                 <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                   Calculadora de Hidromel
                 </h3>
                 
                 <p className="text-muted-foreground mb-6 max-w-xl">
                   Calcule o teor alcoólico do seu hidromel com precisão! Nossa calculadora 
                   aplica correção automática de temperatura para resultados mais exatos.
                 </p>
                 
                 <Link to="/calculadora-hidromel" onClick={() => window.scrollTo(0, 0)}>
                   <BrabelhasButton variant="hero" size="lg" className="group">
                     Acessar Calculadora
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </BrabelhasButton>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };