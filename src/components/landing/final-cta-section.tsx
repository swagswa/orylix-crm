"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Zap, Shield, Clock } from "lucide-react";

const benefits = [
  { icon: Zap, text: "Настройка за 5 минут" },
  { icon: Shield, text: "Без долгосрочных обязательств" },
  { icon: Clock, text: "Поддержка 24/7" }
];

export function FinalCTASection() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { email, phone, telegram });
    // Add your form submission logic here
  };

  return (
    <section className="py-24 text-white relative overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Готовы к будущему без{" "}
            <span className="text-red-500 smooth-bounce" style={{ display: 'inline-block' }}>потери клиентов</span>?
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Присоединяйтесь к{" "}
            <span className="text-gradient font-semibold">закрытому тестированию</span>{" "}
            и начните уже сейчас использовать ИИ технологии в вашем любимой деле.
          </motion.p>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="apple-card-dark p-8 max-w-2xl mx-auto mb-12"
          >
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Хотите увидеть это в действии?
                </h3>
                <p className="text-gray-300 mb-6">
                  Оставьте заявку и получите доступ к закрытому тестированию нашей CRM системы с ИИ агентом
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 mb-8 relative z-50" style={{ pointerEvents: 'auto' }}>
                <div className="relative z-50" style={{ pointerEvents: 'auto' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 relative z-50"
                    style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
                  />
                </div>
                
                <div className="relative z-50" style={{ pointerEvents: 'auto' }}>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Номер телефона"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 relative z-50"
                    style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
                  />
                </div>
                
                <div className="relative z-50" style={{ pointerEvents: 'auto' }}>
                  <input
                    type="text"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    placeholder="Ник в Telegram (например, @username)"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 relative z-50"
                    style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
                  />
                </div>
                
                {/* Checkbox for consent */}
                <div className="flex items-start gap-3 text-left relative z-50" style={{ pointerEvents: 'auto' }}>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={isAgreed}
                      onChange={(e) => setIsAgreed(e.target.checked)}
                      className="sr-only"
                    />
                    <label 
                      htmlFor="consent" 
                      className={`flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer transition-all duration-300 ${
                        isAgreed 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600 border-blue-500 shadow-lg shadow-blue-500/30' 
                          : 'bg-white/10 border-white/30 hover:border-white/50'
                      }`}
                    >
                      {isAgreed && (
                        <svg 
                          className="w-3 h-3 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={3} 
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </label>
                  </div>
                  <div className="text-sm text-gray-300 leading-relaxed">
                     Согласие на{' '}
                     <Link 
                       href="/privacy" 
                       className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       обработку персональных данных
                     </Link>
                   </div>
                </div>
                
                <motion.div
                  whileHover={isAgreed ? { scale: 1.05 } : {}}
                  whileTap={isAgreed ? { scale: 0.95 } : {}}
                  className="text-center"
                >
                  <button 
                    type="submit" 
                    disabled={!isAgreed}
                    className={`apple-button text-xl font-semibold px-12 py-6 w-full sm:w-auto relative z-50 transition-all duration-300 ${
                      !isAgreed ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
                    }`}
                    style={{ 
                      pointerEvents: isAgreed ? 'auto' : 'none', 
                      position: 'relative', 
                      zIndex: 50 
                    }}
                  >
                    Записаться на закрытое тестирование
                  </button>
                </motion.div>
              </form>

              {/* Benefits */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 glass-card-dark px-4 py-2 rounded-full"
                  >
                    <benefit.icon className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card-dark p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg floating">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Без рисков</h4>
                <p className="text-sm text-gray-300">Отмените в любой момент</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg floating" style={{ animationDelay: '0.5s' }}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Безопасно</h4>
                <p className="text-sm text-gray-300">Защита данных по стандартам GDPR</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg floating" style={{ animationDelay: '1s' }}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Быстро</h4>
                <p className="text-sm text-gray-300">Запуск за 5 минут</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}