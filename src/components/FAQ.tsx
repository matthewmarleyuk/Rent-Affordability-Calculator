import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why use the 30% rule for rent calculations?",
      answer: "The 30% rule is a widely accepted financial guideline that suggests you shouldn't spend more than 30% of your gross monthly income on housing expenses. While not a strict rule, it helps ensure you have enough money left for other essential expenses and savings."
    },
    {
      question: "Should I include utilities in my rent calculation?",
      answer: "Yes, ideally you should factor in utilities when calculating affordable rent. Consider setting aside an additional 10% of your rent budget for utilities, making your total housing costs closer to 40% of your income."
    },
    {
      question: "What if I live in an expensive city?",
      answer: "In expensive cities, you might need to allocate more than 30% of your income to rent. In such cases, you may need to make adjustments in other areas of your budget or consider having roommates to share costs."
    },
    {
      question: "Does the calculator account for taxes?",
      answer: "This calculator uses gross (pre-tax) annual income. Your actual disposable income will be lower after taxes, so consider this when making housing decisions."
    },
    {
      question: "What other expenses should I consider besides rent?",
      answer: "Besides rent, consider: utilities, renters insurance, security deposits, moving costs, furniture, and maintenance fees. Also budget for other living expenses like food, transportation, and savings."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="p-4 text-gray-600 bg-white">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;