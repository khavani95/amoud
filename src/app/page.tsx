"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash() {
  const router = useRouter();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // اول لوگو محو میشه
      setShow(false);

      // بعد از اتمام انیمیشن خروج میره به home
      setTimeout(() => {
        router.push("/home");
      }, 700); // مدت fade-out
    }, 2500); // مدت زمان نمایش لوگو
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="flex items-center justify-center h-screen bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <motion.img
            src="/Amud.gif"
            alt="لوگو آمود"
            className="w-[550px] h-[550px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
