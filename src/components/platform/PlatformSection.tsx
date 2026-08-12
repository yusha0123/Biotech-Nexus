import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Container } from "../ui/Container";
import { platformStages } from "../../data/content";

export function PlatformSection() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = platformStages[activeStage];

  return (
    <section id="platform" className="relative bg-nexus-black py-28 sm:py-36 lg:py-48">
      <Container>
        <div className="mb-16 max-w-3xl lg:mb-24">
          <SectionLabel label="The Nexus Platform" number="03" />

          <motion.h2
            className="mt-10 font-sans text-3xl font-semibold leading-[1.15] tracking-tight text-nexus-cream sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            From observation to discovery,{" "}
            <span className="text-gradient-green">an integrated pipeline</span>
          </motion.h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr,2fr] lg:gap-16">
          <div className="space-y-2">
            {platformStages.map((s, index) => (
              <motion.button
                key={s.id}
                className={`group relative w-full overflow-hidden rounded-lg border px-6 py-6 text-left transition-all sm:px-7 sm:py-7 ${
                  activeStage === index
                    ? "border-nexus-green/40 bg-nexus-surface/80"
                    : "border-nexus-muted/20 bg-transparent hover:border-nexus-muted/40"
                }`}
                onClick={() => setActiveStage(index)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {activeStage === index && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-nexus-green"
                    layoutId="activeBar"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-sm ${
                      activeStage === index
                        ? "text-nexus-green"
                        : "text-nexus-sage"
                    }`}
                  >
                    {s.id}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`font-sans text-base font-medium sm:text-lg ${
                        activeStage === index
                          ? "text-nexus-cream"
                          : "text-nexus-warm/70"
                      }`}
                    >
                      {s.title}
                    </h3>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id}
                className="rounded-xl border border-nexus-muted/30 bg-nexus-surface/30 p-8 backdrop-blur-sm sm:p-10 lg:p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-10 flex items-start justify-between gap-6">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-sm text-nexus-green">
                        {stage.id}
                      </span>
                      <span className="h-px w-8 bg-nexus-muted" />
                    </div>
                    <h3 className="font-serif text-3xl text-nexus-cream lg:text-4xl">
                      {stage.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-3xl font-light text-nexus-green">
                      {stage.metric}
                    </div>
                    <div className="mt-1.5 font-mono text-[10px] tracking-wider text-nexus-sage uppercase">
                      {stage.metricLabel}
                    </div>
                  </div>
                </div>

                <p className="mb-5 max-w-2xl text-lg leading-[1.6] text-nexus-warm/80">
                  {stage.description}
                </p>
                <p className="mb-10 max-w-2xl text-sm leading-[1.7] text-nexus-sage">
                  {stage.detail}
                </p>

                <div className="relative h-44 overflow-hidden rounded-lg bg-nexus-black/50 lg:h-48">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 500 160"
                    fill="none"
                  >
                    {Array.from({ length: 8 }).map((_, i) => {
                      const x = 30 + i * 60;
                      return (
                        <motion.g key={i}>
                          <motion.rect
                            x={x}
                            y={80 - (i + activeStage) * 8}
                            width="40"
                            height={(i + activeStage) * 8}
                            fill="#2dd4a0"
                            opacity={0.2 + i * 0.05}
                            initial={{ height: 0, y: 80 }}
                            animate={{
                              height: (i + activeStage) * 8,
                              y: 80 - (i + activeStage) * 8,
                            }}
                            transition={{
                              duration: 0.6,
                              delay: i * 0.08,
                              ease: "easeOut",
                            }}
                          />
                          <motion.line
                            x1={x + 20}
                            y1={80 - (i + activeStage) * 8 - 5}
                            x2={x + 20}
                            y2={80}
                            stroke="#2dd4a0"
                            strokeWidth="0.5"
                            opacity="0.3"
                            strokeDasharray="2 2"
                          />
                        </motion.g>
                      );
                    })}

                    <motion.line
                      x1="20"
                      y1="80"
                      x2="480"
                      y2="80"
                      stroke="#2a3b33"
                      strokeWidth="0.5"
                    />

                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.text
                        key={i}
                        x={30 + i * 110}
                        y="140"
                        fill="#5a7a6a"
                        fontSize="8"
                        fontFamily="monospace"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        S{i + 1}
                      </motion.text>
                    ))}
                  </svg>

                  <div className="absolute top-3 left-3 font-mono text-[9px] text-nexus-sage/60">
                    STAGE {stage.id} / SIGNAL MAP
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <motion.button
                      className="flex items-center gap-2 font-mono text-xs text-nexus-sage hover:text-nexus-cream"
                      onClick={() =>
                        setActiveStage(Math.max(0, activeStage - 1))
                      }
                      whileHover={{ x: -2 }}
                    >
                      ← Previous
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-2 font-mono text-xs text-nexus-sage hover:text-nexus-cream"
                      onClick={() =>
                        setActiveStage(
                          Math.min(platformStages.length - 1, activeStage + 1)
                        )
                      }
                      whileHover={{ x: 2 }}
                    >
                      Next →
                    </motion.button>
                  </div>
                  <div className="flex gap-1.5">
                    {platformStages.map((_, i) => (
                      <motion.div
                        key={i}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeStage
                            ? "w-6 bg-nexus-green"
                            : "w-1.5 bg-nexus-muted"
                        }`}
                        layout
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
