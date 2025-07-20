"use client";

import React from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassModel } from "../ui/magnifying-glass-3d-model";
import { Phone, Calendar, Database, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Входящий звонок",
    description: "AI-агент автоматически принимает звонок и приветствует клиента естественным голосом"
  },
  {
    icon: MessageCircle,
    title: "Естественный диалог",
    description: "Ведет беседу, отвечает на вопросы, выясняет потребности клиента"
  },
  {
    icon: Calendar,
    title: "Запись на встречу",
    description: "Предлагает удобное время и автоматически записывает в календарь"
  },
  {
    icon: Database,
    title: "Сохранение лида",
    description: "Все данные клиента автоматически сохраняются в CRM системе"
  }
];

export function HowItWorksSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* 3D Magnifying Glass Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <MagnifyingGlassModel />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Как работает
            <span className="block text-gradient">AI-агент</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Полностью автоматизированный процесс от звонка до записи в CRM
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 z-0" />
                )}
                
                <div className="apple-card-dark p-6 text-center relative z-10 h-full">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
            Готовы автоматизировать свои звонки?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="apple-button"
          >
            Начать бесплатный тест
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
