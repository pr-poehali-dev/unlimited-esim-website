import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Данные о странах
const countriesData = [
  {
    id: "turkey",
    name: "Турция",
    image:
      "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=500&auto=format&fit=crop",
    description:
      "Безлимитный интернет для отдыха на побережье или шоппинга в Стамбуле",
    price: "от 9.99€",
    region: "europe",
    coverage: "98%",
    popular: true,
    travelTips: [
      "Приобретите Museum Pass для посещения главных достопримечательностей",
      "Всегда торгуйтесь на базарах, это часть культуры",
      "В Стамбуле используйте Istanbulkart для общественного транспорта",
      "Большинство турков не говорят по-английски за пределами туристических зон",
    ],
    bestPlaces: [
      "Стамбул: Голубая мечеть, Айя-София, Дворец Топкапы",
      "Каппадокия: полёты на воздушных шарах и пещерные отели",
      "Памуккале: белоснежные известняковые террасы",
      "Анталия: курорты и пляжи средиземноморского побережья",
    ],
    connectivity:
      "Высокое покрытие 4G в городах и туристических зонах. Большинство отелей и кафе предлагают бесплатный Wi-Fi. Для удалённых регионов рекомендуется иметь стабильное мобильное подключение.",
  },
  {
    id: "thailand",
    name: "Таиланд",
    image:
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=500&auto=format&fit=crop",
    description: "Оставайтесь на связи на любом из экзотических островов",
    price: "от 12.99€",
    region: "asia",
    coverage: "95%",
    popular: true,
    travelTips: [
      "Всегда носите с собой наличные, особенно на островах",
      "Уважайте тайскую культуру: не обнимайте Будду для фото и не указывайте ногами",
      "Приложение Grab удобнее и дешевле обычных такси",
      "При посещении храмов плечи и колени должны быть закрыты",
    ],
    bestPlaces: [
      "Бангкок: Храм Изумрудного Будды, плавучие рынки",
      "Чиангмай: храмы, ночные рынки и слоновьи заповедники",
      "Пхукет: пляжи Патонг, Ката и Карон",
      "Острова Пхи-Пхи: места съёмок фильма «Пляж»",
    ],
    connectivity:
      "Хорошее 4G-покрытие в городах и на крупных островах. На удалённых островах и в джунглях сигнал может быть нестабилным. Рекомендуется скачать офлайн-карты и переводчик.",
  },
  {
    id: "egypt",
    name: "Египет",
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=500&auto=format&fit=crop",
    description: "Надежный интернет для отдыха на курортах Красного моря",
    price: "от 14.99€",
    region: "africa",
    coverage: "90%",
    popular: true,
    travelTips: [
      "Договаривайтесь о цене такси до начала поездки",
      "Питьевая вода только в бутылках, даже в отелях",
      "Найм гида для посещения пирамид избавит от назойливых продавцов",
      "Чаевые (бакшиш) ожидаются повсеместно, особенно от туристов",
    ],
    bestPlaces: [
      "Каир: Пирамиды Гизы, Египетский музей, Хан эль-Халили",
      "Луксор: Карнакский храм, Долина Царей",
      "Александрия: Цитадель Кайт-Бей, библиотека Александрина",
      "Шарм-эль-Шейх и Хургада: курорты Красного моря и коралловые рифы",
    ],
    connectivity:
      "Стабильное 4G-покрытие в городах и на курортах. В пустынных регионах и внутри пирамид связь отсутствует. VPN может потребоваться для некоторых сервисов и приложений.",
  },
  {
    id: "china",
    name: "Китай",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=500&auto=format&fit=crop",
    description: "Быстрый доступ к сети в любой точке Поднебесной",
    price: "от 19.99€",
    region: "asia",
    coverage: "96%",
    popular: true,
    travelTips: [
      "Установите VPN до прибытия в Китай (Google, Facebook, WhatsApp блокируются)",
      "Скачайте WeChat – универсальное приложение для всего в Китае",
      "Подготовьте переводчик, английский распространён слабо",
      "QR-коды и мобильные платежи распространены повсеместно",
    ],
    bestPlaces: [
      "Пекин: Великая Китайская стена, Запретный город, Храм Неба",
      "Шанхай: набережная Вайтань, Сад радости Юйюань",
      "Сиань: Терракотовая армия, городская стена династии Мин",
      "Гуйлинь: карстовые скалы и живописный круиз по реке Лицзян",
    ],
    connectivity:
      "Превосходное 4G/5G покрытие в городах. Большинство западных сервисов (Google, Facebook, WhatsApp, Instagram) заблокированы. Обязательно нужен VPN. Местные аналоги: Baidu вместо Google, WeChat вместо WhatsApp/Facebook.",
  },
];

// Регионы для фильтрации
const regions = [
  { id: "all", name: "Все регионы" },
  { id: "europe", name: "Европа" },
  { id: "asia", name: "Азия" },
  { id: "africa", name: "Африка" },
];

// Полезные советы для путешественников
const generalTravelTips = [
  {
    title: "Документы и безопасность",
    icon: "FileText",
    tips: [
      "Сделайте цифровые копии паспорта, виз и билетов",
      "Имейте при себе контакты экстренных служб и посольства",
      "Проверьте необходимость визы и медицинской страховки",
      "Узнайте о местных законах и обычаях перед поездкой",
    ],
  },
  {
    title: "Подключение и интернет",
    icon: "Wifi",
    tips: [
      "Скачайте офлайн-карты и переводчик",
      "Активируйте eSIM до поездки для мгновенного подключения",
      "Установите нужные локальные приложения заранее",
      "Защитите свои данные при использовании публичных Wi-Fi сетей",
    ],
  },
  {
    title: "Деньги и оплата",
    icon: "CreditCard",
    tips: [
      "Уведомите банк о поездке, чтобы карты не заблокировали",
      "Имейте небольшую сумму местной валюты для начала",
      "Узнайте о распространенных способах оплаты в стране",
      "Храните деньги в разных местах на случай кражи",
    ],
  },
];

const Countries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showTravelTips, setShowTravelTips] = useState(false);

  // Фильтрация стран по поисковому запросу и региону
  const filteredCountries = countriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRegion === "all" || country.region === selectedRegion),
  );

  // Сортировка стран
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (sortBy === "popular") {
      // Сначала популярные, затем по алфавиту
      if (a.popular !== b.popular) {
        return a.popular ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    } else if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "name-desc") {
      return b.name.localeCompare(a.name);
    } else if (sortBy === "price-asc") {
      const priceA = parseFloat(a.price.replace("от ", "").replace("€", ""));
      const priceB = parseFloat(b.price.replace("от ", "").replace("€", ""));
      return priceA - priceB;
    } else if (sortBy === "price-desc") {
      const priceA = parseFloat(a.price.replace("от ", "").replace("€", ""));
      const priceB = parseFloat(b.price.replace("от ", "").replace("€", ""));
      return priceB - priceA;
    }
    return 0;
  });

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
              className="font-medium text-primary transition-colors"
            >
              Страны
            </Link>
            <Button
              variant="link"
              className="font-medium hover:text-primary transition-colors p-0"
              onClick={() => alert("Страница в разработке")}
            >
              Как это работает
            </Button>
            <Link
              to="/faq"
              className="font-medium hover:text-primary transition-colors"
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

      <main className="flex-grow">
        {/* Hero секция */}
        <section className="bg-gradient-to-r from-primary/90 to-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Безлимитный интернет по всему миру
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Выберите страну назначения и подходящий тарифный план для вашего
              путешествия. Мгновенная активация, доступные цены, надежное
              соединение.
            </p>
          </div>
        </section>

        {/* Советы для путешественников */}
        <section className="py-8 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Советы для путешественников
              </h2>
              <Button
                variant="outline"
                onClick={() => setShowTravelTips(!showTravelTips)}
                className="flex items-center gap-2"
              >
                <Icon
                  name={showTravelTips ? "ChevronUp" : "ChevronDown"}
                  className="h-4 w-4"
                />
                {showTravelTips ? "Скрыть советы" : "Показать советы"}
              </Button>
            </div>

            {showTravelTips && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {generalTravelTips.map((tipGroup, index) => (
                  <Card key={index} className="bg-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Icon
                          name={tipGroup.icon}
                          className="h-5 w-5 text-primary"
                        />
                        {tipGroup.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tipGroup.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start">
                            <Icon
                              name="CheckCircle"
                              className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0"
                            />
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Фильтры и поиск */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Поиск по странам..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Icon
                      name="Search"
                      className="absolute left-3 top-3 h-4 w-4 text-gray-400"
                    />
                  </div>
                </div>
                <div className="w-full md:w-48">
                  <Select
                    value={selectedRegion}
                    onValueChange={setSelectedRegion}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выбрать регион" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region.id} value={region.id}>
                          {region.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full md:w-48">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Сортировка" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Популярные</SelectItem>
                      <SelectItem value="name-asc">
                        По названию (А-Я)
                      </SelectItem>
                      <SelectItem value="name-desc">
                        По названию (Я-А)
                      </SelectItem>
                      <SelectItem value="price-asc">Сначала дешевые</SelectItem>
                      <SelectItem value="price-desc">
                        Сначала дорогие
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Найдено {sortedCountries.length} стран
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Популярные</Badge>
                    <Badge variant="outline">
                      {regions.find((region) => region.id === selectedRegion)?.name}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Список стран */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {sortedCountries.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
                {sortedCountries.map((country) => (
                  <div key={country.id} className="flex flex-col h-full">
                    <Link to={`/country/${country.id}`} className="mb-6">
                      <Card className="overflow-hidden h-full hover:-translate-y-1 transition-transform">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={country.image}
                            alt={country.name}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                          {country.popular && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-primary">
                                Популярное направление
                              </Badge>
                            </div>
                          )}
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-2xl">
                              {country.name}
                            </CardTitle>
                            <div className="text-xl font-bold text-primary">
                              {country.price}
                            </div>
                          </div>
                          <CardDescription className="flex items-center gap-1">
                            <Icon
                              name="Signal"
                              className="h-3.5 w-3.5 text-green-500"
                            />
                            Покрытие {country.coverage}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">
                            {country.description}
                          </p>
                          <Button className="w-full">
                            Подробнее
                            <Icon
                              name="ChevronRight"
                              className="ml-1 h-4 w-4"
                            />
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>

                    {/* Дополнительная информация для путешественников */}
                    <div className="bg-white rounded-xl border shadow-sm">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="info-1">
                          <AccordionTrigger className="px-6 py-4">
                            <div className="flex items-center">
                              <Icon
                                name="MapPin"
                                className="h-5 w-5 text-primary mr-2"
                              />
                              <span>Популярные места</span>
                            </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <ul className="space-y-2">
                              {country.bestPlaces.map((place, idx) => (
                                <li key={idx} className="flex items-start">
                                  <Icon
                                    name="Star"
                                    className="h-4 w-4 text-amber-500 mr-2 mt-1 shrink-0"
                                  />
                                  <span>{place}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="info-2">
                          <AccordionTrigger className="px-6 py-4">
                            <div className="flex items-center">
                              <Icon
                                name="LightbulbIcon"
                                className="h-5 w-5 text-primary mr-2"
                              />
                              <span>Полезные советы</span>
                            </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <ul className="space-y-2">
                              {country.travelTips.map((tip, idx) => (
                                <li key={idx} className="flex items-start">
                                  <Icon
                                    name="Info"
                                    className="h-4 w-4 text-blue-500 mr-2 mt-1 shrink-0"
                                  />
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="info-3">
                          <AccordionTrigger className="px-6 py-4">
                            <div className="flex items-center">
                              <Icon
                                name="Wifi"
                                className="h-5 w-5 text-primary mr-2"
                              />
                              <span>Интернет и связь</span>
                            </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <div className="mb-3">
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
                                <div
                                  className="h-full bg-green-500 rounded-full"
                                  style={{ width: country.coverage }}
                                />
                              </div>
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>Покрытие сети: {country.coverage}</span>
                              </div>
                            </div>
                            <p>{country.connectivity}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Icon
                  name="SearchX"
                  className="h-16 w-16 text-gray-300 mx-auto mb-4"
                />
                <h3 className="text-2xl font-medium mb-2">Страны не найдены</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  К сожалению, по вашему запросу не найдено ни одной страны.
                  Попробуйте изменить параметры поиска или фильтры.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedRegion("all");
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Полезная информация для путешественников */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              Полезная информация для путешественников
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CheckSquare" className="h-5 w-5 text-primary" />
                    Что взять с собой в путешествие
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">1</Badge>
                      <span>
                        <strong>Документы:</strong> паспорт, визы, страховки,
                        копии документов
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">2</Badge>
                      <span>
                        <strong>Гаджеты:</strong> смартфон с eSIM, зарядные
                        устройства, адаптеры для розеток
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">3</Badge>
                      <span>
                        <strong>Деньги:</strong> небольшая сумма местной валюты,
                        карты разных платежных систем
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">4</Badge>
                      <span>
                        <strong>Медицина:</strong> базовый набор лекарств,
                        средства личной гигиены
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="ShieldCheck" className="h-5 w-5 text-primary" />
                    Безопасность в путешествии
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Badge
                        variant="destructive"
                        className="mr-2 shrink-0 mt-0.5"
                      >
                        !
                      </Badge>
                      <span>
                        <strong>Всегда имейте:</strong> контакты местного
                        посольства и экстренных служб
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Badge
                        variant="destructive"
                        className="mr-2 shrink-0 mt-0.5"
                      >
                        !
                      
