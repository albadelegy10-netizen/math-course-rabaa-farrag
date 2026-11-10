import React, { useState, useEffect } from 'react';
import { User, Testimonial } from '../types';
import { testimonialService } from '../testimonialService';
import { MessageSquareQuote, Edit2, Trash2, PlusCircle, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  currentUser: User | null;
}

const TestimonialsSection: React.FC<Props> = ({ currentUser }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form state
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('EST');
  const [content, setContent] = useState('');
  const [score, setScore] = useState('');

  const isAdmin = currentUser?.role === 'admin' || currentUser?.role === 'co-admin';

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    setIsLoading(true);
    try {
      const data = await testimonialService.getTestimonials();
      setTestimonials(data);
    } catch (e) {
      console.error(e instanceof Error ? e.message : String(e));
    } finally {
      setIsLoading(false);
    }
  };

  const openAddForm = () => {
    setStudentName(currentUser?.name || currentUser?.username || '');
    setCourse('EST');
    setContent('');
    setScore('');
    setEditingId(null);
    setIsFormOpen(true);
  };

  const openEditForm = (t: Testimonial) => {
    setStudentName(t.studentName);
    setCourse(t.course);
    setContent(t.content);
    setScore(t.score || '');
    setEditingId(t.id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      await testimonialService.deleteTestimonial(id);
      loadTestimonials();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !studentName.trim()) return;

    try {
      const isNew = !editingId;
      const newTestimonial: Testimonial = {
        id: isNew ? 'test_' + Date.now() : editingId,
        studentName,
        course,
        content,
        score,
        timestamp: isNew ? Date.now() : testimonials.find(t => t.id === editingId)!.timestamp,
      };

      await testimonialService.addTestimonial(newTestimonial);
      setIsFormOpen(false);
      loadTestimonials();
    } catch (e) {
      console.error(e instanceof Error ? e.message : String(e));
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">What Our Students Say</h2>
          <p className="text-gray-500">Real feedback from actual students.</p>
        </div>
        {currentUser && (
          <button 
            onClick={openAddForm}
            className="mt-4 md:mt-0 flex items-center space-x-2 bg-pink-100 text-pink-700 px-5 py-2.5 rounded-full font-bold hover:bg-pink-200 transition-colors"
          >
            <PlusCircle className="w-5 h-5" />
            <span>اكتب رايك في الكورس</span>
          </button>
        )}
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: 'auto', marginBottom: 32 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative"
          >
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 bg-gray-50 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold mb-6">
              {editingId ? 'Edit Testimonial' : 'Share Your Experience'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                   <input
                     type="text"
                     required
                     value={studentName}
                     onChange={e => setStudentName(e.target.value)}
                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                     placeholder="John Doe"
                     dir="auto"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Course Taken</label>
                   <select 
                     value={course}
                     onChange={e => setCourse(e.target.value)}
                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                   >
                     <option value="EST">EST</option>
                     <option value="SAT">SAT</option>
                     <option value="ACT">ACT</option>
                     <option value="General Math">General Math</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Score (Optional)</label>
                   <input
                     type="text"
                     value={score}
                     onChange={e => setScore(e.target.value)}
                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                     placeholder="e.g. 780"
                     dir="auto"
                   />
                 </div>
               </div>
               
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Your Feedback</label>
                 <textarea
                   required
                   value={content}
                   onChange={e => setContent(e.target.value)}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none h-32 resize-none"
                   placeholder="اكتب تجربتك هنا..."
                   dir="auto"
                 ></textarea>
               </div>
               
               <div className="flex justify-end pt-2">
                 <button 
                   type="submit"
                   className="flex items-center space-x-2 bg-pink-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-pink-700 transition"
                 >
                   <Check className="w-5 h-5" />
                   <span>{editingId ? 'Save Changes' : 'Submit'}</span>
                 </button>
               </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-pink-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : testimonials.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 border border-dashed border-gray-200 rounded-3xl">
          <MessageSquareQuote className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">No testimonials yet. Be the first to share your experience!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow flex flex-col"
            >
              {isAdmin && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                  <button 
                    onClick={() => openEditForm(t)}
                    className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(t.id)}
                    className="p-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
              
              <MessageSquareQuote className="w-10 h-10 text-pink-100 mb-6" />
              
              <p className="text-gray-600 flex-1 relative z-10 leading-relaxed mb-6" dir="auto">
                "{t.content}"
              </p>
              
              <div className="flex items-center space-x-4 border-t border-gray-50 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-indigo-100 border-2 border-white shadow-sm flex items-center justify-center shrink-0">
                  <span className="font-black text-pink-600 text-lg">
                    {t.studentName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900" dir="auto">{t.studentName}</h4>
                  <p className="text-xs text-pink-600 font-medium tracking-wide uppercase">
                    {t.course} Student {t.score && <span className="ml-1 px-1.5 py-0.5 bg-pink-100 rounded text-pink-700">Score: {t.score}</span>}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialsSection;
