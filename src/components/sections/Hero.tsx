import { motion } from 'motion/react';
import { ArrowLeft, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zinc-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-pistachio-400/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-zinc-200 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white/50 shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-pistachio-500 animate-pulse" />
            <span className="text-sm font-semibold text-zinc-600">وكالة تسويق رقمي رائدة — دبي · الرياض · القاهرة</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 leading-[1.1] mb-8 tracking-tight"
          >
            منتجك زين — <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-pistachio-600 to-pistachio-400">
              بس ما يشوفه أحد
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
          >
            فستق وكالة تسويق رقمي تشتغل بالأرقام مو بالوعود. من السوشيال ميديا لقوقل لتصميم الموقع — كل شيء في مكان واحد، وكل ريال تدفعه تشوف وين راح.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all hover:scale-105 shadow-xl shadow-zinc-900/20">
              احجز استشارتك الآن
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/971547772515?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B3%D8%AA%D9%82%20%D9%84%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#25D366] rounded-full font-bold text-lg hover:bg-zinc-50 transition-all border border-zinc-200 hover:scale-105 shadow-sm"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.247 0 9.518-4.268 9.52-9.517.001-2.542-.99-4.931-2.79-6.734-1.801-1.801-4.19-2.793-6.729-2.793-5.23 0-9.482 4.254-9.485 9.502-.002 1.636.43 3.23 1.255 4.616l-.993 3.62 3.714-.974zm10.155-4.834c-.269-.134-1.594-.786-1.841-.875-.246-.09-.425-.134-.604.134-.179.269-.694.875-.851 1.055-.157.179-.313.202-.582.067-.269-.134-1.137-.419-2.166-1.337-.8-.713-1.34-1.594-1.497-1.863-.157-.269-.017-.414.118-.548.121-.121.269-.314.403-.471.134-.157.179-.269.269-.449.09-.179.045-.337-.023-.471-.067-.134-.604-1.457-.827-1.996-.217-.523-.435-.453-.604-.461-.157-.008-.337-.008-.517-.008-.18 0-.471.067-.718.337-.247.269-.942.92-9.42 2.243 0 .43.202.827.426 1.122 1.236 1.727 1.885 2.65 2.11 2.942.224.292.443.517.718.83 1.01 1.155 2.378 2.016 3.963 2.613.435.165.827.269 1.168.375.403.127.768.109 1.057.066.321-.048 1.594-.652 1.819-1.284.225-.633.225-1.178.157-1.284-.068-.109-.247-.179-.516-.314z"/>
              </svg>
              تواصل مباشرة عبر واتساب
            </a>
          </motion.div>

          {/* Trust Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-zinc-200/60"
          >
            <div>
              <p className="text-3xl md:text-4xl font-black text-zinc-900 mb-1">+200</p>
              <p className="text-sm text-zinc-500 font-medium">شركة ومشروع خدمناها</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-zinc-900 mb-1">3×</p>
              <p className="text-sm text-zinc-500 font-medium">في المتوسط زيادة بالمبيعات</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-zinc-900 mb-1">48</p>
              <p className="text-sm text-zinc-500 font-medium">ساعة ونبدأ معك فعلاً</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-zinc-900 mb-1">5+</p>
              <p className="text-sm text-zinc-500 font-medium">سنوات خبرة بالسوق العربي</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
