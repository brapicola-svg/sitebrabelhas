import React, { useEffect } from 'react';
import { BrabelhasButton } from './brabelhas-button';
import { ShoppingCart } from 'lucide-react';

interface HotmartButtonProps {
  productUrl: string;
  children: React.ReactNode;
  className?: string;
}

// Load Hotmart scripts once
let hotmartLoaded = false;

const loadHotmartScript = () => {
  if (hotmartLoaded) return;
  
  const script = document.createElement('script');
  script.src = 'https://static.hotmart.com/checkout/widget.min.js';
  script.type = 'text/javascript';
  document.head.appendChild(script);

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
  document.head.appendChild(link);

  hotmartLoaded = true;
};

export const HotmartButton: React.FC<HotmartButtonProps> = ({
  productUrl,
  children,
  className = ''
}) => {
  useEffect(() => {
    loadHotmartScript();
  }, []);

  const handleClick = () => {
    window.open(productUrl, '_blank');
  };

  return (
    <BrabelhasButton
      variant="primary"
      className={`bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 ${className}`}
      onClick={handleClick}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      {children}
    </BrabelhasButton>
  );
};
