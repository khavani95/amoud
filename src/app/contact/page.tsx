"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen font-vazirmatn">
      {/* منوبار */}
      <Navbar />

      {/* محتوای اصلی */}
      <main className="flex-grow pt-20 bg-gray-50">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          {/* عنوان */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            تماس با ما
          </h1>

          {/* متن درباره شرکت */}
          <div className="bg-white shadow-md rounded-2xl p-8 leading-8 text-gray-700 space-y-6">
            <p className="text-gray-700">برای ارتباط با ما می‌توانید از روش‌های زیر استفاده کنید:</p>
      <ul className="space-y-3">
        <li>📞 تلفن: 44711222-021</li>
        <li>📱 موبایل: 989123505524+</li>
        <li>📧 ایمیل: AmudGostar.Co@Gmail.com</li>
        <li>🏢 تهران - شهرک گلستان – بلوار امیرکبیر – بلوار هاشم زاده – رز ۲</li>
      </ul>
          </div>
        </div>
      </main>

      {/* فوتر */}
      <Footer />
    </div>
  );
}


