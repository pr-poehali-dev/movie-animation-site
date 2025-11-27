import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const portfolio = [
    {
      title: "Космическая Одиссея",
      category: "Полнометражный фильм",
      description: "3D анимация высочайшего качества",
    },
    {
      title: "Волшебный Лес",
      category: "Короткометражка",
      description: "Фотореалистичная природа",
    },
    {
      title: "Город Будущего",
      category: "Рекламный ролик",
      description: "Футуристичная архитектура",
    },
  ];

  const services = [
    {
      icon: "Box",
      title: "3D Моделирование",
      description: "Создание детализированных 3D-моделей персонажей и окружения",
    },
    {
      icon: "Zap",
      title: "Анимация персонажей",
      description: "Профессиональная анимация с реалистичной физикой движения",
    },
    {
      icon: "Sparkles",
      title: "VFX и эффекты",
      description: "Визуальные эффекты кинематографического качества",
    },
    {
      icon: "Film",
      title: "Постпродакшн",
      description: "Финальная обработка и цветокоррекция",
    },
  ];

  const process = [
    { step: "01", title: "Концепт", description: "Разработка идеи и сценария" },
    { step: "02", title: "Препродакшн", description: "Создание storyboard и концепт-артов" },
    { step: "03", title: "3D Моделирование", description: "Создание 3D-моделей персонажей" },
    { step: "04", title: "Анимация", description: "Оживление персонажей и сцен" },
    { step: "05", title: "Рендеринг", description: "Финальная визуализация" },
    { step: "06", title: "Постпродакшн", description: "Финальная обработка" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold cinematic-text">ANIMASTUDIO</div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("hero")} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection("portfolio")} className="hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection("process")} className="hover:text-primary transition-colors">Процесс</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-6 z-10 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black mb-6 cinematic-text tracking-tight">
            СОЗДАЁМ<br />АНИМАЦИЮ<br />БУДУЩЕГО
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Профессиональная 3D-анимация и визуальные эффекты кинематографического качества
          </p>
          <Button onClick={() => scrollToSection("contact")} size="lg" className="text-lg px-8 py-6 glow-effect">
            Начать проект
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-32 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center cinematic-text">ПОРТФОЛИО</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Наши лучшие работы</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500"></div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center cinematic-text">УСЛУГИ</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Полный цикл производства анимации</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:glow-effect animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-32 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center cinematic-text">ПРОЦЕСС ПРОИЗВОДСТВА</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">От идеи до финального рендера</p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6 items-start group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-6xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                  {item.step}
                </div>
                <div className="flex-1 border-l-2 border-border group-hover:border-primary transition-colors pl-6 pb-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center cinematic-text">КОНТАКТЫ</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Обсудим ваш проект</p>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Проект</label>
                    <Textarea placeholder="Расскажите о вашем проекте..." className="bg-background min-h-32" />
                  </div>
                  <Button className="w-full glow-effect" size="lg">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-12 text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Icon name="Mail" size={20} />
                <span>info@animastudio.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Icon name="Phone" size={20} />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-sm">© 2024 ANIMASTUDIO. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
