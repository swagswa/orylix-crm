"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, Phone, Settings, Shield, Zap } from "lucide-react";

const faqs = [
  {
    icon: Phone,
    question: "Как быстро можно настроить ИИ-регистратора?",
    answer: "Настройка занимает всего 5 минут. Вы просто подключаете свой номер телефона, настраиваете расписание работы и готово! Наш ИИ сразу начнет принимать звонки и записывать клиентов."
  },
  {
    icon: MessageCircle,
    question: "Насколько естественно звучит ИИ в разговоре?",
    answer: "Наш ИИ использует самые современные технологии обработки речи. Клиенты часто не понимают, что разговаривают с роботом. ИИ умеет поддерживать естественный диалог, отвечать на вопросы и даже шутить!"
  },
  {
    icon: Settings,
    question: "Можно ли настроить ИИ под специфику моего бизнеса?",
    answer: "Конечно! Вы можете настроить сценарии разговора, добавить информацию о ваших услугах, ценах, акциях. ИИ будет говорить именно то, что нужно вашему бизнесу."
  },
  {
    icon: Shield,
    question: "Безопасны ли данные моих клиентов?",
    answer: "Абсолютно! Мы используем шифрование банковского уровня и соответствуем всем требованиям GDPR. Данные ваших клиентов надежно защищены и никогда не передаются третьим лицам."
  },
  {
    icon: Zap,
    question: "Что если ИИ не сможет ответить на вопрос клиента?",
    answer: "В таких случаях ИИ вежливо переведет звонок на вас или предложит клиенту оставить сообщение. Вы всегда остаетесь в контроле и можете вмешаться в любой момент."
  },
  {
    icon: HelpCircle,
    question: "Сколько это стоит и есть ли скрытые платежи?",
    answer: "Никаких скрытых платежей! Простая ежемесячная подписка от 2990₽. Первые 7 дней абсолютно бесплатно. Можете отменить подписку в любой момент без штрафов."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 text-white relative overflow-hidden">

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl floating"
          >
            <HelpCircle className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            Часто задаваемые вопросы
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Ответы на самые популярные вопросы о нашем ИИ-регистраторе
          </motion.p>
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
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <faq.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.div>
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
                      <div className="pl-16">
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-gray-300 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}