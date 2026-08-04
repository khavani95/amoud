"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Brand intro drawn *over* the homepage rather than as a separate route, so
 * "/" always serves the real content to crawlers. Shows once per browser
 * session and is skipped entirely for reduced-motion users.
 */
export default function SplashOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || sessionStorage.getItem("amoud-splash-seen")) return;

    setShow(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      sessionStorage.setItem("amoud-splash-seen", "1");
      setShow(false);
    }, 1800);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[var(--bg)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.img
            src="/brand/logo.png"
            alt=""
            className="logo-invert w-[150px] max-w-[45vw]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="h-[3px] rounded-full bg-gradient-to-l from-[var(--gold-soft)] to-[var(--gold-deep)]"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          />
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
