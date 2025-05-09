import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Данные о странах
const countriesData = {
  turkey: {
    name: "Турция",
    image:
      "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop",
    description:
      "Турция — страна, расположенная на стыке Европы и Азии, известная своими пляжами, историческими достопримечательностями и гостеприимством. Для комфортного отдыха в этой стране необходимо оставаться на связи.",
    coverage: "98% территории",
    operators: ["Turkcell", "Vodafone TR", "Türk Telekom"],
    defaultTab: "standart",
  },
  thailand: {
    name: "Таиланд",
    image:
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
    description:
      "Таиланд — тропический рай с экзотическими пляжами, джунглями и древними храмами. Постоянный доступ к интернету поможет вам найти лучшие места для посещения и оставаться на связи с близкими.",
    coverage: "95% территории",
    operators: ["AIS", "DTAC", "TrueMove H"],
    defaultTab: "light",
  },
  egypt: {
    name: "Египет",
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=1200&auto=format&fit=crop",
    description:
      "Египет — страна пирамид, Красного моря и впечатляющей истории. Надежное подключение к интернету необходимо для навигации, общения и поиска информации о достопримечательностях.",
    coverage: "90% территории",
    operators: ["Vodafone Egypt", "Orange Egypt", "Etisalat"],
    defaultTab: "standart",
  },
  china: {
    name: "Китай",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Китай — страна с богатой культурой, историческими памятниками и современными мегаполисами. Учитывая ограничения на доступ к некоторым сервисам, надежное подключение к интернету особенно важно для туристов.",
    coverage: "96% территории",
    operators: ["China Mobile", "China Unicom", "China Telecom"],
    defaultTab: "advanced",
  },
};

// Данные о тарифах
const tariffs = {
  light: {
    name: "Unlim Light",
    price: 19.99,
    duration: "7 дней",
    features: [
      "Безлимитный интернет",
      "Скорость до 3 Мбит/с",
      "1 ГБ на максимальной скорости в день",
      "После исчерпания лимита — сниженная скорость до конца дня",
      "Поддержка 4G/LTE сетей",
    ],
    badge: "Популярный",
    badgeColor: "secondary",
  },
  standart: {
    name: "Unlim Standart",
    price: 29.99,
    duration: "10 дней",
    features: [
      "Безлимитный интернет",
      "Скорость до 7 Мбит/с",
      "3 ГБ на максимальной скорости в день",
      "После исчерпания лимита — сниженная скорость до конца дня",
      "Поддержка 4G/LTE сетей",
      "Возможность использования как точку доступа",
    ],
    badge: "Рекомендуемый",
    badgeColor: "primary",
  },
  advanced: {
    name: "Unlim Advanced",
    price: 39.99,
    duration: "15 дней",
    features: [
      "Безлимитный интернет",
      "Скорость до 15 Мбит/с",
      "5 ГБ на максимальной скорости в день",
      "После исчерпания лимита — сниженная скорость до конца дня",
      "Поддержка 4G/LTE/5G сетей",
      "Возможность использования как точку доступа",
      "Приоритетная техническая поддержка",
    ],
    badge: "Премиум",
    badgeColor: "destructive",
  },
};

const CountryDetailPage = () => {
  const { countryId } = useParams<{ countryId: string }>();

  // Проверка на существование страны
  if (!countryId || !countriesData[countryId as keyof typeof countriesData]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Страна не найдена</h1>
          <p className="text-xl text-gray-600 mb-8">
            Запрошенная страна отсутствует в нашей базе данных.
          </p>
          <Link to="/">
            <Button>Вернуться на главную</Button>
          </Link>
        </div>
      </div>
    );
  }

  const country = countriesData[countryId as keyof typeof countriesData];

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
            <a
              href="/"
              className="font-medium hover:text-primary transition-colors"
            >
              Главная
            </a>
            <a
              href="/countries"
              className="font-medium hover:text-primary transition-colors"
            >
              Страны
            </a>
            <a
              href="/how-it-works"
              className="font-medium hover:text-primary transition-colors"
            >
              Как это работает
            </a>
            <a
              href="/faq"
              className="font-medium hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href="/support"
              className="font-medium hover:text-primary transition-colors"
            >
              Поддержка
            </a>
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

      <main className="flex-grow">
        {/* Hero секция */}
        <section
          className="relative py-20 text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${country.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <Link
                  to="/"
                  className="text-white/80 hover:text-white flex items-center"
                >
                  <Icon name="Home" className="mr-1 h-4 w-4" />
                  Главная
                </Link>
                <span className="mx-2 text-white/60">/</span>
                <Link
                  to="/countries"
                  className="text-white/80 hover:text-white"
                >
                  Страны
                </Link>
                <span className="mx-2 text-white/60">/</span>
                <span className="text-white">{country.name}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Безлимитный интернет в {country.name}
              </h1>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                {country.description}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center">
                  <Icon name="Signal" className="h-5 w-5 mr-2 text-primary" />
                  <span>Покрытие: {country.coverage}</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Network" className="h-5 w-5 mr-2 text-primary" />
                  <span>Операторы: {country.operators.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Тарифы */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Выберите тарифный план
            </h2>

            <Tabs
              defaultValue={country.defaultTab}
              className="max-w-4xl mx-auto"
            >
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="light">Unlim Light</TabsTrigger>
                <TabsTrigger value="standart">Unlim Standart</TabsTrigger>
                <TabsTrigger value="advanced">Unlim Advanced</TabsTrigger>
              </TabsList>

              {Object.entries(tariffs).map(([key, tariff]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <Card>
                    <CardHeader className="pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-2xl">
                            {tariff.name}
                          </CardTitle>
                          <div className="mt-2 flex items-center">
                            <Badge className={`bg-${tariff.badgeColor}`}>
                              {tariff.badge}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold">
                            {tariff.price}€
                          </div>
                          <div className="text-sm text-gray-500">
                            {tariff.duration}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8 py-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-4">
                            Что включено
                          </h4>
                          <ul className="space-y-3">
                            {tariff.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <Icon
                                  name="CheckCircle"
                                  className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0"
                                />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="text-lg font-semibold mb-4">
                            Как активировать
                          </h4>
                          <ol className="space-y-4">
                            <li className="flex">
                              <span className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center text-primary font-semibold mr-3 shrink-0">
                                1
                              </span>
                              <p>
                                Оплатите eSIM и получите QR-код на электронную
                                почту
                              </p>
                            </li>
                            <li className="flex">
                              <span className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center text-primary font-semibold mr-3 shrink-0">
                                2
                              </span>
                              <p>
                                Отсканируйте QR-код камерой телефона или через
                                настройки
                              </p>
                            </li>
                            <li className="flex">
                              <span className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center text-primary font-semibold mr-3 shrink-0">
                                3
                              </span>
                              <p>
                                Активируйте eSIM по прибытии в {country.name}
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div className="flex justify-center mt-6">
                        <Button size="lg" className="px-8">
                          <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                          Купить сейчас
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Инструкции */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Как использовать eSIM в {country.name}
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Следуйте простым шагам, чтобы настроить и использовать eSIM во
                время вашего путешествия
              </p>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon
                      name="Smartphone"
                      className="h-5 w-5 mr-2 text-primary"
                    />
                    Совместимость устройств
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Убедитесь, что ваше устройство поддерживает технологию eSIM.
                    Большинство современных смартфонов, включая iPhone XS и
                    новее, Samsung Galaxy S20 и новее, Google Pixel 3 и новее,
                    поддерживают eSIM.
                  </p>
                  <Button variant="outline" size="sm">
                    Проверить совместимость
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon
                      name="Settings"
                      className="h-5 w-5 mr-2 text-primary"
                    />
                    Настройка eSIM
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Для iPhone:</h4>
                      <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                        <li>Откройте Настройки → Сотовая связь</li>
                        <li>Нажмите "Добавить тарифный план сотовой связи"</li>
                        <li>Отсканируйте QR-код</li>
                        <li>Выберите метку для нового тарифного плана</li>
                        <li>
                          Включите "Данные сотовой связи" для нового тарифа
                        </li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Для Android:</h4>
                      <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                        <li>Откройте Настройки → Сеть и интернет</li>
                        <li>Выберите "Мобильная сеть" → "+" или "Добавить"</li>
                        <li>Нажмите "Далее" → "Отсканировать QR-код"</li>
                        <li>Отсканируйте QR-код и следуйте инструкциям</li>
                        <li>Активируйте новый тарифный план</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon
                      name="HelpCircle"
                      className="h-5 w-5 mr-2 text-primary"
                    />
                    Часто задаваемые вопросы
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">
                        Когда активируется мой eSIM?
                      </h4>
                      <p className="text-gray-600">
                        Ваш eSIM будет готов к активации сразу после оплаты. Вы
                        можете активировать его по прибытии в {country.name} или
                        заранее установить и настроить его перед поездкой.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Что делать если у меня возникли проблемы с подключением?
                      </h4>
                      <p className="text-gray-600">
                        Если у вас возникли проблемы с подключением, пожалуйста,
                        свяжитесь с нашей службой поддержки, которая работает
                        24/7. Вы можете связаться с нами через чат на сайте или
                        по электронной почте.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Могу ли я использовать eSIM на нескольких устройствах?
                      </h4>
                      <p className="text-gray-600">
                        Нет, eSIM привязан к одному устройству. Если вам нужно
                        использовать интернет на нескольких устройствах, вы
                        можете использовать ваше основное устройство в качестве
                        точки доступа.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="link" className="text-primary p-0">
                      Посмотреть все часто задаваемые вопросы “
                      <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Готовы к путешествию в {country.name}?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Приобретите eSIM сейчас и наслаждайтесь безлимитным интернетом во
              время вашего путешествия.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Выбрать тариф
            </Button>
          </div>
        </section>
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
                {Object.entries(countriesData).map(([key, country]) => (
                  <li key={key}>
                    <Link
                      to={`/country/${key}`}
                      className="hover:text-white transition-colors"
                    >
                      {country.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="/countries"
                    className="hover:text-white transition-colors"
                  >
                    Все страны
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Информация</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    Как это работает
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-white transition-colors">
                    Часто задаваемые вопросы
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Блог
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Помощь</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/support"
                    className="hover:text-white transition-colors"
                  >
                    Поддержка
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Условия использования
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Политика конфиденциальности
                  </a>
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

export default CountryDetailPage;
