"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // آیکون منو و ضربدر

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        {/* لوگو سمت راست */}
        <Link href="/" className="flex items-center order-2">
          <img src="/logo.png" alt="آمودگسترآتیه" className="h-16 md:h-20" />
        </Link>

        {/* منوی دسکتاپ */}
        <ul className="hidden md:flex gap-x-10 text-gray-800 font-medium order-1">
          <li>
            <Link href="/home">خانه</Link>
          </li>
          <li className="relative group">
            <button className="hover:text-blue-600">پروژه‌ها</button>
            <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-56 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/projects/building">پروژه‌های ساخت‌وساز</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/projects/contracting">پروژه‌های پیمانکاری</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">درباره ما</Link>
          </li>
          <li>
            <Link href="/contact">تماس با ما</Link>
          </li>
        </ul>

        {/* دکمه موبایل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 order-1"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-y-4 p-6 text-gray-800 font-medium">
            <li>
              <Link href="/home" onClick={() => setIsOpen(false)}>خانه</Link>
            </li>
            <li>
              <Link href="/construction-projects" onClick={() => setIsOpen(false)}>پروژه‌های ساخت‌وساز</Link>
            </li>
            <li>
              <Link href="/contracting-projects" onClick={() => setIsOpen(false)}>پروژه‌های پیمانکاری</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>درباره ما</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>تماس با ما</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
