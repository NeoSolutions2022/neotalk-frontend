import { useState } from "react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Download, Filter, Play, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

type TranslationType = "text" | "audio" | "libras";

interface Translation {
  id: string;
  date: Date;
  type: TranslationType;
  originalText: string;
  translatedText: string;
}

// Mock data for demonstration
const mockTranslations: Translation[] = [
  {
    id: "1",
    date: new Date(),
    type: "text",
    originalText: "Hello, how are you?",
    translatedText: "Olá, como você está?",
  },
  {
    id: "2",
    date: new Date(Date.now() - 86400000), // Yesterday
    type: "audio",
    originalText: "Good morning!",
    translatedText: "Bom dia!",
  },
  {
    id: "3",
    date: new Date(Date.now() - 172800000), // 2 days ago
    type: "libras",
    originalText: "Thank you very much",
    translatedText: "Muito obrigado",
  },
];

export function TranslateHistory() {
  const [date, setDate] = useState<Date>();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<TranslationType | "all">("all");

  const filteredTranslations = mockTranslations.filter((translation) => {
    const matchesSearch = translation.originalText
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || translation.type === selectedType;
    const matchesDate = !date || format(translation.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd");
    return matchesSearch && matchesType && matchesDate;
  });

  return (
    <SidebarInset>
      <div className="h-16 border-b flex items-center px-6 gap-6">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold">Histórico de Traduções</h1>
      </div>
      
      <div className="p-6">
        <Card className="p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Pesquisar traduções..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Selecionar data</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedType(selectedType === "all" ? "text" : "all");
                }}
              >
                <Filter className="mr-2 h-4 w-4" />
                {selectedType === "all" ? "Todos" : "Filtrado"}
              </Button>
            </div>
          </div>
        </Card>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Texto Original</TableHead>
                <TableHead>Tradução</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTranslations.map((translation) => (
                <TableRow key={translation.id}>
                  <TableCell>{format(translation.date, "dd/MM/yyyy HH:mm")}</TableCell>
                  <TableCell className="capitalize">{translation.type}</TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {translation.originalText}
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {translation.translatedText}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredTranslations.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    Nenhuma tradução encontrada
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </SidebarInset>
  );
}