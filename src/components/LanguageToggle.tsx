import { useLanguage } from '@/contexts/LanguageContext';
import { BrabelhasButton } from '@/components/ui/brabelhas-button';
import { Globe } from 'lucide-react';
export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <BrabelhasButton
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'pt' ? 'EN' : 'PT'}
    </BrabelhasButton>
  );
};