import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { capabilities } from "../../data/content";

export function CapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="capabilities"
      className="relative bg-nexus-charcoal py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16">
          <SectionLabel label="Capabilities" number="04" />

          <motion.h2
            className="mt-8 max-w-3xl font-sans text-3xl font-semibold leading-tight tracking-tight text-nexus-cream sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Integrated technologies for{" "}
            <span className="text-gradient-green">biological discovery</span>
          </motion.h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              className="group relative overflow-hidden rounded-xl border border-nexus-muted/20 bg-nexus-surface/30 p-6 transition-all hover:border-nexus-green/30 hover:bg-nexus-surface/60 lg:p-8"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-nexus-green">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <motion.div
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-nexus-muted/30"
                  animate={{
                    rotate: activeIndex === index ? 45 : 0,
                  }}
                >
                  <span className="text-sm text-nexus-sage">+</span>
                </motion.div>
              </div>

              <h3 className="mb-3 font-sans text-xl font-medium text-nexus-cream">
                {cap.title}
              </h3>

              <p className="text-sm leading-relaxed text-nexus-warm/60">
                {cap.description}
              </p>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="mt-6 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-32 overflow-hidden rounded-lg bg-nexus-black/50">
                      <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 300 130"
                        fill="none"
                      >
                        {Array.from({ length: 12 }).map((_, i) => {
                          const angle = (i / 12) * Math.PI * 2;
                          const cx = 150 + Math.cos(angle) * 40;
                          const cy = 65 + Math.sin(angle) * 40;
                          return (
                            <motion.g key={i}>
                              <motion.circle
                                cx={cx}
                                cy={cy}
                                r="3"
                                fill="#2dd4a0"
                                opacity="0.6"
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.4, 0.8, 0.4],
                                }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.15,
                                  repeat: Infinity,
                                }}
                              />
                              <motion.line
                                x1={150}
                                y1={65}
                                x2={cx}
                                y2={cy}
                                stroke="#2dd4a0"
                                strokeWidth="0.3"
                                opacity="0.2"
                              />
                            </motion.g>
                          );
                        })}
                        <motion.circle
                          cx="150"
                          cy="65"
                          r="5"
                          fill="#67e8f9"
                          animate={{
                            r: [5, 7, 5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                      </svg>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-nexus-muted/40 px-2.5 py-0.5 font-mono text-[10px] text-nexus-sage"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
