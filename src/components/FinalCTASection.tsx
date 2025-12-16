import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Clock } from 'lucide-react';

export const FinalCTASection = () => {
  const benefits = [
    { icon: Users, text: '500+ Expert Interviewers' },
    { icon: Clock, text: '48-Hour Turnaround' },
    { icon: Zap, text: 'No Setup Required' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready to hire{' '}
            <span className="relative">
              smarter
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
            {' '}and faster?
          </motion.h2>

          <motion.p
            className="text-xl text-blue-100 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join 200+ startups who trust TriHire for expert-led candidate evaluations
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="flex items-center space-x-2 text-blue-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-4 h-4" />
                </div>
                <span className="font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-white text-blue-600 font-bold text-xl px-12 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderRadius: 'inherit' }}
              />
              
              <span className="relative z-10 flex items-center space-x-3 group-hover:text-white transition-colors duration-300">
                <span>Post Your First Interview</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-200 text-sm mb-4">
              Trusted by startups worldwide
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {/* Mock company logos */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-20 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-4 bg-white/40 rounded"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-8 h-8 bg-white/10 rounded-lg backdrop-blur-sm"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};