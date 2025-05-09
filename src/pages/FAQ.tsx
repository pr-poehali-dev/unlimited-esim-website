import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

// Категории вопросов
const categories = [
  { id: "general", name: "Общие вопросы" },
  { id: "technical", name: "Технические вопросы" },
  { id: "tariffs", name: "Тарифы и оплата" },
  { id: "usage", name: "Использование eSIM" },
  { id: "support", name: "Поддержка" },
];

// Часто задаваемые вопросы
const faqData = [
  {
    id: "what-is-esim",
    category: "general",
    question: "Что такое eSIM?",
    answer: `eSIM (embedded SIM) — это встроенная в устройство SIM-карта, которая не требует физической замены. Технология eSIM позволяет загружать профили операторов через интернет и быстро переключаться между ними. Это особенно удобно для путешественников, которым нужен интернет в разных странах без необходимости покупать физические SIM-карты.`,
  },
  {
    id: "device-compatibility",
    category: "general",
    question: "Какие устройства поддерживают eSIM?",
    answer: `Технологию eSIM поддерживают многие современные смартфоны и планшеты, включая:
    • iPhone XS и новее
    • Samsung Galaxy S20 и новее
    • Google Pixel 3 и новее
    • iPad Pro, iPad Air, iPad (7-го поколения и новее)
    • Некоторые модели ноутбуков с поддержкой сотовой связи
    
    Перед покупкой рекомендуем проверить совместимость вашего устройства в настройках или на нашем сайте в разделе "Проверка совместимости".`,
  },
  {
    id: "purchase-process",
    category: "general",
    question: "Как купить и активировать eSIM?",
    answer: `Процесс покупки и активации eSIM очень прост:
    1. Выберите страну назначения и подходящий тарифный план
    2. Оплатите покупку удобным способом (банковская карта, PayPal и др.)
    3. Получите QR-код и инструкции на указанный email
    4. Отсканируйте QR-код с помощью вашего устройства и следуйте инструкциям
    5. Активируйте eSIM по прибытии в страну назначения
    
    Весь процесс занимает всего несколько минут, и вы будете готовы к использованию интернета сразу по прибытии.`,
  },
  {
    id: "activation-time",
    category: "technical",
    question: "Когда активируется мой eSIM?",
    answer: `Ваш eSIM будет готов к установке на устройство сразу после оплаты. QR-код для установки будет отправлен на ваш email.
    
    Однако сам пакет интернета активируется только когда:
    1. Вы прибудете в страну назначения и подключитесь к местной сети
    2. Или когда вы выберете опцию активации при покупке (если вы хотите активировать eSIM немедленно)
    
    Срок действия пакета начинается с момента первого успешного подключения к сети в стране назначения или с момента принудительной активации.`,
  },
  {
    id: "connection-issues",
    category: "technical",
    question: "Что делать, если у меня возникли проблемы с подключением?",
    answer: `Если у вас возникли проблемы с подключением, следуйте этим шагам:
    
    1. Убедитесь, что ваше устройство поддерживает eSIM и имеет последнюю версию операционной системы
    2. Проверьте, что в настройках включен роуминг данных для вашего eSIM профиля
    3. Перезагрузите устройство
    4. Убедитесь, что вы находитесь в зоне покрытия сети
    5. Попробуйте вручную выбрать сеть оператора в настройках устройства
    
    Если проблема не решена, обратитесь в нашу службу поддержки через чат на сайте или по email support@travelesim.com. Наша команда работает 24/7 и оперативно поможет решить любые технические вопросы.`,
  },
  {
    id: "multi-device",
    category: "technical",
    question: "Могу ли я использовать eSIM на нескольких устройствах?",
    answer: `Нет, eSIM профиль может быть активирован только на одном устройстве. Это связано с особенностями технологии и требованиями безопасности.
    
    Однако вы можете использовать ваше устройство с активированным eSIM в качестве точки доступа Wi-Fi и подключить к нему другие устройства. Это позволит обеспечить интернетом все ваши гаджеты.
    
    Обратите внимание, что некоторые тарифные планы могут не включать функцию точки доступа или иметь ограничения на объем трафика при таком использовании. Проверьте описание выбранного тарифа перед покупкой.`,
  },
  {
    id: "coverage",
    category: "technical",
    question: "Какое покрытие имеет eSIM в странах?",
    answer: `Наши eSIM работают с ведущими местными операторами в каждой стране, обеспечивая максимально возможное покрытие. В большинстве стран покрытие составляет более 90% населенной территории.
    
    Для каждой страны на странице тарифов мы указываем процент покрытия и названия операторов, с сетями которых работает наш eSIM. В популярных туристических районах покрытие практически всегда составляет 100%.
    
    В некоторых отдаленных районах, горных местностях или на островах покрытие может быть ограничено, что характерно для любых операторов связи.`,
  },
  {
    id: "speed-limits",
    category: "tariffs",
    question: "Какая максимальная скорость интернета в разных тарифах?",
    answer: `Максимальная скорость интернета зависит от выбранного тарифного плана и текущих условий сети в месте вашего пребывания:
    
    • Unlim Light: до 3 Мбит/с с лимитом 1 ГБ в день на максимальной скорости
    • Unlim Standart: до 7 Мбит/с с лимитом 3 ГБ в день на максимальной скорости
    • Unlim Advanced: до 15 Мбит/с с лимитом 5 ГБ в день на максимальной скорости
    
    После исчерпания дневного лимита скорость снижается, но eSIM продолжает работать без дополнительной оплаты. Сниженная скорость обычно составляет от 256 Кбит/с до 512 Кбит/с, что достаточно для мессенджеров, почты и легкого веб-серфинга.
    
    Скорость восстанавливается автоматически в начале следующего дня (00:00 по местному времени страны).`,
  },
  {
    id: "payment-methods",
    category: "tariffs",
    question: "Какие способы оплаты вы принимаете?",
    answer: `Мы принимаем различные способы оплаты для вашего удобства:
    
    • Банковские карты: Visa, Mastercard, American Express, Мир
    • Электронные платежные системы: PayPal, Apple Pay, Google Pay
    • Криптовалюты: Bitcoin, Ethereum (через сервис Coinbase Commerce)
    
    Все платежи обрабатываются через защищенное соединение с использованием современных протоколов шифрования. Мы не храним данные ваших карт на наших серверах.
    
    При возникновении проблем с оплатой, пожалуйста, обратитесь в нашу службу поддержки.`,
  },
  {
    id: "refund-policy",
    category: "tariffs",
    question: "Какова политика возврата средств?",
    answer: `Мы предлагаем следующие условия возврата средств:
    
    • Полный возврат средств, если eSIM не был активирован и прошло менее 30 дней с момента покупки
    • Частичный возврат средств (50%), если eSIM был активирован, но вы столкнулись с техническими проблемами, которые наша служба поддержки не смогла решить
    
    Для оформления возврата, пожалуйста, обратитесь в службу поддержки, предоставив номер заказа и причину возврата.
    
    Мы стремимся быть гибкими и рассматриваем каждый случай индивидуально, учитывая конкретные обстоятельства.`,
  },
  {
    id: "usage-iphone",
    category: "usage",
    question: "Как установить eSIM на iPhone?",
    answer: `Для установки eSIM на iPhone следуйте этим шагам:
    
    1. Убедитесь, что ваш iPhone поддерживает eSIM (iPhone XS и новее)
    2. Подключитесь к Wi-Fi
    3. Откройте приложение Камера и отсканируйте QR-код, полученный после покупки
    4. Когда появится уведомление "Обнаружен сотовый тарифный план", нажмите на него
    5. Нажмите "Продолжить" на экране "Добавить сотовый тарифный план"
    6. Выберите метку для вашего eSIM (например, "Путешествие" или название страны)
    7. При необходимости выберите тарифный план для использования данных
    8. Выберите используемые номера для звонков, SMS и передачи данных
    
    После завершения установки вы увидите новый тарифный план в разделе Настройки → Сотовая связь.`,
  },
  {
    id: "usage-android",
    category: "usage",
    question: "Как установить eSIM на Android?",
    answer: `Для установки eSIM на устройство Android (в зависимости от модели и версии ОС):
    
    1. Убедитесь, что ваше устройство поддерживает eSIM
    2. Подключитесь к Wi-Fi
    3. Перейдите в Настройки → Сеть и интернет → Мобильная сеть
    4. Нажмите "+ Добавить" или "Добавить оператора"
    5. Выберите "Отсканировать QR-код" и отсканируйте полученный QR-код
    6. Следуйте инструкциям на экране для завершения установки
    
    На некоторых устройствах Samsung путь может отличаться:
    Настройки → Подключения → Диспетчер SIM-карт → Добавить тарифный план → Отсканировать QR-код
    
    Если у вас возникают трудности, обратитесь к руководству пользователя вашего устройства или в нашу службу поддержки.`,
  },
  {
    id: "data-tracking",
    category: "usage",
    question: "Как отслеживать использование данных?",
    answer: `Есть несколько способов отслеживать объем использованных данных:
    
    1. Через настройки вашего устройства:
       • На iPhone: Настройки → Сотовая связь → Использование данных
       • На Android: Настройки → Сеть и интернет → Передача данных → Использование данных
    
    2. Через личный кабинет на нашем сайте:
       • Войдите в личный кабинет
       • Перейдите в раздел "Мои eSIM"
       • Выберите активный eSIM для просмотра детальной статистики
    
    3. Через наше мобильное приложение (если установлено)
    
    Мы также отправляем уведомления по email или SMS, когда вы израсходуете 80% и 100% дневного лимита трафика на максимальной скорости.`,
  },
  {
    id: "custom-data-pack",
    category: "tariffs",
    question: "Могу ли я купить дополнительный пакет данных?",
    answer: `Да, вы можете приобрести дополнительный пакет данных, если вам нужно больше высокоскоростного трафика:
    
    1. Войдите в личный кабинет на нашем сайте
    2. Выберите активный eSIM
    3. Перейдите в раздел "Дополнительные пакеты"
    4. Выберите подходящий пакет данных (доступны варианты от 1 ГБ до 10 ГБ)
    5. Оплатите выбранный пакет
    
    Дополнительный пакет будет активирован немедленно после оплаты, и высокоскоростной лимит будет увеличен соответственно.
    
    Вы также можете активировать автоматическое пополнение, чтобы дополнительный пакет активировался автоматически при исчерпании основного лимита.`,
  },
  {
    id: "multiple-countries",
    category: "usage",
    question: "Работает ли один eSIM в нескольких странах?",
    answer: `В нашем сервисе eSIM привязан к конкретной стране или региону. Для разных стран требуются разные eSIM профили.
    
    Однако, у нас есть специальные региональные пакеты, которые работают в группе соседних стран:
    
    • Европейский пакет (работает во всех странах ЕС)
    • Азиатский пакет (работает в большинстве стран Юго-Восточной Азии)
    • Ближневосточный пакет (работает в странах Ближнего Востока)
    
    Если ваш маршрут путешествия включает несколько стран из разных регионов, рекомендуем приобрести отдельные eSIM для каждой страны или региона и активировать их по мере необходимости.`,
  },
  {
    id: "support-contact",
    category: "support",
    question: "Как связаться со службой поддержки?",
    answer: `Наша служба поддержки работает круглосуточно и без выходных. Вы можете связаться с нами несколькими способами:
    
    • Онлайн-чат на сайте (кнопка в правом нижнем углу страницы)
    • Email: support@travelesim.com
    • WhatsApp: +7 (999) 123-45-67
    • Телефон горячей линии: 8-800-123-45-67 (бесплатно для России)
    
    Для более быстрого решения вашего вопроса, пожалуйста, укажите:
    1. Номер заказа или email, использованный при покупке
    2. Модель устройства и версию операционной системы
    3. Страну, в которой вы используете eSIM
    4. Подробное описание возникшей проблемы
    
    Среднее время ответа составляет 15 минут в чате и 2 часа по email.`,
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация вопросов по категории и поисковому запросу
  const filteredQuestions = faqData.filter(
    (faq) =>
      (activeCategory === "all" || faq.category === activeCategory) &&
      (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Навигация */}
      <header className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Icon name="Wifi" className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold text-xl text-primary">TraveleSIM</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className="font-medium hover:text-primary transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/countries"
              className="font-medium hover:text-primary transition-colors"
            >
              Страны
            </Link>
            <Link
              to="/how-it-works"
              className="font-medium hover:text-primary transition-colors"
            >
              Как это работает
            </Link>
            <Link
              to="/faq"
              className="font-medium text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/support"
              className="font-medium hover:text-primary transition-colors"
            >
              Поддержка
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Icon name="User" className="mr-2 h-4 w-4" />
              Войти
            </Button>
            <Button>
              <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Заголовок и поиск */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <Link
                to="/"
                className="text-gray-500 hover:text-primary flex items-center"
              >
                <Icon name="Home" className="mr-1 h-4 w-4" />
                Главная
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">Часто задаваемые вопросы</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Часто задаваемые вопросы
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Здесь вы найдете ответы на самые распространенные вопросы о нашем
              сервисе, технологии eSIM и особенностях использования в разных
              странах.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Поиск по вопросам..."
                className="pl-10 py-6 rounded-full shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Icon
                name="Search"
                className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Icon name="Smartphone" className="h-5 w-5 mr-2 text-primary" />
                Совместимость устройств
              </h3>
              <p className="text-gray-600 mb-4">
                Убедитесь, что ваше устройство поддерживает технологию eSIM.
                Большинство современных смартфонов, включая iPhone XS и новее,
                Samsung Galaxy S20 и новее, Google Pixel 3 и новее, поддерживают
                eSIM.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-2 font-medium">
                  <Icon
                    name="Info"
                    className="h-4 w-4 inline-block mr-1 text-primary"
                  />
                  У вас устройство без поддержки eSIM?
                </p>
                <p className="text-gray-600 mb-3">
                  Не беспокойтесь! У нас есть решение. Наши партнеры продают
                  адаптеры Switch eSIM, которые позволяют использовать eSIM даже
                  на устройствах без встроенной поддержки этой технологии. Эти
                  компактные адаптеры легко подключаются к вашему устройству и
                  делают возможным использование всех преимуществ eSIM во время
                  путешествий.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                  onClick={() =>
                    window.open("https://switch-esim.com", "_blank")
                  }
                >
                  <Icon name="ExternalLink" className="h-4 w-4 mr-1.5" />
                  Перейти на сайт партнера
                </Button>
              </div>
              <Button variant="outline" size="sm">
                Проверить совместимость
              </Button>
            </div>
            {/* Категории */}
            <div className="mb-8 flex flex-wrap gap-2 justify-center">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                onClick={() => setActiveCategory("all")}
                className="rounded-full"
              >
                Все вопросы
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setActiveCategory(category.id)}
                  className="rounded-full"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Список вопросов */}
            <div className="bg-white rounded-xl shadow-sm p-6 divide-y">
              {filteredQuestions.length > 0 ? (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full divide-y"
                >
                  {filteredQuestions.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border-none py-2"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4 text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4 text-gray-600 whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="py-12 text-center">
                  <Icon
                    name="SearchX"
                    className="h-12 w-12 text-gray-300 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-medium mb-2">
                    Ничего не найдено
                  </h3>
                  <p className="text-gray-500 mb-6">
                    К сожалению, по вашему запросу не найдено результатов.
                    Попробуйте изменить поисковый запрос или категорию.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("general");
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>

            {/* Контакты поддержки */}
            <div className="mt-12 bg-primary/5 rounded-xl border border-primary/20 p-8 text-center">
              <Icon
                name="HelpCircle"
                className="h-12 w-12 text-primary mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">
                Не нашли ответ на свой вопрос?
              </h2>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Наша команда поддержки готова помочь вам с любыми вопросами
                24/7. Обратитесь к нам удобным для вас способом.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="gap-2">
                  <Icon name="MessageCircle" className="h-4 w-4" />
                  Чат с поддержкой
                </Button>
                <Button variant="outline" className="gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  Написать на email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Wifi" className="h-6 w-6 text-primary mr-2" />
                <span className="font-bold text-xl text-white">TraveleSIM</span>
              </div>
              <p className="mb-4">
                Безлимитный интернет для ваших путешествий по всему миру
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Страны</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/country/turkey"
                    className="hover:text-white transition-colors"
                  >
                    Турция
                  </Link>
                </li>
                <li>
                  <Link
                    to="/country/thailand"
                    className="hover:text-white transition-colors"
                  >
                    Таиланд
                  </Link>
                </li>
                <li>
                  <Link
                    to="/country/egypt"
                    className="hover:text-white transition-colors"
                  >
                    Египет
                  </Link>
                </li>
                <li>
                  <Link
                    to="/country/china"
                    className="hover:text-white transition-colors"
                  >
                    Китай
                  </Link>
                </li>
                <li>
                  <Link
                    to="/countries"
                    className="hover:text-white transition-colors"
                  >
                    Все страны
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Информация</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    Как это работает
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-white transition-colors"
                  >
                    Часто задаваемые вопросы
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Блог
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Помощь</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/support"
                    className="hover:text-white transition-colors"
                  >
                    Поддержка
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Условия использования
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Политика конфиденциальности
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} TraveleSIM. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
