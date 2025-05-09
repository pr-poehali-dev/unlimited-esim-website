
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
  },
  {
    id: "italy",
    name: "Италия",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=500&auto=format&fit=crop",
    description: "Интернет для путешествия по историческим городам и побережью",
    price: "от 8.99€",
    region: "europe",
    coverage: "99%",
    popular: false,
  },
  {
    id: "spain",
    name: "Испания",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=500&auto=format&fit=crop",
    description: "Стабильное подключение на курортах и в крупных городах",
    price: "от 8.99€",
    region: "europe",
    coverage: "98%",
    popular: false,
  },
  {
    id: "greece",
    name: "Греция",
    image:
      "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?q=80&w=500&auto=format&fit=crop",
    description: "Интернет на островах и материковой части для вашего отдыха",
    price: "от 9.99€",
    region: "europe",
    coverage: "95%",
    popular: false,
  },
  {
    id: "japan",
    name: "Япония",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=500&auto=format&fit=crop",
    description: "Высокоскоростной доступ в стране передовых технологий",
    price: "от 16.99€",
    region: "asia",
    coverage: "99%",
    popular: false,
  },
  {
    id: "united-arab-emirates",
    name: "ОАЭ",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=500&auto=format&fit=crop",
    description: "Стабильное подключение в Дубае и других эмиратах",
    price: "от 15.99€",
    region: "middle-east",
    coverage: "97%",
    popular: false,
  },
  {
    id: "usa",
    name: "США",
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=500&auto=format&fit=crop",
    description: "Интернет для путешествия по всем штатам Америки",
    price: "от 14.99€",
    region: "north-america",
    coverage: "98%",
    popular: false,
  },
  {
    id: "australia",
    name: "Австралия",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=500&auto=format&fit=crop",
    description: "Связь в крупных городах и отдаленных регионах",
    price: "от 17.99€",
    region: "oceania",
    coverage: "92%",
    popular: false,
  },
  {
    id: "bali",
    name: "Бали",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=500&auto=format&fit=crop",
    description: "Интернет для работы и отдыха на популярном острове",
    price: "от 11.99€",
    region: "asia",
    coverage: "90%",
    popular: false,
  },
];

// Регионы для фильтрации
const regions = [
  { id: "all", name: "Все регионы" },
  { id: "europe", name: "Европа" },
  { id: "asia", name: "Азия" },
  { id: "africa", name: "Африка" },
  { id: "north-america", name: "Северная Америка" },
  { id: "middle-east", name: "Ближний Восток" },
  { id: "oceania", name: "Океания" },
];

const Countries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  // Фильтрация стран по поисковому запросу и региону
  const filteredCountries = countriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRegion === "all" || country.region === selectedRegion)
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
      // Извлекаем числовое значение из строки цены для сортировки
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
            <Button
              variant="link"
              className="font-medium hover:text-primary transition-colors p-0"
              onClick={() => alert("Страница в разработке")}
            >
              Поддержка
            </Button>
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

        {/* Фильтры и поиск */}
        <section className="py-12 bg-gray-50">
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
                      <SelectItem value="name-asc">По названию (А-Я)</SelectItem>
                      <SelectItem value="name-desc">По названию (Я-А)</SelectItem>
                      <SelectItem value="price-asc">
                        Сначала дешевые
                      </SelectItem>
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
                      {
                        regions.find((region) => region.id === selectedRegion)
                          ?.name
                      }
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedCountries.map((country) => (
                  <Link to={`/country/${country.id}`} key={country.id}>
                    <Card className="overflow-hidden h-full hover:-translate-y-1 transition-transform">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={country.image}
                          alt={country.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                        {country.popular && (
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-primary">Популярное направление</Badge>
                          </div>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{country.name}</CardTitle>
                          <div className="text-xl font-bold text-primary">
                            {country.price}
                          </div>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                          <Icon name="Signal" className="h-3.5 w-3.5 text-green-500" />
                          Покрытие {country.coverage}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{country.description}</p>
                        <Button
                          variant="outline"
                          className="w-full text-primary"
                        >
                          Подробнее
                          <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Icon
                  name="SearchX"
                  className="h-16 w-16 text-gray-300 mx-auto mb-4"
                />
                <h3 className="text-2xl font-medium mb-2">
                  Страны не найдены
                </h3>
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

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Не нашли нужную страну?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами, и мы поможем подобрать оптимальное решение для вашего путешествия
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Написать в чат
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                <Icon name="Mail" className="mr-2 h-5 w-5" />
                Связаться по email
              </Button>
            </div>
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
                  <Button
                    variant="link"
                    className="p-0 text-gray-400 hover:text-white"
                    onClick={() => alert("Страница в разработке")}
                  >
                    Поддержка
                  </Button>
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
