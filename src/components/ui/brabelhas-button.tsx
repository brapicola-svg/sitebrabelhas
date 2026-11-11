import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brabelhasButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary honey gradient button
        primary: "honey-gradient text-white shadow-honey hover:shadow-lg hover:scale-105 transition-bounce font-semibold",
        
        // Secondary nature button
        secondary: "nature-gradient text-white shadow-green hover:shadow-lg hover:scale-105 transition-bounce font-semibold",
        
        // Hero CTA - larger with special styling
        hero: "honey-gradient text-white shadow-honey hover:shadow-lg hover:scale-105 transition-bounce font-bold text-lg animate-pulse-glow",
        
        // Social media buttons
        youtube: "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg transition-smooth",
        youtubeAsf: "bg-black hover:bg-gray-900 text-white shadow-md hover:shadow-lg transition-smooth border border-gray-800",
        instagram: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white shadow-md hover:shadow-lg transition-smooth",
        whatsapp: "bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg transition-smooth",
        
        // Outline variants
        outline: "border-2 border-primary bg-transparent hover:bg-primary hover:text-white transition-smooth",
        "outline-secondary": "border-2 border-secondary bg-transparent hover:bg-secondary hover:text-white transition-smooth",
        
        // Ghost variants
        ghost: "hover:bg-accent hover:text-accent-foreground transition-smooth",
        
        // Link style
        link: "text-primary underline-offset-4 hover:underline transition-smooth",
        
        // Floating WhatsApp button
        floating: "fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl rounded-full w-14 h-14 animate-float transition-bounce",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
        "floating-icon": "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface BrabelhasButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brabelhasButtonVariants> {
  asChild?: boolean;
}

const BrabelhasButton = React.forwardRef<HTMLButtonElement, BrabelhasButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(brabelhasButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
BrabelhasButton.displayName = "BrabelhasButton";

export { BrabelhasButton, brabelhasButtonVariants };