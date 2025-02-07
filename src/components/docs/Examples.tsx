import { Card } from "@/components/ui/card";
import { Code } from "@/components/ui/code";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Examples = () => {
  return (
    <section id="examples" className="space-y-8">
      <h2 className="text-3xl font-bold text-neotalk-dark">Exemplos de Requisição e Resposta</h2>
      
      {/* Introdução */}
      <div className="space-y-4">
        <p className="text-gray-600">
          Esta seção fornece exemplos práticos de como chamar os principais endpoints da API do NeoTalk.
          Cada exemplo inclui autenticação e um caso de uso real.
          As linguagens utilizadas nos exemplos são cURL, Python e JavaScript (Node.js).
        </p>
      </div>

      {/* Tradução de Texto para Libras */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Tradução de Texto para Libras</h3>
        
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Exemplo em cURL:</p>
            <Code>
{`curl -X POST "https://api.neotalk.com/v1/translate/text" \\
-H "Authorization: Bearer SEU_TOKEN_AQUI" \\
-H "Content-Type: application/json" \\
-d '{
  "text": "Olá, como posso te ajudar?",
  "language": "pt-BR"
}'`}
            </Code>
          </div>

          <div>
            <p className="font-medium mb-2">Exemplo em Python:</p>
            <Code>
{`import requests

url = "https://api.neotalk.com/v1/translate/text"
headers = {
    "Authorization": "Bearer SEU_TOKEN_AQUI",
    "Content-Type": "application/json"
}
data = {
    "text": "Olá, como posso te ajudar?",
    "language": "pt-BR"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`}
            </Code>
          </div>

          <div>
            <p className="font-medium mb-2">Exemplo em JavaScript (Node.js - Axios):</p>
            <Code>
{`const axios = require('axios');

const url = "https://api.neotalk.com/v1/translate/text";
const headers = {
  "Authorization": "Bearer SEU_TOKEN_AQUI",
  "Content-Type": "application/json"
};
const data = {
  "text": "Olá, como posso te ajudar?",
  "language": "pt-BR"
};

axios.post(url, data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`}
            </Code>
          </div>
        </div>
      </div>

      {/* Tradução de Libras para Texto */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Tradução de Libras para Texto</h3>
        
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Exemplo em cURL:</p>
            <Code>
{`curl -X POST "https://api.neotalk.com/v1/translate/sign-to-text" \\
-H "Authorization: Bearer SEU_TOKEN_AQUI" \\
-H "Content-Type: application/json" \\
-d '{
  "video_file": "https://meuarquivo.com/video.mp4",
  "language": "pt-BR"
}'`}
            </Code>
          </div>

          <div>
            <p className="font-medium mb-2">Exemplo em Python:</p>
            <Code>
{`import requests

url = "https://api.neotalk.com/v1/translate/sign-to-text"
headers = {
    "Authorization": "Bearer SEU_TOKEN_AQUI",
    "Content-Type": "application/json"
}
data = {
    "video_file": "https://meuarquivo.com/video.mp4",
    "language": "pt-BR"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`}
            </Code>
          </div>

          <div>
            <p className="font-medium mb-2">Exemplo em JavaScript (Node.js - Axios):</p>
            <Code>
{`const axios = require('axios');

const url = "https://api.neotalk.com/v1/translate/sign-to-text";
const headers = {
  "Authorization": "Bearer SEU_TOKEN_AQUI",
  "Content-Type": "application/json"
};
const data = {
  "video_file": "https://meuarquivo.com/video.mp4",
  "language": "pt-BR"
};

axios.post(url, data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`}
            </Code>
          </div>
        </div>
      </div>

      {/* Boas Práticas */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Boas Práticas</h3>
        <Card className="p-6">
          <ul className="space-y-2 list-disc pl-6 text-gray-600">
            <li>Utilize variáveis de ambiente para armazenar tokens, evitando expô-los no código.</li>
            <li>Sempre verifique a resposta da API antes de continuar o processamento.</li>
            <li>Evite chamadas desnecessárias à API para não exceder limites de requisição.</li>
            <li>Mantenha os tokens seguros e renove-os periodicamente.</li>
          </ul>
        </Card>
      </div>

      {/* Erros Comuns */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Erros Comuns e Soluções</h3>
        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código HTTP</TableHead>
                <TableHead>Erro</TableHead>
                <TableHead>Solução</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">400</TableCell>
                <TableCell>Parâmetro inválido</TableCell>
                <TableCell>Verifique se os dados enviados estão corretos.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">401</TableCell>
                <TableCell>Não autorizado</TableCell>
                <TableCell>Confirme se seu token de API é válido.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">429</TableCell>
                <TableCell>Excesso de requisições</TableCell>
                <TableCell>Aguarde um pouco e tente novamente.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
};

export default Examples;