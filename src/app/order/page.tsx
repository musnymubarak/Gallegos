'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/constants';

export default function OrderPage() {
  const platforms = [
    {
      name: 'JustEat',
      logo: '🟠',
      desc: 'Order for delivery or collection via JustEat',
      color: 'from-orange-600 to-orange-500',
      href: '#',
    },
    {
      name: 'UberEats',
      logo: '🟢',
      desc: 'Get Gallegos delivered to your door with UberEats',
      color: 'from-green-600 to-green-500',
      href: '#',
    },
    {
      name: 'Deliveroo',
      logo: '🔵',
      desc: 'Fast delivery through Deliveroo',
      color: 'from-teal-600 to-teal-500',
      href: '#',
    },
  ];

  return (
    <>
      <section 
        className="bg-gradient-to-b from-surface to-background px-6"
        style={{ paddingTop: '200px', paddingBottom: '100px' }}
      >
        <div className="max-w-7xl mx-auto" style={{ textAlign: 'center' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-[0.2em] block"
            style={{ fontFamily: 'var(--font-display)', marginBottom: '16px' }}
          >
            Hungry?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white"
            style={{ fontFamily: 'var(--font-display)', marginBottom: '24px' }}
          >
            Order <span className="text-gradient">Now</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl leading-relaxed"
            style={{ maxWidth: '680px', margin: '0 auto' }}
          >
            Choose how you&apos;d like to get your Gallegos fix — collection or delivery.
          </motion.p>
        </div>
      </section>

      <section 
        className="bg-background"
        style={{ padding: '120px 24px' }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Collection Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface rounded-3xl border border-primary/30 text-center shadow-2xl"
            style={{ padding: '60px 40px', marginBottom: '80px' }}
          >
            <div className="text-5xl mb-6">📍</div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight" style={{ fontFamily: 'var(--font-display)', marginBottom: '12px' }}>
              Collection
            </h2>
            <p className="text-text-secondary text-lg" style={{ marginBottom: '24px' }}>Order by phone and collect from our store</p>
            <p 
              className="text-white font-bold text-xl md:text-2xl" 
              style={{ fontFamily: 'var(--font-display)', marginBottom: '40px' }}
            >
              {siteConfig.address.full}
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-base transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.phoneDisplay}
            </a>
          </motion.div>

          {/* Delivery Platforms */}
          <h2 
            className="text-3xl font-black text-white text-center uppercase tracking-tight" 
            style={{ fontFamily: 'var(--font-display)', marginBottom: '48px' }}
          >
            Or Order <span className="text-gradient">Delivery</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, i) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-surface rounded-3xl p-10 border border-white/5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl text-center"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform text-4xl shadow-lg`}>
                  {platform.logo}
                </div>
                <h3 className="text-white font-bold text-2xl mb-3 uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                  {platform.name}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">{platform.desc}</p>
              </motion.a>
            ))}
          </div>

          {/* Note */}
          <div 
            className="bg-surface-mid rounded-3xl border border-white/5 text-center shadow-lg"
            style={{ marginTop: '64px', padding: '32px' }}
          >
            <p className="text-text-secondary text-base leading-relaxed">
              ⚠️ <strong className="text-white">Note:</strong> Some items (e.g., 6 Peri Peri Buffalo Wings + Chips) are available for collection only. Delivery platform availability may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
