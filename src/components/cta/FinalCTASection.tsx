import { motion } from "framer-motion";
import { CTAButton } from "../ui/CTAButton";
import { NexusMark } from "../ui/NexusLogo";
import { Container } from "../ui/Container";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-nexus-black py-28 sm:py-40 lg:py-56">
      <div className="absolute inset-0 scientific-grid opacity-20" />

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nexus-green/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <NexusMark className="mb-10" />
          </motion.div>

          <motion.h2
            className="max-w-4xl font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-nexus-cream sm:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The next breakthrough is hidden inside the data.
          </motion.h2>

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-[1.6] text-nexus-warm/70 lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's uncover it together.
          </motion.p>

          <motion.div
            className="mt-14 flex flex-col gap-5 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CTAButton variant="primary" size="lg" href="#" showArrow>
              Partner With Biotech Nexus
            </CTAButton>
            <CTAButton variant="secondary" size="lg" href="#research">
              Explore Our Research
            </CTAButton>
          </motion.div>

          <motion.div
            className="mt-20 flex flex-col items-center gap-8 sm:flex-row sm:gap-12 lg:mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-left">
              <div className="font-mono text-[10px] text-nexus-sage uppercase">
                Research Inquiries
              </div>
              <div className="mt-2 font-mono text-sm text-nexus-cream">
                research@biotechnexus.example
              </div>
            </div>
            <div className="hidden h-10 w-px bg-nexus-muted sm:block" />
            <div className="text-left">
              <div className="font-mono text-[10px] text-nexus-sage uppercase">
                Partnerships
              </div>
              <div className="mt-2 font-mono text-sm text-nexus-cream">
                partners@biotechnexus.example
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
