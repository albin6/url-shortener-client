import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    "Enter your long URL in the input field above.",
    'Click the "Shorten URL" button.',
    "Copy your shortened URL and share it anywhere!",
    "Track the number of clicks with the provided usage limit.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="w-full mt-4"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">How It Works</h3>
      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
        {steps.map((step, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {step}
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}
