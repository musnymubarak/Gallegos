'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  const pillars = [
    { icon: '🌿', title: 'Fresh Ingredients', desc: 'Every dish is prepared fresh, using quality ingredients sourced with care.' },
    { icon: '🔥', title: 'Bold Flavours', desc: 'Our signature peri peri spice blends and sauces bring the heat you crave.' },
    { icon: '❤️', title: 'Community First', desc: 'We\'re more than a restaurant — we\'re a gathering place for Stapleford.' },
    { icon: '💰', title: 'Unbeatable Value', desc: 'Premium food at prices that keep you coming back. Meals from just £4.99.' },
    { icon: '⚡', title: 'Fast Service', desc: 'Quick preparation without compromising quality. Dine in or grab and go.' },
    { icon: '🏠', title: 'Family Friendly', desc: 'A welcoming space for families, friends, and food lovers of all ages.' },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative overflow-hidden px-4 md:px-6"
        style={{ paddingTop: '140px', paddingBottom: '60px' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-mid to-background" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/restaurant-interior.jpg')` }} />
        </div>
        <div className="container-center relative z-10" style={{ textAlign: 'center' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-[0.2em] block"
            style={{ fontFamily: 'var(--font-display)', marginBottom: '12px' }}
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white"
            style={{ fontFamily: 'var(--font-display)', marginBottom: '24px' }}
          >
            About <span className="text-gradient">Gallegos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl leading-relaxed"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            Born from a passion for bold, fiery flavours and a love for community, Gallegos opened its doors
            on 19th January 2026 in the heart of Stapleford, Nottingham.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section
        className="bg-background"
        style={{ padding: '60px 16px' }}
      >
        <div className="container-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white"
                style={{ fontFamily: 'var(--font-display)', marginBottom: '32px' }}
              >
                Where It <span className="text-gradient">All Began</span>
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed text-base md:text-lg">
                <p>
                  Gallegos was built on a simple belief: everyone deserves exceptional food at honest prices.
                  What started as a dream to bring bold, vibrant flavours to Stapleford has become a beloved
                  local favourite in just weeks.
                </p>
                <p>
                  Our menu is a celebration of flavour — from our signature peri peri chicken that packs the
                  perfect punch, to sizzling platters that arrive at your table with a dramatic hiss, to
                  handmade pasta dishes that offer comfort in every bite.
                </p>
                <p>
                  Located at Unit 3, Hickings Lane, we&apos;ve created a warm, welcoming space where families
                  come for dinner, friends gather over loaded burgers, and food lovers discover their new
                  favourite restaurant.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-surface-mid border border-white/5 shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/about-team.jpg')` }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-3xl -z-10 hidden md:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section
        className="bg-surface-mid"
        style={{ padding: '60px 16px' }}
      >
        <div className="container-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginBottom: '64px' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Why Choose <span className="text-gradient">Gallegos</span>?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-3xl p-10 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 text-center group shadow-xl"
              >
                <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">{pillar.icon}</span>
                <h3
                  className="text-white font-bold text-xl uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-display)', marginBottom: '16px' }}
                >
                  {pillar.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
