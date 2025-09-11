"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        {/* لوگو سمت راست */}
        <Link href="/" className="flex items-center order-2">
          <img src="/logo.png" alt="آمودگسترآتیه" className="h-20" />
        </Link>

        {/* منو سمت چپ */}
        <ul className="flex gap-x-10 text-gray-800 font-medium order-1">
          <li>
            <Link href="/">خانه</Link>
          </li>

          {/* منوی پروژه‌ها */}
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
      </div>
    </nav>
  );
}
