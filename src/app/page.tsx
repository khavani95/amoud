"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home"); // بعد از 3 ثانیه میره صفحه اصلی
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

 return (
  <div className="flex items-center justify-center h-screen bg-white">
    <img
      src="/Amud.gif"
      alt="لوگو آمود"
      className="w-[550px] h-[550px]" // لوگو سه برابر
    />
  </div>
);
}
