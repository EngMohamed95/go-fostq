import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import logo from '../../../logo (2).png';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/40 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 bg-zinc-950 px-4 py-2.5 rounded-xl hover:bg-zinc-900 transition-colors shadow-md">
            <img src={logo} alt="فستق للتسويق" className="h-8 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-8 font-medium text-zinc-600">
            <a href="#services" className="hover:text-pistachio-600 transition-colors">خدماتنا</a>
            <a href="#about" className="hover:text-pistachio-600 transition-colors">من نحن</a>
            <a href="#portfolio" className="hover:text-pistachio-600 transition-colors">أرقام وتجارب</a>
            <a href="#faq" className="hover:text-pistachio-600 transition-colors">الأسئلة الشائعة</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/971547772515?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B3%D8%AA%D9%82%20%D9%84%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 text-[#25D366] bg-white border border-zinc-200 hover:bg-zinc-50 rounded-full transition-all shadow-sm hover:scale-105"
              title="تواصل عبر واتساب"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-zinc-900 bg-pistachio-400 hover:bg-pistachio-500 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              احجز استشارتك
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
