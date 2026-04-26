'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/constants';
import Link from 'next/link';

export default function FindUs() {
  return (
    <section 
      className="bg-background" 
      id="find-us"
      style={{ padding: '120px 24px' }}
    >
      <div className="container-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span 
            className="text-primary text-sm font-bold uppercase tracking-[0.2em] block" 
            style={{ fontFamily: 'var(--font-display)', marginBottom: '12px' }}
          >
            Visit Us
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white" 
            style={{ fontFamily: 'var(--font-display)', marginBottom: '20px' }}
          >
            Find <span className="text-gradient">Gallegos</span>
          </h2>
          <p 
            className="text-text-secondary text-lg md:text-xl leading-relaxed"
            style={{ maxWidth: '680px', margin: '0 auto' }}
          >
            We&apos;re right in the heart of Stapleford, Nottingham. Pop in and taste the difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl h-[400px] lg:h-full min-h-[500px]"
          >
            <iframe
              src={siteConfig.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gallegos Restaurant Location"
            />
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            {/* High-Impact Unified Info Card */}
            <div className="bg-[#111111] rounded-[40px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex-1 flex flex-col overflow-hidden">
              {/* Address Section */}
              <div className="py-12 px-10 border-b border-white/5 hover:bg-white/[0.03] transition-all group">
                <div className="flex items-start gap-10">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform mt-1">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-display)' }}>Address</h3>
                    <p className="text-white text-lg md:text-xl font-bold leading-relaxed max-w-xs">{siteConfig.address.full}</p>
                  </div>
                </div>
              </div>

              {/* Phone Section */}
              <div className="py-12 px-10 border-b border-white/5 hover:bg-white/[0.03] transition-all group">
                <div className="flex items-start gap-10">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform mt-1">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-display)' }}>Phone</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-white text-xl md:text-2xl font-black hover:text-primary transition-colors block">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours Section */}
              <div className="py-12 px-10 flex-1">
                <div className="flex items-start gap-10 mb-10">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/40 mt-1">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-8" style={{ fontFamily: 'var(--font-display)' }}>Opening Hours</h3>
                    <div className="space-y-4">
                      {siteConfig.openingHours.map((item) => (
                        <div key={item.day} className="flex justify-between items-center text-base md:text-lg border-b border-white/5 pb-3 last:border-0 last:pb-0">
                          <span className="text-text-secondary font-semibold">{item.day}</span>
                          <span className="text-white font-black">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="p-10 pt-0">
                <Link
                  href="/contact"
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-6 rounded-full font-black uppercase tracking-[0.2em] text-xl transition-all duration-500 shadow-2xl shadow-primary/30 hover:shadow-primary/60 hover:-translate-y-2 active:scale-95"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
