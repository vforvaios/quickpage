import { motion, AnimatePresence } from "framer-motion";

export default function DialogPopup({ show, children, onClose }: any) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button onClick={onClose}>x</button>
            <div className="text-gray-700">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
