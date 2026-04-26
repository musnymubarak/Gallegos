'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, categories } from '@/lib/menuData';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('burgers');

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section
        className="bg-gradient-to-b from-surface to-background relative overflow-hidden"
        style={{ paddingTop: '200px', paddingBottom: '60px', paddingLeft: '24px', paddingRight: '24px' }}
      >
        <div className="container-center" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3"
            style={{ marginBottom: '16px' }}
          >
            <span className="h-px w-8 bg-primary/50" />
            <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--font-display)' }}>
              Explore
            </span>
            <span className="h-px w-8 bg-primary/50" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)', marginBottom: '24px' }}
          >
            Our <span className="text-gradient">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-base md:text-lg leading-relaxed"
            style={{ maxWidth: '680px', margin: '0 auto' }}
          >
            From signature burgers to sizzling platters — freshly prepared with bold flavours and premium ingredients.
          </motion.p>
        </div>
      </section>

      {/* Sticky Category Tabs */}
      <div className="sticky top-24 z-30 bg-black/90 backdrop-blur-md border-b border-white/5" style={{ padding: '0 24px' }}>
        <div className="container-center">
          <div className="flex overflow-x-auto gap-3 scrollbar-hide" style={{ padding: '20px 0' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 rounded-full text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-surface-light text-text-secondary hover:text-white hover:bg-surface-mid'
                }`}
                style={{ fontFamily: 'var(--font-display)', padding: '12px 24px' }}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <section className="bg-background" style={{ padding: '60px 24px 80px' }}>
        <div className="container-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              style={{ gap: '32px' }}
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-surface-mid" style={{ height: '220px' }}>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    {item.badge && (
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        item.badge === 'New' ? 'bg-success text-white'
                        : item.isPromo ? 'bg-primary text-white'
                        : item.badge === 'Collection Only' ? 'bg-surface-light text-white border border-white/20'
                        : 'bg-accent text-black'
                      }`} style={{ fontFamily: 'var(--font-display)' }}>
                        {item.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: '24px' }}>
                    <h3
                      className="text-white font-bold text-lg group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'var(--font-display)', marginBottom: '10px' }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed" style={{ marginBottom: '16px' }}>
                      {item.description}
                    </p>
                    {item.variants && (
                      <div className="flex flex-wrap gap-2" style={{ marginBottom: '16px' }}>
                        {item.variants.map((v) => (
                          <span key={v} className="text-xs bg-surface-mid text-text-secondary px-3 py-1 rounded-full border border-white/5">
                            {v}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className={`font-bold text-xl ${item.price === 'Coming Soon' ? 'text-text-secondary text-base' : 'text-accent'}`} style={{ fontFamily: 'var(--font-display)' }}>
                        {item.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center" style={{ padding: '80px 0' }}>
              <p className="text-text-secondary text-lg">No items in this category yet. Check back soon!</p>
            </div>
          )}

          {/* Allergen Notice */}
          <div
            className="bg-surface rounded-2xl border border-white/5 text-center"
            style={{ marginTop: '64px', padding: '32px' }}
          >
            <p className="text-text-secondary text-sm">
              ⚠️ <strong className="text-white">Allergen Notice:</strong> Our food may contain allergens. Please inform our staff of any dietary requirements or allergies before ordering. Full allergen information is available upon request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
