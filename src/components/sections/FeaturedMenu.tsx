'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { menuItems } from '@/lib/menuData';

export default function FeaturedMenu() {
  const featured = menuItems.filter(
    (item) => item.badge === 'Popular' || item.badge === 'Best Seller' || item.badge === '40% Off'
  ).slice(0, 6);

  return (
    <section 
      className="bg-surface-mid py-20 md:py-[120px] px-4 md:px-6"
    >
      <div className="container-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-[0.2em] block" style={{ fontFamily: 'var(--font-display)', marginBottom: '12px' }}>
            Our Menu
          </span>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black uppercase text-white" style={{ fontFamily: 'var(--font-display)', marginBottom: '16px' }}>
            Featured <span className="text-gradient">Dishes</span>
          </h2>
          <p 
            className="text-text-secondary text-base md:text-xl leading-relaxed"
            style={{ maxWidth: '680px', margin: '0 auto' }}
          >
            From our signature burgers to sizzling platters — explore what makes Gallegos unforgettable.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-surface rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-surface-mid h-[200px] md:h-[240px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                {item.badge && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    item.badge === 'New' ? 'bg-success text-white'
                    : item.isPromo ? 'bg-primary text-white'
                    : 'bg-accent text-black'
                  }`} style={{ fontFamily: 'var(--font-display)' }}>
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 
                  className="text-white font-bold text-lg md:text-xl group-hover:text-primary transition-colors uppercase tracking-tight mb-2 md:mb-3" 
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.name}
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-5 md:mb-6">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-accent font-black text-xl md:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.price}
                  </span>
                  <Link
                    href="/menu"
                    className="bg-primary/10 text-primary px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-1 md:gap-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-16"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-widest text-sm md:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            View Full Menu
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
