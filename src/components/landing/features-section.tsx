"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, MessageSquare, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Доступность",
    description: "AI-агент никогда не спит, не болеет и не уходит в отпуск. Ваши клиенты всегда получат ответ.",
    color: "from-blue-400 to-cyan-400"
  },
  {
    icon: Calendar,
    title: "Автоматическое планирование",
    description: "Интеграция с календарем позволяет мгновенно записывать встречи в удобное время.",
    color: "from-purple-400 to-pink-400"
  },
  {
    icon: MessageSquare,
    title: "Естественные диалоги",
    description: "Продвинутый ИИ ведет беседы так естественно, что клиенты не замечают разницы.",
    color: "from-green-400 to-emerald-400"
  },
  {
    icon: BarChart3,
    title: "Аналитика и отчеты",
    description: "Подробная статистика звонков, конверсии и эффективности работы агента.",
    color: "from-orange-400 to-red-400"
  },
  {
    icon: Shield,
    title: "Безопасность данных",
    description: "Все разговоры и данные клиентов защищены современными методами шифрования.",
    color: "from-indigo-400 to-purple-400"
  },
  {
    icon: Zap,
    title: "Мгновенная настройка",
    description: "Запуск системы за 5 минут. Никаких сложных настроек или долгого обучения.",
    color: "from-yellow-400 to-orange-400"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Преимущества
            <span className="block text-gradient">нашей CRM</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Революционные возможности, которые изменят ваш бизнес
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="apple-card-dark p-6 group cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-gray-300">Время работы</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">5 мин</div>
            <div className="text-gray-300">Время настройки</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-gray-300">Поддержка</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
