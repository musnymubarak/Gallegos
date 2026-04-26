import Hero from '@/components/sections/Hero';
import PromoStrip from '@/components/sections/PromoStrip';
import FeaturedMenu from '@/components/sections/FeaturedMenu';
import AboutTeaser from '@/components/sections/AboutTeaser';
import FindUs from '@/components/sections/FindUs';

export default function Home() {
  return (
    <>
      <Hero />
      <PromoStrip />
      <FeaturedMenu />
      <AboutTeaser />
      <FindUs />
    </>
  );
}
