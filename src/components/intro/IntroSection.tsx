import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { FadeIn } from '../ui/FadeIn';
import { Container } from '../ui/Container';
import { biologicalScale } from '../../data/content';

function ScaleItem({
  item,
  index,
}: Readonly<{
  item: (typeof biologicalScale)[0];
  index: number;
}>) {
  const ref = useRef<HTMLDivElement>(null);

  // Each item brightens when it enters the viewport center region.
  // margin: "-25% 0px -25% 0px" means it must be at least 25% inside
  // the viewport on both top and bottom before activating.
  const isInView = useInView(ref, {
    once: false,
    margin: '-25% 0px -25% 0px',
  });

  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        ref={ref}
        className={`relative mb-20 flex flex-col gap-8 lg:mb-28 lg:flex-row lg:items-center ${
          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }`}
        animate={{ opacity: isInView ? 1 : 0.35 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div
          className={`flex-1 ${
            index % 2 === 0 ? 'lg:pr-20 lg:text-right' : 'lg:pl-20'
          }`}
        >
          <div className="mb-4 flex items-center gap-3 lg:justify-start">
            <span className="font-mono text-xs text-nexus-green">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="h-px w-8 bg-nexus-muted" />
          </div>
          <h3 className="mb-4 font-serif text-3xl text-nexus-cream lg:text-4xl">
            {item.level}
          </h3>
          <p className="text-base leading-relaxed text-nexus-warm/70">
            {item.description}
          </p>
          <p className="mt-4 font-mono text-xs text-nexus-sage">
            {item.detail}
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            className="relative h-16 w-16 rounded-full border border-nexus-green/30 bg-nexus-surface"
            whileInView={{
              scale: [1, 1.1, 1],
              borderColor: [
                'rgba(45, 212, 160, 0.3)',
                'rgba(45, 212, 160, 0.6)',
                'rgba(45, 212, 160, 0.3)',
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
  return (
    <section
      id="about"
      className="relative bg-nexus-black py-28 sm:py-36 lg:py-48"
    >
      <Container>
        <div className="mb-24 max-w-3xl lg:mb-32">
          <SectionLabel label="About Biotech Nexus" number="01" />

          <motion.h2
            className="mt-10 font-sans text-3xl font-semibold leading-[1.15] tracking-tight text-nexus-cream sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Biology is not a collection of isolated systems.{' '}
            <span className="text-gradient-green">It is a network.</span>
          </motion.h2>

          <motion.p
            className="mt-10 max-w-2xl text-base leading-[1.7] text-nexus-warm/70 sm:text-lg lg:text-xl"
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
          <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-nexus-green/30 via-nexus-green/10 to-transparent lg:left-1/2" />

          {biologicalScale.map((item, index) => (
            <ScaleItem key={item.level} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
