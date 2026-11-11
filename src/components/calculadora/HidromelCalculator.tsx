 import { useState } from 'react';
 import { Input } from '@/components/ui/input';
 import { Label } from '@/components/ui/label';
 import { BrabelhasButton } from '@/components/ui/brabelhas-button';
 import { Calculator, Thermometer, Beaker, AlertCircle, CheckCircle } from 'lucide-react';
 import { useToast } from '@/hooks/use-toast';
 
 interface CalculatorResult {
   abv: number;
   ogCorrected: number;
   fgCorrected: number;
 }
 
 // Correção de temperatura (calibrado para 20°C)
 function correcaoTemp(densidade: number, temp: number): number {
   if (temp <= 20) return densidade;
   const correcao = (temp - 20) * 0.0001;
   return densidade + correcao;
 }
 
 // Cálculo do ABV
 function calcularABV(ogCorrigido: number, fgCorrigido: number): number {
   return (ogCorrigido - fgCorrigido) * 131.25;
 }
 
 export const HidromelCalculator = () => {
   const { toast } = useToast();
   const [og, setOg] = useState('');
   const [fg, setFg] = useState('');
   const [tempOg, setTempOg] = useState('');
   const [tempFg, setTempFg] = useState('');
   const [result, setResult] = useState<CalculatorResult | null>(null);
   const [errors, setErrors] = useState<string[]>([]);
 
   const validateInputs = (): boolean => {
     const newErrors: string[] = [];
     const ogValue = parseFloat(og);
     const fgValue = parseFloat(fg);
     const tempOgValue = parseFloat(tempOg);
     const tempFgValue = parseFloat(tempFg);
 
     if (!og || isNaN(ogValue)) {
       newErrors.push('Densidade inicial (OG) é obrigatória');
     } else if (ogValue < 1.000 || ogValue > 1.200) {
       newErrors.push('OG deve estar entre 1.000 e 1.200');
     }
 
     if (!fg || isNaN(fgValue)) {
       newErrors.push('Densidade final (FG) é obrigatória');
     } else if (fgValue < 0.990 || fgValue > 1.100) {
       newErrors.push('FG deve estar entre 0.990 e 1.100');
     }
 
     if (!tempOg || isNaN(tempOgValue)) {
       newErrors.push('Temperatura OG é obrigatória');
     } else if (tempOgValue < 0 || tempOgValue > 50) {
       newErrors.push('Temperatura OG deve estar entre 0°C e 50°C');
     }
 
     if (!tempFg || isNaN(tempFgValue)) {
       newErrors.push('Temperatura FG é obrigatória');
     } else if (tempFgValue < 0 || tempFgValue > 50) {
       newErrors.push('Temperatura FG deve estar entre 0°C e 50°C');
     }
 
     if (newErrors.length === 0 && fgValue >= ogValue) {
       newErrors.push('A densidade final (FG) deve ser menor que a inicial (OG)');
     }
 
     setErrors(newErrors);
     return newErrors.length === 0;
   };
 
   const handleCalculate = () => {
     if (!validateInputs()) {
       toast({
         title: "Erro de validação",
         description: "Por favor, corrija os campos indicados.",
         variant: "destructive",
       });
       return;
     }
 
     const ogValue = parseFloat(og);
     const fgValue = parseFloat(fg);
     const tempOgValue = parseFloat(tempOg);
     const tempFgValue = parseFloat(tempFg);
 
     const ogCorrected = correcaoTemp(ogValue, tempOgValue);
     const fgCorrected = correcaoTemp(fgValue, tempFgValue);
     const abv = calcularABV(ogCorrected, fgCorrected);
 
     setResult({
       abv,
       ogCorrected,
       fgCorrected,
     });
 
     toast({
       title: "Cálculo realizado!",
       description: `Teor alcoólico estimado: ${abv.toFixed(2)}% ABV`,
     });
   };
 
   const handleReset = () => {
     setOg('');
     setFg('');
     setTempOg('');
     setTempFg('');
     setResult(null);
     setErrors([]);
   };
 
   return (
     <div className="w-full max-w-2xl mx-auto">
       <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 rounded-2xl p-8 shadow-elegant border border-primary/20">
         {/* Header */}
         <div className="flex items-center gap-3 mb-6">
           <div className="p-3 rounded-full bg-primary/20">
             <Beaker className="w-6 h-6 text-primary" />
           </div>
           <div>
             <h3 className="text-xl font-bold font-playfair text-foreground">
               Calculadora Interativa
             </h3>
             <p className="text-sm text-muted-foreground">
               Calcule o teor alcoólico do seu hidromel
             </p>
           </div>
         </div>
 
         {/* Input Fields */}
         <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* OG */}
            <div className="space-y-2 order-1">
             <Label htmlFor="og" className="flex items-center gap-2 text-foreground font-medium">
               <span className="text-primary">🔹</span> Densidade Inicial (OG)
             </Label>
             <Input
               id="og"
               type="number"
               step="0.001"
               placeholder="Ex: 1.065"
               value={og}
               onChange={(e) => setOg(e.target.value)}
               className="bg-white border-primary/30 focus:border-primary"
             />
             <p className="text-xs text-muted-foreground">Original Gravity - antes da fermentação</p>
           </div>
 
            {/* FG */}
            <div className="space-y-2 order-3 md:order-2">
             <Label htmlFor="fg" className="flex items-center gap-2 text-foreground font-medium">
               <span className="text-primary">🔹</span> Densidade Final (FG)
             </Label>
             <Input
               id="fg"
               type="number"
               step="0.001"
               placeholder="Ex: 1.000"
               value={fg}
               onChange={(e) => setFg(e.target.value)}
               className="bg-white border-primary/30 focus:border-primary"
             />
             <p className="text-xs text-muted-foreground">Final Gravity - após a fermentação</p>
           </div>
 
            {/* Temp OG */}
            <div className="space-y-2 order-2 md:order-3">
             <Label htmlFor="tempOg" className="flex items-center gap-2 text-foreground font-medium">
                <Thermometer className="w-4 h-4 text-secondary" /> Temperatura Inicial OG (°C)
             </Label>
             <Input
               id="tempOg"
               type="number"
               placeholder="Ex: 30"
               value={tempOg}
               onChange={(e) => setTempOg(e.target.value)}
               className="bg-white border-primary/30 focus:border-primary"
             />
             <p className="text-xs text-muted-foreground">Temperatura na medição inicial</p>
           </div>
 
            {/* Temp FG */}
            <div className="space-y-2 order-4">
             <Label htmlFor="tempFg" className="flex items-center gap-2 text-foreground font-medium">
                <Thermometer className="w-4 h-4 text-secondary" /> Temperatura Final FG (°C)
             </Label>
             <Input
               id="tempFg"
               type="number"
               placeholder="Ex: 28"
               value={tempFg}
               onChange={(e) => setTempFg(e.target.value)}
               className="bg-white border-primary/30 focus:border-primary"
             />
             <p className="text-xs text-muted-foreground">Temperatura na medição final</p>
           </div>
         </div>
 
         {/* Errors */}
         {errors.length > 0 && (
           <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
             <div className="flex items-start gap-2">
               <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
               <div>
                 <p className="font-medium text-destructive">Corrija os seguintes erros:</p>
                 <ul className="mt-1 list-disc list-inside text-sm text-destructive/80">
                   {errors.map((error, index) => (
                     <li key={index}>{error}</li>
                   ))}
                 </ul>
               </div>
             </div>
           </div>
         )}
 
         {/* Buttons */}
         <div className="flex gap-4 mb-6">
           <BrabelhasButton
            variant="primary"
             size="lg"
             onClick={handleCalculate}
             className="flex-1"
           >
             <Calculator className="w-5 h-5 mr-2" />
             Calcular
           </BrabelhasButton>
           <BrabelhasButton
             variant="outline"
             size="lg"
             onClick={handleReset}
           >
             Limpar
           </BrabelhasButton>
         </div>
 
         {/* Result */}
         {result && (
           <div className="animate-fade-in p-6 rounded-xl bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30">
             <div className="flex items-center gap-2 mb-4">
               <CheckCircle className="w-6 h-6 text-secondary" />
               <h4 className="font-bold text-lg text-foreground">Resultado</h4>
             </div>
             
             <div className="text-center mb-4">
               <p className="text-sm text-muted-foreground mb-1">Teor Alcoólico Estimado</p>
               <p className="text-4xl font-bold text-primary font-playfair">
                 {result.abv.toFixed(2)}% <span className="text-lg">ABV</span>
               </p>
             </div>
 
             <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
               <div className="text-center">
                 <p className="text-xs text-muted-foreground">OG Corrigido</p>
                 <p className="font-semibold text-foreground">{result.ogCorrected.toFixed(4)}</p>
               </div>
               <div className="text-center">
                 <p className="text-xs text-muted-foreground">FG Corrigido</p>
                 <p className="font-semibold text-foreground">{result.fgCorrected.toFixed(4)}</p>
               </div>
             </div>
           </div>
         )}
       </div>
     </div>
   );
 };