
import React from "react";
import { Card } from "@/components/ui/card";
import { Clock, TrendingUp, Award } from "lucide-react";

interface StatisticsSummaryProps {
  totalHours: number;
  totalTranslations: number;
  improvementPercentage: number;
}

export function StatisticsSummary({
  totalHours,
  totalTranslations,
  improvementPercentage,
}: StatisticsSummaryProps) {
  return (
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
  );
}
