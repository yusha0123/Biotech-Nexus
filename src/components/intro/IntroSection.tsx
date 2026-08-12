import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { FadeIn } from "../ui/FadeIn";
import { biologicalScale } from "../../data/content";

function ScaleItem({
  item,
  index,
  currentLevel,
}: {
  item: (typeof biologicalScale)[0];
  index: number;
  currentLevel: MotionValue<number>;
}) {
  const opacity = useTransform(currentLevel, (level) =>
    level >= index ? 1 : 0.3
  );

  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        className={`relative mb-16 flex flex-col gap-6 lg:mb-24 lg:flex-row lg:items-center ${
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
        style={{ opacity }}
      >
        <div
          className={`flex-1 ${
            index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
          }`}
        >
          <div className="mb-3 flex items-center gap-3 lg:justify-start">
            <span className="font-mono text-xs text-nexus-green">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-nexus-muted" />
          </div>
          <h3 className="mb-3 font-serif text-3xl text-nexus-cream lg:text-4xl">
            {item.level}
          </h3>
          <p className="text-base leading-relaxed text-nexus-warm/70">
            {item.description}
          </p>
          <p className="mt-3 font-mono text-xs text-nexus-sage">{item.detail}</p>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            className="relative h-16 w-16 rounded-full border border-nexus-green/30 bg-nexus-surface"
            whileInView={{
              scale: [1, 1.1, 1],
              borderColor: [
                "rgba(45, 212, 160, 0.3)",
                "rgba(45, 212, 160, 0.6)",
                "rgba(45, 212, 160, 0.3)",
              ],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-nexus-green" />
            </div>
          </motion.div>
        </div>

        <div className="flex-1 lg:opacity-0" />
      </motion.div>
    </FadeIn>
  );
}

export function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const currentLevel = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5, 0.7, 0.9],
    [0, 1, 2, 3, 4]
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative bg-nexus-black py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-20 max-w-3xl">
          <SectionLabel label="About Biotech Nexus" number="01" />

          <motion.h2
            className="mt-8 font-sans text-3xl font-semibold leading-tight tracking-tight text-nexus-cream sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Biology is not a collection of isolated systems.{" "}
            <span className="text-gradient-green">It is a network.</span>
          </motion.h2>

          <motion.p
            className="mt-8 text-lg leading-relaxed text-nexus-warm/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Biotech Nexus, we understand that disease emerges from the
            complex interactions between molecules, cells, tissues, and systems.
            Our integrated approach maps these connections, revealing
            therapeutic opportunities hidden within biological complexity.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-nexus-green/30 via-nexus-green/10 to-transparent lg:left-1/2" />

          {biologicalScale.map((item, index) => (
            <ScaleItem
              key={item.level}
              item={item}
              index={index}
              currentLevel={currentLevel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
