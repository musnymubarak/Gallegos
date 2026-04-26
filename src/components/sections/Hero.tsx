'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-kenburns bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
          }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-24" style={{ textAlign: 'center' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm text-white/90 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
            Now Open in Stapleford
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.15]"
          style={{ fontFamily: 'var(--font-display)', marginBottom: '40px', textAlign: 'center' }}
        >
          <span className="text-white">Bold</span> <span className="text-gradient">Flavours.</span>
          <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide" style={{ marginTop: '16px' }}>
            Stapleford&apos;s Finest.
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', marginTop: '20px', marginBottom: '60px', maxWidth: '800px', margin: '20px auto 60px' }}
        >
          Sizzling burgers, fiery sizzlers, and handcrafted pasta — <br className="hidden lg:block" /> all under one roof in the heart of Nottingham.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          style={{ marginTop: '10px' }}
        >
          <Link
            href="/menu"
            className="group relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-light text-white rounded-[16px] font-black uppercase tracking-[0.15em] text-base transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,16,46,0.5)] hover:-translate-y-1"
            style={{ fontFamily: 'var(--font-display)', minHeight: '64px', minWidth: '240px', padding: '18px 48px' }}
          >
            View Menu
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/order"
            className="inline-flex items-center justify-center gap-3 border-[3px] border-white/30 hover:border-primary text-white rounded-[16px] font-black uppercase tracking-[0.15em] text-base transition-all duration-500 hover:bg-primary/10 hover:-translate-y-1"
            style={{ fontFamily: 'var(--font-display)', minHeight: '64px', minWidth: '240px', padding: '18px 48px' }}
          >
            Order Now
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
