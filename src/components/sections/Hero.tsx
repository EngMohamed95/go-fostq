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
              احجز استشارتك المجانية
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a href="#portfolio" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-50 transition-all border border-zinc-200">
              <Play className="w-5 h-5 fill-zinc-900" />
              شوف كيف نشتغل
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
