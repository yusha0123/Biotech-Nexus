import { motion } from "framer-motion";

interface SectionLabelProps {
  label: string;
  number?: string;
  className?: string;
}

export function SectionLabel({ label, number, className = "" }: SectionLabelProps) {
  return (
    <motion.div
      className={`flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase text-nexus-sage ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {number && (
        <span className="text-nexus-green-dim">{number}</span>
      )}
      <span className="h-px w-8 bg-nexus-muted" />
      <span>{label}</span>
    </motion.div>
  );
}
