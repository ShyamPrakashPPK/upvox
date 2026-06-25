"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { AGENCY_NAME, NAV_LINKS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function MobileMenu({
  isOpen,
  onClose,
  activeSection,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-bg/80 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            className="fixed top-0 right-0 z-[95] flex h-full w-full max-w-sm flex-col bg-bg-secondary px-8 pt-24 pb-8 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.sectionId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block py-3 text-lg font-medium transition-colors ${
                      activeSection === link.sectionId
                        ? "text-accent"
                        : "text-muted hover:text-text"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8">
              <MagneticButton href="#contact" variant="primary" className="w-full">
                Book Consultation
              </MagneticButton>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sectionIds = NAV_LINKS.map((l) => l.sectionId);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[80] w-full transition-all duration-500 ${
          isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="#home"
            className="font-heading text-2xl font-bold tracking-tight text-text"
            aria-label={`${AGENCY_NAME} home`}
          >
            {AGENCY_NAME}
            <span className="text-accent">.</span>
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.sectionId}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.sectionId
                    ? "text-accent"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton href="#contact" variant="primary">
              Book Consultation
            </MagneticButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
