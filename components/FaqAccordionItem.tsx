import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaqItem } from '../types';

interface FaqAccordionItemProps {
  faq: FaqItem;
  index: number;
}

const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 bg-black hover:border-nova-red/50 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-mono text-nova-red mr-6">/0{index + 1}</span>
        <span className="flex-1 font-bold text-lg md:text-xl uppercase">{faq.question}</span>
        {isOpen ? <Minus className="text-nova-red flex-shrink-0" /> : <Plus className="text-gray-500 flex-shrink-0" />}
      </button>

      <motion.div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 md:p-8 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mx-6 md:mx-8">
          {faq.answer}
        </div>
      </motion.div>
    </div>
  );
};

export default FaqAccordionItem;
