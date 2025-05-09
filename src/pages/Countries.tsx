import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
    description:
      "Оставайтесь на связи на любом из экзотических островов и курортов",
    price: "от 12.99€",
    region: "asia",
    coverage: "95%",
    popular: true,
    travelTips: [
      "Всегда носите с собой копию паспорта",
      "Скачайте приложение Grab для заказа такси",
      "Используйте официальные обменники для лучшего курса валют",
      "Приобретите местную SIM-карту в 7-Eleven для звонков внутри страны",
    ],
    bestPlaces: [
      "Бангкок: Королевский дворец, храм Ват Пхо, Чайнатаун",
      "Пхукет: пляжи Патонг, Ката, Карон",
      "Чиангмай: храм Дои Сутхеп, ночной рынок",
      "Краби: пляж Райлей, острова Пхи-Пхи",
    ],
    connectivity:
      "Хорошее 4G покрытие в туристических зонах. На отдаленных островах связь может быть нестабильной. Большинство отелей и кафе предлагают Wi-Fi, но скорость может варьироваться.",
  },
  {
    id: "egypt",
    name: "Египет",
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=500&auto=format&fit=crop",
    description:
      "Надежный интернет для отдыха на курортах Красного моря и исследования древностей",
    price: "от 11.99€",
    region: "africa",
    coverage: "90%",
    popular: false,
    travelTips: [
      "Носите с собой мелкие купюры для чаевых (бакшиш)",
      "Торгуйтесь на рынках, начиная с 1/3 от первоначальной цены",
      "Используйте только официальные такси с счетчиком",
      "Пейте только бутилированную воду",
    ],
    bestPlaces: [
      "Каир: Пирамиды Гизы, Египетский музей, Цитадель Саладина",
      "Луксор: Карнакский храм, Долина Царей",
      "Хургада: пляжи, дайвинг, снорклинг на Красном море",
      "Шарм-эль-Шейх: риф Рас-Мохаммед, экскурсии в пустыню",
    ],
    connectivity:
      "Стабильное 4G покрытие в городах и на основных курортах. В отдаленных районах и в пустыне связь может отсутствовать. Отели обычно предоставляют Wi-Fi, но качество соединения часто оставляет желать лучшего.",
  },
  {
    id: "china",
    name: "Китай",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=500&auto=format&fit=crop",
    description:
      "Быстрый доступ к сети в любой точке Поднебесной, включая VPN для обхода блокировок",
    price: "от 14.99€",
    region: "asia",
    coverage: "96%",
    popular: false,
    travelTips: [
      "Установите VPN до прибытия в Китай для доступа к Google, Facebook и другим сервисам",
      "Скачайте приложение WeChat – это основной инструмент коммуникации",
      "Приобретите карту метро для крупных городов",
      "Всегда имейте при себе карточку отеля с адресом на китайском языке",
    ],
    bestPlaces: [
      "Пекин: Великая Китайская стена, Запретный город, Храм Неба",
      "Шанхай: Набережная Вайтань, телебашня Жемчужина Востока",
      "Сиань: Терракотовая армия, Городская стена",
      "Гонконг: пик Виктория, Цим Ша Цуй, Диснейленд",
    ],
    connectivity:
      "Очень хорошее 4G/5G покрытие почти везде, даже в отдаленных районах. Помните, что многие западные сервисы заблокированы (Google, Facebook, WhatsApp, Instagram). Для их использования требуется VPN, который желательно установить до прибытия в Китай.",
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
    title: "Финансы",
    icon: "Wallet",
    tips: [
      "Уведомите банк о поездке, чтобы избежать блокировки карты",
      "Имейте при себе немного местной валюты для первых расходов",
      "Используйте карты без комиссий за границей",
      "Храните деньги в разных местах на случай кражи",
    ],
  },
  {
    title: "Связь и интернет",
    icon: "Smartphone",
    tips: [
      "Проверьте совместимость вашего устройства с местными сетями",
      "Скачайте офлайн-карты и переводчики до поездки",
      "Рассмотрите приобретение eSIM или местной SIM-карты",
      "Сохраните важные номера телефонов и адреса офлайн",
    ],
  },
];

// Компонент для ввода поискового запроса
const SearchInput = ({ value, onChange }) => (
  <div className="relative w-full md:max-w-md lg:max-w-lg mx-auto mb-8">
    <Input
      type="text"
      placeholder="Поиск по странам..."
      className="pl-10 py-6 rounded-lg shadow-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <Icon
      name="Search"
      className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400"
    />
  </div>
);

// Компонент для выбора региона
const RegionFilter = ({ value, onChange }) => (
  <div className="flex flex-wrap justify-center gap-3">
    {regions.map((region) => (
      <Button
        key={region.id}
        variant={value === region.id ? "default" : "outline"}
        onClick={() => onChange(region.id)}
        className="rounded-full"
      >
        {region.name}
      </Button>
    ))}
  </div>
);

// Компонент для сортировки стран
const SortOptions = ({ value, onChange }) => (
  <div className="flex items-center">
    <span className="text-sm mr-2">Сортировать:</span>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Выберите сортировку" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="popular">По популярности</SelectItem>
        <SelectItem value="name-asc">По названию (А-Я)</SelectItem>
        <SelectItem value="name-desc">По названию (Я-А)</SelectItem>
        <SelectItem value="price-asc">По цене (возрастание)</SelectItem>
        <SelectItem value="price-desc">По цене (убывание)</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

// Компонент для отображения советов
const TravelTipsSection = ({ show, onToggle }) => (
  <div className="mb-8">
    <Button
      variant="outline"
      onClick={onToggle}
      className="w-full flex justify-between items-center py-3 mb-4"
    >
      <div className="flex items-center">
        <Icon name="Lightbulb" className="mr-2 h-5 w-5 text-primary" />
        <span className="font-medium">Советы для путешественников</span>
      </div>
      <Icon
        name={show ? "ChevronUp" : "ChevronDown"}
        className="h-5 w-5 text-gray-500"
      />
    </Button>

    {show && (
      <div className="bg-white rounded-xl border p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {generalTravelTips.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center mb-2">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Icon
                    name={section.icon}
                    className="h-5 w-5 text-primary"
                  />
                </div>
                <h3 className="font-semibold">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0"
                    />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// Компонент карточки страны
const CountryCard = ({ country }) => (
  <Link to={`/country/${country.id}`} className="mb-6">
    <Card className="overflow-hidden h-full hover:-translate-y-1 transition-transform">
      <div className="h-52 overflow-hidden relative">
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        {country.popular && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary">Популярное</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{country.name}</h3>
          <span className="font-medium text-primary">{country.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{country.description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Icon name="Signal" className="h-4 w-4 mr-1.5" />
          <span>Покрытие {country.coverage}</span>
        </div>
      </CardContent>
    </Card>
  </Link>
);

// Компонент для аккордеона с информацией о стране
const CountryInfoAccordion = ({ country }) => (
  <div className="bg-white rounded-xl border shadow-sm">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="info-1">
        <AccordionTrigger className="px-6 py-4">
          <div className="flex items-center">
            <Icon name="MapPin" className="h-5 w-5 text-primary mr-2" />
            <span>Популярные места</span>
          </div>
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
            <Icon name="Lightbulb" className="h-5 w-5 text-primary mr-2" />
            <span>Полезные советы</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4">
          <ul className="space-y-2">
            {country.travelTips.map((tip, idx) => (
              <li key={idx} className="flex items-start">
                <Icon
                  name="Check"
                  className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0"
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
            <Icon name="Wifi" className="h-5 w-5 text-primary mr-2" />
            <span>Интернет и связь</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4">
          <div className="mb-3">
            <div className="flex items-center mb-2">
              <span className="mr-2 text-sm font-medium">Качество связи:</span>
              <div className="h-2 bg-gray-200 rounded-full w-32">
                <div
                  className="h-2 bg-green-500 rounded-full"
                  style={{
                    width: country.coverage,
                  }}
                ></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {country.coverage}
              </span>
            </div>
            <p>{country.connectivity}</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

// Компонент для отображения полезной информации
const TravellerInfoSection = () => (
  <div className="py-12 bg-gray-50">
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
                <Icon
                  name="Smartphone"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Гаджеты и аксессуары</span>
                  <p className="text-sm text-gray-600">
                    Смартфон, зарядные устройства, адаптеры для розеток,
                    портативный аккумулятор, карта памяти
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon
                  name="FileText"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Документы</span>
                  <p className="text-sm text-gray-600">
                    Паспорт, визы, билеты, страховка, копии документов в
                    бумажном и электронном виде
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon
                  name="Wallet"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Финансы</span>
                  <p className="text-sm text-gray-600">
                    Несколько банковских карт, небольшая сумма наличных в
                    местной валюте, карты для путешественников
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon
                  name="FirstAid"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Аптечка</span>
                  <p className="text-sm text-gray-600">
                    Личные лекарства, обезболивающие, средства от простуды,
                    пластырь, антисептик
                  </p>
                </div>
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
                <Icon
                  name="Lock"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Цифровая безопасность</span>
                  <p className="text-sm text-gray-600">
                    Используйте VPN, включите двухфакторную аутентификацию,
                    избегайте подключения к открытым Wi-Fi сетям без защиты
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon
                  name="AlertCircle"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Местные особенности</span>
                  <p className="text-sm text-gray-600">
                    Изучите распространенные схемы мошенничества, опасные районы
                    и местные обычаи перед поездкой
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon
                  name="Globe"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Коммуникация</span>
                  <p className="text-sm text-gray-600">
                    Сохраните контакты местной экстренной помощи, ближайшего
                    посольства и отеля в вашем телефоне
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon
                  name="Share2"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Поделитесь маршрутом</span>
                  <p className="text-sm text-gray-600">
                    Расскажите близким о ваших планах путешествия и
                    поддерживайте с ними регулярную связь
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="AppWindow" className="h-5 w-5 text-primary" />
              Полезные приложения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon
                  name="Map"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Навигация</span>
                  <p className="text-sm text-gray-600">
                    Maps.me, Google Maps с офлайн-картами, Citymapper для
                    общественного транспорта
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon
                  name="Languages"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Переводчики</span>
                  <p className="text-sm text-gray-600">
                    Google Translate с офлайн-пакетами языков, Microsoft
                    Translator
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon
                  name="Hotel"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Бронирование</span>
                  <p className="text-sm text-gray-600">
                    Booking.com, Airbnb, Agoda для Азии, Hotellook для сравнения
                    цен
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="PiggyBank" className="h-5 w-5 text-primary" />
              Как экономить в путешествии
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon
                  name="Calendar"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Планируйте заранее</span>
                  <p className="text-sm text-gray-600">
                    Бронируйте билеты и отели за 3-6 месяцев, используйте
                    агрегаторы для сравнения цен
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon
                  name="Utensils"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Питание</span>
                  <p className="text-sm text-gray-600">
                    Обедайте там, где едят местные жители, посещайте рынки,
                    выбирайте жилье с кухней
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon
                  name="Bus"
                  className="h-4 w-4 text-primary mr-2 mt-1 shrink-0"
                />
                <div>
                  <span className="font-medium">Транспорт</span>
                  <p className="text-sm text-gray-600">
                    Используйте общественный транспорт, покупайте проездные
                    карты для туристов, арендуйте велосипеды
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

// Основной компонент страницы
const Countries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showTravelTips, setShowTravelTips] = useState(false);

  // Фильтрация стран
  const filteredCountries = countriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRegion === "all" || country.region === selectedRegion)
  );

  // Сортировка стран
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (sortBy === "popular") {
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
        <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              eSIM для любой страны
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Выберите идеальный тариф для вашего путешествия. Мгновенная
              активация, стабильное соединение и доступные цены.
            </p>
          </div>
        </section>

        {/* Советы для путешественников */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <TravelTipsSection
              show={showTravelTips}
              onToggle={() => setShowTravelTips(!showTravelTips)}
            />

            {/* Поиск и фильтры */}
            <SearchInput value={searchQuery} onChange={setSearchQuery} />

            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <RegionFilter
                value={selectedRegion}
                onChange={setSelectedRegion}
              />
              <SortOptions value={sortBy} onChange={setSortBy} />
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
                    <CountryCard country={country} />
                    <CountryInfoAccordion country={country} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon
                  name="SearchX"
                  className="h-12 w-12 text-gray-300 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Страны не найдены
                </h3>
                <p className="text-gray-600 mb-6">
                  Попробуйте изменить параметры поиска или сбросить все фильтры
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedRegion("all");
                    setSortBy("popular");
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Дополнительная информация для путешественников */}
        <TravellerInfoSection />
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
                  <Button
                    variant="link"
                    className="p-0 text-gray-400 hover:text-white"
                    onClick={() => alert("Страница в разработке")}
                  >
                    Как это работает
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 text-gray-400 hover:text-white"
                    onClick={() => alert("Страница в разработке")}
                  >
                    О нас
                  </Button>
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
                  <Button
                    variant="link"
                    className="p-0 text-gray-400 hover:text-white"
                    onClick={() => alert("Страница в разработке")}
                  >
                    Блог
                  </Button>
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
                  <Button
                    variant="link"
                    className="p-0 text-gray-400 hover:text-white"
                    onClick={() => alert("Страница в разработке")}
                  >
                    Контакты
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 text-gray-400 hover:text-white"
                    onClick={() => alert("Страница в разработке")}
                  >
                    Условия использования
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 text-gray-400 hover:text-white"
                    onClick={() => alert("Страница в разработке")}
                  >
                    Политика конфиденциальности
                  </Button>
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

export default Countries;
