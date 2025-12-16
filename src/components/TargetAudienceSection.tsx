import { motion } from 'framer-motion';
import { Building2, Users, GraduationCap, ArrowRight } from 'lucide-react';

export const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: Building2,
      title: 'For Startups',
      description: 'Get expert-led interviews without hiring full-time technical staff',
      benefits: [
        'Access to domain experts',
        'Structured evaluation process',
        'Cost-effective hiring',
        'Faster decision making'
      ],
      cta: 'Post a Role',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
    },
    {
      icon: Users,
      title: 'For Experts',
      description: 'Monetize your expertise by conducting interviews for growing companies',
      benefits: [
        'Flexible schedule',
        'Competitive compensation',
        'Build your network',
        'Share your knowledge'
      ],
      cta: 'Become an Expert',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
    },
    {
      icon: GraduationCap,
      title: 'For Candidates',
      description: 'Get evaluated by industry experts and receive detailed feedback',
      benefits: [
        'Expert evaluation',
        'Detailed feedback',
        'Fair assessment',
        'Career guidance'
      ],
      cta: 'Find Opportunities',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experts" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Built for Everyone in the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hiring Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're hiring, evaluating, or looking for opportunities, TriHire has you covered
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.bgColor} rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
              
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg dark:shadow-2xl border border-gray-100 dark:border-gray-700 group-hover:shadow-xl dark:group-hover:shadow-2xl transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 10 }}
                >
                  <audience.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {audience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {audience.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefit}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: benefitIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full bg-gradient-to-r ${audience.color} hover:shadow-lg text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 group flex items-center justify-center space-x-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{audience.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: '200+', label: 'Active Startups' },
              { number: '500+', label: 'Expert Interviewers' },
              { number: '2,000+', label: 'Candidates Evaluated' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};