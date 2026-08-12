import { motion } from "framer-motion";
import { useState } from "react";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  showArrow?: boolean;
}

export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  showArrow = false,
}: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2.5 font-sans font-medium tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap select-none";

  const sizeStyles = {
    md: "text-sm px-7 py-3.5",
    lg: "text-base px-9 py-4",
  };

  const variants = {
    primary:
      "bg-nexus-green text-nexus-black rounded-full hover:bg-nexus-electric shadow-[0_0_0_0_rgba(45,212,160,0)] hover:shadow-[0_8px_30px_-12px_rgba(45,212,160,0.45)]",
    secondary:
      "border border-nexus-muted/60 text-nexus-cream rounded-full hover:border-nexus-green hover:text-nexus-green bg-transparent",
    ghost:
      "text-nexus-cream px-3 py-2 hover:text-nexus-green",
  };

  const Tag = href ? "a" : "button";

  return (
    <Tag
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
      onClick={onClick}
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{children}</span>
      {showArrow && (
        <motion.span
          className="inline-block"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      )}
    </Tag>
  );
}
