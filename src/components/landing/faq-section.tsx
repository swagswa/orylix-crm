"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Как быстро можно настроить систему?",
    answer: "Настройка занимает всего 5 минут. Вам нужно только подключить ваш номер телефона и настроить базовые параметры. Наш AI-агент сразу готов к работе."
  },
  {
    question: "Насколько естественно звучит AI-агент?",
    answer: "Наш AI использует самые современные технологии синтеза речи и понимания естественного языка. Клиенты часто не замечают, что говорят с роботом."
  },
  {
    question: "Можно ли настроить агента под мой бизнес?",
    answer: "Да, агент полностью настраивается под ваши потребности: сценарии разговоров, информация о компании, услугах, ценах и многое другое."
  },
  {
    question: "Безопасны ли мои данные?",
    answer: "Абсолютно. Мы используем шифрование уровня банков, все данные хранятся в защищенных дата-центрах, соответствующих международным стандартам безопасности."
  },
  {
    question: "Что если AI не сможет ответить на вопрос?",
    answer: "В таких случаях агент корректно переводит звонок на живого оператора или записывает контакты клиента для обратной связи."
  },
  {
    question: "Какая стоимость использования?",
    answer: "У нас гибкая система тарифов в зависимости от количества звонков. Первые 100 звонков бесплатно для тестирования системы."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Часто задаваемые
            <span className="block text-gradient">вопросы</span>
          </h2>
          <p className="text-xl text-gray-300">
            Ответы на самые популярные вопросы о нашей системе
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="apple-card-dark overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Не нашли ответ на свой вопрос?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="apple-button-secondary"
          >
            Связаться с нами
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
