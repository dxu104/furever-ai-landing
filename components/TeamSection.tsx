'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Linkedin, Mail, Github, Twitter } from 'lucide-react';
import SectionContainer from './SectionContainer';

export default function TeamSection() {
  const t = useTranslations('team');

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:info@furever-ai.com', label: 'Email' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <SectionContainer id="team" className="gradient-bg">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-clip-text text-transparent">
            Meet the Creators
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Meet the passionate team behind FurEver AI's innovative technology
        </motion.p>
      </div>

      <div className="flex justify-center">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Founder Card */}
          <div className="relative p-8 rounded-3xl glass hover:shadow-2xl transition-all duration-500 max-w-md">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-green/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Profile Image */}
            <motion.div
              className="relative w-32 h-32 mx-auto mb-6"
              whileHover={{ rotate: 5 }}
            >
              <img
                src="/images/self-photo.jpg"
                alt={t('team.founder.name')}
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 bg-neon-green rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ethan Xu
              </h3>
              <p className="text-neon-blue font-semibold mb-4">
                Founder & CEO
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                AI engineer and entrepreneur passionate about strengthening the bond between pets and their human families through innovative technology.
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-neon-blue hover:bg-white/40 transition-all duration-300"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-neon-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-neon-green/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Team expansion placeholder */}
          <motion.div
            className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ x: 20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold"
                >
                  ?
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">More team members coming soon</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Join Team CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-gray-600 mb-4">Interested in joining our mission?</p>
        <motion.a
          href="mailto:career@furever-ai.com"
          className="inline-flex items-center text-neon-blue hover:text-neon-green transition-colors font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          <Mail className="w-4 h-4 mr-2" />
          career@furever-ai.com
        </motion.a>
      </motion.div>
    </SectionContainer>
  );
}

