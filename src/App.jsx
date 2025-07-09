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

// Importing images
import heroBackground from './assets/TG9PKr95AzMP.jpg'
import gradientBg1 from './assets/gvxttIlWlQos.jpg'
import gradientBg2 from './assets/09mwMSYz8qBv.jpg'
import techBg from './assets/ZekcKZbLVRK8.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Integrated AI",
      description: "Intelligent support for creating quality descriptions, summaries, and content"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Objective Courses",
      description: "Short, segmented content focused on practical results"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Curation",
      description: "Rigorous validation of content and pricing before publication"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Recommendation System",
      description: "Intelligent algorithm that connects students to ideal courses"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Automatic Payment",
      description: "Automatic split with teachers receiving payments directly via Pix"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Free Preview",
      description: "All courses offer a free preview for students"
    }
  ]

  const problems = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High Platform Fees",
      description: "Teachers lose up to 50% of revenue to abusive commissions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Long and Generic Courses",
      description: "Students waste time and money on unnecessary content"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Lack of Validation",
      description: "Lack of curation results in low-quality content"
    }
  ]

  const benefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "100% Revenue",
      description: "Teachers keep all revenue from initial sales"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Fair Commission",
      description: "Only ~15% commission after the initial period"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Benefits",
      description: "Custom subdomain, search result highlight, and advanced statistics"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-purple-blue flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">startup.dev.br</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#problems" className="text-muted-foreground hover:text-primary transition-colors">Problems</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#cta" className="text-muted-foreground hover:text-primary transition-colors">Get Started</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#problems" className="text-muted-foreground hover:text-primary transition-colors">Problems</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#cta" className="text-muted-foreground hover:text-primary transition-colors">Get Started</a>
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
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              🚀 AI Educational Platform
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Unite <span className="gradient-text">Education</span> and{' '}
              <span className="gradient-text">Artificial Intelligence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The platform that revolutionizes how teachers sell online courses. 
              AI support, quality curation, and intelligent recommendation system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="gradient-purple-blue hover-glow text-lg px-8 py-6">
                Start Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="neon-border hover-scale text-lg px-8 py-6">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-muted-foreground">Initial Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15%</div>
                <div className="text-muted-foreground">Fair Commission</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">AI</div>
                <div className="text-muted-foreground">Integrated Support</div>
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
              ⚠️ Current Problems
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What the platform <span className="gradient-text">solves</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We identified the main challenges teachers and students face in the current market
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
              ✨ Key Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Innovative</span> Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology to revolutionize online education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm neon-border hover-glow float-animation" style={{ animationDelay: `${index * 0.2}s` }}>
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
              💰 Value Model
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Fair</span> Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A transparent model that benefits teachers and students
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
                <CardTitle className="text-2xl gradient-text">Future Premium Plan</CardTitle>
                <CardDescription className="text-lg">Exclusive benefits for teachers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Custom subdomain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Highlight in search results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Advanced statistics and analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Priority support</span>
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
              Ready to <span className="gradient-text">revolutionize</span> your education?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the platform that is transforming how teachers sell online courses. 
              Start today and receive 100% of your initial revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="gradient-purple-blue hover-glow text-lg px-12 py-6">
                Start for Free
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="neon-border hover-scale text-lg px-12 py-6">
                Talk to an Expert
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>No upfront fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Quality curation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-500" />
                <span>Integrated AI</span>
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
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 startup.dev.br. All rights reserved. Revolutionizing education with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

