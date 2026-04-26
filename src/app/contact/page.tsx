'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { siteConfig } from '@/lib/constants';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (data.honeypot) return; // spam bot
    // In production, this would POST to /api/contact
    console.log('Form submitted:', data);
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section
        className="bg-gradient-to-b from-surface to-background px-4 md:px-6"
        style={{ paddingTop: '140px', paddingBottom: '60px' }}
      >
        <div className="container-center" style={{ textAlign: 'center' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-[0.2em] block"
            style={{ fontFamily: 'var(--font-display)', marginBottom: '16px' }}
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white"
            style={{ fontFamily: 'var(--font-display)', marginBottom: '24px' }}
          >
            Contact <span className="text-gradient">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl leading-relaxed"
            style={{ maxWidth: '680px', margin: '0 auto' }}
          >
            Have a question or want to place a large order? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section 
        className="bg-background relative"
        style={{ padding: '80px 16px' }}
      >
        <div className="container-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-start">
            
            {/* Left Column - Essential Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-12"
            >
              {/* Contact List */}
              <div className="space-y-12">
                <h3 
                  className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-wider md:tracking-widest" 
                  style={{ fontFamily: 'var(--font-display)', marginBottom: '40px' }}
                >
                  Contact <span className="text-gradient">Information</span>
                </h3>
                
                <div className="bg-[#111111] rounded-2xl md:rounded-[40px] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  {[
                    {
                      icon: (
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      title: 'Visit Us',
                      content: siteConfig.address.full,
                      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`,
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      title: 'Call Us',
                      content: siteConfig.phoneDisplay,
                      href: `tel:${siteConfig.phone}`,
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      title: 'Email',
                      content: siteConfig.email,
                      href: `mailto:${siteConfig.email}`,
                    },
                  ].map((item, idx) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`flex items-start gap-4 md:gap-8 p-5 md:p-10 hover:bg-white/[0.04] transition-all duration-500 group ${idx !== 2 ? 'border-b border-white/5' : ''}`}
                    >
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-primary/30 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 md:mb-3" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h4>
                        <p className="text-white text-sm md:text-lg lg:text-xl group-hover:text-primary transition-colors font-bold leading-relaxed break-all md:break-normal">{item.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Opening Hours Block */}
              <div className="bg-[#111111] rounded-2xl md:rounded-[40px] p-5 md:p-10 border border-white/10 relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                  <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="flex items-start gap-4 md:gap-10 mb-6 md:mb-10 relative z-10">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30 mt-1">
                    <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 
                    className="text-primary text-lg md:text-2xl font-black uppercase tracking-wider md:tracking-widest mt-2 md:mt-3" 
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Opening <span className="text-white">Hours</span>
                  </h3>
                </div>
                
                <div className="space-y-3 md:space-y-4 relative z-10">
                  {siteConfig.openingHours.map((item) => (
                    <div key={item.day} className="flex justify-between items-center border-b border-white/5 pb-2 md:pb-4 last:border-0 last:pb-0 gap-4">
                      <span className="text-text-secondary font-semibold text-sm md:text-lg whitespace-nowrap">{item.day}</span>
                      <span className="text-white font-black text-sm md:text-lg whitespace-nowrap">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Interaction */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-12"
            >
              {/* Form Container */}
              {submitted ? (
                <div 
                  className="bg-surface rounded-2xl md:rounded-[48px] border-2 border-success/30 text-center h-full flex flex-col items-center justify-center p-8 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center text-4xl mb-8">✅</div>
                  <h3 className="text-4xl font-black text-white mb-6 uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                    Thank <span className="text-gradient">You!</span>
                  </h3>
                  <p className="text-text-secondary text-xl max-w-md mx-auto leading-relaxed mb-10">
                    Your message has been sent. We&apos;ll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-10 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold uppercase tracking-widest hover:bg-primary transition-all"
                  >
                    Go Back
                  </button>
                </div>
              ) : (
                <div 
                  className="bg-surface rounded-2xl md:rounded-[48px] border border-white/5 flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  {/* Header */}
                  <div 
                    className="bg-white/[0.03] border-b border-white/5"
                    style={{ padding: '30px 24px' }}
                  >
                    <h3 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider md:tracking-widest leading-tight" 
                      style={{ fontFamily: 'var(--font-display)', margin: 0 }}
                    >
                      Send us a <span className="text-gradient">Message</span>
                    </h3>
                  </div>
                  
                  {/* Form Body */}
                  <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className="flex flex-col"
                    style={{ padding: '24px' }}
                  >
                    <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginBottom: '32px' }}>
                      <div className="flex flex-col gap-3">
                        <label className="text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-50 ml-1" style={{ fontFamily: 'var(--font-display)' }}>Full Name</label>
                        <input
                          {...register('name', { required: true })}
                          className="w-full bg-surface-mid border border-white/10 rounded-xl px-6 h-[60px] text-white focus:outline-none focus:border-primary transition-all"
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="flex flex-col gap-3">
                        <label className="text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-50 ml-1" style={{ fontFamily: 'var(--font-display)' }}>Email Address</label>
                        <input
                          {...register('email', { required: true })}
                          className="w-full bg-surface-mid border border-white/10 rounded-xl px-6 h-[60px] text-white focus:outline-none focus:border-primary transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3" style={{ marginBottom: '32px' }}>
                      <label className="text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-50 ml-1" style={{ fontFamily: 'var(--font-display)' }}>Subject</label>
                      <input
                        {...register('subject', { required: true })}
                        className="w-full bg-surface-mid border border-white/10 rounded-xl px-6 h-[60px] text-white focus:outline-none focus:border-primary transition-all"
                        placeholder="Inquiry regarding..."
                      />
                    </div>

                    <div className="flex flex-col gap-3" style={{ marginBottom: '40px' }}>
                      <label className="text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-50 ml-1" style={{ fontFamily: 'var(--font-display)' }}>Message</label>
                      <textarea
                        {...register('message', { required: true })}
                        rows={5}
                        className="w-full bg-surface-mid border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary transition-all resize-none min-h-[160px]"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-dark text-white rounded-xl font-black uppercase tracking-widest text-lg transition-all h-[70px] shadow-lg shadow-primary/20 relative overflow-hidden group"
                    >
                      <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    </button>
                  </form>
                </div>
              )}

              {/* Map */}
              <div 
                className="rounded-2xl md:rounded-[40px] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
                style={{ height: '400px' }}
              >
                <iframe
                  src={siteConfig.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Gallegos Location"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
