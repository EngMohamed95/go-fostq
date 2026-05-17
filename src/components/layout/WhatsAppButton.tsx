import React from 'react';
import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/971547772515?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B3%D8%AA%D9%82%20%D9%84%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Label Tooltip */}
      <div className="bg-zinc-950 text-white border border-zinc-800 px-4 py-2 rounded-2xl text-xs font-bold shadow-2xl opacity-0 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 rtl">
        تواصل معنا مباشرة عبر واتساب
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 cursor-pointer"
        aria-label="Contact on WhatsApp"
      >
        {/* Pulsing Outer Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-20 animate-pulse pointer-events-none" />

        {/* Brand Icon */}
        <svg
          className="w-8 h-8 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.247 0 9.518-4.268 9.52-9.517.001-2.542-.99-4.931-2.79-6.734-1.801-1.801-4.19-2.793-6.729-2.793-5.23 0-9.482 4.254-9.485 9.502-.002 1.636.43 3.23 1.255 4.616l-.993 3.62 3.714-.974zm10.155-4.834c-.269-.134-1.594-.786-1.841-.875-.246-.09-.425-.134-.604.134-.179.269-.694.875-.851 1.055-.157.179-.313.202-.582.067-.269-.134-1.137-.419-2.166-1.337-.8-.713-1.34-1.594-1.497-1.863-.157-.269-.017-.414.118-.548.121-.121.269-.314.403-.471.134-.157.179-.269.269-.449.09-.179.045-.337-.023-.471-.067-.134-.604-1.457-.827-1.996-.217-.523-.435-.453-.604-.461-.157-.008-.337-.008-.517-.008-.18 0-.471.067-.718.337-.247.269-.942.92-9.42 2.243 0 .43.202.827.426 1.122 1.236 1.727 1.885 2.65 2.11 2.942.224.292.443.517.718.83 1.01 1.155 2.378 2.016 3.963 2.613.435.165.827.269 1.168.375.403.127.768.109 1.057.066.321-.048 1.594-.652 1.819-1.284.225-.633.225-1.178.157-1.284-.068-.109-.247-.179-.516-.314z" />
        </svg>
      </a>
    </div>
  );
}
