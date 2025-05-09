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
  // ... другие страны
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
  // ... другие группы советов
];

const Countries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showTravelTips, setShowTravelTips] = useState(false);

  const filteredCountries = countriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRegion === "all" || country.region === selectedRegion),
  );

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
        {/* ... навигация ... */}
      </header>

      <main className="flex-grow">
        {/* ... hero, советы, фильтры, поиск ... */}

        {/* Список стран */}
        <section className="py-12">{/* ... вывод стран ... */}</section>

        {/* Дополнительная информация для путешественников */}
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
                <CardContent>{/* ... содержимое ... */}</CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="ShieldCheck" className="h-5 w-5 text-primary" />
                    Безопасность в путешествии
                  </CardTitle>
                </CardHeader>
                <CardContent>{/* ... содержимое ... */}</CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Страница страны */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {sortedCountries.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
                {sortedCountries.map((country) => (
                  <div key={country.id} className="flex flex-col h-full">
                    <Link to={`/country/${country.id}`} className="mb-6">
                      <Card className="overflow-hidden h-full hover:-translate-y-1 transition-transform">
                        {/* ... изображение и заголовки ... */}
                      </Card>
                    </Link>

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
                          {/* ... содержимое info-2 ... */}
                        </AccordionItem>

                        <AccordionItem value="info-3">
                          {/* ... содержимое info-3 ... */}
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              {
                /* ... сообщение "Страны не найдены" ... */
              }
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Countries;
