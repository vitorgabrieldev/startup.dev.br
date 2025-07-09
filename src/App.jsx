import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Brain,
  BookOpen,
  Users,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Menu,
  X,
  Sparkles,
  Rocket,
  Award,
  DollarSign,
  Clock,
  BarChart3
} from 'lucide-react'
import './App.css'

// Importando as imagens
import heroBackground from './assets/TG9PKr95AzMP.jpg'
import gradientBg1 from './assets/gvxttIlWlQos.jpg'
import gradientBg2 from './assets/09mwMSYz8qBv.jpg'
import techBg from './assets/ZekcKZbLVRK8.jpg'
import headerLogo from './assets/ugn7w8ehgwe8g.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // ScrollY state e efeito removidos para um design mais estático

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Inteligência Artificial",
      description: "Ferramentas de IA para otimizar a criação e curadoria de conteúdo educacional."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Conteúdo Focado",
      description: "Cursos curtos e objetivos, desenhados para resultados práticos e diretos."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Curadoria de Qualidade",
      description: "Processo rigoroso para garantir a excelência e relevância de cada curso."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade e Conexão",
      description: "Ambiente colaborativo para professores e alunos trocarem experiências e conhecimentos."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Modelo de Valor Justo",
      description: "Remuneração transparente e justa para os professores, valorizando seu trabalho."
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Acesso Flexível",
      description: "Liberdade para aprender e ensinar a qualquer hora, em qualquer lugar."
    }
  ]

  const problems = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Complexidade Atual",
      description: "Plataformas existentes muitas vezes são complexas e com altas taxas."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Conteúdo Desatualizado",
      description: "Dificuldade em encontrar cursos relevantes e alinhados com as demandas atuais."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Falta de Reconhecimento",
      description: "Professores com dificuldade em monetizar seu conhecimento de forma justa."
    }
  ]

  const benefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Pioneirismo",
      description: "Seja um dos primeiros a explorar a próxima geração da educação online."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Inovação Constante",
      description: "Uma plataforma em evolução, sempre buscando as melhores soluções tecnológicas."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Conhecimento Acessível",
      description: "Democratizando o acesso a conteúdos de alta qualidade para todos."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold gradient-text">startup.dev.br</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Recursos</a>
            <a href="#problems" className="text-muted-foreground hover:text-primary transition-colors">Desafios</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Valores</a>
            <a href="#cta" className="text-muted-foreground hover:text-primary transition-colors">Participe</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Recursos</a>
              <a href="#problems" className="text-muted-foreground hover:text-primary transition-colors">Desafios</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Valores</a>
              <a href="#cta" className="text-muted-foreground hover:text-primary transition-colors">Participe</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            // Animação removida para um design mais estático
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              ✨ Em Construção: O Futuro da Educação
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Revolucionando</span> o Ensino Online
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Prepare-se para uma plataforma que une educação e inteligência artificial. 
              Seja um dos primeiros a transformar o modo como você compartilha conhecimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="gradient-purple-blue hover-glow text-lg px-8 py-6">
                Junte-se à Lista de Espera
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="neon-border hover-scale text-lg px-8 py-6">
                <Play className="mr-2 w-5 h-5" />
                Saiba Mais
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">IA</div>
                <div className="text-muted-foreground">Conteúdo Inteligente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">Curadoria</div>
                <div className="text-muted-foreground">Qualidade Assegurada</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">Inovação</div>
                <div className="text-muted-foreground">Novos Horizontes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${gradientBg1})` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-destructive/20 text-destructive border-destructive/30">
              ⚠️ Desafios Atuais
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O que estamos <span className="gradient-text">transformando</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos construindo soluções para os problemas que professores e alunos enfrentam hoje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm neon-border hover-glow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center mb-4">
                    {problem.icon}
                  </div>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{problem.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${techBg})` }}
        />
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              ✨ Pilares da Nossa Plataforma
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Recursos em <span className="gradient-text">Desenvolvimento</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnologia de ponta para um futuro educacional mais acessível e eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm neon-border hover-glow"> {/* Animação removida */}
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl gradient-purple-blue flex items-center justify-center mb-4 glow-effect">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${gradientBg2})` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              💰 Modelo de Valor Futuro
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Acesso <span className="gradient-text">Justo</span> ao Conhecimento
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um modelo transparente que beneficiará professores e alunos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm neon-border hover-scale text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl gradient-purple-pink flex items-center justify-center mb-4 mx-auto glow-effect">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm neon-border">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Plano Premium Futuro</CardTitle>
                <CardDescription className="text-lg">Benefícios exclusivos para professores</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Subdomínio personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Destaque nos resultados de busca</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Estatísticas avançadas e analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Suporte prioritário</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 relative">
        <div className="absolute inset-0 gradient-purple-blue opacity-20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Seja parte da <span className="gradient-text">revolução</span> educacional!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se à comunidade que está construindo o futuro do ensino online. 
              Seja um dos primeiros a ter acesso a essa inovação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="gradient-purple-blue hover-glow text-lg px-12 py-6">
                Inscreva-se Agora
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="neon-border hover-scale text-lg px-12 py-6">
                Fale Conosco
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Acesso Antecipado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Qualidade Garantida</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-500" />
                <span>Inovação com IA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg gradient-purple-blue flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">startup.dev.br</span>
            </div>
            
            <div className="flex items-center space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Contato</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 startup.dev.br. Todos os direitos reservados. Construindo o futuro da educação com IA.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


