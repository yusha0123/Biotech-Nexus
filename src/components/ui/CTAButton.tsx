import { motion } from "framer-motion";
import { useState } from "react";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  href?: string;
  showArrow?: boolean;
}

export function CTAButton({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
  showArrow = false,
}: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    "relative inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-nexus-green text-nexus-black px-8 py-4 rounded-full hover:bg-nexus-electric",
    secondary:
      "border border-nexus-muted text-nexus-cream px-8 py-4 rounded-full hover:border-nexus-green hover:text-nexus-green",
    ghost:
      "text-nexus-cream px-4 py-2 hover:text-nexus-green",
  };

  const Tag = href ? "a" : "button";

  return (
    <Tag
      className={`${baseStyles} ${variants[variant]} ${className}`}
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
