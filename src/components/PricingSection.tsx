import { motion } from 'framer-motion';
import { Check, Zap, Star } from 'lucide-react';

export const PricingSection = () => {
  const pricingPlans = [
    {
      name: 'Single Interview',
      price: '₹2,999',
      description: 'Perfect for one-off hiring needs',
      features: [
        'Expert-led interview (45-60 min)',
        'Detailed evaluation report',
        'Hiring recommendation',
        'Interview recording',
        '48-hour turnaround',
      ],
      cta: 'Book Interview',
      popular: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Startup Package',
      price: '₹9,999',
      originalPrice: '₹11,997',
      description: 'Best value for growing teams',
      features: [
        'Everything in Single Interview',
        '4 expert interviews',
        'Priority scheduling',
        'Dedicated account manager',
        '24-hour turnaround',
        'Custom evaluation criteria',
      ],
      cta: 'Get Started',
      popular: true,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For high-volume hiring',
      features: [
        'Everything in Startup Package',
        'Unlimited interviews',
        'Custom integrations',
        'Dedicated expert pool',
        'Same-day turnaround',
        'White-label reports',
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
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
            Simple,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            No hidden fees, no long-term contracts. Pay per interview or save with our packages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg dark:shadow-2xl border-2 transition-all duration-300 h-full ${
                plan.popular 
                  ? 'border-purple-500 shadow-purple-500/20 dark:shadow-purple-500/10' 
                  : 'border-gray-200 dark:border-gray-700 group-hover:border-blue-500 dark:group-hover:border-blue-400'
              }`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <div className="text-lg text-gray-500 dark:text-gray-400 line-through mb-1">
                        {plan.originalPrice}
                      </div>
                    )}
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                      {plan.price !== 'Custom' && (
                        <span className="text-lg text-gray-600 dark:text-gray-400 font-normal">
                          /interview
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 group flex items-center justify-center space-x-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{plan.cta}</span>
                  {plan.name !== 'Enterprise' && (
                    <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  )}
                </motion.button>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Need a custom solution? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
            <motion.button
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold px-8 py-3 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};