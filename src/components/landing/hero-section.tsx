"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Phone3DBackground } from "@/components/ui/phone-3d-model";

export function HeroSection() {
  return (
    <section className="min-h-screen text-white relative overflow-hidden">
      {/* 3D Phone Background */}
      <Phone3DBackground className="opacity-80" />

      {/* Volkov AI Agency Branding */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="glass-card-dark px-6 py-3">
          <p className="text-sm text-gray-300 font-medium">
            Разработано командой <span className="text-gradient font-semibold">Volkov AI Agency</span>
          </p>
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 pt-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:-ml-8"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Перестаньте{" "}
              <span className="text-red-500 smooth-bounce" style={{ display: 'inline-block' }}>терять звонки</span>.
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Наша CRM система работает с ИИ агентом, который 24/7 отвечает на каждый звонок, записывает их в ваш календарь, ставит новые задачи и направляет уведомления в телеграм или другой удобный мессенджер. Будущее уже сегодня.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="apple-button text-black text-lg font-semibold px-8 py-4"
              >
                Начать 7-дневный бесплатный период
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="bg-black text-blue-400 text-lg font-semibold px-8 py-4 border border-blue-400 hover:bg-gray-900 transition-colors"
              >
                Демо CRM
              </Button>
            </motion.div>

            {/* Enhanced Trust indicators */}
            <motion.div 
              className="flex items-center gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 glass-card-dark px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Без кредитной карты</span>
              </div>
              <div className="flex items-center gap-2 glass-card-dark px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Настройка за 5 минут</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="apple-card-dark p-8">
              <motion.h3 
                className="text-xl font-semibold mb-6 text-center text-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                Как это работает
              </motion.h3>
              
              {/* Enhanced Animation steps */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Входящий звонок</p>
                    <p className="text-sm text-gray-400">ИИ отвечает мгновенно</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex items-center gap-4 p-4 glass-card-calendar-opaque rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Запись в календарь</p>
                    <p className="text-sm text-gray-400">Автоматическое бронирование</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Лид сохранен</p>
                    <p className="text-sm text-gray-400">Никто не потерян</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}