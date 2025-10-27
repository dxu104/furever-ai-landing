'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Heart, Users, Zap } from 'lucide-react';
import SectionContainer from './SectionContainer';

export default function AboutSection() {
  const t = useTranslations('about');

  const features = [
    {
      icon: Heart,
      title: 'Emotional Connection',
      description: 'Deepen the bond between pets through shared experiences'
    },
    {
      icon: Users,
      title: 'Social Discovery',
      description: 'Help your pets find compatible friends in the neighborhood'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Advanced algorithms understand pet behavior and preferences'
    }
  ];

  return (
    <SectionContainer id="about" className="gradient-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed font-light">
            {t('description')}
          </p>

          {/* Feature Cards */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-start space-x-4 p-4 rounded-xl glass hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Placeholder for 3D mockup or illustration */}
          <div className="relative w-full h-96 bg-gradient-to-br from-neon-blue/20 to-neon-green/20 rounded-2xl overflow-hidden">
            {/* Mockup of two cats with collars */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Cat 1 */}
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                  </div>
                </motion.div>
                
                {/* Connection line */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-neon-blue to-neon-green" />
                
                {/* Cat 2 */}
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full relative"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-neon-blue/60 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-blue/10 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-green/10 rounded-full blur-xl" />
        </motion.div>
      </div>
    </SectionContainer>
  );
}

