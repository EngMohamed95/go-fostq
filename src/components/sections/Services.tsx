import { motion } from 'motion/react';
import { Smartphone, MousePointerClick, Search, Globe, PenTool, LayoutTemplate } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "إدارة السوشيال ميديا",
    subtitle: "محتوى يشتغل لك حتى لو نايم",
    desc: "نكتب، نصمم، ننشر، ونرد — بأسلوب يعكس علامتك ويجذب زبونك الصح. مو بس بوستات جميلة، بل محتوى مخطط يبني جمهور يثق فيك ويشتري منك."
  },
  {
    icon: MousePointerClick,
    title: "الإعلانات الممولة (Meta & Google)",
    subtitle: "كل ريال تصرفه نتحمل مسؤوليته",
    desc: "نستهدف زبونك الصح، في الوقت الصح، بالرسالة الصح. نقلل تكلفة الإعلان ونرفع العائد — ما نكتفي بـ 'الكلكس'."
  },
  {
    icon: Search,
    title: "تحسين محركات البحث (SEO)",
    subtitle: "تحوّل قوقل لماكينة زبائن مجانية",
    desc: "نخليك تطلع أول ما يدور زبونك على منتجك أو خدمتك. SEO استثمار يكبر كل شهر — مو إعلان تنتهي لما توقف الدفع."
  },
  {
    icon: Globe,
    title: "تصميم المواقع والمتاجر",
    subtitle: "موقع يبيع وأنت نايم",
    desc: "نبنيه سريع، جميل، ومصمم يحوّل الزائر لزبون. كل موقع نبنيه محسّن لقوقل من اليوم الأول."
  },
  {
    icon: PenTool,
    title: "استراتيجية المحتوى",
    subtitle: "خطة محتوى تخلي الناس تدور عليك",
    desc: "نبني لك تقويم محتوى كامل بناءً على جمهورك وأهدافك. مو اجتهاد يومي — بل استراتيجية تخدمك لأشهر."
  },
  {
    icon: LayoutTemplate,
    title: "بناء الهوية التجارية",
    subtitle: "أول انطباع ما له ثاني",
    desc: "شعار، ألوان، خطوط، وأسلوب خطاب يجعل الناس تتذكرك. هوية قوية = ثقة أسرع = بيع أسهل."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-bold tracking-wide rounded-full bg-pistachio-100 text-pistachio-600"
          >
            كيف نخلّيك تفرق عن الباقين
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 text-zinc-900"
          >
            ما نبيعك حلم، نبني معك نتيجة
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 font-medium"
          >
            نشتغل بصدق، ونقيس كل شيء. هذي خدماتنا — وكل واحدة مربوطة بنتيجة حقيقية.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:border-pistachio-300 hover:shadow-2xl hover:shadow-pistachio-500/10 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center mb-8 group-hover:bg-pistachio-400 group-hover:border-pistachio-400 transition-colors">
                <service.icon className="w-8 h-8 text-zinc-900" />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm font-bold text-pistachio-600 mb-4 bg-pistachio-50 inline-block px-3 py-1 rounded-lg">
                {service.subtitle}
              </p>
              <p className="text-zinc-600 leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
