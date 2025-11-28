import { motion } from "framer-motion";

/**
 * Generic Loader component
 * Modes:
 *  - variant="standalone"  (default) → small inline loader
 *  - variant="overlay" → covers parent with semi-transparent overlay
 *  - variant="fullscreen" → covers the whole screen
 *
 * Props:
 *  - text: optional string to show under the spinner
 */
export default function Loader({
  variant = "standalone",
  text = "Φόρτωση...",
}) {
  const spinner = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      className="w-10 h-10 border-4 border-gray-300 border-t-transparent rounded-full"
    />
  );

  const content = (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      {spinner}
      {text && <p className="text-sm text-gray-600">{text}</p>}
    </div>
  );

  if (variant === "fullscreen") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  if (variant === "overlay") {
    return (
      <div className="absolute inset-0 z-40 flex items-center justify-center bg-white/60 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
}
