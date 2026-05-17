import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import portfolioImg from '../../بنر87.webp';

const cities = ['دبي', 'أبوظبي', 'الرياض', 'جدة', 'القاهرة', 'الإسكندرية'];
const sectors = ['العقارات', 'المطاعم والكافيهات', 'الأزياء والموضة', 'الصحة والجمال', 'التجزئة والمتاجر', 'التقنية والتطبيقات', 'التعليم', 'الخدمات المهنية'];

const cases = [
  {
    title: "مطعم في الرياض",
    before: "٣-٥ طلبات يومياً من الأونلاين",
    after: "+٢٢٠٪ في الطلبات الإلكترونية",
    tool: "إعلانات ميتا + محتوى سوشيال",
    time: "بعد ٦٠ يوم",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "متجر أزياء في جدة",
    before: "موقع بدون زيارات تقريباً",
    after: "٥٠+ طلب يومي",
    tool: "SEO + تحسين الموقع + إعلانات",
    time: "بعد ٩٠ يوم",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "شركة خدمات في دبي",
    before: "غياب كامل عن قوقل",
    after: "صفحة أولى لـ ١٥+ كلمة مفتاحية",
    tool: "SEO + محتوى",
    time: "بعد ٤ أشهر",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop"
  }
];

export default function Stats() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              أرقام ما نتكلم غيرها
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-600 font-medium"
            >
              كل الوكالات تقول "نحن الأفضل". إحنا نترك الأرقام تحكي بدلنا.
            </motion.p>
          </div>
        </div>

        {/* Big Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { num: "+200", label: "مشروع نفّذناه", desc: "لشركات صغيرة ومتوسطة وكبيرة" },
            { num: "3×", label: "في المتوسط", desc: "زيادة في المبيعات خلال أول ٦ أشهر" },
            { num: "85%", label: "تجديد العقود", desc: "من عملاءنا يجددون معنا كل عام" },
            { num: "48", label: "ساعة ونبدأ", desc: "نبدأ شغل خلال يومين من توقيع العقد" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-pistachio-500 mb-2">{stat.num}</div>
              <div className="font-bold text-zinc-900 mb-1">{stat.label}</div>
              <div className="text-xs text-zinc-500">{stat.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Cases */}
        <div className="mb-20">
          <h3 className="text-2xl font-black mb-8 text-center text-zinc-900">نتائج حقيقية من عملاء حقيقيين</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900 text-white p-8 rounded-[2rem] relative overflow-hidden group border border-zinc-800 hover:border-zinc-700 transition-colors"
               >
                 <img 
                   src={c.image} 
                   alt={c.title} 
                   className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-[2px] group-hover:blur-0 grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-pistachio-500/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-xs font-bold mb-6 text-pistachio-400">
                    {c.title}
                  </div>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-zinc-500 text-sm mb-1">قبل فستق:</p>
                      <p className="font-bold text-zinc-300 line-through decoration-red-500/50">{c.before}</p>
                    </div>
                    <div>
                      <p className="text-pistachio-400 text-sm mb-1">{c.time}:</p>
                      <p className="font-black text-2xl text-white">{c.after}</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-zinc-800">
                    <p className="text-xs text-zinc-500 mb-1">الأدوات المستخدمة:</p>
                    <p className="text-sm font-medium text-zinc-300">{c.tool}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div> {/* Closes max-w-7xl */}

      {/* Full-width Portfolio Banner Showcase */}
      <div className="w-full my-24 relative group overflow-hidden py-12 md:py-16">
        {/* Soft background glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-pistachio-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-zinc-300/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-pistachio-500/10 border border-pistachio-500/20 rounded-full text-sm font-bold mb-4 text-pistachio-600">
            📸 معرض سابقة الأعمال الحية
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4">سابقة أعمالنا تتحدث عنّا</h3>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed">
            إليك نموذج حي ومباشر من مشاريعنا الناجحة التي أحدثت فرقاً حقيقياً في المبيعات والانتشار الرقمي.
          </p>
        </div>

        {/* Full-screen Stretched HD Image Showcase */}
        <div className="w-full relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <img 
              src={portfolioImg} 
              alt="سابقة أعمال فستق للتسويق" 
              className="w-full h-auto block object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cities and Sectors (Marquee or simple tags) */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="font-bold text-zinc-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pistachio-500" />
              مدن شغلنا فيها
            </h4>
            <div className="flex flex-wrap gap-3">
              {cities.map((city) => (
                 <span key={city} className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-bold text-zinc-700 shadow-sm">
                   {city}
                 </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pistachio-500" />
              قطاعات نعرفها كفّ إيدنا
            </h4>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => (
                 <span key={sector} className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-bold text-zinc-700 shadow-sm">
                   {sector}
                 </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
