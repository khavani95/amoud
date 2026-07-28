"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash() {
  const router = useRouter();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => router.push("/home"), 600);
    }, 1900);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="flex h-screen flex-col items-center justify-center gap-6 bg-[var(--bg)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.img
            src="/brand/logo.png"
            alt="آمود گستر آتیه"
            className="logo-invert w-[150px] max-w-[45vw]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.div
            className="h-[3px] rounded-full bg-gradient-to-l from-[var(--gold-soft)] to-[var(--gold-deep)]"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          />

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-[15px] font-bold text-[var(--ink)]">
              آمود گستر آتیه
            </div>
            <div className="display-en mt-1 text-[11px] text-[var(--ink-muted)]">
              AMOUD GOSTAR ATIEH Co.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
