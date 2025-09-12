"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConstructionProjects() {
  return (
    <div className="flex flex-col min-h-screen font-vazirmatn">
      {/* منوبار */}
      <Navbar />

      {/* محتوای اصلی */}
      <main className="flex-grow pt-20 bg-gray-50">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          {/* عنوان */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
           پروژه‌های ساخت‌وساز
          </h1>
          <h1 className="text-2xl text-gray-500 text-center mb-8">
             لیست پروژه های ساختمانی مسکونی (خرید یا مشارکت در ساخت)</h1>

         
          <div className="bg-white shadow-md rounded-2xl p-8 leading-8 text-gray-700 space-y-6">
             <ul className="mt-6 space-y-3">
        <li className="bg-white shadow p-4 rounded">پروژه برج مسکونی نارون</li>
        <li className="bg-white shadow p-4 rounded">پروژه مجتمع تجاری ستاره</li>
        <li className="bg-white shadow p-4 rounded">پروژه ویلای لوکس ساحلی</li>
      </ul>
          </div>
        </div>
      </main>

      {/* فوتر */}
      <Footer />
    </div>
  );
}
