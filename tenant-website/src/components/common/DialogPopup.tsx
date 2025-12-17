import { motion, AnimatePresence } from "framer-motion";

export default function DialogPopup({ show, children, onClose }: any) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center p-3 justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-[400px] rounded-2xl bg-white p-6 shadow-xl relative"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              title="Κλείσιμο"
              className="text-2xl rounded-full bg-white leading-none w-[24px] h-[24px] absolute right-[40px] mt-2 hover:bg-black hover:text-white"
              onClick={onClose}
            >
              &times;
            </button>
            <div className="text-gray-700 ">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
