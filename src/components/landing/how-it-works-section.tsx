"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { PhoneCustom, MessageSquareCustom, CalendarCustom, CheckCircleCustom } from "@/components/ui/custom-icons";
import { MagnifyingGlass3DBackground } from "@/components/ui/magnifying-glass-3d-model";

const steps = [
  {
    icon: PhoneCustom,
    title: "Звонок поступает",
    description: "Клиент звонит на ваш номер телефона в любое время дня и ночи",
    details: "ИИ отвечает мгновенно, представляется от имени вашей компании и готов помочь клиенту",
    color: "from-blue-500 to-cyan-500",
    iconColor: "#60a5fa"
  },
  {
    icon: MessageSquareCustom,
    title: "ИИ ведет диалог",
    description: "Умный помощник отвечает на вопросы и собирает информацию о потребностях клиента",
    details: "Естественная речь, понимание контекста и персонализированный подход к каждому клиенту",
    color: "from-purple-500 to-pink-500",
    iconColor: "#ec4899"
  },
  {
    icon: CalendarCustom,
    title: "Запись в календарь",
    description: "ИИ предлагает удобное время и автоматически создает запись в вашем календаре",
    details: "Синхронизация с Google Calendar, уведомления и автоматические напоминания",
    color: "from-green-500 to-emerald-500",
    iconColor: "#10b981"
  },
  {
    icon: CheckCircleCustom,
    title: "Готово!",
    description: "Вы получаете уведомление о новой записи и можете сосредоточиться на работе",
    details: "Полная информация о клиенте, его потребностях и предпочтениях в одном месте",
    color: "from-orange-500 to-red-500",
    iconColor: "#f97316"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-24 text-white relative overflow-hidden">
      {/* 3D Magnifying Glass Background */}
      <MagnifyingGlass3DBackground className="opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient"
          >
            Как это работает
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Простой процесс, который{" "}
            <span className="text-gradient font-semibold">революционизирует</span>{" "}
            ваш бизнес за считанные минуты
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent z-10"></div>
              )}

              <div className="apple-card-dark-opaque p-8 h-full hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="icon-container w-16 h-16 flex items-center justify-center mb-6"
                >
                  <step.icon 
                    className="w-8 h-8" 
                    style={{
                      color: step.iconColor,
                      fill: 'none',
                      stroke: step.iconColor
                    }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.details}
                </p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="xl:hidden flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-gray-500" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}