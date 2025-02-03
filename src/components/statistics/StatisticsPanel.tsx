import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Download,
  Mail,
  TrendingUp,
  Clock,
  Target,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mock data - In a real app, this would come from your backend
const translationTypeData = [
  { name: "Texto → Libras", value: 45 },
  { name: "Áudio → Libras", value: 30 },
  { name: "Libras → Texto", value: 25 },
];

const usageHistoryData = [
  { name: "Seg", translations: 12 },
  { name: "Ter", translations: 19 },
  { name: "Qua", translations: 15 },
  { name: "Qui", translations: 22 },
  { name: "Sex", translations: 18 },
  { name: "Sab", translations: 10 },
  { name: "Dom", translations: 8 },
];

const COLORS = ["#4F46E5", "#10B981", "#F59E0B"];

export function StatisticsPanel() {
  const { toast } = useToast();
  const totalHours = 12;
  const totalTranslations = 104;
  const improvementPercentage = 20;
  const goalProgress = 75;

  const handleExportData = (format: "pdf" | "csv") => {
    toast({
      title: "Exportando dados",
      description: `Seus dados serão exportados em formato ${format.toUpperCase()}`,
    });
  };

  const handleSubscribeToReport = () => {
    toast({
      title: "Inscrição realizada",
      description: "Você receberá relatórios mensais por e-mail",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Suas Estatísticas no NeoTalk</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleExportData("pdf")}
          >
            <Download className="mr-2 h-4 w-4" />
            Exportar PDF
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleExportData("csv")}
          >
            <Download className="mr-2 h-4 w-4" />
            Exportar CSV
          </Button>
          <Button variant="outline" size="sm" onClick={handleSubscribeToReport}>
            <Mail className="mr-2 h-4 w-4" />
            Receber Relatório
          </Button>
        </div>
      </div>

      {/* Resumo Geral */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Tempo Total</h3>
          </div>
          <p className="mt-2 text-2xl font-bold">{totalHours} horas</p>
          <p className="text-sm text-muted-foreground">este mês</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <h3 className="font-semibold">Total de Traduções</h3>
          </div>
          <p className="mt-2 text-2xl font-bold">{totalTranslations}</p>
          <p className="text-sm text-green-500">
            +{improvementPercentage}% em relação ao mês anterior
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-500" />
            <h3 className="font-semibold">Ranking</h3>
          </div>
          <p className="mt-2 text-2xl font-bold">Top 10%</p>
          <p className="text-sm text-muted-foreground">dos usuários</p>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Tipos de Tradução</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={translationTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {translationTypeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold mb-4">Histórico de Uso</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usageHistoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="translations"
                  fill="#4F46E5"
                  name="Traduções"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Meta de Uso */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Target className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Meta Semanal</h3>
        </div>
        <Progress value={goalProgress} className="h-2" />
        <p className="mt-2 text-sm text-muted-foreground">
          {goalProgress}% da meta atingida (5 horas semanais)
        </p>
      </Card>
    </div>
  );
}