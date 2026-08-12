import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { FadeIn } from "../ui/FadeIn";
import { researchPrograms } from "../../data/content";

export function ResearchSection() {
  return (
    <section id="research" className="relative bg-nexus-black py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16">
          <SectionLabel label="Research Programs" number="05" />

          <motion.h2
            className="mt-8 max-w-3xl font-sans text-3xl font-semibold leading-tight tracking-tight text-nexus-cream sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Where discovery becomes{" "}
            <span className="text-gradient-green">evidence</span>
          </motion.h2>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-nexus-warm/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our research programs translate biological insight into therapeutic
            opportunity. Each program combines computational discovery with
            rigorous experimental validation.
          </motion.p>
        </div>

        <div className="space-y-8">
          {researchPrograms.map((program, index) => (
            <FadeIn key={program.id} delay={index * 0.1}>
              <motion.div
                className="group relative overflow-hidden rounded-xl border border-nexus-muted/20 bg-nexus-surface/30 transition-all hover:border-nexus-green/30 hover:bg-nexus-surface/50"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid gap-8 p-8 lg:grid-cols-[1fr,2fr,1fr] lg:p-10">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-xs text-nexus-green">
                        {program.id}
                      </span>
                      <span className="h-px w-6 bg-nexus-muted" />
                      <span className="font-mono text-[10px] text-nexus-sage uppercase">
                        Research Program
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-nexus-cream lg:text-3xl">
                      {program.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-nexus-green/30 bg-nexus-green/10 px-3 py-1 font-mono text-[10px] text-nexus-green uppercase">
                        <span className="h-1.5 w-1.5 rounded-full bg-nexus-green" />
                        {program.status}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-base leading-relaxed text-nexus-warm/70">
                      {program.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {program.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-nexus-muted/40 px-3 py-1 font-mono text-[10px] text-nexus-sage"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="relative h-24 overflow-hidden rounded-lg bg-nexus-black/50">
                      <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 200 100"
                        fill="none"
                      >
                        {Array.from({ length: 8 }).map((_, i) => (
                          <motion.circle
                            key={i}
                            cx={25 + i * 22}
                            cy={30 + Math.sin(i + index) * 20}
                            r="2"
                            fill="#2dd4a0"
                            opacity="0.5"
                            animate={{
                              cy: [
                                30 + Math.sin(i + index) * 20,
                                30 + Math.cos(i + index) * 20,
                                30 + Math.sin(i + index) * 20,
                              ],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                        {Array.from({ length: 7 }).map((_, i) => (
                          <motion.line
                            key={`l-${i}`}
                            x1={25 + i * 22}
                            y1={30 + Math.sin(i + index) * 20}
                            x2={25 + (i + 1) * 22}
                            y2={30 + Math.sin(i + 1 + index) * 20}
                            stroke="#2dd4a0"
                            strokeWidth="0.5"
                            opacity="0.2"
                          />
                        ))}
                      </svg>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between font-mono text-[10px]">
                        <span className="text-nexus-sage">Focus</span>
                        <span className="text-nexus-cream">
                          {program.focus}
                        </span>
                      </div>
                      <div className="flex justify-between font-mono text-[10px]">
                        <span className="text-nexus-sage">Timeline</span>
                        <span className="text-nexus-cream">{program.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-nexus-green/50 via-nexus-green/20 to-transparent"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
