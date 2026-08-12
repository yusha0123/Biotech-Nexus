import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Container } from "../ui/Container";
import { sciencePillars } from "../../data/content";

export function ScienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePillar = sciencePillars[activeIndex];

  return (
    <section id="science" className="relative bg-nexus-charcoal py-28 sm:py-36 lg:py-48">
      <Container>
        <div className="mb-16 max-w-3xl lg:mb-24">
          <SectionLabel label="The Science" number="02" />

          <motion.h2
            className="mt-10 font-sans text-3xl font-semibold leading-[1.15] tracking-tight text-nexus-cream sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            A multidisciplinary approach to{" "}
            <span className="text-gradient-green">understanding life</span>
          </motion.h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr,1.5fr] lg:gap-16">
          <div className="space-y-3">
            {sciencePillars.map((pillar, index) => (
              <motion.button
                key={pillar.id}
                className={`group w-full rounded-lg border px-6 py-6 text-left transition-all sm:px-7 sm:py-7 ${
                  activeIndex === index
                    ? "border-nexus-green/40 bg-nexus-surface/80"
                    : "border-nexus-muted/20 bg-transparent hover:border-nexus-muted/40 hover:bg-nexus-surface/30"
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`font-mono text-sm ${
                      activeIndex === index
                        ? "text-nexus-green"
                        : "text-nexus-sage"
                    }`}
                  >
                    {pillar.id}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`font-sans text-base font-medium sm:text-lg ${
                        activeIndex === index
                          ? "text-nexus-cream"
                          : "text-nexus-warm/70"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-nexus-sage">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <motion.span
                    className="text-nexus-green"
                    animate={{
                      rotate: activeIndex === index ? 90 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                className="rounded-xl border border-nexus-muted/30 bg-nexus-surface/50 p-8 backdrop-blur-sm sm:p-10 lg:p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="font-mono text-sm text-nexus-green">
                    {activePillar.id}
                  </span>
                  <span className="h-px flex-1 bg-nexus-muted/30" />
                </div>

                <h3 className="mb-5 font-serif text-3xl text-nexus-cream lg:text-4xl">
                  {activePillar.title}
                </h3>

                <p className="mb-8 max-w-2xl text-base leading-[1.7] text-nexus-warm/70 lg:text-lg">
                  {activePillar.description}
                </p>

                <div className="relative h-52 overflow-hidden rounded-lg bg-nexus-black/50 lg:h-56">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 400 200"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id={`gradient-${activePillar.id}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#2dd4a0" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {Array.from({ length: 20 }).map((_, i) => (
                      <motion.circle
                        key={i}
                        cx={20 + (i % 5) * 90}
                        cy={30 + Math.floor(i / 5) * 45}
                        r="4"
                        fill="#2dd4a0"
                        opacity="0.6"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1, 0.8] }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />
                    ))}

                    {Array.from({ length: 15 }).map((_, i) => {
                      const x1 = 20 + (i % 5) * 90;
                      const y1 = 30 + Math.floor(i / 5) * 45;
                      const x2 = 20 + ((i + 1) % 5) * 90;
                      const y2 = 30 + Math.floor((i + 1) / 5) * 45;
                      return (
                        <motion.line
                          key={`line-${i}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#2dd4a0"
                          strokeWidth="0.5"
                          opacity="0.2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: [0, 1, 0] }}
                          transition={{
                            duration: 2,
                            delay: i * 0.15,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        />
                      );
                    })}
                  </svg>

                  <div className="absolute bottom-4 left-4 font-mono text-[10px] text-nexus-sage">
                    <div>NEXUS ANALYSIS / {activePillar.id}</div>
                    <div className="mt-1">NODES: {20 + activeIndex * 5}</div>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {activePillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-nexus-muted/40 px-3 py-1 font-mono text-xs text-nexus-sage"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
