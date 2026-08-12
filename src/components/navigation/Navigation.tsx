import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { NexusLogo } from "../ui/NexusLogo";
import { navLinks } from "../../data/content";
import { useIsMobile } from "../../hooks/useIsMobile";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const isMobile = useIsMobile();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-nexus-black/80 backdrop-blur-xl border-b border-nexus-muted/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex h-18 items-center justify-between lg:h-20">
            <a href="#" className="relative z-50">
              <NexusLogo />
            </a>

            {!isMobile && (
              <div className="flex items-center gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group relative font-sans text-sm text-nexus-warm/70 transition-colors hover:text-nexus-cream"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-nexus-green transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4">
              {!isMobile && (
                <a
                  href="#science"
                  className="rounded-full border border-nexus-green/30 px-5 py-2 text-sm text-nexus-green transition-all hover:border-nexus-green hover:bg-nexus-green/10"
                >
                  Explore Our Science
                </a>
              )}

              <button
                className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <motion.span
                  className="block h-px w-6 bg-nexus-cream"
                  animate={isOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-px w-6 bg-nexus-cream"
                  animate={isOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>

        {scrolled && !isOpen && (
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-nexus-green/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
      </motion.nav>

      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="fixed inset-0 z-40 bg-nexus-black/98 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="font-serif text-4xl text-nexus-cream transition-colors hover:text-nexus-green"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#science"
                className="mt-6 rounded-full border border-nexus-green/30 px-8 py-3 text-base text-nexus-green transition-all hover:bg-nexus-green/10"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.5 }}
              >
                Explore Our Science
              </motion.a>

              <motion.div
                className="absolute bottom-10 left-0 right-0 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="mx-auto h-px w-16 bg-nexus-muted mb-4" />
                <p className="font-mono text-xs tracking-[0.2em] text-nexus-sage uppercase">
                  Scroll progress
                </p>
                <div className="mx-auto mt-3 h-px w-32 bg-nexus-muted">
                  <motion.div
                    className="h-full bg-nexus-green"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
