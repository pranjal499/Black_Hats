import { motion } from 'framer-motion';
import { Star, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

export const ScorecardPreviewSection = () => {
  const scoreData = [
    { skill: 'Technical Skills', score: 4, maxScore: 5, color: 'from-blue-500 to-blue-600' },
    { skill: 'Problem Solving', score: 5, maxScore: 5, color: 'from-green-500 to-green-600' },
    { skill: 'Communication', score: 3, maxScore: 5, color: 'from-yellow-500 to-yellow-600' },
    { skill: 'Cultural Fit', score: 4, maxScore: 5, color: 'from-purple-500 to-purple-600' },
  ];

  const overallScore = scoreData.reduce((acc, item) => acc + item.score, 0) / scoreData.length;

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Detailed{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Evaluation Reports
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get comprehensive scorecards with actionable insights for every candidate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Scorecard Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Candidate Evaluation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Senior Frontend Developer
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {overallScore.toFixed(1)}/5
                  </div>
                  <div className="flex items-center justify-end mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(overallScore)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Breakdown */}
              <div className="space-y-6 mb-8">
                {scoreData.map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {item.skill}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.score}/{item.maxScore}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <motion.div
                        className={`h-3 bg-gradient-to-r ${item.color} rounded-full shadow-sm`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.score / item.maxScore) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recommendation */}
              <motion.div
                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <h4 className="text-lg font-bold text-green-800 dark:text-green-300">
                    Recommendation: Proceed
                  </h4>
                </div>
                <p className="text-green-700 dark:text-green-400 text-sm">
                  Strong technical skills and excellent problem-solving abilities. 
                  Communication could be improved but overall a solid candidate.
                </p>
              </motion.div>

              {/* Additional Info */}
              <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Interviewed by: Sarah Chen (Google)</span>
                <span>Duration: 45 min</span>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <CheckCircle className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              What's Included in Every Report
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: Star,
                  title: 'Detailed Skill Assessment',
                  description: 'Comprehensive evaluation across technical and soft skills',
                },
                {
                  icon: CheckCircle,
                  title: 'Clear Recommendation',
                  description: 'Hire, don\'t hire, or proceed with caution - with reasoning',
                },
                {
                  icon: AlertCircle,
                  title: 'Areas for Improvement',
                  description: 'Specific feedback on where the candidate can grow',
                },
                {
                  icon: TrendingUp,
                  title: 'Interview Recording',
                  description: 'Full video recording for your review and reference',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                See Sample Report
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};