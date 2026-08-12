import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { NexusMark } from "../ui/NexusLogo";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 800);
    const t3 = setTimeout(() => setPhase(3), 1400);
    const t4 = setTimeout(() => onComplete(), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-nexus-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <NexusMark />
            </motion.div>

            <div className="flex items-center gap-3">
              <motion.span
                className="font-mono text-xs tracking-[0.3em] text-nexus-sage uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase >= 1 ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                Biotech Nexus
              </motion.span>
              <motion.span
                className="font-mono text-xs text-nexus-green-dim"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase >= 2 ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                / Initializing
              </motion.span>
            </div>

            <div className="h-px w-48 overflow-hidden bg-nexus-muted/30">
              <motion.div
                className="h-full bg-nexus-green"
                initial={{ width: "0%" }}
                animate={{
                  width: phase >= 1 ? "40%" : "0%",
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
