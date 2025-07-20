"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="apple-card-dark p-8"
        >
          <h1 className="text-4xl font-bold mb-8 text-gradient">Политика конфиденциальности</h1>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Оператор персональных данных</h2>
              <p>
                Оператором персональных данных является Volkov AI Agency, 
                осуществляющая обработку персональных данных в соответствии с 
                требованиями Федерального закона от 27.07.2006 № 152-ФЗ 
                «О персональных данных».
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Виды обрабатываемых персональных данных</h2>
              <p>Мы обрабатываем следующие категории персональных данных:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Имя и фамилия</li>
                <li>Адрес электронной почты</li>
                <li>Номер телефона</li>
                <li>Никнейм в Telegram</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Цели обработки персональных данных</h2>
              <p>Персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Предоставление доступа к закрытому тестированию CRM системы</li>
                <li>Связь с потенциальными клиентами</li>
                <li>Информирование о новых возможностях и обновлениях</li>
                <li>Техническая поддержка пользователей</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Хранение и защита данных</h2>
              <p>
                Мы принимаем все необходимые меры для защиты ваших персональных данных 
                от несанкционированного доступа, изменения, раскрытия или уничтожения. 
                Данные хранятся на защищенных серверах с применением современных 
                технологий шифрования.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Правовые основания обработки</h2>
              <p>
                Обработка персональных данных осуществляется на основании:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Согласия субъекта персональных данных</li>
                <li>Необходимости исполнения договора</li>
                <li>Законных интересов оператора</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Согласие на обработку</h2>
              <p>
                Предоставляя свои персональные данные, вы даете согласие на их обработку 
                в указанных выше целях. Согласие может быть отозвано в любой момент 
                путем направления соответствующего уведомления на наш электронный адрес.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Права субъекта персональных данных</h2>
              <p>Вы имеете право:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Получать информацию о обработке ваших персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения данных</li>
                <li>Отзывать согласие на обработку персональных данных</li>
                <li>Обращаться в уполномоченный орган по защите прав субъектов персональных данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Передача данных третьим лицам</h2>
              <p>
                Мы не передаем ваши персональные данные третьим лицам без вашего 
                явного согласия, за исключением случаев, предусмотренных 
                действующим законодательством.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Контактная информация</h2>
              <p>
                По всем вопросам, связанным с обработкой персональных данных, 
                вы можете обращаться по адресу: volkovaisolutions@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Изменения в политике</h2>
              <p>
                Мы оставляем за собой право вносить изменения в данную политику 
                конфиденциальности. Актуальная версия всегда доступна на нашем сайте.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
