import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "كم تكلفة الخدمات؟",
    a: "الأسعار تختلف حسب نوع الخدمة وحجم مشروعك. عندنا باقات تبدأ تناسب المشاريع الصغيرة وتكبر معك. تواصل معنا وإحنا نصمم لك خطة على قد ميزانيتك وأهدافك — بدون أي التزام."
  },
  {
    q: "متى أشوف نتائج؟",
    a: "يعتمد على الخدمة:\n• الإعلانات الممولة: نتائج من الأسبوع الأول\n• السوشيال ميديا: فرق واضح خلال شهر\n• SEO: ٣-٦ أشهر — لكنه الأطول عمراً والأقل تكلفة على المدى البعيد\nفي أول اجتماع نحدد لك توقعات واقعية وصادقة حسب وضعك."
  },
  {
    q: "هل تشتغلون مع مشاريع صغيرة وناشئة؟",
    a: "أكيد. كثير من عملاءنا الحاليين بدأوا بمشاريع صغيرة وكبروا معنا. نصمم الخطة حسب مرحلتك، مو حسب مرحلة شركة غيرك."
  },
  {
    q: "كيف تختلفون عن الوكالات الثانية؟",
    a: "ثلاثة أشياء تفرق فستق: أولاً: نشتغل بالنتائج — كل شهر تحصل تقرير واضح يبين وش حصلت مقابل ما دفعت. ثانياً: فريقنا عربي يفهم ثقافتك وجمهورك بشكل طبيعي — مو مترجم. ثالثاً: عندك مدير حساب مخصص، مو 'تيكت دعم' يضيع في قائمة انتظار."
  },
  {
    q: "هل في عقد طويل يحبسني؟",
    a: "لا. نشتغل بعقود مرنة لأننا واثقين في نتائجنا. ما نحتاج عقد طويل نبقيك فيه — نبقيك لأنك راضي. معظم عملاءنا معنا منذ أكثر من سنة بدون ما نجبرهم."
  },
  {
    q: "هل تقدرون تشتغلون بعيد — مو في نفس المدينة؟",
    a: "بالتأكيد. عملاءنا في دبي والرياض والقاهرة وجدة وأبوظبي. نشتغل عن بُعد بكفاءة كاملة — ميتنج أسبوعي + تقارير منتظمة + تواصل مباشر مع مديرك."
  },
  {
    q: "كيف نبدأ؟",
    a: "سهلة — تواصل معنا عبر الفورم أدناه. نرتب لك جلسة استشارية مدتها ٣٠ دقيقة. نفهم مشروعك ونقولك بصدق وين تقف وش تحتاج. بدون التزام، وبدون ضغط."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-zinc-900">
            عندك سؤال؟ جاوبناك
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-2xl border transition-all duration-200 ${openIndex === i ? 'border-pistachio-400 shadow-md' : 'border-zinc-200 hover:border-zinc-300'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-right px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-bold text-lg text-zinc-900">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-pistachio-600' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-zinc-600 font-medium whitespace-pre-line leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
