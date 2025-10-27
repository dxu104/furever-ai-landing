'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Volume2, Activity, Brain, Heart, Sparkles, Star } from 'lucide-react';
import SectionContainer from './SectionContainer';

export default function TechnologySection() {
  const t = useTranslations('technology');

  const iconMap = {
    'Volume2': Volume2,
    'Activity': Activity,
    'Brain': Brain,
    'Heart': Heart,
    'Star': Star
  };

  const features = t.raw('features').map((feature: any, index: number) => {
    const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Heart;
    return {
      icon: IconComponent,
      title: feature.title,
      description: feature.description,
      gradient: feature.gradient,
      delay: 0.1 * (index + 1)
    };
  });

  return (
    <SectionContainer id="technology" className="bg-white">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-clip-text text-transparent">
            {t('title')}
          </span>
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p
          className="text-lg text-gray-600 mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('subtitle')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature: any, index: number) => (
          <motion.div
            key={feature.title}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: feature.delay }}
          >
            <div className="relative p-8 rounded-2xl glass hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 h-full">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <motion.div
                className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: feature.gradient === 'from-purple-500 to-pink-500' ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' :
                             feature.gradient === 'from-blue-500 to-cyan-500' ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' :
                             feature.gradient === 'from-green-500 to-emerald-500' ? 'linear-gradient(135deg, #10b981, #059669)' :
                             feature.gradient === 'from-orange-500 to-red-500' ? 'linear-gradient(135deg, #f97316, #ef4444)' :
                             'linear-gradient(135deg, #6b7280, #4b5563)'
                }}
                whileHover={{ rotate: 5 }}
              >
                {feature.icon ? (
                  <feature.icon className="w-8 h-8 text-white" />
                ) : (
                  <div className="w-8 h-8 bg-white rounded"></div>
                )}
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-colors duration-300" />
            </div>

            {/* Floating sparkles */}
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-neon-blue" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="inline-flex items-center space-x-2 text-gray-600">
          <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
          <span className="text-sm font-medium">Powered by Advanced AI Technology</span>
          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
        </div>
      </motion.div>
    </SectionContainer>
  );
}

