'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to content
      </a>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-white/5'
            : 'bg-black/40 backdrop-blur-[2px]'
        }`}
      >
        <nav className="container-center h-24 flex items-center justify-between px-12 lg:px-16">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>G</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/30 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
              </div>
              <span className="text-2xl font-extrabold tracking-wider uppercase text-white hidden sm:block" style={{ fontFamily: 'var(--font-display)' }}>
                Gallegos
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-10 flex-[2]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  pathname === link.href ? 'text-primary' : 'text-white/70 hover:text-white'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <Link
              href="/order"
              className="bg-primary hover:bg-primary-light text-white px-10 py-3.5 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,16,46,0.4)] hover:-translate-y-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex-1 flex justify-end">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative w-12 h-12 flex items-center justify-center z-50 bg-white/5 rounded-full"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={isMobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block w-7 h-0.5 bg-white rounded-full origin-center"
                />
                <motion.span
                  animate={isMobileOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  className="block w-5 h-0.5 bg-white rounded-full"
                />
                <motion.span
                  animate={isMobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block w-7 h-0.5 bg-white rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-bold uppercase tracking-widest transition-colors ${
                      pathname === link.href ? 'text-primary' : 'text-white hover:text-primary'
                    }`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link
                  href="/order"
                  className="mt-4 inline-block bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider transition-all"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Order Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
