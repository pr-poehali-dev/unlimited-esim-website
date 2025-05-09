import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const commonQuestions = [
  {
    id: "activation",
    question: "Как активировать eSIM?",
    answer:
      "После покупки вы получите QR-код на email. Отсканируйте его камерой телефона или через настройки (Настройки → Сотовая связь → Добавить тарифный план). Затем следуйте инструкциям на экране устройства для завершения активации.",
  },
  {
    id: "compatibility",
    question: "Как проверить совместимость моего устройства с eSIM?",
    answer:
      "Большинство современных смартфонов поддерживают eSIM, включая iPhone XS и новее, Samsung Galaxy S20 и новее, Google Pixel 3 и новее. Вы можете проверить совместимость в настройках вашего устройства или на нашем сайте в разделе 'Проверка совместимости'.",
  },
  {
    id: "internet-speed",
    question: "Какая скорость интернета в разных тарифах?",
    answer:
      "Скорость интернета зависит от выбранного тарифа: Unlim Light - до 3 Мбит/с, Unlim Standard - до 7 Мбит/с, Unlim Advanced - до 15 Мбит/с. После исчерпания дневного лимита скорость снижается до 256-512 Кбит/с, но интернет остается доступным.",
  },
  {
    id: "refund",
    question: "Как получить возврат средств?",
    answer:
      "Полный возврат средств возможен, если eSIM не был активирован и прошло менее 30 дней с момента покупки. Частичный возврат (50%) возможен при технических проблемах, которые наша служба поддержки не смогла решить. Для оформления возврата, обратитесь в службу поддержки с номером заказа.",
  },
];

const Support = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("technical");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении тут будет логика отправки формы
    alert("Ваше сообщение отправлено! Мы ответим вам в ближайшее время.");
    setName("");
    setEmail("");
    setMessage("");
    setOrderNumber("");
  };

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
              className="font-medium text-primary transition-colors"
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
              Служба поддержки
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Мы готовы помочь вам с любыми вопросами и проблемами 24/7. Выберите
              удобный способ связи или найдите ответ на ваш вопрос ниже.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Начать чат
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Позвонить нам
              </Button>
            </div>
          </div>
        </section>

        {/* Быстрые контакты */}
        <section className="py-12 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-white shadow-lg border-none transform hover:-translate-y-1 transition-transform">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon
                      name="MessageCircle"
                      className="h-6 w-6 text-primary"
                    />
                  </div>
                  <CardTitle>Онлайн-чат</CardTitle>
                  <CardDescription>Ответ в течение 5 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Наши специалисты онлайн 24/7 и готовы ответить на ваши
                    вопросы в чате на сайте.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Начать чат</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white shadow-lg border-none transform hover:-translate-y-1 transition-transform">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Электронная почта</CardTitle>
                  <CardDescription>Ответ в течение 2 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Напишите нам на email и получите детальный ответ от нашей
                    команды поддержки.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    support@travelesim.com
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white shadow-lg border-none transform hover:-translate-y-1 transition-transform">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Телефон</CardTitle>
                  <CardDescription>Прямая линия поддержки</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Для срочных вопросов вы можете позвонить нам по телефону
                    горячей линии.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    +7 (800) 123-45-67
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Часто задаваемые вопросы */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Часто задаваемые вопросы
              </h2>

              <div className="space-y-6">
                {commonQuestions.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardHeader className="bg-primary/5 py-4">
                      <CardTitle className="text-lg font-medium flex items-start">
                        <Icon
                          name="HelpCircle"
                          className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0"
                        />
                        {item.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link to="/faq">
                  <Button variant="outline">
                    Смотреть все вопросы
                    <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Форма обратной связи */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Нужна помощь?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Если вы не нашли ответ на свой вопрос, заполните форму ниже, и
                  наша команда поддержки свяжется с вами в ближайшее время.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 border">
                <Tabs defaultValue="contact" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-8">
                    <TabsTrigger value="contact">Обратная связь</TabsTrigger>
                    <TabsTrigger value="technical">
                      Техническая проблема
                    </TabsTrigger>
                    <TabsTrigger value="order">Вопрос по заказу</TabsTrigger>
                  </TabsList>

                  <TabsContent value="contact">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-700"
                          >
                            Ваше имя
                          </label>
                          <Input
                            id="name"
                            placeholder="Иван Иванов"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                          >
                            Электронная почта
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="issue"
                          className="text-sm font-medium text-gray-700"
                        >
                          Тема обращения
                        </label>
                        <select
                          id="issue"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={selectedIssue}
                          onChange={(e) => setSelectedIssue(e.target.value)}
                          required
                        >
                          <option value="technical">
                            Техническая проблема
                          </option>
                          <option value="billing">Вопрос по оплате</option>
                          <option value="refund">Возврат средств</option>
                          <option value="other">Другое</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-gray-700"
                        >
                          Сообщение
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Опишите ваш вопрос или проблему..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          required
                        />
                      </div>

                      <div className="pt-4">
                        <Button type="submit" className="w-full md:w-auto">
                          Отправить сообщение
                        </Button>
                      </div>
                    </form>
                  </TabsContent>

                  <TabsContent value="technical">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="tech-name"
                            className="text-sm font-medium text-gray-700"
                          >
                            Ваше имя
                          </label>
                          <Input
                            id="tech-name"
                            placeholder="Иван Иванов"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="tech-email"
                            className="text-sm font-medium text-gray-700"
                          >
                            Электронная почта
                          </label>
                          <Input
                            id="tech-email"
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="tech-device"
                            className="text-sm font-medium text-gray-700"
                          >
                            Устройство
                          </label>
                          <select
                            id="tech-device"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="">Выберите устройство</option>
                            <option value="iphone">iPhone</option>
                            <option value="samsung">Samsung</option>
                            <option value="google">Google Pixel</option>
                            <option value="other">Другое</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="tech-country"
                            className="text-sm font-medium text-gray-700"
                          >
                            Страна использования
                          </label>
                          <select
                            id="tech-country"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="">Выберите страну</option>
                            <option value="turkey">Турция</option>
                            <option value="thailand">Таиланд</option>
                            <option value="egypt">Египет</option>
                            <option value="china">Китай</option>
                            <option value="other">Другая</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="tech-problem"
                          className="text-sm font-medium text-gray-700"
                        >
                          Тип проблемы
                        </label>
                        <select
                          id="tech-problem"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Выберите тип проблемы</option>
                          <option value="activation">Проблемы активации</option>
                          <option value="connection">Проблемы соединения</option>
                          <option value="speed">Низкая скорость</option>
                          <option value="qr">
                            Проблемы со сканированием QR-кода
                          </option>
                          <option value="other">Другое</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="tech-message"
                          className="text-sm font-medium text-gray-700"
                        >
                          Описание проблемы
                        </label>
                        <Textarea
                          id="tech-message"
                          placeholder="Подробно опишите проблему, с которой вы столкнулись..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          required
                        />
                      </div>

                      <div className="pt-4">
                        <Button type="submit" className="w-full md:w-auto">
                          Отправить сообщение
                        </Button>
                      </div>
                    </form>
                  </TabsContent>

                  <TabsContent value="order">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="order-name"
                            className="text-sm font-medium text-gray-700"
                          >
                            Ваше имя
                          </label>
                          <Input
                            id="order-name"
                            placeholder="Иван Иванов"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="order-email"
                            className="text-sm font-medium text-gray-700"
                          >
                            Электронная почта
                          </label>
                          <Input
                            id="order-email"
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="order-number"
                          className="text-sm font-medium text-gray-700"
                        >
                          Номер заказа
                        </label>
                        <Input
                          id="order-number"
                          placeholder="Например: ORD-12345"
                          value={orderNumber}
                          onChange={(e) => setOrderNumber(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="order-issue"
                          className="text-sm font-medium text-gray-700"
                        >
                          Тип обращения
                        </label>
                        <select
                          id="order-issue"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Выберите тип обращения</option>
                          <option value="status">Статус заказа</option>
                          <option value="payment">Проблемы с оплатой</option>
                          <option value="refund">Возврат средств</option>
                          <option value="change">Изменение заказа</option>
                          <option value="other">Другое</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="order-message"
                          className="text-sm font-medium text-gray-700"
                        >
                          Сообщение
                        </label>
                        <Textarea
                          id="order-message"
                          placeholder="Опишите ваш вопрос по заказу..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          required
                        />
                      </div>

                      <div className="pt-4">
                        <Button type="submit" className="w-full md:w-auto">
                          Отправить сообщение
                        </Button>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Статус работы служб */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Статус работы служб
              </h2>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>Статус системы</span>
                    <Badge className="bg-green-500">Все работает</Badge>
                  </CardTitle>
                  <CardDescription>
                    Последнее обновление: 9 мая 2025, 15:30
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span>Сервис активации eSIM</span>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        Работает
                      </Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span>Платежная система</span>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        Работает
                      </Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span>Личный кабинет</span>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        Работает
                      </Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span>API для партнеров</span>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        Работает
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

export default Support;
