import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import bannerImg from '../../بنررر.webp';

export default function Hero() {
  return (
    <section 
      className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-zinc-950 text-white"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Decorative Background Glowing Highlights */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-pistachio-500/20 blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-pistachio-600/10 blur-[120px] pointer-events-none z-10" />

      {/* Premium Dark Gradient Overlays */}
      {/* 1. Base Dark Mask to make text perfectly readable */}
      <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-[1px] z-0 pointer-events-none" />
      {/* 2. Top-to-Bottom Gradient to smooth transition with Navbar and next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/95 via-transparent to-zinc-950 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-pistachio-500 animate-pulse" />
            <span className="text-sm font-semibold text-zinc-300">وكالة تسويق رقمي رائدة — دبي · الرياض · القاهرة</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight"
          >
            منتجك زين — <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-pistachio-500 to-pistachio-300">
              بس ما يشوفه أحد
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
          >
            فستق وكالة تسويق رقمي تشتغل بالأرقام مو بالوعود. من السوشيال ميديا لقوقل لتصميم الموقع — كل شيء في مكان واحد، وكل ريال تدفعه تشوف وين راح.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
          >
            <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-pistachio-400 text-zinc-950 rounded-full font-black text-lg hover:bg-pistachio-500 transition-all hover:scale-105 shadow-xl shadow-pistachio-500/25">
              احجز استشارتك الآن
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/971547772515?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B3%D8%AA%D9%82%20%D9%84%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900/60 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all border border-zinc-800 hover:scale-105 shadow-sm backdrop-blur-sm"
            >
              <svg className="w-6 h-6 fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              تواصل مباشرة عبر واتساب
            </a>
          </motion.div>
        </div>

        {/* Trust Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-zinc-800/80 text-center"
        >
          <div>
            <p className="text-3xl md:text-4xl font-black text-white mb-1">+200</p>
            <p className="text-sm text-zinc-400 font-medium">شركة ومشروع خدمناها</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-white mb-1">3×</p>
            <p className="text-sm text-zinc-400 font-medium">في المتوسط زيادة بالمبيعات</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-white mb-1">48</p>
            <p className="text-sm text-zinc-400 font-medium">ساعة ونبدأ معك فعلاً</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-white mb-1">5+</p>
            <p className="text-sm text-zinc-400 font-medium">سنوات خبرة بالسوق العربي</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
