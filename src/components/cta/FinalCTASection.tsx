import { motion } from "framer-motion";
import { CTAButton } from "../ui/CTAButton";
import { NexusMark } from "../ui/NexusLogo";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-nexus-black py-32 lg:py-40">
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

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <NexusMark className="mb-8" />
          </motion.div>

          <motion.h2
            className="max-w-4xl font-sans text-4xl font-semibold leading-tight tracking-tight text-nexus-cream sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The next breakthrough is hidden inside the data.
          </motion.h2>

          <motion.p
            className="mt-6 text-xl text-nexus-warm/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's uncover it together.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CTAButton variant="primary" href="#" showArrow>
              Partner With Biotech Nexus
            </CTAButton>
            <CTAButton variant="secondary" href="#research">
              Explore Our Research
            </CTAButton>
          </motion.div>

          <motion.div
            className="mt-20 flex items-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-left">
              <div className="font-mono text-[10px] text-nexus-sage uppercase">
                Research Inquiries
              </div>
              <div className="mt-1 font-mono text-sm text-nexus-cream">
                research@biotechnexus.example
              </div>
            </div>
            <div className="h-8 w-px bg-nexus-muted" />
            <div className="text-left">
              <div className="font-mono text-[10px] text-nexus-sage uppercase">
                Partnerships
              </div>
              <div className="mt-1 font-mono text-sm text-nexus-cream">
                partners@biotechnexus.example
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
