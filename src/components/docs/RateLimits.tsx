import { Card } from "@/components/ui/card";
import { Code } from "@/components/ui/code";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const RateLimits = () => {
  return (
    <section id="limits" className="space-y-8">
      <h2 className="text-3xl font-bold text-neotalk-dark">Limites de Uso e Rate Limits</h2>
      
      {/* Introdução */}
      <div className="space-y-4">
        <p className="text-gray-600">
          A API do NeoTalk possui limites de requisição para garantir estabilidade e desempenho.
          Estes limites variam de acordo com o tipo de requisição e o plano de uso.
          Quando um usuário excede os limites, a API retorna um erro 429 (Too Many Requests).
        </p>
      </div>

      {/* Tabela de Limites */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Limites de Requisição por Plano</h3>
        <Card className="p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plano</TableHead>
                  <TableHead>Requisições por Minuto</TableHead>
                  <TableHead>Requisições por Hora</TableHead>
                  <TableHead>Requisições por Dia</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Gratuito</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell>1.500</TableCell>
                  <TableCell>10.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Profissional</TableCell>
                  <TableCell>100</TableCell>
                  <TableCell>5.000</TableCell>
                  <TableCell>50.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Empresarial</TableCell>
                  <TableCell>500</TableCell>
                  <TableCell>25.000</TableCell>
                  <TableCell>250.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>

      {/* Como Lidar com Rate Limits */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Como Lidar com Rate Limits</h3>
        <div className="space-y-6">
          <Card className="p-6">
            <h4 className="font-semibold mb-4">Utilize Backoff Exponencial</h4>
            <p className="text-gray-600 mb-4">
              Evite chamadas excessivas utilizando um mecanismo de retry com tempos de espera progressivos.
              Exemplo de implementação em Python:
            </p>
            <Code>
{`import time
import requests

url = "https://api.neotalk.com/v1/translate/text"
headers = {"Authorization": "Bearer SEU_TOKEN_AQUI"}
data = {"text": "Olá, como posso te ajudar?", "language": "pt-BR"}

for attempt in range(5):
    response = requests.post(url, json=data, headers=headers)
    if response.status_code == 429:
        wait_time = 2 ** attempt  # Exponential Backoff
        print(f"Rate limit atingido. Tentando novamente em {wait_time} segundos...")
        time.sleep(wait_time)
    else:
        break  # Sucesso, sair do loop

print(response.json())`}
            </Code>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-4">Evite Requisições Redundantes</h4>
            <p className="text-gray-600">
              Armazene dados em cache sempre que possível para evitar chamadas desnecessárias à API.
              Isso ajuda a otimizar o uso dos limites de requisição disponíveis.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-4">Solicite um Upgrade de Plano</h4>
            <p className="text-gray-600">
              Se precisar de mais requisições, entre em contato para migrar para um plano superior
              que melhor atenda às suas necessidades de uso.
            </p>
          </Card>
        </div>
      </div>

      {/* Exemplo de Resposta */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Exemplo de Resposta ao Exceder Rate Limits</h3>
        <p className="text-gray-600 mb-4">
          Caso um usuário ultrapasse o limite, a API retorna um erro 429 Too Many Requests com um
          tempo de espera antes da próxima tentativa.
        </p>
        <Code>
{`{
  "status": "error",
  "error_code": 429,
  "message": "Limite de requisições atingido. Tente novamente em 60 segundos."
}`}
        </Code>
      </div>

      {/* Monitoramento */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Monitoramento do Uso da API</h3>
        <Card className="p-6">
          <p className="text-gray-600 mb-4">
            Os desenvolvedores podem acompanhar o consumo da API no painel de controle do NeoTalk,
            onde é possível visualizar:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Total de requisições feitas</li>
            <li>Histórico de uso diário/mensal</li>
            <li>Avisos sobre aproximação dos limites</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default RateLimits;