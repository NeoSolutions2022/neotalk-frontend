
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, Building2, Crown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    description: "Para experimentar a plataforma",
    price: "Gratuito",
    icon: DollarSign,
    features: [
      "Tradução limitada de áudio/texto para Libras",
      "Até 50 minutos/mês",
      "Acesso básico à plataforma",
    ],
    cta: "Experimente Gratuitamente",
    ctaVariant: "outline" as const,
  },
  {
    name: "Profissional",
    description: "Para uso profissional",
    price: "R$ 97,00",
    period: "/mês",
    icon: Zap,
    popular: true,
    features: [
      "Tradução ilimitada de áudio/texto para Libras",
      "Suporte padrão",
      "Acesso a todas as funcionalidades básicas",
    ],
    cta: "Assinar Agora",
    ctaVariant: "default" as const,
  },
  {
    name: "Empresarial",
    description: "Para pequenas e médias empresas",
    price: "R$ 497,00",
    period: "/mês",
    icon: Building2,
    features: [
      "Tudo do Plano Profissional",
      "Acesso à API para integração",
      "Acesso às ferramentas extras (Escanear e Traduzir e Plugin Web)",
      "Suporte prioritário",
    ],
    cta: "Assinar Agora",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "Para grandes empresas",
    price: "Sob Consulta",
    icon: Crown,
    features: [
      "Tudo do Plano Empresarial",
      "Personalização total da API",
      "Consultoria dedicada",
      "Suporte premium",
    ],
    cta: "Fale com um Especialista",
    ctaVariant: "default" as const,
  },
];

const payPerUseRates = [
  { service: "Tradução de áudio para Libras", rate: "R$ 0,12/minuto" },
  { service: "Tradução de Libras para texto/áudio", rate: "R$ 0,18/minuto" },
  { service: "Tradução multilíngue", rate: "R$ 0,25/minuto" },
  { service: "Tradução de texto para Libras", rate: "R$ 0,05/requisição" },
  { service: "Tradução de Libras para áudio/texto", rate: "R$ 0,10/requisição" },
  { service: "Tráfego de vídeo traduzido", rate: "R$ 5,00/GB" },
  { service: "Usuário ativo na API (acima do limite)", rate: "R$ 19,90/mês" },
];

export function PricingPlans() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Escolha o melhor plano para você</h1>
        <p className="text-muted-foreground">
          Planos flexíveis para atender às suas necessidades
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative p-6 flex flex-col",
              plan.popular && "border-neotalk-primary shadow-lg"
            )}
          >
            {plan.popular && (
              <Badge
                className="absolute -top-2 right-4 bg-neotalk-primary"
                variant="default"
              >
                Mais Popular
              </Badge>
            )}
            <div className="mb-6">
              <plan.icon className="w-12 h-12 mb-4 text-neotalk-primary" />
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold">{plan.price}</span>
              {plan.period && (
                <span className="text-muted-foreground">{plan.period}</span>
              )}
            </div>
            <ul className="mb-8 space-y-4 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-neotalk-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant={plan.ctaVariant} className="w-full">
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Pay-Per-Use</h2>
        <div className="max-w-3xl mx-auto bg-card rounded-lg p-6 shadow">
          <div className="grid gap-4">
            {payPerUseRates.map((item) => (
              <div
                key={item.service}
                className="flex justify-between items-center py-2 border-b last:border-0"
              >
                <span>{item.service}</span>
                <span className="font-semibold">{item.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          <Card className="p-6">
            <h3 className="font-bold mb-2">Como funciona o período de teste?</h3>
            <p className="text-muted-foreground">
              O plano gratuito permite que você experimente nossa plataforma com limite
              de 50 minutos por mês, sem compromisso.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">Posso cancelar a qualquer momento?</h3>
            <p className="text-muted-foreground">
              Sim, você pode cancelar sua assinatura a qualquer momento sem multas
              ou taxas adicionais.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold mb-2">Como funciona o suporte?</h3>
            <p className="text-muted-foreground">
              Todos os planos incluem suporte, com níveis diferentes de prioridade
              dependendo do seu plano.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
