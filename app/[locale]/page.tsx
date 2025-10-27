import {useTranslations} from 'next-intl';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechnologySection from '@/components/TechnologySection';
import TeamSection from '@/components/TeamSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <TeamSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}

