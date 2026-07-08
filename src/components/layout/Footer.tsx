import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SOCIAL_ICON_MAP } from "@/components/icons/SocialIcons";
import {
  AGENCY_NAME,
  CONTACT_INFO,
  FOOTER_SERVICES,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#home" className="inline-flex">
              <BrandLogo size="sm" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Kerala&apos;s premium digital marketing agency helping brands grow
              through strategy, creativity, and measurable results.
            </p>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.platform];
                return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  aria-label={social.label}
                >
                  <Icon size={16} />
                </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.sectionId}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              Services
            </h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.slice(0, 6).map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  +91 {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {CONTACT_INFO.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted">
            &copy; {currentYear} {AGENCY_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Best Digital Marketing Agency in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
}
