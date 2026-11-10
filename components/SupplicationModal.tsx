import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Sparkles, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Heart, 
  X
} from 'lucide-react';

export interface SupplicationItem {
  id: string;
  type: 'quran' | 'hadith' | 'supplication';
  arabic: string;
  source: string;
  category: 'understanding' | 'ease' | 'retention' | 'gratitude';
  benefit: string;
}

export const START_SUPPLICATIONS: SupplicationItem[] = [
  {
    id: 'start-1',
    type: 'quran',
    arabic: '﴿رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي﴾',
    source: 'سورة طه (الآيات 25-28)',
    category: 'ease',
    benefit: 'آية جامعة لانشراح الصدر، وتيسير الأمور الصعبة، وسرعة الفهم وحسن البيان.'
  },
  {
    id: 'start-2',
    type: 'hadith',
    arabic: '«اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الحَزْنَ إِذَا شِئْتَ سَهْلاً»',
    source: 'حديث شريف - رواه ابن حبان وصححه الألباني',
    category: 'ease',
    benefit: 'دعاء نبوي شريف لتيسير كل مسألة صعبة وفتح أبواب الفهم والتوفيق.'
  },
  {
    id: 'start-3',
    type: 'quran',
    arabic: '﴿وَقُل رَّبِّ زِدْنِي عِلْمًا﴾',
    source: 'سورة طه (الآية 114)',
    category: 'understanding',
    benefit: 'طلب الزيادة في الفهم والبركة في العلم النافع من الله سبحانه وتعالى.'
  },
  {
    id: 'start-4',
    type: 'hadith',
    arabic: '«اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا، وَالحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ»',
    source: 'حديث شريف - رواه الترمذي وابن ماجه',
    category: 'understanding',
    benefit: 'سؤال الله النفع بالعلم والزيادة فيه وتوفيقه في المذاكرة والامتحان.'
  },
  {
    id: 'start-5',
    type: 'supplication',
    arabic: '«اللَّهُمَّ إِنِّي أَسْأَلُكَ فَهْمَ النَّبِيِّينَ، وَحِفْظَ المُرْسَلِينَ، وَإِلْهَامَ المَلَائِكَةِ المُقَرَّبِينَ، اللَّهُمَّ اجْعَلْ أَلْسِنَتَنَا عَامِرَةً بِذِكْرِكَ، وَقُلُوبَنَا بِخَشْيَتِكَ، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ»',
    source: 'دعاء مأثور لتسهيل الحفظ والفهم',
    category: 'understanding',
    benefit: 'دعاء مبارك لصفاء الذهن وقوة الحفظ وسرعة الاستيعاب والفهم.'
  },
  {
    id: 'start-6',
    type: 'hadith',
    arabic: '«يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ»',
    source: 'حديث شريف - رواه النسائي والحاكم وصححه الألباني',
    category: 'ease',
    benefit: 'التوكل الكامل على الله وطلب معونته وتوفيقه في كل خطوة ومسألة.'
  }
];

export const END_SUPPLICATIONS: SupplicationItem[] = [
  {
    id: 'end-1',
    type: 'supplication',
    arabic: '«اللَّهُمَّ إِنِّي أَسْتَوْدِعُكَ مَا قَرَأْتُ، وَمَا حَفِظْتُ، وَمَا فَهِمْتُ، وَمَا تَعَلَّمْتُ، فَرُدَّهُ إِلَيَّ عِنْدَ حَاجَتِي إِلَيْهِ، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، وَحَسْبُنَا اللَّهُ وَنِعْمَ الوَكِيلُ»',
    source: 'دعاء ختام المذاكرة واستيداع الحفظ وتثبيت الفهم',
    category: 'retention',
    benefit: 'استيداع ما تمت مذاكرته وحله عند الله تعالى ليذكره الطالب عند الحاجة وفي الامتحانات.'
  },
  {
    id: 'end-2',
    type: 'quran',
    arabic: '﴿الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَٰذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللَّهُ﴾',
    source: 'سورة الأعراف (الآية 43)',
    category: 'gratitude',
    benefit: 'شكر الله والاعتراف بفضله وتوفيقه على إتمام الواجب والمذاكرة بنجاح.'
  },
  {
    id: 'end-3',
    type: 'hadith',
    arabic: '«الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ، اللَّهُمَّ لَكَ الحَمْدُ وَالشُّكْرُ عَلَى مَا أَنْعَمْتَ بِهِ عَلَيَّ مِنْ عَوْنٍ وَتَوْفِيقٍ، وَبَارِكْ لِي فِيمَا تَعَلَّمْتُ»',
    source: 'حديث شريف في الحمد والشكر على التمام',
    category: 'gratitude',
    benefit: 'الثناء على الله عز وجل على نعمة الإعانة وإنجاز المهام الدراسية بيسر.'
  },
  {
    id: 'end-4',
    type: 'supplication',
    arabic: '«اللَّهُمَّ لَكَ الحَمْدُ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ، رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ، وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ، وَاجْعَلْ هَذَا العِلْمَ نَافِعًا لِي فِي دِينِي وَدُنْيَايَ»',
    source: 'دعاء الشكر وسؤال البركة في العلم',
    category: 'gratitude',
    benefit: 'طلب البركة والتوفيق الدائم ودوام النعمة والشكر لله تعالى.'
  }
];

interface SupplicationModalProps {
  isOpen: boolean;
  mode: 'start' | 'end';
  title?: string;
  topicName?: string;
  onClose: () => void;
  onProceed?: () => void;
}

const SupplicationModal: React.FC<SupplicationModalProps> = ({
  isOpen,
  mode,
  title,
  topicName,
  onClose,
  onProceed
}) => {
  const supplications = mode === 'start' ? START_SUPPLICATIONS : END_SUPPLICATIONS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentDua = supplications[currentIndex] || supplications[0];

  const handleNextDua = () => {
    setCurrentIndex((prev) => (prev + 1) % supplications.length);
  };

  const handlePrevDua = () => {
    setCurrentIndex((prev) => (prev - 1 + supplications.length) % supplications.length);
  };

  const handleAction = () => {
    if (onProceed) {
      onProceed();
    } else {
      onClose();
    }
  };

  const handleCopyDua = () => {
    navigator.clipboard.writeText(`${currentDua.arabic}\n(${currentDua.source})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isStart = mode === 'start';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-3xl shadow-2xl border border-emerald-100 max-w-xl w-full overflow-hidden relative flex flex-col max-h-[90vh]"
          dir="rtl"
        >
          {/* Decorative Top Accent Banner */}
          <div className={`p-6 text-white text-center relative overflow-hidden ${
            isStart 
              ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700' 
              : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700'
          }`}>
            {/* Background Islamic Geometric/Aura Motifs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <button
              onClick={onClose}
              className="absolute top-4 left-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              title="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                {isStart ? (
                  <Sparkles className="w-7 h-7 text-amber-300 animate-pulse" />
                ) : (
                  <Heart className="w-7 h-7 text-rose-300 fill-rose-300" />
                )}
              </div>
            </div>

            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wide uppercase mb-1">
              {isStart ? '📖 دعاء واستفتاح المذاكرة والحل' : '✨ دعاء ختام المذاكرة وشكر الله'}
            </span>

            <h3 className="text-2xl font-black text-white mt-1">
              {isStart ? 'تيسير الفهم وتسهيل الحفظ' : 'تثبيت العلم والحمد لله على التوفيق'}
            </h3>

            {topicName && (
              <p className="text-white/80 text-xs mt-1 font-medium">
                {topicName} {title ? `• ${title}` : ''}
              </p>
            )}
          </div>

          {/* Main Content Area */}
          <div className="p-6 md:p-8 flex-1 overflow-y-auto space-y-6">
            {/* Supplication Card */}
            <div className={`p-6 md:p-8 rounded-3xl border text-center relative transition-all ${
              isStart 
                ? 'bg-emerald-50/50 border-emerald-100 shadow-sm' 
                : 'bg-indigo-50/50 border-indigo-100 shadow-sm'
            }`}>
              {/* Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-xl text-xs font-bold ${
                  currentDua.type === 'quran' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : currentDua.type === 'hadith' 
                      ? 'bg-amber-100 text-amber-800' 
                      : 'bg-indigo-100 text-indigo-800'
                }`}>
                  {currentDua.type === 'quran' ? '✨ آية قرآنية كريمة' : currentDua.type === 'hadith' ? '📜 حديث نبوي شريف' : '🤲 دعاء مأثور مبارك'}
                </span>

                <span className="text-xs text-gray-400 font-semibold">
                  {currentIndex + 1} من {supplications.length}
                </span>
              </div>

              {/* Arabic Du'aa Text */}
              <div className="my-4">
                <p className="text-xl md:text-2xl font-black text-gray-900 leading-[2.2] font-serif tracking-wide select-text">
                  {currentDua.arabic}
                </p>
              </div>

              {/* Source & Reference */}
              <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
                <span className="font-bold text-gray-700">
                  {currentDua.source}
                </span>
                <button
                  onClick={handleCopyDua}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors"
                  title="نسخ الدعاء"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>تم النسخ</span>
                    </>
                  ) : (
                    <span>نسخ</span>
                  )}
                </button>
              </div>
            </div>

            {/* Spiritual Benefit / Context */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
              <div className="p-2 bg-amber-100 text-amber-800 rounded-xl flex-shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900 mb-0.5">
                  {isStart ? 'فضل الدعاء والاستعانة بالله:' : 'ثمرة شكر الله واستيداع الحفظ:'}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {currentDua.benefit}
                </p>
              </div>
            </div>

            {/* Carousel Navigation Indicator */}
            {supplications.length > 1 && (
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={handlePrevDua}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>الدعاء السابق</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {supplications.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex 
                          ? (isStart ? 'w-6 bg-emerald-600' : 'w-6 bg-indigo-600') 
                          : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`الانتقال إلى الدعاء ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextDua}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                >
                  <span>الدعاء التالي</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Footer Action Buttons */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-3 text-gray-500 hover:text-gray-700 font-bold text-sm transition-colors"
            >
              إغلاق
            </button>

            <button
              onClick={handleAction}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-black text-white text-base shadow-lg transition-all transform active:scale-95 ${
                isStart
                  ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200'
                  : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200'
              }`}
            >
              <span>{isStart ? 'بِسْمِ اللَّهِ - تَوَكَّلْتُ عَلَى اللَّهِ وَأَبْدَأُ الْحَلَّ' : 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ - عَرْضُ النَّتِيجَةِ'}</span>
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SupplicationModal;
