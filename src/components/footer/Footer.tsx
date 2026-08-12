import { NexusLogo } from "../ui/NexusLogo";
import { navLinks } from "../../data/content";

export function Footer() {
  return (
    <footer className="border-t border-nexus-muted/20 bg-nexus-black">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr,1fr,1fr,1fr]">
          <div>
            <NexusLogo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-nexus-warm/60">
              Biotech Nexus combines molecular biology, advanced imaging, and
              computational intelligence to decode biological systems and
              accelerate precision therapeutics.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-nexus-muted/30 text-nexus-sage transition-all hover:border-nexus-green/50 hover:text-nexus-green"
                aria-label="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-nexus-muted/30 text-nexus-sage transition-all hover:border-nexus-green/50 hover:text-nexus-green"
                aria-label="X (Twitter)"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-wider text-nexus-sage uppercase">
              Navigation
            </h4>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-nexus-warm/60 transition-colors hover:text-nexus-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-wider text-nexus-sage uppercase">
              Contact
            </h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="mailto:hello@biotechnexus.example"
                  className="text-sm text-nexus-warm/60 transition-colors hover:text-nexus-green"
                >
                  hello@biotechnexus.example
                </a>
              </li>
              <li>
                <a
                  href="mailto:research@biotechnexus.example"
                  className="text-sm text-nexus-warm/60 transition-colors hover:text-nexus-green"
                >
                  research@biotechnexus.example
                </a>
              </li>
              <li>
                <span className="text-sm text-nexus-warm/60">
                  Cambridge, MA
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-wider text-nexus-sage uppercase">
              Legal
            </h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-nexus-warm/60 transition-colors hover:text-nexus-green"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-nexus-warm/60 transition-colors hover:text-nexus-green"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-nexus-warm/60 transition-colors hover:text-nexus-green"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-nexus-muted/20 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-nexus-sage">
            © 2026 Biotech Nexus. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-nexus-sage/60">
            This is a fictional company created for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
