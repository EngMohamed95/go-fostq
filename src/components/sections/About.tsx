import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const whyUs = [
  "فريق عربي يفهم السوق من الداخل — مو مترجم",
  "مدير حساب مخصص لك تقدر تتواصل معه مباشرة",
  "تقارير شهرية شفافة — تشوف كل ريال وين راح",
  "نستهدف المبيعات الحقيقية مو الإعجابات",
  "عقود مرنة — نبقى لأن نتائجنا تقنعك، مو لأن عقد يحبسك",
  "حاضرين في دبي والرياض والقاهرة — نعرف سوقك من الداخل"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pistachio-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                مو وكالة — شركاء نجاح
              </h2>
              <p className="text-xl text-pistachio-400 font-bold mb-8">
                فستق تأسست لأن أصحاب المشاريع العربية يستاهلون تسويقاً يفهم ثقافتهم وسوقهم — مو نسخة مترجمة من غرب.
              </p>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed mb-10">
                <p>
                  إحنا فريق عربي من دبي والرياض والقاهرة. فاهمين كيف يفكر الزبون الخليجي، وش يقنعه، وكيف يشتري.
                </p>
                <p>
                  ما نؤمن بـ"باقة للجميع" — كل عميل عندنا له استراتيجية مبنية على مشروعه هو. وكل ريال تصرفه معنا له تقرير واضح يوضح أين راح وماذا أنتج.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 h-64 md:h-80 relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="فريق فستق للتسويق" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-[2rem] shadow-2xl"
          >
            <h3 className="text-2xl font-black mb-8 text-white">ليش تختار فستق؟</h3>
            <ul className="space-y-6">
              {whyUs.map((point, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-1 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-pistachio-400" />
                  </span>
                  <span className="font-medium text-zinc-300 text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
