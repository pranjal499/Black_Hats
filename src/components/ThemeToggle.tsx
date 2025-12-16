import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.div
          animate={{
            rotate: theme === 'dark' ? 180 : 0,
            scale: theme === 'dark' ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'light' ? (
            <Sun className="w-3 h-3 text-yellow-500" />
          ) : (
            <Moon className="w-3 h-3 text-blue-400" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};