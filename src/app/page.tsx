import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";

export default function Home() {
  return (
    <main className="bg-gray-50">
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
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-xl font-bold">آمودگسترآتیه</h3>
            <p className="mt-2 text-gray-400">
              تهران - شهرک گلستان – بلوار امیرکبیر – بلوار هاشم زاده – رز ۲
            </p>
          </div>
          <div>
            <h4 className="font-semibold">ارتباط با ما</h4>
            <p className="mt-2 text-gray-400">تلفن: 44711222</p>
            <p className="text-gray-400">ایمیل: AmudGostar.Co@Gmail.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
