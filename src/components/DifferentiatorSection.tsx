import { motion } from 'framer-motion';
import { Building2, Users, GraduationCap } from 'lucide-react';

export const DifferentiatorSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236366f1' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Built for startups{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                without in-house expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We connect you with vetted professionals who evaluate candidates across 
              engineering, design, finance, marketing, and more — helping you hire with 
              clarity, not guesswork.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              {[
                'No need for technical co-founders to evaluate candidates',
                'Access to domain experts across all industries',
                'Structured evaluation process with detailed reports',
                'Save weeks of interviewing time and resources',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Our Process
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Central Hub */}
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">TriHire</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Expert Network</p>
                </div>
              </div>

              {/* Orbiting Elements */}
              {[
                { icon: Building2, label: 'Startups', color: 'from-green-500 to-green-600', angle: 0 },
                { icon: Users, label: 'Experts', color: 'from-blue-500 to-blue-600', angle: 120 },
                { icon: GraduationCap, label: 'Candidates', color: 'from-purple-500 to-purple-600', angle: 240 },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="absolute w-20 h-20"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                >
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg flex flex-col items-center justify-center text-white`}
                    style={{
                      transform: `translate(-50%, -50%) translateY(-140px)`,
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="w-6 h-6 mb-1" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              {[0, 120, 240].map((angle, index) => (
                <motion.div
                  key={angle}
                  className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent origin-left"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};