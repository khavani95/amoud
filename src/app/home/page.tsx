"use client";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";  
import Footer from "@/components/Footer";  

export default function HomeLayout() {
  return (
    <main className="bg-gray-50 font-vazirmatn">
      <Navbar />
      <div className="pt-16">
        <HeroSlider />
        {/* معرفی شرکت */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            معرفی شرکت آمودگسترآتیه
          </h2>
          <p className="text-gray-600 leading-8">
            مجموعه آمودگسترآتیه با هدف مشارکت و همکاری در ساخت مجموعه‌های
            مسکونی، تجاری، اداری و بیمارستانی تاسیس و از سال ۱۳۸۰ تاکنون
            افتخار همکاری در پروژه‌های متنوع را در کارنامه دارد. تمرکز تخصصی
            بر تاسیسات برق و مکانیک، توانمندی بالایی در اجرای پروژه‌های
            کلان ایجاد کرده است.
          </p>
        </section>
      </div>
      {/* فوتر */}
       <Footer />
    </main>
  );
}