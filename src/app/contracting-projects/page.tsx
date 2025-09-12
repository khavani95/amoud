"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContractingProjects() {
  return (
    <div>
       <Navbar />
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">پروژه‌های پیمانکاری</h2>
      <p className="text-gray-700">
        شرکت عمود مجری تخصصی پروژه‌های پیمانکاری در حوزه‌های مختلف است.
      </p>
      <ul className="mt-6 space-y-3">
        <li className="bg-white shadow p-4 rounded">پروژه تاسیسات بیمارستان مرکزی</li>
        <li className="bg-white shadow p-4 rounded">پروژه برق‌کشی مجتمع اداری</li>
        <li className="bg-white shadow p-4 rounded">پروژه خطوط لوله صنعتی</li>
      </ul>
      {/* فوتر */}
            <Footer />
    </div>
  )
}
