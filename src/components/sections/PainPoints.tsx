import { motion } from 'motion/react';
import { Target, TrendingDown, Search, HeartCrack } from 'lucide-react';

const pains = [
  {
    icon: Target,
    title: "أدفع على إعلانات وما أشوف نتيجة",
    desc: "فلوسك تروح كل شهر وما تعرف وين. لا تقرير واضح، لا أرقام حقيقية، بس فواتير تتراكم. ويقولون لك 'المشكلة في الجمهور'!"
  },
  {
    icon: TrendingDown,
    title: "صفحتنا على السوشيال ميديا راكدة",
    desc: "عندك ١٠ آلاف متابع والبوست يجيب ١٥ لايك. المحتوى ما يوصل، والناس ما تتفاعل — وبالنهاية ما أحد يطلب."
  },
  {
    icon: Search,
    title: "منافسيني يطلعون قبلي على قوقل",
    desc: "تدوّر على نفسك بالاسم وما تطلع في الصفحة الأولى. الزبون يدور، يلقى المنافس، يكلّمه — وإنت ما تعرف إنك خسرت فرصة."
  },
  {
    icon: HeartCrack,
    title: "جربنا وكالات وكلها خذلتنا",
    desc: "وعود كبيرة في الأول، ثم صمت، ثم اعتذارات. دفعت، وانتظرت، وما جاء شيء. والحين تتردد تدفع مرة ثانية لأحد جديد — وهذا طبيعي."
  }
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            تعبت من هذا الكلام؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 font-medium"
          >
            كثير من أصحاب المشاريع يعيشون نفس الإحباط كل يوم. إذا واحدة من هالجمل تمسّك — إحنا فاهمين وعندنا الحل.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                <pain.icon className="w-7 h-7 text-pistachio-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {pain.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
