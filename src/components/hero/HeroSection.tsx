import { motion } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";
import { CTAButton } from "../ui/CTAButton";
import { Container } from "../ui/Container";
import { MolecularVisual } from "./MolecularVisual";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-nexus-black">
      <div className="scientific-grid absolute inset-0 opacity-30" />

      <div className="absolute inset-0 bg-gradient-to-b from-nexus-black via-nexus-charcoal/50 to-nexus-black" />

      <Container className="relative pt-36 pb-28 lg:pt-44 lg:pb-36">
        <div className="grid gap-16 lg:grid-cols-[1.05fr,1fr] lg:gap-20 items-center min-h-[calc(100vh-220px)]">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase text-nexus-sage">
                <span className="h-px w-8 bg-nexus-green" />
                Biology × Computation
              </span>
            </motion.div>

            <div className="mb-10">
              <AnimatedText
                text="We decode biology at the scale where disease begins."
                as="h1"
                className="font-sans text-4xl font-semibold leading-[1.05] tracking-tight text-nexus-cream sm:text-5xl lg:text-6xl xl:text-7xl"
                delay={0.5}
                splitBy="words"
              />
            </div>

            <motion.p
              className="mb-12 max-w-xl text-lg leading-relaxed text-nexus-warm/70 lg:text-xl lg:leading-[1.6]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Biotech Nexus combines molecular biology, advanced imaging, and
              computational intelligence to uncover biological mechanisms and
              accelerate the development of precision therapies.
            </motion.p>

            <motion.div
              className="flex flex-col gap-5 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <CTAButton variant="primary" size="lg" href="#platform" showArrow>
                Explore the Platform
              </CTAButton>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 font-sans text-sm text-nexus-warm/70 transition-colors hover:text-nexus-green"
              >
                <span>Discover Our Science</span>
                <motion.span
                  className="inline-block"
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ↓
                </motion.span>
              </a>
            </motion.div>

            <motion.div
              className="mt-20 flex items-center gap-10 lg:gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div>
                <div className="font-mono text-2xl font-light text-nexus-green lg:text-3xl">
                  12.8M+
                </div>
                <div className="mt-1 font-mono text-[10px] tracking-wider text-nexus-sage uppercase">
                  Measurements
                </div>
              </div>
              <div className="h-10 w-px bg-nexus-muted" />
              <div>
                <div className="font-mono text-2xl font-light text-nexus-green lg:text-3xl">
                  4.6B
                </div>
                <div className="mt-1 font-mono text-[10px] tracking-wider text-nexus-sage uppercase">
                  Observations
                </div>
              </div>
              <div className="h-10 w-px bg-nexus-muted" />
              <div>
                <div className="font-mono text-2xl font-light text-nexus-green lg:text-3xl">
                  93%
                </div>
                <div className="mt-1 font-mono text-[10px] tracking-wider text-nexus-sage uppercase">
                  Accuracy
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <div className="relative aspect-square w-full max-w-[560px] mx-auto">
              <MolecularVisual />

              <motion.div
                className="absolute top-2 right-2 rounded-lg border border-nexus-muted/30 bg-nexus-surface/60 px-4 py-3 backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2 }}
              >
                <div className="font-mono text-[10px] text-nexus-sage uppercase">
                  Live Analysis
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <motion.div
                    className="h-2 w-2 rounded-full bg-nexus-green"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="font-mono text-xs text-nexus-cream">
                    Processing
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-0 rounded-lg border border-nexus-muted/30 bg-nexus-surface/60 px-4 py-3 backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
              >
                <div className="font-mono text-[10px] text-nexus-sage uppercase">
                  Resolution
                </div>
                <div className="mt-1.5 font-mono text-sm text-nexus-green">
                  0.2 nm
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-nexus-black to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
    </section>
  );
}
