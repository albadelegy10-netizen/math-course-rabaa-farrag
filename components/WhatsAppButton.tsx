
import React, { useState } from 'react';
import { X, GripHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WhatsAppButton = React.forwardRef<HTMLDivElement, any>((_, ref) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201120486569', '_blank'); // Using the provided WhatsApp number
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={ref}
          key="whatsapp-btn"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          drag
          dragMomentum={false}
          className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center group transition-shadow cursor-pointer"
        >
          {/* Drag Handle */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-1 bg-white border border-gray-100 rounded-t-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing">
            <GripHorizontal className="w-4 h-4 text-gray-400" />
          </div>

          {/* Message Bubble (Professional Sentence) */}
          <div className="hidden sm:block mr-3 bg-white border border-gray-100 px-4 py-2 rounded-2xl shadow-xl transition-all duration-300 origin-right whitespace-nowrap">
            <p className="text-gray-800 text-xs font-bold">
              Chat with Eng Rabaa! 💬
            </p>
          </div>

          {/* WhatsApp Button */}
          <div className="relative">
            <button
              onClick={handleWhatsAppClick}
              aria-label="Chat with Eng Rabaa on WhatsApp"
              className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba59] transition-all duration-300 transform active:scale-95"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 sm:w-10 sm:h-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.049c0 2.123.541 4.197 1.57 6.079L0 24l6.15-1.612a11.832 11.832 0 005.9 1.573h.004c6.638 0 12.05-5.414 12.053-12.05a11.825 11.825 0 00-3.414-8.522z"/>
              </svg>
            </button>
            
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 bg-gray-900 text-white p-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 scale-0 group-hover:scale-100"
              title="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default WhatsAppButton;
