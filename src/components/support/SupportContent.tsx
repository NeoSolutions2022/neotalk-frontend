import { useState } from "react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  User,
  CreditCard,
  Laptop,
  Code,
  Settings,
  MessageSquare,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";

export function SupportContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      icon: <User className="h-5 w-5" />,
      title: "Conta e Acesso",
      description: "Login, senha e cadastro",
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Assinaturas e Pagamentos",
      description: "Planos, faturamento e cancelamento",
    },
    {
      icon: <Laptop className="h-5 w-5" />,
      title: "Uso da Plataforma",
      description: "Como utilizar os recursos",
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Integração com API",
      description: "Documentação técnica",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Acessibilidade e Configurações",
      description: "Personalização da experiência",
    },
  ];

  const faqs = [
    {
      question: "Como faço para alterar minha senha?",
      answer:
        "Acesse as configurações da sua conta, clique em 'Segurança' e selecione 'Alterar Senha'. Você receberá um e-mail com instruções.",
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer:
        "Sim! Você pode cancelar sua assinatura a qualquer momento nas configurações da sua conta, sem taxas adicionais.",
    },
    {
      question: "Como funciona a integração com API?",
      answer:
        "Nossa API REST permite integrar as funcionalidades do NeoTalk em sua aplicação. Consulte nossa documentação técnica para mais detalhes.",
    },
  ];

  return (
    <SidebarInset>
      <div className="h-16 border-b flex items-center px-6 gap-6">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold text-neotalk-dark dark:text-neotalk-light">
          Central de Ajuda
        </h1>
      </div>
      
      <div className="p-6 max-w-5xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-neotalk-dark dark:text-neotalk-light">
            Como podemos te ajudar?
          </h2>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-neotalk-gray" />
            <Input
              className="pl-10 h-12 bg-white dark:bg-neotalk-dark border-neotalk-gray/20"
              placeholder="Digite sua dúvida..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:bg-neotalk-light/50 dark:hover:bg-neotalk-dark/50 transition-colors cursor-pointer border-neotalk-gray/20"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-neotalk-primary/10 rounded-lg text-neotalk-primary">
                  {category.icon}
                </div>
                <div>
                  <CardTitle className="text-lg text-neotalk-dark dark:text-neotalk-light">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-neotalk-gray">
                    {category.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-neotalk-dark dark:text-neotalk-light">
            Perguntas Frequentes
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-neotalk-dark dark:text-neotalk-light">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neotalk-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button 
            variant="outline" 
            className="w-full border-neotalk-gray/20 hover:bg-neotalk-light dark:hover:bg-neotalk-dark"
          >
            Ver todas as perguntas
          </Button>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-neotalk-gray/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-neotalk-dark dark:text-neotalk-light">
                <MessageSquare className="h-5 w-5 text-neotalk-primary" />
                Chat ao Vivo
              </CardTitle>
              <CardDescription className="text-neotalk-gray">
                Fale com um especialista em tempo real
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-neotalk-primary hover:bg-neotalk-primary/90">
                Iniciar Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="border-neotalk-gray/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-neotalk-dark dark:text-neotalk-light">
                <Mail className="h-5 w-5 text-neotalk-primary" />
                E-mail
              </CardTitle>
              <CardDescription className="text-neotalk-gray">
                Envie um ticket para nossa equipe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full border-neotalk-gray/20 hover:bg-neotalk-light dark:hover:bg-neotalk-dark"
              >
                Enviar Ticket
              </Button>
            </CardContent>
          </Card>

          <Card className="border-neotalk-gray/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-neotalk-dark dark:text-neotalk-light">
                <Phone className="h-5 w-5 text-neotalk-primary" />
                WhatsApp
              </CardTitle>
              <CardDescription className="text-neotalk-gray">
                Suporte via mensagem no WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full border-neotalk-gray/20 hover:bg-neotalk-light dark:hover:bg-neotalk-dark"
              >
                Abrir WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Community Section */}
        <Card className="bg-neotalk-light/5 dark:bg-neotalk-dark/5 border-neotalk-gray/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-neotalk-dark dark:text-neotalk-light">
              <ExternalLink className="h-5 w-5 text-neotalk-primary" />
              Comunidade NeoTalk
            </CardTitle>
            <CardDescription className="text-neotalk-gray">
              Participe de nossa comunidade e conecte-se com outros usuários
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="border-neotalk-gray/20 hover:bg-neotalk-light dark:hover:bg-neotalk-dark"
            >
              Acessar Fórum
            </Button>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  );
}