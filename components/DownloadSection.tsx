'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Apple, Smartphone, Youtube, Twitter, Instagram, Mail } from 'lucide-react';
import Button from './Button';

export default function DownloadSection() {
  const t = useTranslations('download');

  const appStores = [
    {
      icon: Apple,
      title: t('appStore'),
      href: '#',
      gradient: 'from-gray-900 to-black',
      delay: 0.1
    },
    {
      icon: Smartphone,
      title: t('googlePlay'),
      href: '#',
      gradient: 'from-green-600 to-green-700',
      delay: 0.2
    }
  ];

  const socialLinks = [
    { icon: Youtube, href: '#', label: 'YouTube', color: 'text-red-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'text-pink-500' },
    { icon: Mail, href: 'mailto:info@furever-ai.com', label: 'Email', color: 'text-gray-600' },
  ];

  return (
    <section id="download" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-purple-500/10 to-neon-green/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300D9FF%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* App Store Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {appStores.map((store, index) => (
            <motion.a
              key={store.title}
              href={store.href}
              className={`group relative inline-flex items-center px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r ${store.gradient}`}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: store.delay }}
              whileHover={{ y: -2 }}
            >
              <store.icon className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform" />
              {store.title}
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">Follow our journey</p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ${color} hover:bg-white/40 transition-all duration-300`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Stay Updated
            </h3>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent"
              />
              <Button variant="primary" size="sm">
                {t('newsletter.button')}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-blue/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-neon-green/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
}
