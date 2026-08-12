import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { statistics } from "../../data/content";

function AnimatedNumber({
  value,
  suffix,
  prefix,
}: {
  value: number;
  suffix: string;
  prefix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className="font-mono text-4xl font-light text-nexus-green lg:text-5xl">
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {isInView ? value : 0}
      </motion.span>
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  return (
    <section className="relative bg-nexus-charcoal py-32 lg:py-40">
      <div className="absolute inset-0 scientific-grid opacity-20" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16">
          <SectionLabel label="Impact" number="06" />

          <motion.h2
            className="mt-8 max-w-3xl font-sans text-3xl font-semibold leading-tight tracking-tight text-nexus-cream sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Measuring what matters in{" "}
            <span className="text-gradient-green">biological discovery</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative overflow-hidden rounded-xl border border-nexus-muted/20 bg-nexus-surface/30 p-8 transition-all hover:border-nexus-green/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <p className="font-mono text-xs leading-relaxed text-nexus-sage">
                {stat.label}
              </p>

              <motion.div
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-nexus-green/40 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                style={{ transformOrigin: "left" }}
              />

              <motion.div
                className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-nexus-green/5 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 rounded-xl border border-nexus-muted/20 bg-nexus-surface/20 p-8 backdrop-blur-sm lg:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-serif text-2xl text-nexus-cream lg:text-3xl">
                The scale of biological insight
              </h3>
              <p className="mt-3 max-w-xl text-sm text-nexus-warm/60">
                Every measurement represents a data point in the complex map of
                biological systems. Together, they form the foundation for
                therapeutic discovery.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="font-mono text-sm text-nexus-green">
                  Continuous
                </div>
                <div className="font-mono text-[10px] text-nexus-sage uppercase">
                  Data Acquisition
                </div>
              </div>
              <motion.div
                className="h-10 w-10 rounded-full border border-nexus-green/30 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="3"
                    fill="#2dd4a0"
                    opacity="0.6"
                  />
                  <circle
                    cx="8"
                    cy="8"
                    r="6"
                    stroke="#2dd4a0"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
