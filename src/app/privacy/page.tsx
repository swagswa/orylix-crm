'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/landing/footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header with back button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Вернуться на главную
          </Link>
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Политика конфиденциальности
          </h1>

          <div className="prose prose-lg prose-invert max-w-none text-white/90 leading-relaxed">
            <p className="text-lg mb-6">
              Настоящая Политика конфиденциальности регулирует порядок обработки и защиты персональных данных физических лиц (Пользователей), передаваемых при использовании формы обратной связи на сайте.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Оператор</h2>
              <p>
                Оператором обработки персональных данных является Волков Даниил Олегович (ИП), ИНН: [указать ваш ИНН], email: volkovaisolutions@gmail.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Персональные данные</h2>
              <p className="mb-3">
                Мы обрабатываем следующие персональные данные, предоставляемые пользователями добровольно:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Имя</li>
                <li>Адрес электронной почты</li>
                <li>Номер телефона</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Цели обработки</h2>
              <p className="mb-3">
                Персональные данные используются исключительно для следующих целей:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>установление обратной связи с пользователем;</li>
                <li>предоставление запрашиваемой информации и консультаций;</li>
                <li>выполнение обязательств по оказанию услуг;</li>
                <li>улучшение качества обслуживания и работы сайта.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Хранение и защита данных</h2>
              <p>
                Все персональные данные хранятся и обрабатываются с использованием баз данных, расположенных на территории Российской Федерации, в соответствии с требованиями ФЗ-152 и ФЗ-242. Применяются необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Правовое основание обработки</h2>
              <p>
                Обработка персональных данных осуществляется в соответствии с Федеральным законом № 152-ФЗ &ldquo;О персональных данных&rdquo;, а также на основании добровольного, осознанного и однозначного согласия субъекта персональных данных.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Согласие пользователя</h2>
              <p>
                Пользователь, отправляя данные через форму на сайте, подтверждает своё согласие с настоящей Политикой конфиденциальности и даёт согласие на обработку своих персональных данных Оператором. Согласие считается предоставленным в момент отправки формы.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Права пользователя</h2>
              <p className="mb-3">
                Пользователь имеет право:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>получить информацию о своих персональных данных и целях их обработки;</li>
                <li>отозвать согласие на обработку персональных данных в любое время;</li>
                <li>потребовать уточнения, блокирования или уничтожения своих персональных данных.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Передача данных третьим лицам</h2>
              <p>
                Оператор не передаёт персональные данные третьим лицам, за исключением случаев, прямо предусмотренных законодательством Российской Федерации или с письменного согласия пользователя.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Контакты</h2>
              <p>
                По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться по электронной почте: volkovaisolutions@gmail.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Изменение политики</h2>
              <p>
                Оператор оставляет за собой право вносить изменения в настоящую Политику конфиденциальности без предварительного уведомления. Новая редакция вступает в силу с момента её размещения на сайте.
              </p>
            </section>

            <div className="text-center mt-12 pt-8 border-t border-white/20">
              <p className="text-white/70">
                Дата публикации: 20 июля 2025 г.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}