"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/company";

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
          className="flex h-screen flex-col items-center justify-center gap-6 bg-[var(--navy)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.img
            src="/brand/logo.png"
            alt={company.nameFa}
            className="logo-white w-[150px] max-w-[45vw]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="h-1 bg-[var(--copper)]"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          />
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-[15px] font-extrabold text-white">
              {company.nameFa}
            </div>
            <div className="mt-1 text-[11px] tracking-[1px] text-[var(--text-muted)]">
              {company.nameEn}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
