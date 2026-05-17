import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
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
                <div className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>واتساب (للتواصل السريع)</span>
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
