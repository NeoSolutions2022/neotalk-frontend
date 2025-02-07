import { useState } from "react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import {
  Languages,
  Type,
  Contrast,
  Moon,
  Sun,
  Save,
  Globe,
  Video,
  Key,
  Shield,
  RotateCcw,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function SettingsContent() {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    // Interface Language
    interfaceLanguage: "pt-BR",
    translationLanguage: "libras",  // Changed to single string
    region: "general",
    segment: "general",

    // Avatar & Translation
    translationSpeed: 50,
    avatar: "default",
    expressiveness: 50,
    
    // Accessibility
    darkMode: false,
    fontSize: "medium",
    highContrast: false,
    closedCaptions: true,
    
    // API & Integrations
    apiEnabled: false,
    streamingEnabled: false,
    elearningEnabled: false,
    
    // Privacy & Security
    saveHistory: true,
    dataUsage: true,
  });

  const handleSave = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas preferências foram atualizadas com sucesso.",
    });
  };

  const handleResetDefaults = () => {
    setSettings({
      interfaceLanguage: "pt-BR",
      translationLanguage: "libras",
      region: "general",
      segment: "general",
      translationSpeed: 50,
      avatar: "default",
      expressiveness: 50,
      darkMode: false,
      fontSize: "medium",
      highContrast: false,
      closedCaptions: true,
      apiEnabled: false,
      streamingEnabled: false,
      elearningEnabled: false,
      saveHistory: true,
      dataUsage: true,
    });
    toast({
      title: "Configurações restauradas",
      description: "Todas as configurações foram restauradas para os valores padrão.",
    });
  };

  return (
    <SidebarInset>
      <div className="h-16 border-b flex items-center px-6 gap-6">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold">Configurações do Sistema</h1>
      </div>
      <div className="p-6 space-y-8 max-w-3xl mx-auto">
        {/* Idioma e Região */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Idioma e Região
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Idioma da Interface</Label>
              <Select
                value={settings.interfaceLanguage}
                onValueChange={(value) =>
                  setSettings({ ...settings, interfaceLanguage: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                  <SelectItem value="en-US">English (US)</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Language Translation Selection */}
            <div className="space-y-2">
              <Label>Idioma de Tradução</Label>
              <RadioGroup
                value={settings.translationLanguage}
                onValueChange={(value) =>
                  setSettings({ ...settings, translationLanguage: value })
                }
                className="grid gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="libras" id="libras" />
                  <Label htmlFor="libras">Libras (Língua Brasileira de Sinais)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="asl" id="asl" />
                  <Label htmlFor="asl">ASL (American Sign Language)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fsl" id="fsl" />
                  <Label htmlFor="fsl">FSL (French Sign Language)</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Region Selection */}
            <div className="space-y-2">
              <Label>Região</Label>
              <Select
                value={settings.region}
                onValueChange={(value) =>
                  setSettings({ ...settings, region: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Brasil (Geral)</SelectItem>
                  <SelectItem value="north">Norte</SelectItem>
                  <SelectItem value="northeast">Nordeste</SelectItem>
                  <SelectItem value="midwest">Centro-Oeste</SelectItem>
                  <SelectItem value="southeast">Sudeste</SelectItem>
                  <SelectItem value="south">Sul</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Segment Selection */}
            <div className="space-y-2">
              <Label>Segmento de Aplicação</Label>
              <Select
                value={settings.segment}
                onValueChange={(value) =>
                  setSettings({ ...settings, segment: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Geral (Sem Segmentação)</SelectItem>
                  <SelectItem value="education">Educação</SelectItem>
                  <SelectItem value="health">Saúde</SelectItem>
                  <SelectItem value="technology">Tecnologia</SelectItem>
                  <SelectItem value="government">Governo</SelectItem>
                  <SelectItem value="corporate">Corporativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Avatar e Tradução */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Video className="h-5 w-5" />
            Avatar e Tradução
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Modelo do Avatar</Label>
              <Select
                value={settings.avatar}
                onValueChange={(value) =>
                  setSettings({ ...settings, avatar: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Padrão</SelectItem>
                  <SelectItem value="professional">Profissional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Velocidade da Tradução</Label>
              <Slider
                value={[settings.translationSpeed]}
                onValueChange={([value]) =>
                  setSettings({ ...settings, translationSpeed: value })
                }
                max={100}
                step={1}
              />
            </div>
            <div className="space-y-2">
              <Label>Expressividade do Avatar</Label>
              <Slider
                value={[settings.expressiveness]}
                onValueChange={([value]) =>
                  setSettings({ ...settings, expressiveness: value })
                }
                max={100}
                step={1}
              />
            </div>
          </div>
        </section>

        {/* Acessibilidade */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Type className="h-5 w-5" />
            Acessibilidade
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {settings.darkMode ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
                <Label htmlFor="dark-mode">Modo Escuro</Label>
              </div>
              <Switch
                id="dark-mode"
                checked={settings.darkMode}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, darkMode: checked })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Tamanho da Fonte</Label>
              <Select
                value={settings.fontSize}
                onValueChange={(value) =>
                  setSettings({ ...settings, fontSize: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Pequeno</SelectItem>
                  <SelectItem value="medium">Médio</SelectItem>
                  <SelectItem value="large">Grande</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Contrast className="h-5 w-5" />
                <Label htmlFor="contrast">Alto Contraste</Label>
              </div>
              <Switch
                id="contrast"
                checked={settings.highContrast}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, highContrast: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="closed-captions">Legendas para Surdos Oralizados</Label>
              <Switch
                id="closed-captions"
                checked={settings.closedCaptions}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, closedCaptions: checked })
                }
              />
            </div>
          </div>
        </section>

        {/* Integrações e API */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Key className="h-5 w-5" />
            Integrações e API
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="api-enabled">API do NeoTalk</Label>
              <Switch
                id="api-enabled"
                checked={settings.apiEnabled}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, apiEnabled: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="streaming-enabled">Integração com Streaming</Label>
              <Switch
                id="streaming-enabled"
                checked={settings.streamingEnabled}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, streamingEnabled: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="elearning-enabled">Integração com EAD</Label>
              <Switch
                id="elearning-enabled"
                checked={settings.elearningEnabled}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, elearningEnabled: checked })
                }
              />
            </div>
          </div>
        </section>

        {/* Privacidade e Segurança */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacidade e Segurança
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="save-history">Salvar Histórico de Tradução</Label>
              <Switch
                id="save-history"
                checked={settings.saveHistory}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, saveHistory: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="data-usage">
                Permitir Uso de Dados para Melhorias
              </Label>
              <Switch
                id="data-usage"
                checked={settings.dataUsage}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, dataUsage: checked })
                }
              />
            </div>
          </div>
        </section>

        {/* Save and Reset Buttons */}
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={handleResetDefaults}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Restaurar Padrões
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Salvar Alterações
          </Button>
        </div>
      </div>
    </SidebarInset>
  );
}
