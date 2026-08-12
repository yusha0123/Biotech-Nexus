import { motion } from "framer-motion";

export function NexusLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="3" fill="#2dd4a0" />
        <circle cx="6" cy="8" r="2" fill="#2dd4a0" opacity="0.6" />
        <circle cx="26" cy="8" r="2" fill="#2dd4a0" opacity="0.6" />
        <circle cx="6" cy="24" r="2" fill="#2dd4a0" opacity="0.6" />
        <circle cx="26" cy="24" r="2" fill="#2dd4a0" opacity="0.6" />
        <line x1="16" y1="16" x2="6" y2="8" stroke="#2dd4a0" strokeWidth="0.5" opacity="0.4" />
        <line x1="16" y1="16" x2="26" y2="8" stroke="#2dd4a0" strokeWidth="0.5" opacity="0.4" />
        <line x1="16" y1="16" x2="6" y2="24" stroke="#2dd4a0" strokeWidth="0.5" opacity="0.4" />
        <line x1="16" y1="16" x2="26" y2="24" stroke="#2dd4a0" strokeWidth="0.5" opacity="0.4" />
        <line x1="6" y1="8" x2="26" y2="8" stroke="#2dd4a0" strokeWidth="0.3" opacity="0.2" />
        <line x1="6" y1="24" x2="26" y2="24" stroke="#2dd4a0" strokeWidth="0.3" opacity="0.2" />
        <line x1="6" y1="8" x2="6" y2="24" stroke="#2dd4a0" strokeWidth="0.3" opacity="0.2" />
        <line x1="26" y1="8" x2="26" y2="24" stroke="#2dd4a0" strokeWidth="0.3" opacity="0.2" />
      </svg>
      <span className="font-sans text-lg font-semibold tracking-tight text-nexus-cream">
        Biotech Nexus
      </span>
    </div>
  );
}

export function NexusMark({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="3" fill="#2dd4a0" />
      <circle cx="6" cy="8" r="2" fill="#2dd4a0" opacity="0.6" />
      <circle cx="26" cy="8" r="2" fill="#2dd4a0" opacity="0.6" />
      <circle cx="6" cy="24" r="2" fill="#2dd4a0" opacity="0.6" />
      <circle cx="26" cy="24" r="2" fill="#2dd4a0" opacity="0.6" />
      <line x1="16" y1="16" x2="6" y2="8" stroke="#2dd4a0" strokeWidth="0.5" opacity="0.4" />
      <line x1="16" y1="16" x2="26" y2="8" stroke="#2dd4a0" strokeWidth="0.5" opacity="0.4" />
      <line x1="16" y1="16" x2="6" y2="24" stroke="#2dd4a0" strokeWidth="0.5" opacity="0.4" />
      <line x1="16" y1="16" x2="26" y2="24" stroke="#2dd4a0" strokeWidth="0.5" opacity="0.4" />
    </motion.svg>
  );
}
