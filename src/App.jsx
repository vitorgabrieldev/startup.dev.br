import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import * as Tooltip from '@radix-ui/react-tooltip'
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
import heroBackground from './assets/TG9PKr95AzMP.webp'
import gradientBg1 from './assets/gvxttIlWlQos.webp'
import gradientBg2 from './assets/09mwMSYz8qBv.webp'
import techBg from './assets/ZekcKZbLVRK8.webp'

// Lazy load para imagens não críticas
const lazyLoadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.src = src
  })
}

// Variantes de animação
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

const slideInFromTop = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const inactivityTimerRef = useRef(null)
  const lastScrollPositionRef = useRef(0)
  const lastActivityTimeRef = useRef(Date.now())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
      setScrollY(scrollTop)
      
      // Reset inactivity timer on scroll
      lastActivityTimeRef.current = Date.now()
      lastScrollPositionRef.current = scrollTop
      
      // Clear existing timer
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }
      
      // Set new timer for inactivity
      inactivityTimerRef.current = setTimeout(() => {
        const timeSinceLastActivity = Date.now() - lastActivityTimeRef.current
        const currentScrollPosition = window.scrollY
        
        // Only trigger if user has been inactive for 8 seconds and hasn't scrolled
        if (timeSinceLastActivity >= 8000 && Math.abs(currentScrollPosition - lastScrollPositionRef.current) < 10) {
          // Get current viewport height
          const viewportHeight = window.innerHeight
          const currentPosition = window.scrollY
          
          // Smooth scroll down by 50px and back
          const targetPosition = Math.min(currentPosition + 50, document.body.scrollHeight - viewportHeight)
          
          // Animação contínua: vai para baixo e volta
          continuousScrollAnimation(currentPosition, 50, 4000)
        }
      }, 8000) // 8 seconds of inactivity
    }

    const handleMouseMove = () => {
      lastActivityTimeRef.current = Date.now()
      
      // Clear existing timer
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }
      
      // Reset timer on mouse movement
      inactivityTimerRef.current = setTimeout(() => {
        const timeSinceLastActivity = Date.now() - lastActivityTimeRef.current
        const currentScrollPosition = window.scrollY
        
        if (timeSinceLastActivity >= 8000 && Math.abs(currentScrollPosition - lastScrollPositionRef.current) < 10) {
          const viewportHeight = window.innerHeight
          const currentPosition = window.scrollY
          const targetPosition = Math.min(currentPosition + 50, document.body.scrollHeight - viewportHeight)
          
          // Animação contínua: vai para baixo e volta
          continuousScrollAnimation(currentPosition, 50, 4000)
        }
      }, 8000)
    }

    const handleKeyPress = () => {
      lastActivityTimeRef.current = Date.now()
      
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }
      
      inactivityTimerRef.current = setTimeout(() => {
        const timeSinceLastActivity = Date.now() - lastActivityTimeRef.current
        const currentScrollPosition = window.scrollY
        
        if (timeSinceLastActivity >= 8000 && Math.abs(currentScrollPosition - lastScrollPositionRef.current) < 10) {
          const viewportHeight = window.innerHeight
          const currentPosition = window.scrollY
          const targetPosition = Math.min(currentPosition + 50, document.body.scrollHeight - viewportHeight)
          
          // Animação contínua: vai para baixo e volta
          continuousScrollAnimation(currentPosition, 50, 4000)
        }
      }, 8000)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('keydown', handleKeyPress)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('keydown', handleKeyPress)
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }
    }
  }, [])

  // Função para animação de scroll contínua (0% → 50% → 100%)
  const continuousScrollAnimation = (currentPosition, scrollDistance = 50, totalDuration = 4000) => {
    const startPosition = currentPosition
    const startTime = performance.now()
    
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / totalDuration, 1)
      
      // 0% = posição original, 50% = posição + scrollDistance, 100% = posição original
      let easedProgress
      if (progress <= 0.5) {
        // Primeira metade: vai para baixo (0% → 50%)
        const firstHalfProgress = progress * 2 // 0 → 1
        easedProgress = easeInOutCubic(firstHalfProgress)
        const currentScrollPosition = startPosition + (scrollDistance * easedProgress)
        window.scrollTo(0, currentScrollPosition)
      } else {
        // Segunda metade: volta para cima (50% → 100%)
        const secondHalfProgress = (progress - 0.5) * 2 // 0 → 1
        easedProgress = easeInOutCubic(secondHalfProgress)
        const currentScrollPosition = startPosition + scrollDistance - (scrollDistance * easedProgress)
        window.scrollTo(0, currentScrollPosition)
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }
    
    requestAnimationFrame(animateScroll)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false) // Fecha o menu mobile após clicar
  }

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
    <Tooltip.Provider>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className={`fixed z-[9999999] transition-all duration-300 ease-out ${
        isScrolled 
          ? 'top-[20px] bg-background/70 backdrop-blur-md border border-border/50 rounded-[18px] left-4 right-4 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/15 hover:shadow-xl' 
          : 'top-0 left-0 right-0 bg-background/60 backdrop-blur-md border-b border-border/50 shadow-blue-500/5 hover:shadow-blue-500/10'
      }`}>
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold gradient-text drop-shadow-[0_0_8px_rgba(147,51,234,0.3)] hover:drop-shadow-[0_0_12px_rgba(147,51,234,0.4)] transition-all duration-300">startup.dev.br</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.3)] cursor-pointer">Recursos</button>
            <button onClick={() => scrollToSection('problems')} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.3)] cursor-pointer">Desafios</button>
            <button onClick={() => scrollToSection('pricing')} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.3)] cursor-pointer">Valores</button>
            <button onClick={() => scrollToSection('cta')} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.3)] cursor-pointer">Participe</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-card border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="container mx-auto px-6 py-6 flex flex-col space-y-6">
                <button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left">Recursos</button>
                <button onClick={() => scrollToSection('problems')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left">Desafios</button>
                <button onClick={() => scrollToSection('pricing')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left">Valores</button>
                <button onClick={() => scrollToSection('cta')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left">Participe</button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 bg-float-slow"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 cursor-help">
                    ✨ Em Construção: Crie. Ensine. Venda. Com inteligência.
                  </Badge>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>Plataforma em desenvolvimento ativo.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              variants={fadeInUp}
            >
              <span className="gradient-text">O futuro</span> do ensino começa com você.
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Uma nova forma de ensinar e compartilhar conhecimento. <br />
              Com tecnologia ao seu lado — e você no controle.
            </motion.p>

            <motion.p 
              className="text-md md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Uma plataforma feita para professores. <br />
              Com IA como aliada, e você como protagonista da educação.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              variants={fadeInUp}
            >
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Button
                    size="lg"
                    className="gradient-purple-blue hover-glow text-lg px-12 py-6 cursor-pointer pulsing-border"
                    onClick={() => window.open('https://tally.so/embed/3XA9RP', '_blank')}
                  >
                    Receber acesso antecipado
                    <Rocket className="ml-2 w-5 h-5" />
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>Seja um dos primeiros a experimentar nossa plataforma.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto"
              variants={staggerContainer}
            >
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.div className="text-center cursor-help" variants={scaleIn}>
                    <div className="text-3xl font-bold gradient-text mb-2">IA</div>
                    <div className="text-muted-foreground">Educação humana com suporte da IA</div>
                  </motion.div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>IA que otimiza conteúdo e personaliza aprendizado.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
              
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.div className="text-center cursor-help" variants={scaleIn}>
                    <div className="text-3xl font-bold gradient-text mb-2">Curadoria</div>
                    <div className="text-muted-foreground">Qualidade Assegurada</div>
                  </motion.div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>Seleção rigorosa de conteúdo de qualidade.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
              
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.div className="text-center cursor-help" variants={scaleIn}>
                    <div className="text-3xl font-bold gradient-text mb-2">Inovação</div>
                    <div className="text-muted-foreground">Novos Horizontes</div>
                  </motion.div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>Novas tecnologias para revolucionar o ensino.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 bg-drift-left"
          style={{ 
            backgroundImage: `url(${gradientBg1})`,
            transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * 0.1}px)`,
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Badge className="mb-6 bg-destructive/20 text-destructive border-destructive/30 cursor-help">
                  ⚠️ Desafios Atuais
                </Badge>
              </Tooltip.Trigger>
                              <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>Problemas da educação online que estamos resolvendo.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              O que estamos <span className="gradient-text">transformando</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos construindo soluções para os problemas que professores e alunos enfrentam hoje
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {problems.map((problem, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-card/50 backdrop-blur-sm neon-border hover-glow">
                  <CardHeader className="pb-6">
                    <div className="w-14 h-14 rounded-lg bg-destructive/20 flex items-center justify-center mb-6">
                      {problem.icon}
                    </div>
                    <CardTitle className="text-xl">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">{problem.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 bg-gentle-rotate"
          style={{ 
            backgroundImage: `url(${techBg})`,
            transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.01}deg)`,
          }}
        />
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 cursor-help">
                  ✨ Nossa Essência
                </Badge>
              </Tooltip.Trigger>
                              <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>Pilares fundamentais da nossa abordagem.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Recursos em <span className="gradient-text">desenvolvimento</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnologia de ponta para um futuro educacional mais acessível e eficiente
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-card/50 backdrop-blur-sm neon-border hover-glow">
                  <CardHeader className="pb-6">
                    <div className="w-16 h-16 rounded-xl gradient-purple-blue flex items-center justify-center mb-6 glow-effect">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 bg-drift-right"
          style={{ 
            backgroundImage: `url(${gradientBg2})`,
            transform: `translateY(${scrollY * 0.25}px) translateX(${scrollY * -0.05}px)`,
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 cursor-help">
                  💰 Modelo de Valor Futuro
                </Badge>
              </Tooltip.Trigger>
                              <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>Modelo transparente e justo para todos.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Acesso <span className="gradient-text">Justo</span> ao Conhecimento
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um modelo transparente que beneficiará professores e alunos
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <Card className="bg-card/50 backdrop-blur-sm neon-border hover-scale text-center h-full flex flex-col">
                  <CardHeader className="pb-6 flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl gradient-purple-pink flex items-center justify-center mb-6 mx-auto glow-effect">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex-grow flex items-center">
                    <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 relative">
        <div className="absolute inset-0 gradient-purple-blue opacity-20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-8"
              variants={fadeInUp}
            >
              Para quem <span className="gradient-text">ensina</span> e para quem <span className="gradient-text">aprende</span>: uma nova forma de viver a educação.
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Estamos criando uma nova plataforma de ensino: conteúdo direto, atualizado com IA e professores valorizados.  
              Junte-se aos primeiros a testar e ajudar a moldar essa experiência.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              variants={fadeInUp}
            >
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Button
                    size="lg"
                    className="gradient-purple-blue hover-glow text-lg px-12 py-6 cursor-pointer pulsing-border"
                    onClick={() => window.open('https://tally.so/embed/3XA9RP', '_blank')}
                  >
                    Receber acesso antecipado
                    <Rocket className="ml-2 w-5 h-5" />
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>Seja um dos primeiros a experimentar nossa plataforma.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center items-center gap-10 text-muted-foreground"
              variants={staggerContainer}
            >
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.div className="flex items-center space-x-3 cursor-help" variants={scaleIn}>
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>Acesso Antecipado</span>
                  </motion.div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>Seja um dos primeiros a testar nossa plataforma.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
              
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.div className="flex items-center space-x-3 cursor-help" variants={scaleIn}>
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>Qualidade Garantida</span>
                  </motion.div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>Conteúdo com curadoria rigorosa.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
              
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.div className="flex items-center space-x-3 cursor-help" variants={scaleIn}>
                    <Zap className="w-5 h-5 text-blue-500" />
                    <span>Inovação com IA</span>
                  </motion.div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-card border border-border px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs z-[9999999]" sideOffset={5}>
                    <p>Tecnologia de ponta para revolucionar o ensino.</p>
                    <Tooltip.Arrow className="fill-card" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="py-16 border-t border-border bg-card/50"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <span className="text-xl font-bold gradient-text">startup.dev.br</span>
            </div>
          </div>
          
          <div className="mt-10 pt-10 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 startup.dev.br. Todos os direitos reservados. Construindo o futuro da educação com IA.</p>
          </div>
        </div>
      </motion.footer>
      </div>
    </Tooltip.Provider>
  )
}

export default App


