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

          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-zinc-900 bg-pistachio-400 hover:bg-pistachio-500 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            احجز استشارتك
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
