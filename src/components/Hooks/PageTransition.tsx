// src/components/PageTransition.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading: boolean | undefined;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => setIsLoading(false), 500); // Durée de transition
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f172a] text-white"
          >
            {/* Logo */}
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.05, 1],
                opacity: 1,
                textShadow: "0 0 20px #FFFF, 0 0 50px #FFFF",
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-4xl font-bold tracking-wide"
            >
              TALVISIO
            </motion.h1>

            {/* Barre lumineuse ou loader */}
            <motion.div
              className="mt-8 w-56 h-1 rounded-full bg-[#1e293b] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-[#ffffff]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenu de la page */}
      <motion.div
        key="page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
}
