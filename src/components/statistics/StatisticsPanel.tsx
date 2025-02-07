
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Download, Mail, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { StatisticsSummary } from "./StatisticsSummary";
import { StatisticsCharts } from "./StatisticsCharts";

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

      <StatisticsSummary
        totalHours={totalHours}
        totalTranslations={totalTranslations}
        improvementPercentage={improvementPercentage}
      />

      <StatisticsCharts
        translationTypeData={translationTypeData}
        usageHistoryData={usageHistoryData}
      />

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
