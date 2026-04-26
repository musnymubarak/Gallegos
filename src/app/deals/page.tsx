'use client';

import { motion } from 'framer-motion';
import { deals } from '@/lib/menuData';

export default function DealsPage() {
  return (
    <>
      <section 
        className="bg-gradient-to-b from-surface to-background px-6"
        style={{ paddingTop: '200px', paddingBottom: '100px' }}
      >
        <div className="container-center" style={{ textAlign: 'center' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-[0.2em] block"
            style={{ fontFamily: 'var(--font-display)', marginBottom: '16px' }}
          >
            Limited Time
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white"
            style={{ fontFamily: 'var(--font-display)', marginBottom: '24px' }}
          >
            Deals & <span className="text-gradient">Offers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl leading-relaxed"
            style={{ maxWidth: '680px', margin: '0 auto' }}
          >
            Don&apos;t miss out on our incredible offers. Show the deal in store or mention when ordering.
          </motion.p>
        </div>
      </section>

      <section 
        className="bg-background"
        style={{ padding: '120px 24px' }}
      >
        <div className="container-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {deals.map((deal, i) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 shadow-xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-surface-mid" style={{ height: '300px' }}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${deal.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  <div className="absolute top-6 left-6 px-5 py-2.5 bg-primary rounded-full text-white text-sm font-black uppercase tracking-widest animate-glow shadow-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    🔥 Hot Deal
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '40px' }}>
                  <h3 
                    className="text-3xl font-black text-white group-hover:text-primary transition-colors uppercase tracking-tight" 
                    style={{ fontFamily: 'var(--font-display)', marginBottom: '16px' }}
                  >
                    {deal.title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed" style={{ marginBottom: '24px' }}>
                    {deal.description}
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-base text-text-secondary">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {deal.terms}
                    </div>
                    <div className="flex items-center gap-3 text-base text-success font-medium">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Valid until {new Date(deal.validUntil).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-surface rounded-3xl border border-white/5 shadow-2xl"
            style={{ marginTop: '80px', padding: '60px' }}
          >
            <h3 className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)', marginBottom: '16px' }}>
              Want More Deals?
            </h3>
            <p className="text-text-secondary text-lg" style={{ marginBottom: '32px' }}>
              Follow us on Facebook for the latest offers, new menu items, and exclusive promotions.
            </p>
            <a
              href="https://www.facebook.com/Gallegos.UK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-base transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Follow on Facebook
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
