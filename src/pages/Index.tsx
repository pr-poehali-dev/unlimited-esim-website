import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const countries = [
  {
    id: "turkey",
    name: "Турция",
    image:
      "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=500&auto=format&fit=crop",
    description:
      "Безлимитный интернет для отдыха на побережье или шоппинга в Стамбуле",
  },
  {
    id: "thailand",
    name: "Таиланд",
    image:
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=500&auto=format&fit=crop",
    description: "Оставайтесь на связи на любом из экзотических островов",
  },
  {
    id: "egypt",
    name: "Египет",
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=500&auto=format&fit=crop",
    description: "Надежный интернет для отдыха на курортах Красного моря",
  },
  {
    id: "china",
    name: "Китай",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=500&auto=format&fit=crop",
    description: "Быстрый доступ к сети в любой точке Поднебесной",
  },
];

const features = [
  {
    icon: "Wifi",
    title: "Безлимитный интернет",
    description: "Неограниченный трафик на высокой скорости во всех тарифах",
  },
  {
    icon: "Globe",
    title: "Мгновенная активация",
    description: "eSIM активируется сразу после оплаты, без задержек",
  },
  {
    icon: "Shield",
    title: "Надежное подключение",
    description: "Работает через местных проверенных операторов связи",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Навигация */}
      <header className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Icon name="Wifi" className="h-6 w-6 text-primary mr-2" />
            <span className="font-bold text-xl text-primary">TraveleSIM</span>
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
        <section className="bg-gradient-to-r from-primary/90 to-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Безлимитный интернет для ваших путешествий
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Оставайтесь на связи в любой точке мира с помощью eSIM.
                  Мгновенная активация, доступные цены, надежное соединение.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    Выбрать направление
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                  >
                    Как это работает
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-white/30 rounded-2xl blur-xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop"
                    alt="Smartphone with eSIM"
                    className="relative rounded-xl shadow-2xl max-w-full h-auto object-cover z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Особенности */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Почему выбирают нас
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-4 rounded-full bg-primary/10 inline-block mb-4">
                    <Icon
                      name={feature.icon}
                      className="h-6 w-6 text-primary"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Популярные направления */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Популярные направления</h2>
              <Button variant="outline">Все страны</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {countries.map((country) => (
                <Link to={`/country/${country.id}`} key={country.id}>
                  <Card className="overflow-hidden h-full hover:-translate-y-1 transition-transform">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-2">
                        {country.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {country.description}
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">От 9.99€</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary"
                        >
                          Подробнее{" "}
                          <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Как это работает */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Как это работает
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Получить eSIM и оставаться на связи во время путешествий еще
              никогда не было так просто
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Выберите страну</h3>
                <p className="text-gray-600">
                  Выберите страну и подходящий тарифный план для вашего
                  путешествия
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Оплатите и получите eSIM
                </h3>
                <p className="text-gray-600">
                  Оплатите покупку и мгновенно получите QR-код для активации
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Наслаждайтесь связью
                </h3>
                <p className="text-gray-600">
                  Отсканируйте QR-код с помощью телефона, и ваш eSIM
                  активируется автоматически
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы к путешествию?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Приобретите eSIM прямо сейчас и будьте на связи в любой точке мира
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Выбрать страну
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
                {countries.map((country) => (
                  <li key={country.id}>
                    <a
                      href={`/country/${country.id}`}
                      className="hover:text-white transition-colors"
                    >
                      {country.name}
                    </a>
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

export default Index;
