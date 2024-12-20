import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Enter your long URL in the input field above.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Click the "Shorten URL" button.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          Copy your shortened URL and share it anywhere!
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Track the number of clicks with the provided usage limit.
        </motion.li>
      </ol>
    </div>
  );
}
