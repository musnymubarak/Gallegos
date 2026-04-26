'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section 
      className="bg-surface-mid"
      style={{ padding: '120px 24px' }}
    >
      <div className="container-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span 
              className="text-primary text-sm font-bold uppercase tracking-[0.2em] block" 
              style={{ fontFamily: 'var(--font-display)', marginBottom: '12px' }}
            >
              Our Story
            </span>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight" 
              style={{ fontFamily: 'var(--font-display)', marginBottom: '24px' }}
            >
              Where Bold <br />
              <span className="text-gradient">Flavours Meet</span> <br />
              Community
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed" style={{ marginBottom: '24px' }}>
              Opened in January 2026, Gallegos brings the fire to Stapleford with signature peri peri chicken, loaded burgers, sizzling platters, and handmade pasta — all crafted with fresh ingredients and bold spices.
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed" style={{ marginBottom: '32px' }}>
              We&apos;re not just a restaurant — we&apos;re a community hub where families, friends, and food lovers come together over incredible meals at unbeatable prices.
            </p>

            {/* Feature Pillars */}
            <div className="grid grid-cols-3 gap-6" style={{ marginBottom: '40px' }}>
              {[
                { icon: '🌿', label: 'Fresh Ingredients' },
                { icon: '🔥', label: 'Bold Flavours' },
                { icon: '❤️', label: 'Community First' },
              ].map((pillar) => (
                <div key={pillar.label} className="text-center p-6 bg-surface rounded-2xl border border-white/5 shadow-lg group hover:border-primary/30 transition-all">
                  <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{pillar.icon}</span>
                  <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight block" style={{ fontFamily: 'var(--font-display)' }}>
                    {pillar.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-base hover:text-primary-light transition-all group"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Learn More About Us
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/restaurant-interior.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              {/* Floating Stats Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-primary" style={{ fontFamily: 'var(--font-display)' }}>2026</div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">Est.</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-primary" style={{ fontFamily: 'var(--font-display)' }}>20+</div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">Dishes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-primary" style={{ fontFamily: 'var(--font-display)' }}>5★</div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">Rated</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
