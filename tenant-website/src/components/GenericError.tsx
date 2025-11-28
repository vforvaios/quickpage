import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Generic Error Fallback component for Vite + React + Tailwind projects
 * Props:
 *  - title: string (default: 'Κάτι πήγε στραβά')
 *  - message: string (short friendly message)
 *  - onRetry: function (optional) - called when user clicks Retry
 *  - homeHref: string (optional) - link for "Home" button (default: '/')
 *  - error: any (optional) - error object to show in details
 */

export default function GenericError({
  title = "Κάτι πήγε στραβά",
  message = "Συγγνώμη — προέκυψε ένα απρόβλεπτο σφάλμα.",
  onRetry,
  homeHref = "/",
  error = null,
}: any) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 18 }}
        className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6 md:p-10 border border-gray-100"
        role="alert"
        aria-live="polite"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <div className="flex-shrink-0">
            {/* simple SVG icon */}
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.764-1.36 2.72-1.36 3.484 0l5.518 9.835c.75 1.337-.213 2.966-1.742 2.966H4.481c-1.53 0-2.492-1.629-1.743-2.966L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a.75.75 0 01-.75-.75V6.5a.75.75 0 011.5 0v3.75A.75.75 0 019.999 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="flex-1 items-center">
            <h3 className="text-lg text-center md:text-left font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-2 text-sm text-center md:text-left text-gray-600">
              {message}
            </p>

            <div className="mt-4 flex gap-3 flex-col md:flex-row">
              {onRetry && (
                <button
                  onClick={onRetry}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Επανάληψη
                </button>
              )}

              <a
                href={homeHref}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Αρχική
              </a>

              <button
                onClick={() => setShowDetails((s) => !s)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none"
                aria-expanded={showDetails}
                aria-controls="error-details"
              >
                {showDetails ? "Απόκρυψη λεπτομερειών" : "Λεπτομέρειες"}
              </button>
            </div>

            {showDetails && (
              <motion.pre
                id="error-details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.18 }}
                className="mt-4 max-h-48 overflow-auto bg-gray-50 border border-gray-100 rounded-md p-3 text-xs text-gray-700 whitespace-pre-wrap"
              >
                {error
                  ? typeof error === "string"
                    ? error
                    : JSON.stringify(error, null, 2)
                  : "Χωρίς διαθέσιμες λεπτομέρειες."}
              </motion.pre>
            )}
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-400 text-center md:text-left">
          Μπορείτε να ανανεώσετε τη σελίδα ή να επιστρέψετε στην αρχική.
        </p>
      </motion.div>
    </div>
  );
}
