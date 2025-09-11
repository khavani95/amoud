"use client";
import Link from "next/link";

export default function Footer() {
  return (
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
            <p className="text-gray-400">تلفن: 44711222</p>
            <p className="text-gray-400">موبایل: 989123505524+</p>
            <p className="text-gray-400">ایمیل: AmudGostar.Co@Gmail.com</p>
          </div>
        </div>
      </footer>
  );
}