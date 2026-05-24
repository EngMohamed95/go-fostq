import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Home, ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function ThankYouPage() {
  useEffect(() => {
    // Ensure dataLayer exists
    const dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer = dataLayer;

    // Push conversion event to GTM
    dataLayer.push({
      event: 'lead_conversion',
      page_path: '/thank-you',
      page_title: 'شكراً لك - فستق للتسويق'
    });

    // Trigger Google Ads conversion event
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18123741447/J6FQCL3CkrAcEIeyicJD'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-32 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pistachio-400/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-2xl w-full text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="w-24 h-24 bg-pistachio-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
          >
            <CheckCircle className="w-12 h-12 text-pistachio-600" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight"
          >
            شكراً لك! تواصلنا بيبدأ قريب
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-zinc-600 mb-12 font-medium max-w-lg mx-auto leading-relaxed"
          >
            وصلنا طلبك بنجاح. واحد من فريقنا راح يتواصل معك خلال أقل من ٢٤ ساعة عشان نحدد موعد الاستشارة ونبدأ نخطط لنجاح مشروعك.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all hover:scale-105 shadow-lg shadow-zinc-900/10">
              <Home className="w-5 h-5" />
              العودة للرئيسية
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
