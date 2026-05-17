import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "خالد العنزي",
    role: "صاحب مطعم، الرياض",
    text: "كنت خايف أجرب وكالة ثانية بعد تجربتين فاشلتين. صراحة تترددت كثير. لكن فستق ما وعدوني بكلام — قالوا خلال شهرين نجيبلك أرقام وإلا نرد لك فلوسك. النتيجة؟ +٢٢٠٪ طلبات من الأونلاين في الشهر الثاني. الحين ما أتخيّل أشتغل مع غيرهم."
  },
  {
    name: "نورة الشهري",
    role: "صاحبة متجر أزياء، جدة",
    text: "متجري الإلكتروني كان شبه ميت — ٣ سنوات وما حصل شيء. بعد ٣ أشهر مع فستق صار عندي ٥٠+ طلب يومي. اللي يشتغل معهم يفهم وش يعني فريق يهتم فعلاً بمشروعك مو بس بفلوسك."
  },
  {
    name: "محمد القحطاني",
    role: "مدير تطوير أعمال، دبي",
    text: "طلبت منهم SEO وما كنت أتوقع النتيجة تكون بهذي السرعة. في أقل من ٤ أشهر صرنا نطلع صفحة أولى لـ ١٥ كلمة مفتاحية كلها مرتبطة بزبائن حقيقيين. الفرق على المبيعات واضح بالأرقام — مو بالحكي."
  },
  {
    name: "سارة المنصور",
    role: "صاحبة مركز تجميل، أبوظبي",
    text: "أحسن شيء في فستق إنهم يشرحون كل خطوة. ما تحس إنك دفعت وما تعرف وش يصير. عندي تقرير أسبوعي، وأقدر أكلم مدير حسابي أي وقت. هذا اللي كنت أبيه من زمان."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            ما تصدقنا — صدّق زبائننا
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 font-medium"
          >
            هذولا أصحاب مشاريع كانوا بنفس موقفك — شككوا، جربوا، وما ندموا.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 relative"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-zinc-200 rotate-180" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-700 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pistachio-100 flex items-center justify-center text-pistachio-600 font-bold text-xl">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">{test.name}</h4>
                  <p className="text-sm text-zinc-500">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
