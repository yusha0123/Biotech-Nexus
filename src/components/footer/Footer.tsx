import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NexusLogo } from '../ui/NexusLogo';
import { Container } from '../ui/Container';

// Data
const exploreLinks = [
  { label: 'Science', href: '#science' },
  { label: 'Platform', href: '#platform' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
];

const researchLinks = [
  { label: 'Research Programs', href: '#research' },
  { label: 'Technology', href: '#platform' },
  { label: 'Impact', href: '#impact' },
];

const connectLinks = [
  { label: 'Partner With Us', href: '#partner' },
  { label: 'Contact', href: 'mailto:hello@biotechnexus.example' },
  { label: 'LinkedIn', href: '#', external: true },
  { label: 'X / Twitter', href: '#', external: true },
];

interface NavGroup {
  label: string;
  links: { label: string; href: string; external?: boolean }[];
}

const navGroups: NavGroup[] = [
  { label: 'Explore', links: exploreLinks },
  { label: 'Research', links: researchLinks },
  { label: 'Connect', links: connectLinks },
];

/** Subtle molecular node pattern drawn as SVG */
function MolecularDecor() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Large ambient circle */}
      <circle
        cx="10%"
        cy="30%"
        r="180"
        fill="none"
        stroke="#2dd4a0"
        strokeWidth="0.5"
        opacity="0.06"
      />
      <circle
        cx="10%"
        cy="30%"
        r="90"
        fill="none"
        stroke="#2dd4a0"
        strokeWidth="0.5"
        opacity="0.08"
      />

      {/* Node cluster – top right */}
      <circle cx="85%" cy="20%" r="3" fill="#2dd4a0" opacity="0.15" />
      <circle cx="92%" cy="12%" r="1.5" fill="#2dd4a0" opacity="0.1" />
      <circle cx="78%" cy="35%" r="2" fill="#2dd4a0" opacity="0.1" />
      <line
        x1="85%"
        y1="20%"
        x2="92%"
        y2="12%"
        stroke="#2dd4a0"
        strokeWidth="0.5"
        opacity="0.08"
      />
      <line
        x1="85%"
        y1="20%"
        x2="78%"
        y2="35%"
        stroke="#2dd4a0"
        strokeWidth="0.5"
        opacity="0.08"
      />

      {/* Node cluster – bottom left */}
      <circle cx="4%" cy="85%" r="2" fill="#2dd4a0" opacity="0.1" />
      <circle cx="12%" cy="92%" r="1.5" fill="#2dd4a0" opacity="0.08" />
      <line
        x1="4%"
        y1="85%"
        x2="12%"
        y2="92%"
        stroke="#2dd4a0"
        strokeWidth="0.5"
        opacity="0.06"
      />

      {/* Fine dashed horizontal rule */}
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke="#2dd4a0"
        strokeWidth="0.3"
        strokeDasharray="3 24"
        opacity="0.04"
      />
    </svg>
  );
}

/** Single nav link with hover arrow + underline animation */
function FooterLink({
  href,
  children,
  external,
}: Readonly<{
  href: string;
  children: React.ReactNode;
  external?: boolean;
}>) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group relative inline-flex items-center gap-1.5 text-[15px] leading-none text-nexus-warm/55 transition-colors duration-200 hover:text-nexus-green focus-visible:text-nexus-green focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-nexus-green/50 rounded-sm"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-px left-0 h-px w-0 bg-nexus-green/50 transition-all duration-300 group-hover:w-full" />
      </span>
      <span
        className="translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 text-nexus-green/70 text-xs"
        aria-hidden="true"
      >
        →
      </span>
    </a>
  );
}

/** Column heading */
function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-nexus-sage">
      {children}
    </h3>
  );
}

/** Mobile / tablet accordion nav group */
function AccordionGroup({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panelId = `footer-panel-${id}`;
  const btnId = `footer-btn-${id}`;

  return (
    <div className="border-b border-nexus-muted/20 col-span-1">
      <button
        id={btnId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-nexus-green/50 rounded-sm"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-nexus-sage">
          {group.label}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="text-nexus-sage/60 text-lg leading-none select-none"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <ul className="flex flex-col gap-4 pb-5 pt-1">
              {group.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} external={link.external}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Main Footer
export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-nexus-muted/20 bg-nexus-black"
      aria-label="Site footer"
    >
      {/* Atmospheric top gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-nexus-green/20 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-nexus-green/3 to-transparent"
        aria-hidden="true"
      />

      {/* Molecular decorative SVG */}
      <MolecularDecor />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        {/*  MAIN GRID */}
        <div className="grid gap-14 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12 xl:gap-16">
          {/*  BRAND COLUMN  */}
          <div className="flex flex-col">
            <NexusLogo />

            <p className="mt-6 max-w-75 text-[15px] leading-[1.75] text-nexus-warm/50">
              Mapping biology at the scale where discovery begins. Combining
              molecular intelligence, spatial profiling, and computational
              insight to decode living systems.
            </p>

            {/* Secondary CTA */}
            <div className="mt-8">
              <a
                href="#science"
                className="group inline-flex items-center gap-2 rounded-full border border-nexus-green/25 px-5 py-2.5 text-sm text-nexus-green transition-all duration-300 hover:border-nexus-green/60 hover:bg-nexus-green/8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-nexus-green"
              >
                <span>Partner With Biotech Nexus</span>
                <span
                  className="translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-nexus-muted/30 text-nexus-sage transition-all duration-200 hover:border-nexus-green/40 hover:text-nexus-green focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-nexus-green"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-nexus-muted/30 text-nexus-sage transition-all duration-200 hover:border-nexus-green/40 hover:text-nexus-green focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-nexus-green"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/*  DESKTOP NAV COLUMNS  */}
          {navGroups.map((group) => (
            <nav
              key={group.label}
              aria-label={`${group.label} navigation`}
              className="hidden lg:block"
            >
              <ColHeading>{group.label}</ColHeading>
              <ul className="mt-7 flex flex-col gap-4.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} external={link.external}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/*  MOBILE / TABLET ACCORDION NAV (hidden on lg+)  */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-x-8">
          {navGroups.map((group) => (
            <AccordionGroup key={group.label} group={group} />
          ))}
        </div>

        {/*  BOTTOM BAR */}
        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-nexus-muted/20 pt-8 sm:flex-row sm:items-center lg:mt-20">
          {/* Copyright */}
          <p className="font-mono text-[11px] tracking-wide text-nexus-sage/70">
            © 2026 Biotech Nexus. All rights reserved.
          </p>

          {/* Legal + contact */}
          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {[
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
              { label: 'Cookie Policy', href: '#' },
              { label: 'Contact', href: 'mailto:hello@biotechnexus.example' },
            ].map((item, i, arr) => (
              <span key={item.label} className="flex items-center gap-5">
                <a
                  href={item.href}
                  className="font-mono text-[11px] tracking-wide text-nexus-sage/60 transition-colors duration-200 hover:text-nexus-green focus-visible:text-nexus-green focus-visible:outline-none"
                >
                  {item.label}
                </a>
                {i < arr.length - 1 && (
                  <span
                    className="hidden h-3 w-px bg-nexus-muted/40 sm:block"
                    aria-hidden="true"
                  />
                )}
              </span>
            ))}
          </nav>

          {/* Scientific metadata tag — extra wide only */}
          <p className="hidden font-mono text-[10px] tracking-[0.15em] text-nexus-sage/30 uppercase xl:block">
            Cambridge, MA · NXS-v2.4
          </p>
        </div>
      </Container>
    </footer>
  );
}
