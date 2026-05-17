import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import logo from '../../../logo (2).png';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="فستق للتسويق" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              وكالة تسويق رقمي للسوق الخليجي والعربي.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-pistachio-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-pistachio-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-pistachio-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-pistachio-400 transition-colors">إدارة السوشيال ميديا</a></li>
              <li><a href="#services" className="hover:text-pistachio-400 transition-colors">الإعلانات الممولة</a></li>
              <li><a href="#services" className="hover:text-pistachio-400 transition-colors">تحسين محركات البحث (SEO)</a></li>
              <li><a href="#services" className="hover:text-pistachio-400 transition-colors">تصميم المواقع والمتاجر</a></li>
              <li><a href="#services" className="hover:text-pistachio-400 transition-colors">استراتيجية المحتوى</a></li>
              <li><a href="#services" className="hover:text-pistachio-400 transition-colors">بناء الهوية التجارية</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-pistachio-400 transition-colors">من نحن</a></li>
              <li><a href="#portfolio" className="hover:text-pistachio-400 transition-colors">آراء العملاء</a></li>
              <li><a href="#faq" className="hover:text-pistachio-400 transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#contact" className="hover:text-pistachio-400 transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                  <span className="text-xs">🌐</span>
                </div>
                <span>fostq.com</span>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://wa.me/971547772515?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B3%D8%AA%D9%82%20%D9%84%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-[#25D366] transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.247 0 9.518-4.268 9.52-9.517.001-2.542-.99-4.931-2.79-6.734-1.801-1.801-4.19-2.793-6.729-2.793-5.23 0-9.482 4.254-9.485 9.502-.002 1.636.43 3.23 1.255 4.616l-.993 3.62 3.714-.974zm10.155-4.834c-.269-.134-1.594-.786-1.841-.875-.246-.09-.425-.134-.604.134-.179.269-.694.875-.851 1.055-.157.179-.313.202-.582.067-.269-.134-1.137-.419-2.166-1.337-.8-.713-1.34-1.594-1.497-1.863-.157-.269-.017-.414.118-.548.121-.121.269-.314.403-.471.134-.157.179-.269.269-.449.09-.179.045-.337-.023-.471-.067-.134-.604-1.457-.827-1.996-.217-.523-.435-.453-.604-.461-.157-.008-.337-.008-.517-.008-.18 0-.471.067-.718.337-.247.269-.942.92-9.42 2.243 0 .43.202.827.426 1.122 1.236 1.727 1.885 2.65 2.11 2.942.224.292.443.517.718.83 1.01 1.155 2.378 2.016 3.963 2.613.435.165.827.269 1.168.375.403.127.768.109 1.057.066.321-.048 1.594-.652 1.819-1.284.225-.633.225-1.178.157-1.284-.068-.109-.247-.179-.516-.314z" />
                    </svg>
                  </div>
                  <span>+971 54 777 2515</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© 2025 فستق للتسويق — جميع الحقوق محفوظة</p>
          <p className="flex items-center gap-1">صُنع بـ <span className="text-red-500">❤️</span> للسوق العربي</p>
        </div>
      </div>
    </footer>
  );
}
