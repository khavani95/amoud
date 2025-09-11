"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-vazirmatn">
      {/* منوبار */}
      <Navbar />

      {/* محتوای اصلی */}
      <main className="flex-grow pt-20 bg-gray-50">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          {/* عنوان */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            درباره ما
          </h1>

          {/* متن درباره شرکت */}
          <div className="bg-white shadow-md rounded-2xl p-8 leading-8 text-gray-700 space-y-6">
            <p>
              شرکت <span className="font-semibold text-gray-700"> آمودگسترآتیه </span> 
              با سال‌ها تجربه در زمینه اجرای پروژه‌های ساختمانی، تأسیسات
              الکتریکال و مکانیکال، و پیمانکاری در پروژه‌های بزرگ ملی و منطقه‌ای
              فعالیت می‌کند. این شرکت با بهره‌گیری از نیروهای متخصص و استفاده از
              فناوری‌های روز، همواره در تلاش است تا بهترین کیفیت و بالاترین
              استانداردها را در پروژه‌های خود ارائه دهد.
            </p>

            <p>
              رزومه کاری آمودگسترآتیه شامل اجرای پروژه‌های مسکونی، برج‌های
              اداری، پروژه‌های صنعتی و تأسیسات زیربنایی است. ما با تمرکز بر
              مدیریت زمان، کیفیت و هزینه، توانسته‌ایم اعتماد کارفرمایان بزرگ و
              معتبر کشور را جلب کنیم.
            </p>

            <p>
              مأموریت ما ارائه خدمات پیمانکاری و ساختمانی در بالاترین سطح
              استانداردهای بین‌المللی، همراه با نوآوری و رعایت اصول پایداری و
              توسعه سبز است.
            </p>

            <p>
              چشم‌انداز ما، تبدیل‌شدن به یکی از برترین شرکت‌های پیمانکاری و
              ساختمانی در منطقه و ارائه الگویی از تعهد، تخصص و نوآوری در صنعت
              ساختمان است.
            </p>
          </div>
        </div>
      </main>

      {/* فوتر */}
      <Footer />
    </div>
  );
}
