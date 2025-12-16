import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      company: 'Early-stage SaaS startup',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'TriHire saved us months of hiring time. As a non-technical founder, I was struggling to evaluate engineering candidates. Their expert interviewers gave us the confidence to make the right hires.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, GrowthCorp',
      company: 'Series A fintech company',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'The quality of evaluation reports is outstanding. Detailed, objective, and actionable. We\'ve hired 5 engineers through TriHire and all have been excellent fits.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of People, InnovateLab',
      company: 'AI/ML startup',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'What impressed me most was the speed and thoroughness. 48-hour turnaround with comprehensive feedback that helped us understand not just if we should hire, but how to onboard successfully.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
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
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Growing Startups
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See what founders and hiring managers say about their experience with TriHire
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          key={activeTestimonial}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic">
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[activeTestimonial].role}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              className={`w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                index === activeTestimonial
                  ? 'border-blue-500 shadow-lg scale-110'
                  : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'
              }`}
              onClick={() => setActiveTestimonial(index)}
              whileHover={{ scale: index === activeTestimonial ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: '4.9/5', label: 'Average Rating' },
            { number: '95%', label: 'Client Satisfaction' },
            { number: '200+', label: 'Happy Customers' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};