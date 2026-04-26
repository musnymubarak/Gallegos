'use client';

import Link from 'next/link';
import { siteConfig, navLinks } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="container-center py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>G</span>
              </div>
              <span className="text-xl font-extrabold tracking-wider uppercase text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Gallegos
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {siteConfig.tagline} Bold flavours and sizzling dishes in the heart of Stapleford.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface-mid hover:bg-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/order"
                  className="text-primary hover:text-primary-light text-sm font-semibold transition-colors duration-300"
                >
                  Order Now →
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Opening Hours
            </h3>
            <ul className="space-y-2">
              {siteConfig.openingHours.map((item) => (
                <li key={item.day} className="flex justify-between text-sm">
                  <span className="text-text-secondary">{item.day}</span>
                  <span className="text-white/80">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-text-secondary">
                  <p>{siteConfig.address.line1}</p>
                  <p>{siteConfig.address.line2}</p>
                  <p>{siteConfig.address.postcode}</p>
                </div>
              </div>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs">
            © {currentYear} Gallegos. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-secondary">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <span>T&C Apply</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
