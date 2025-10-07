import React from 'react'
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Shield, 
  Heart, 
  Award,
  Smile,
  Sparkles,
  Zap,
  CheckCircle,
  MessageCircle
} from 'lucide-react'
import './App.css'

// Importando as imagens
import dentistaProfissional from './assets/dentista-profissional.jpg'
import consultorioModerno from './assets/consultorio-moderno.jpg'
import harmonizacaofacial from './assets/harmonizacaofacial.png'
import proteses from './assets/proteses.jpg'
import implante from './assets/implante.webp'
import profilaxia from './assets/profilaxia.jpg'
import clareamento from './assets/clareamento.jpg'
import esteticaSorriso from './assets/estetica-sorriso.png'
import lentesContato from './assets/lentes-contato.jpg'

const FadeInSection = ({ children, className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};


function App() {
  const [activeSection, setActiveSection] = useState("inicio");

useEffect(() => {
  const handleScroll = () => {
    const sections = ["inicio", "sobre", "servicos", "contato"];
    let current = "inicio";

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section && window.scrollY >= section.offsetTop - 120) {
        current = id;
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const handleClick = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  const services = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Clínica Geral",
      description: "Atendimento completo para toda a família com foco na prevenção e tratamento de problemas bucais.",
      image: profilaxia
    },
    {
      icon: <Zap className="w-8 h-8" />,
    title: "Próteses em Geral",
    description: "Reabilitação estética e funcional do sorriso por meio de próteses personalizadas, devolvendo conforto, mastigação e harmonia ao sorriso com resultados naturais.",
      image: proteses
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Implantodontia",
      description: "Reposição de dentes perdidos com implantes de última geração e alta durabilidade.",
      image: implante
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Estética Dental",
      description: "Transformação do seu sorriso com lentes de contato, facetas e clareamento dental.",
      image: esteticaSorriso
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Periodontia",
      description: "Tratamento especializado das gengivas e estruturas de suporte dos dentes.",
      image: profilaxia
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Harmonizacao Facial",
      description: "Conjunto de procedimentos estéticos minimamente invasivos que realçam a beleza natural, equilibram os traços e rejuvenescem o rosto com resultados sutis e harmoniosos.",
      image: harmonizacaofacial
    }
  ]

  const differentials = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Tecnologia Avançada",
      description: "Equipamentos de última geração para diagnósticos precisos e tratamentos eficazes."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado com foco no bem-estar e conforto de cada paciente."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ambiente Seguro",
      description: "Protocolos rigorosos de biossegurança e higienização para sua proteção."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Parcelamento Facilitado",
      description: "Diversas opções de pagamento para tornar seu tratamento mais acessível."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
<header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <img src="/logo.png" alt="Logo" className="w-8 h-8" />
      <h1 className="text-xl font-bold text-gray-900">Dra. Paula Talita</h1>
    </div>

    {/* Navbar com efeitos */}
    <nav className="hidden md:flex items-center space-x-8">
      {[
        { id: "inicio", label: "Início" },
        { id: "sobre", label: "Sobre" },
        { id: "servicos", label: "Serviços" },
        { id: "contato", label: "Contato" },
      ].map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => handleClick(e, item.id)}
          className={`relative group transition-colors duration-300 ${
            activeSection === item.id
              ? "text-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          {item.label}
          {/* underline animado */}
          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
              activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </a>
      ))}
    </nav>
  </div>
</header>

      {/* Hero Section */}
      <FadeInSection>
        <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    Vem sorrir sem medo! ✨
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Dra. Paula Talita
                    <span className="block text-[#B78B68]">Dentista</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Transformando sorrisos com excelência, tecnologia avançada e atendimento humanizado. 
                    Sua saúde bucal é nossa prioridade.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/553484067569" target="_blank" rel="noopener noreferrer">
                    <Button size="lg"  className="bg-[#B78B68] hover:bg-[#A37455]">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agendar no WhatsApp
                    </Button>
                  </a>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.9/5</span>
                    <span>(200+ avaliações)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>CRO MG 56110</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
      src={dentistaProfissional} 
      alt="Dra. Paula Talita - Dentista Profissional" 
      className="w-full h-[600px] object-cover object-[center_top]" 
    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white-100 rounded-full flex items-center justify-center">
                      <Smile className="w-6 h-6 text-[#B78B68]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">+1000</p>
                      <p className="text-sm text-gray-600">Sorrisos transformados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* About Section */}
      <FadeInSection>
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={consultorioModerno} 
                alt="Consultório Moderno" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Sobre a Doutora
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Experiência e Dedicação ao seu Sorriso
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dra. Paula Talita é formada em Odontologia pela Universidade Federal de Uberlândia (UFU) 
                  com Especialização em Harmonização Facial. Com mais de 10 anos de experiência, 
                  dedica-se a oferecer tratamentos de excelência com foco no bem-estar de seus pacientes.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Formação e Especializações:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Graduação em Odontologia - UFU</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Especialização em  Harmonização Facial</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Curso de Estética Dental anterior, Curso de  facetas de resina e lentes de porcelana</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Aperfeiçoamento em próteses sobre implantes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Nossa Missão</h3>
                <p className="text-blue-800">
                  Proporcionar saúde bucal e sorrisos radiantes através de tratamentos personalizados, 
                  tecnologia avançada e um atendimento acolhedor que prioriza o conforto e bem-estar 
                  de cada paciente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Services Section */}
      <FadeInSection>
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
              Nossos Serviços
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Tratamentos Completos para seu Sorriso
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos Clínica geral ,Prevenção (limpeza) ,  Clareamento dental, Todos os tipos de próteses , Facetas de resina , Lentes de porcelana ,Harmonização gavial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-[#B78B68] group-hover:text-white transition-colors">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Differentials Section */}
    <FadeInSection>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              Nossos Diferenciais
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Por que escolher a Dra. Paula Talita?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-blue-600">
                    {differential.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{differential.title}</h3>
                <p className="text-gray-600 leading-relaxed">{differential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
      {/* Contact Section */}
    <FadeInSection>
      <section id="contato" className="py-16 bg-[#B78B68] hover:bg-[#A37455]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white hover:bg-white/20">
                  Entre em Contato
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Agende sua Consulta
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Estamos prontos para cuidar do seu sorriso. Entre em contato e agende 
                  sua avaliação sem compromisso.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">+55 34 8406-7569</p>
                    <p className="text-blue-100">WhatsApp e Ligações</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">contato@paulatalita.com.br</p>
                    <p className="text-blue-100">E-mail para contato</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Av. dos Eucaliptos, 859 - sala 1 - Jardim Patricia</p>
                    <p className="text-blue-100">Uberlândia - MG, 38414-123</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Seg à Sex: 8h às 18h</p>
                    <p className="text-blue-100">Sáb: 8h às 12h</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/553484067569" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-[#B78B68] hover:bg-gray-100">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Formulário de Contato</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Como podemos ajudar você?"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#B78B68] hover:bg-[#A37455]" size="lg">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
      {/* Footer */}
     <FadeInSection>
     <footer className="bg-[#0c1525] text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8 items-center">
      {/* Logo */}
      <div className="flex flex-col items-center md:items-start space-y-4">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo 1" className="w-16 h-16 object-contain" />
          <img src="/logo2.png" alt="Logo 2" className="h-60 w-60 object-contain" />
        </div>
      </div>

      {/* Contato */}
      <div className="flex flex-col justify-center text-center md:text-left space-y-4">
        <h4 className="text-lg font-semibold text-white">Contato</h4>
        <div className="space-y-2 text-gray-400">
          <p>+55 34 8406-7569</p>
          <p>contato@paulatalita.com.br</p>
          <p>
            Av. dos Eucaliptos, 859 - sala 1 - Jardim Patricia<br />
            Uberlândia - MG, 38414-123
          </p>
        </div>
      </div>

      {/* Horários */}
      <div className="flex flex-col justify-center text-center md:text-left space-y-4">
        <h4 className="text-lg font-semibold text-white">Horários</h4>
        <div className="space-y-2 text-gray-400">
          <p>Segunda à Sexta: 8h às 18h</p>
          <p>Sábado: 8h às 12h</p>
          <p>Domingo: Fechado</p>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800 mt-10 pt-6 text-center">
      <p className="text-gray-400 text-sm">
        © 2025 Dra. Paula Talita. Todos os direitos reservados.
      </p>
    </div>
  </div>
     </footer>
    </FadeInSection>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/553484067569" target="_blank" rel="noopener noreferrer">
        <Button 
          size="lg" 
          className="bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 shadow-lg animate-bounce"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
        </a>
      </div>
    </div>
  )
}

export default App

