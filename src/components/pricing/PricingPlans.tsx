
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, Building2, Crown, Zap, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    description: "Para experimentar a plataforma",
    price: "Gratuito",
    icon: DollarSign,
    features: [
      "Tradução limitada de áudio/texto para Libras",
      "Até 50 minutos/mês de uso",
      "Acesso básico à plataforma",
      "1 tela/login/usuário",
    ],
    targetAudience: "Usuários que desejam experimentar a plataforma",
    cta: "Experimente Gratuitamente",
    ctaVariant: "outline" as const,
  },
  {
    name: "Profissional",
    description: "Para profissionais e autônomos",
    price: "R$ 97,00",
    period: "/mês",
    icon: Zap,
    popular: true,
    features: [
      "Tradução ilimitada de áudio/texto para Libras",
      "Suporte padrão",
      "Acesso a todas as funcionalidades básicas",
      "Acesso a apenas 1 tela/login/usuário",
    ],
    targetAudience: "Profissionais e autônomos",
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
      "Suporte prioritário",
      "Acesso às ferramentas extras (Escanear e Traduzir e Plugin Web)",
      "Acesso para até 5 telas/logins/usuários",
    ],
    targetAudience: "Pequenas e médias empresas",
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
      "Telas/logins/usuários ilimitados",
    ],
    targetAudience: "Grandes empresas",
    cta: "Fale com um Especialista",
    ctaVariant: "default" as const,
  },
];

// Comparison table data for easy plan comparison
const featureComparison = [
  {
    feature: "Tradução de áudio/texto para Libras",
    free: "Limitada (50min/mês)",
    pro: "Ilimitada",
    business: "Ilimitada",
    enterprise: "Ilimitada",
  },
  {
    feature: "Telas/Logins simultâneos",
    free: "1",
    pro: "1",
    business: "5",
    enterprise: "Ilimitado",
  },
  {
    feature: "Suporte",
    free: "Básico",
    pro: "Padrão",
    business: "Prioritário",
    enterprise: "Premium",
  },
  {
    feature: "API para integração",
    free: "—",
    pro: "—",
    business: "✓",
    enterprise: "Personalizada",
  },
  {
    feature: "Ferramentas extras",
    free: "—",
    pro: "—",
    business: "✓",
    enterprise: "✓",
  },
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

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative p-6 flex flex-col h-full",
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
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">
                Ideal para: {plan.targetAudience}
              </p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold">{plan.price}</span>
              {plan.period && (
                <span className="text-muted-foreground">{plan.period}</span>
              )}
            </div>
            <ul className="mb-8 space-y-4 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-neotalk-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant={plan.ctaVariant} className="w-full">
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="mt-16 overflow-x-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Comparação de Recursos</h2>
        <div className="min-w-[800px]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-left">Recurso</th>
                <th className="py-4 px-6 text-center">Free</th>
                <th className="py-4 px-6 text-center">Profissional</th>
                <th className="py-4 px-6 text-center">Empresarial</th>
                <th className="py-4 px-6 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {featureComparison.map((row, index) => (
                <tr
                  key={row.feature}
                  className={cn(
                    "border-b",
                    index % 2 === 0 ? "bg-muted/50" : "bg-background"
                  )}
                >
                  <td className="py-4 px-6">{row.feature}</td>
                  <td className="py-4 px-6 text-center">{row.free}</td>
                  <td className="py-4 px-6 text-center">{row.pro}</td>
                  <td className="py-4 px-6 text-center">{row.business}</td>
                  <td className="py-4 px-6 text-center">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          <Card className="p-6 text-left">
            <h3 className="font-bold mb-2">Como funciona o período de teste?</h3>
            <p className="text-muted-foreground">
              O plano gratuito permite que você experimente nossa plataforma com limite
              de 50 minutos por mês, sem compromisso.
            </p>
          </Card>
          <Card className="p-6 text-left">
            <h3 className="font-bold mb-2">Como funcionam os acessos simultâneos?</h3>
            <p className="text-muted-foreground">
              Cada plano tem um limite de telas/logins que podem ser usados simultaneamente.
              O plano Enterprise oferece acessos ilimitados para sua empresa.
            </p>
          </Card>
          <Card className="p-6 text-left">
            <h3 className="font-bold mb-2">Posso mudar de plano a qualquer momento?</h3>
            <p className="text-muted-foreground">
              Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento,
              e o valor será ajustado proporcionalmente.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
