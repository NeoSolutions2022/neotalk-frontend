import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LibrasTranslation = () => {
  return (
    <div id="libras-translation" className="space-y-6">
      <h3 className="text-2xl font-semibold text-neotalk-dark">Tradução de Libras para Texto e Áudio</h3>
      
      {/* Descrição */}
      <div className="space-y-4">
        <h4 className="text-xl font-medium text-neotalk-dark">Descrição da Funcionalidade</h4>
        <Card className="p-6">
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Este endpoint permite que um vídeo contendo sinais em Libras seja traduzido para texto escrito ou áudio falado.</li>
            <li>O vídeo pode ser enviado como arquivo ou URL.</li>
            <li>O sistema processa os sinais e retorna o texto correspondente ou um arquivo de áudio com a conversão falada.</li>
          </ul>
        </Card>
      </div>

      {/* URLs */}
      <div className="space-y-4">
        <h4 className="text-xl font-medium text-neotalk-dark">URL da Requisição</h4>
        <Card className="p-6 space-y-4">
          <div>
            <p className="font-medium mb-2">Para tradução de Libras para Texto:</p>
            <pre className="bg-gray-100 p-3 rounded-md">
              POST https://api.neotalk.com/v1/translate/sign-to-text
            </pre>
          </div>
          <div>
            <p className="font-medium mb-2">Para tradução de Libras para Áudio:</p>
            <pre className="bg-gray-100 p-3 rounded-md">
              POST https://api.neotalk.com/v1/translate/sign-to-audio
            </pre>
          </div>
        </Card>
      </div>

      {/* Parâmetros */}
      <div className="space-y-4">
        <h4 className="text-xl font-medium text-neotalk-dark">Parâmetros da Requisição</h4>
        <Card className="p-6 space-y-6">
          <div>
            <p className="font-medium mb-3">Para Tradução de Libras para Texto:</p>
            <pre className="bg-gray-100 p-3 rounded-md">
{`{
  "video_file": "base64_do_arquivo_ou_URL",
  "language": "pt-BR"
}`}
            </pre>
            <ul className="mt-3 space-y-2 text-gray-600 pl-6 list-disc">
              <li><code className="text-pink-600">video_file</code>: Arquivo de vídeo em formato MP4 ou WEBM, enviado via Base64 ou URL pública.</li>
              <li><code className="text-pink-600">language</code>: Código do idioma para conversão (pt-BR, en-US, etc.).</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium mb-3">Para Tradução de Libras para Áudio:</p>
            <pre className="bg-gray-100 p-3 rounded-md">
{`{
  "video_file": "base64_do_arquivo_ou_URL",
  "language": "pt-BR",
  "voice_type": "male"
}`}
            </pre>
            <ul className="mt-3 space-y-2 text-gray-600 pl-6 list-disc">
              <li><code className="text-pink-600">video_file</code>: Arquivo de vídeo contendo os sinais em Libras.</li>
              <li><code className="text-pink-600">language</code>: Código do idioma desejado para a conversão.</li>
              <li><code className="text-pink-600">voice_type</code>: Tipo de voz para conversão em áudio (opções: male, female).</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Exemplos */}
      <div className="space-y-4">
        <h4 className="text-xl font-medium text-neotalk-dark">Exemplo de Requisição</h4>
        <Card className="p-6 space-y-6">
          <div>
            <p className="font-medium mb-3">Exemplo de requisição em cURL (Libras para Texto):</p>
            <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
{`curl -X POST "https://api.neotalk.com/v1/translate/sign-to-text" \\
-H "Authorization: Bearer SEU_TOKEN_AQUI" \\
-H "Content-Type: application/json" \\
-d '{
  "video_file": "https://meuarquivo.com/video.mp4",
  "language": "pt-BR"
}'`}
            </pre>
          </div>

          <div>
            <p className="font-medium mb-3">Exemplo de requisição em Python (Libras para Áudio):</p>
            <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
{`import requests

url = "https://api.neotalk.com/v1/translate/sign-to-audio"
headers = {
    "Authorization": "Bearer SEU_TOKEN_AQUI",
    "Content-Type": "application/json"
}
data = {
    "video_file": "https://meuarquivo.com/video.mp4",
    "language": "pt-BR",
    "voice_type": "male"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`}
            </pre>
          </div>
        </Card>
      </div>

      {/* Respostas */}
      <div className="space-y-4">
        <h4 className="text-xl font-medium text-neotalk-dark">Resposta da API</h4>
        <Card className="p-6 space-y-6">
          <div>
            <p className="font-medium mb-3">Exemplo de resposta para Tradução de Libras para Texto:</p>
            <pre className="bg-gray-100 p-3 rounded-md">
{`{
  "status": "success",
  "translated_text": "Olá, como posso te ajudar?"
}`}
            </pre>
            <ul className="mt-3 space-y-2 text-gray-600 pl-6 list-disc">
              <li><code className="text-pink-600">status</code>: Indica se a tradução foi bem-sucedida.</li>
              <li><code className="text-pink-600">translated_text</code>: Texto resultante da conversão do vídeo.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-3">Exemplo de resposta para Tradução de Libras para Áudio:</p>
            <pre className="bg-gray-100 p-3 rounded-md">
{`{
  "status": "success",
  "audio_url": "https://audios.neotalk.com/conversao123.mp3"
}`}
            </pre>
            <ul className="mt-3 space-y-2 text-gray-600 pl-6 list-disc">
              <li><code className="text-pink-600">status</code>: Indica se a tradução foi bem-sucedida.</li>
              <li><code className="text-pink-600">audio_url</code>: Link para o arquivo de áudio gerado.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Erros */}
      <div className="space-y-4">
        <h4 className="text-xl font-medium text-neotalk-dark">Erros Comuns e Soluções</h4>
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
                <TableCell>Verifique se o vídeo foi enviado corretamente.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">401</TableCell>
                <TableCell>Não autorizado</TableCell>
                <TableCell>Confirme se seu token de API é válido.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">415</TableCell>
                <TableCell>Formato não suportado</TableCell>
                <TableCell>O arquivo deve estar em MP4 ou WEBM.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default LibrasTranslation;