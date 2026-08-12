import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Container } from "../ui/Container";

export function VisualizationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const waveformProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const scanLineY = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-nexus-black py-28 sm:py-36 lg:py-48"
    >
      <Container>
        <div className="mb-16 max-w-3xl lg:mb-24">
          <SectionLabel label="Data Visualization" number="07" />

          <motion.h2
            className="mt-10 font-sans text-3xl font-semibold leading-[1.15] tracking-tight text-nexus-cream sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            From signal to insight,{" "}
            <span className="text-gradient-green">visualizing the invisible</span>
          </motion.h2>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-2xl border border-nexus-muted/30 bg-nexus-charcoal p-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-xl bg-nexus-black">
            <div className="absolute inset-0 scientific-grid opacity-10" />

            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-nexus-green/40 to-transparent"
              style={{ top: scanLineY }}
            />

            <div className="relative p-7 sm:p-10 lg:p-14">
              <div className="mb-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="h-2 w-2 rounded-full bg-nexus-green"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="font-mono text-xs text-nexus-sage">
                    NEXUS ANALYSIS / REAL-TIME
                  </span>
                </div>
                <div className="font-mono text-xs text-nexus-sage">
                  SAMPLE: NX-2024-0847
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
                <div className="lg:col-span-2">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-nexus-sage uppercase">
                      Molecular Signal Waveform
                    </span>
                    <span className="font-mono text-[10px] text-nexus-green">
                      LIVE
                    </span>
                  </div>

                  <div className="relative h-52 overflow-hidden rounded-lg bg-nexus-charcoal/50 lg:h-56">
                    <svg
                      className="absolute inset-0 h-full w-full"
                      viewBox="0 0 600 200"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#2dd4a0" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#2dd4a0" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {Array.from({ length: 5 }).map((_, i) => (
                        <line
                          key={i}
                          x1="0"
                          y1={40 + i * 40}
                          x2="600"
                          y2={40 + i * 40}
                          stroke="#2a3b33"
                          strokeWidth="0.5"
                          opacity="0.3"
                        />
                      ))}

                      <motion.path
                        d="M 0 100 Q 50 80, 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100"
                        fill="none"
                        stroke="#2dd4a0"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        style={{ pathLength: waveformProgress }}
                      />

                      <motion.path
                        d="M 0 100 Q 50 80, 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 L 600 200 L 0 200 Z"
                        fill="url(#waveGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.5, 0.3] }}
                        transition={{ duration: 2, delay: 1 }}
                      />

                      <motion.path
                        d="M 0 120 Q 75 100, 150 120 T 300 120 T 450 120 T 600 120"
                        fill="none"
                        stroke="#67e8f9"
                        strokeWidth="1"
                        opacity="0.4"
                        initial={{ pathLength: 0 }}
                        style={{ pathLength: waveformProgress }}
                      />
                    </svg>

                    <div className="absolute top-3 left-3 font-mono text-[9px] text-nexus-sage/60">
                      AMPLITUDE (mV)
                    </div>
                    <div className="absolute bottom-3 right-3 font-mono text-[9px] text-nexus-sage/60">
                      TIME (ms)
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-4">
                    {[
                      { label: "Peak Frequency", value: "42.8 Hz" },
                      { label: "Signal-to-Noise", value: "18.3 dB" },
                      { label: "Integration", value: "0.847" },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-lg border border-nexus-muted/20 bg-nexus-surface/30 p-4"
                      >
                        <div className="font-mono text-[9px] text-nexus-sage uppercase">
                          {metric.label}
                        </div>
                        <div className="mt-1.5 font-mono text-sm text-nexus-cream">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-5">
                    <span className="font-mono text-[10px] text-nexus-sage uppercase">
                      Molecular Markers
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { marker: "CD4+", value: "0.847", status: "high" },
                      { marker: "CD8+", value: "0.623", status: "normal" },
                      { marker: "PD-L1", value: "0.912", status: "high" },
                      { marker: "Ki-67", value: "0.234", status: "low" },
                      { marker: "VEGF", value: "0.567", status: "normal" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.marker}
                        className="rounded-lg border border-nexus-muted/20 bg-nexus-surface/30 p-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs text-nexus-cream">
                            {item.marker}
                          </span>
                          <span
                            className={`h-2 w-2 rounded-full ${
                              item.status === "high"
                                ? "bg-nexus-green"
                                : item.status === "low"
                                ? "bg-nexus-cyan"
                                : "bg-nexus-sage"
                            }`}
                          />
                        </div>
                        <div className="mt-2.5 flex items-center gap-2">
                          <div className="h-1 flex-1 overflow-hidden rounded-full bg-nexus-muted/30">
                            <motion.div
                              className="h-full bg-nexus-green"
                              initial={{ width: 0 }}
                              whileInView={{
                                width: `${parseFloat(item.value) * 100}%`,
                              }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                            />
                          </div>
                          <span className="font-mono text-[10px] text-nexus-sage">
                            {item.value}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-lg border border-nexus-muted/20 bg-nexus-surface/30 p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-nexus-sage uppercase">
                        Classification
                      </span>
                      <span className="font-mono text-[10px] text-nexus-green">
                        93.2%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-nexus-muted/30">
                      <motion.div
                        className="h-full bg-gradient-to-r from-nexus-green to-nexus-cyan"
                        initial={{ width: 0 }}
                        whileInView={{ width: "93.2%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                    <div className="mt-2.5 font-mono text-[9px] text-nexus-sage">
                      Signal pattern matched to reference model
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-nexus-muted/20 pt-7 lg:mt-12">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-nexus-green" />
                    <span className="font-mono text-[10px] text-nexus-sage">
                      Primary Signal
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-nexus-cyan" />
                    <span className="font-mono text-[10px] text-nexus-sage">
                      Secondary Signal
                    </span>
                  </div>
                </div>
                <div className="font-mono text-[10px] text-nexus-sage">
                  Last updated: 2.4s ago
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
