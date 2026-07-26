"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash() {
  const router = useRouter();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false); // لوگو محو میشه
      setTimeout(() => {
        router.push("/home"); // بعد میره به home
      }, 700);
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="flex items-center justify-center h-screen bg-[#0a0a0c]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <motion.div
            className="w-[80vw] max-w-[550px] aspect-square flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {/* The brand animation is dark-on-white artwork: invert it so the
                mark reads light, then feather the edges so the video's
                rectangle dissolves into the dark page. */}
            <video
              src="/Amud.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
              style={{
                filter: "invert(1)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, #000 42%, transparent 70%)",
                maskImage:
                  "radial-gradient(circle at center, #000 42%, transparent 70%)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
