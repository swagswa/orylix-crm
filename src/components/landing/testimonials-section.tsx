"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Анна Волкова",
      company: "Стоматологическая клиника 'Улыбка'",
      text: "За первый месяц использования количество записей увеличилось на 40%. ИИ работает даже лучше нашего администратора - никогда не устает и всегда вежлив с клиентами.",
      rating: 5,
      avatar: "AВ"
    },
    {
      name: "Михаил Петров",
      company: "Юридическая фирма 'Право и Порядок'",
      text: "Раньше мы теряли до 30% звонков в нерабочее время. Теперь каждый потенциальный клиент получает ответ и может записаться на консультацию. ROI окупился за 2 недели.",
      rating: 5,
      avatar: "МП"
    },
    {
      name: "Елена Сидорова",
      company: "Салон красоты 'Элегант'",
      text: "Клиенты в восторге! Они могут записаться в любое время, а ИИ знает все наши услуги и цены. Освободилось много времени для работы с клиентами вместо ответов на телефон.",
      rating: 5,
      avatar: "ЕС"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Более 1000 компаний уже трансформировали свой бизнес с нашим ИИ-регистратором
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-300 leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">4.9/5</div>
            <p className="text-gray-400">Средняя оценка</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
            <p className="text-gray-400">Довольных клиентов</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
            <p className="text-gray-400">Рост конверсии</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <p className="text-gray-400">Поддержка клиентов</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}