'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Play, ChevronDown, Apple, Smartphone, Download } from 'lucide-react';
import Button from './Button';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Light Gray-White Background */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white" />
        
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/20 via-transparent to-emerald-100/10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/10 via-transparent to-gray-200/10" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-300/15 to-gray-200/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-200/15 to-green-200/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-gray-200/10 to-gray-100/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(156, 163, 175, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)`
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent drop-shadow-lg">
              {t('tagline')}
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Watch Video Button */}
          <Button
            variant="primary"
            size="lg"
            className="group bg-gradient-to-r from-neon-blue to-neon-green hover:from-blue-500 hover:to-green-500 shadow-2xl hover:shadow-neon-blue/25"
            href="https://youtube.com/watch?v=your-video-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-lg">{t('watchVideo')}</span>
          </Button>

        </motion.div>

      </div>

      {/* Light Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gray-300/25 to-gray-200/25 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-300/25 to-green-300/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-gray-200/20 to-gray-100/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-gray-300/15 to-gray-200/15 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-gradient-to-r from-emerald-300/20 to-teal-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
}

