'use client';

import { siteConfig } from '@/lib/constants';

export default function PromoStrip() {
  const promoText = siteConfig.promos.join('  •  ');
  const doubled = `${promoText}  •  ${promoText}  •  `;

  return (
    <div className="relative bg-primary overflow-hidden py-3">
      <div className="container-center">
        <div className="animate-marquee whitespace-nowrap flex">
          <span
            className="text-sm font-bold uppercase tracking-widest text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {doubled}
          </span>
          <span
            className="text-sm font-bold uppercase tracking-widest text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {doubled}
          </span>
        </div>
      </div>
    </div>
  );
}
