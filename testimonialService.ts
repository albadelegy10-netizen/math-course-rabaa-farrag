import { collection, doc, setDoc, getDocs, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { Testimonial } from './types';

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test_1',
    studentName: 'Youssef Ahmed',
    course: 'EST',
    score: '780',
    content: 'يا ميس رابعه بجد شكراً جداً، شرح حضرتك سهل ومبسط جداً بيخلي الواحد يفهم بسرعة ويوفر وقت كبير. مستوايا اتحسن جداً في فترة قصيرة وقدرت أجيب السكور اللي كنت بحلم بيه، ربنا يباركلك يا رب!',
    timestamp: Date.now() - 1000000,
  },
  {
    id: 'test_2',
    studentName: 'Mariam Hisham',
    course: 'SAT',
    score: '760',
    content: 'أنا كنت بكره الماث وبشوفه عقدة، بس مع حضرتك الموضوع اختلف تماماً. طريقة حضرتك في تبسيط الأفكار خلتني أحل أصعب المسائل بسهولة. الحمد لله جبت السكور اللي عايزة في وقت قياسي!',
    timestamp: Date.now() - 2000000,
  },
  {
    id: 'test_3',
    studentName: 'Omar Tarek',
    course: 'ACT',
    score: '34',
    content: 'كلمة السر مع حضرتك هي "السهولة". الشرح مفيش أبسط من كده والمتابعة ممتازة. أنا بجد مكنتش متخيل إني ممكن أتحسن بالشكل ده وأوصل للسكور ده بسرعة كدة، ألف شكر لحضرتك.',
    timestamp: Date.now() - 3000000,
  },
  {
    id: 'test_4',
    studentName: 'Salma Khaled',
    course: 'General Math',
    score: 'A+',
    content: 'ميس رابعه بجد من أحسن المدرسين اللي أخدت معاهم. بتخلي الماث كأنه لعبة! مستوايا فرق جداً الفترة اللي فاتت وقدرت أحقق السكور المطلوب. ربنا يجازيكي كل خير يا ميس رابعه.',
    timestamp: Date.now() - 4000000,
  },
  {
    id: 'test_5',
    studentName: 'Ahmed Mahmoud',
    course: 'EST',
    score: '790',
    content: 'بجد الشرح سلس بطريقة مش طبيعية. كنت ديماً بضيع وقت كتير في الحل، بس حضرتك اديتينا طرق بتخلص المسألة في ثواني. الحمد لله مستوايا ضرب في السماء وجبت التارجت بتاعي!',
    timestamp: Date.now() - 5000000,
  },
  {
    id: 'test_6',
    studentName: 'Nour Yasser',
    course: 'SAT',
    score: '800',
    content: 'عمري ما كنت متوقع إني أقدر ألم الماث وأجيب السكور ده في وقت قليل كده. بصراحة سهولة الشرح وطريقة حضرتك بتوصل المعلومة لغاية الدماغ على طول. شكراً من كل قلبي يا ميس رابعه!',
    timestamp: Date.now() - 6000000,
  }
];

export const testimonialService = {
  async getTestimonials(): Promise<Testimonial[]> {
    try {
      const q = query(collection(db, 'testimonials'), orderBy('timestamp', 'desc'));
      const snapshot = await getDocs(q);
      
      const testimonials: Testimonial[] = [];
      snapshot.forEach(docSnap => {
        testimonials.push(docSnap.data() as Testimonial);
      });
      
      // Seed if empty
      if (testimonials.length === 0) {
        console.log("Seeding initial testimonials...");
        for (const t of INITIAL_TESTIMONIALS) {
          try { await setDoc(doc(db, 'testimonials', t.id), t); } catch (e) { console.error("Firebase setDoc testimonial seed error", e); }
          testimonials.push(t);
        }
      }
      
      return testimonials;
    } catch (e) {
      console.error("Error fetching testimonials", e instanceof Error ? e.message : String(e));
      return [];
    }
  },
  
  async addTestimonial(testimonial: Testimonial): Promise<void> {
    try {
      try { await setDoc(doc(db, 'testimonials', testimonial.id), testimonial); } catch (e) { console.error("Firebase setDoc testimonial error", e); }
    } catch (e) {
      console.error("Error adding testimonial", e instanceof Error ? e.message : String(e));
      throw e;
    }
  },
  
  async deleteTestimonial(id: string): Promise<void> {
    try {
      try { await deleteDoc(doc(db, 'testimonials', id)); } catch (e) { console.error("Firebase deleteDoc testimonial error", e); }
    } catch (e) {
      console.error("Error deleting testimonial", e instanceof Error ? e.message : String(e));
      throw e;
    }
  }
};
