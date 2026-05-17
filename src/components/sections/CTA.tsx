import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, ArrowLeft, MessageCircle } from 'lucide-react';

export default function CTA() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Read web app url from environment variables
    const formUrl = import.meta.env.VITE_FORM_URL;

    if (formUrl) {
      try {
        await fetch(formUrl, {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // Allows submitting to Google Apps Script smoothly
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.warn('VITE_FORM_URL is not set in environment. Simulated local submit.');
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    setLoading(false);
    navigate('/thank-you');
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pistachio-100/40 via-white to-white pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-950 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-pistachio-500 rounded-full blur-[100px] opacity-20 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              جاهز تشوف مشروعك يكبر فعلاً؟
            </h2>
            <p className="text-xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
              احجز استشارتك الآن وبدون أي التزام. نفهم وضعك، نقولك بصدق وش تحتاج، ونحدد لك الخطوات الصح. أسوأ شيء يصير إنك تطلع بوضوح أكثر عن مشروعك.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6 max-w-2xl mx-auto mb-10 text-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-zinc-300 mb-2">اسمك</label>
                <input required type="text" id="name" name="name" placeholder="أدخل اسمك الكامل" className="w-full px-5 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-pistachio-500 focus:ring-1 focus:ring-pistachio-500 transition-all text-right" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-zinc-300 mb-2">رقم جوالك</label>
                <input required type="tel" id="phone" name="phone" placeholder="مثال: +966501234567 أو 0501234567" className="w-full px-5 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-pistachio-500 focus:ring-1 focus:ring-pistachio-500 transition-all text-right" />
              </div>
            </div>
            <div>
              <label htmlFor="store-link" className="block text-sm font-bold text-zinc-300 mb-2">رابط المتجر</label>
              <input required type="text" id="store-link" name="storeLink" placeholder="مثال: اسم المتجر أو رابط الموقع" className="w-full px-5 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-pistachio-500 focus:ring-1 focus:ring-pistachio-500 transition-all text-right" />
            </div>
            <div>
              <label htmlFor="monthly-sales" className="block text-sm font-bold text-zinc-300 mb-2">المبيعات الشهرية</label>
              <input required type="text" id="monthly-sales" name="monthlySales" placeholder="مثال: 50,000 ريال أو وصف المبيعات" className="w-full px-5 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-pistachio-500 focus:ring-1 focus:ring-pistachio-500 transition-all text-right" />
            </div>
            <div>
              <label htmlFor="niche" className="block text-sm font-bold text-zinc-300 mb-2">ما هو مجالك؟</label>
              <input required type="text" id="niche" name="niche" placeholder="مثال: ملابس، إلكترونيات، عطور..." className="w-full px-5 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-pistachio-500 focus:ring-1 focus:ring-pistachio-500 transition-all text-right" />
            </div>
            
            <div className="pt-4">
              <button disabled={loading} type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-pistachio-400 text-zinc-900 rounded-full font-bold text-lg hover:bg-pistachio-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? 'جاري الإرسال...' : 'احجز استشارتك الحين'}
                {!loading && <ArrowLeft className="w-5 h-5" />}
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center justify-center gap-6 relative z-10">
            <div className="flex items-center gap-2 justify-center text-zinc-400 text-sm font-medium">
              <Lock className="w-4 h-4" />
              <span>بدون عقد · بدون التزام · نبدأ خلال ٤٨ ساعة</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-zinc-500 tracking-wider">
              <span>🇦🇪 دبي</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>🇸🇦 الرياض</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>🇪🇬 القاهرة</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
