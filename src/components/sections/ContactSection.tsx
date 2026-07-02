"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SOCIAL_ICON_MAP } from "@/components/icons/SocialIcons";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  business: "",
  message: "",
};

const mapEmbedUrl =
  "https://maps.google.com/maps?q=MG+Road,+Ravipuram,+Kochi,+Kerala&z=15&output=embed";

export function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-bg-secondary"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,162,39,0.08),transparent_60%)] animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="contact-heading"
          title="Let's Grow Your Business"
          subtitle="Ready to transform your digital presence? Get in touch for a free consultation."
          align="center"
        />

        <div className="space-y-12">
          <RevealOnScroll>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-accent/30 bg-card p-10 text-center"
              >
                <p className="font-heading text-2xl font-bold text-text">
                  Thank you!
                </p>
                <p className="mt-3 text-muted">
                  We&apos;ve received your message and will get back to you
                  within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm"
                aria-label="Contact form"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-muted"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text transition-colors focus:border-accent/50 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-muted"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text transition-colors focus:border-accent/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-muted"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text transition-colors focus:border-accent/50 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business"
                      className="mb-2 block text-sm font-medium text-muted"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text transition-colors focus:border-accent/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text transition-colors focus:border-accent/50 focus:outline-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Get Free Consultation
                </MagneticButton>
              </form>
            )}
          </RevealOnScroll>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            <RevealOnScroll delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="mb-5 font-heading text-lg font-semibold text-text">
                  Contact Details
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">Email</p>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="mt-1 block text-text transition-colors hover:text-accent"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">Phone</p>
                      <a
                        href={`tel:+91${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                        className="mt-1 block text-text transition-colors hover:text-accent"
                      >
                        +91 {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">Location</p>
                      <a
                        href={CONTACT_INFO.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-start gap-1.5 text-text transition-colors hover:text-accent"
                      >
                        <span>{CONTACT_INFO.address}</span>
                        <ExternalLink
                          size={14}
                          className="mt-1 shrink-0 opacity-60"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div className="h-full rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <p className="mb-4 text-sm font-medium text-muted">Follow Us</p>
                <div className="flex flex-col gap-3">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = SOCIAL_ICON_MAP[social.platform];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted transition-all hover:border-accent/40 hover:text-accent"
                        aria-label={`Follow Upvox on ${social.label}`}
                      >
                        <Icon size={18} />
                        <span>{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="h-full overflow-hidden rounded-2xl border border-border bg-card/50">
                <iframe
                  title="Upvox Creative office location on Google Maps"
                  src={mapEmbedUrl}
                  className="h-52 w-full border-0 grayscale transition-[filter] duration-500 hover:grayscale-0 lg:h-full lg:min-h-[220px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-t border-border px-4 py-3 text-sm text-muted transition-colors hover:text-accent"
                >
                  Open in Google Maps
                  <ExternalLink size={14} />
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
