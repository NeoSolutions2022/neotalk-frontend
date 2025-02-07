
import { Card } from "@/components/ui/card";
import { Code } from "@/components/ui/code";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AudioTextTranslation = () => {
  return (
    <div id="audio-text-translation" className="space-y-6">
      <h3 className="text-2xl font-semibold text-neotalk-dark">Tradução de Áudio e Texto para Libras</h3>
      
      {/* Introduction */}
      <Card className="p-6">
        <p className="text-gray-600">
          Este endpoint permite enviar um arquivo de áudio ou um texto escrito e obter a versão traduzida para 
          Libras (Língua Brasileira de Sinais). A API processa a entrada e retorna um vídeo com um avatar 3D 
          sinalizando o conteúdo traduzido.
        </p>
        <p className="text-gray-600 mt-4">
          Pode ser utilizada em:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-600">
          <li>Educação</li>
          <li>Eventos</li>
          <li>Atendimento digital</li>
          <li>Plataformas de streaming</li>
        </ul>
      </Card>

      {/* Request URLs */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">URL da Requisição</h4>
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Para tradução de áudio:</p>
            <Code>POST https://api.neotalk.com/v1/translate/audio</Code>
          </div>
          <div>
            <p className="font-medium mb-2">Para tradução de texto:</p>
            <Code>POST https://api.neotalk.com/v1/translate/text</Code>
          </div>
        </div>
      </div>

      {/* Request Parameters */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Parâmetros da Requisição</h4>
        <p className="text-gray-600">O corpo da requisição deve ser enviado no formato JSON.</p>
        
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Para Tradução de Áudio:</p>
            <Code>
{`{
  "audio_file": "base64_do_arquivo_ou_URL",
  "language": "pt-BR"
}`}
            </Code>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li><code className="text-sm">audio_file</code>: Arquivo de áudio em formato MP3 ou WAV, enviado via Base64 ou URL pública.</li>
              <li><code className="text-sm">language</code>: Código do idioma do áudio (pt-BR, en-US, etc.).</li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-2">Para Tradução de Texto:</p>
            <Code>
{`{
  "text": "Olá, como posso te ajudar?",
  "language": "pt-BR"
}`}
            </Code>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li><code className="text-sm">text</code>: String com o texto a ser traduzido.</li>
              <li><code className="text-sm">language</code>: Código do idioma do texto.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Request Examples */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Exemplo de Requisição</h4>
        
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Exemplo de requisição em cURL (Áudio para Libras):</p>
            <Code>
{`curl -X POST "https://api.neotalk.com/v1/translate/audio" \\
-H "Authorization: Bearer SEU_TOKEN_AQUI" \\
-H "Content-Type: application/json" \\
-d '{
  "audio_file": "https://meuarquivo.com/audio.mp3",
  "language": "pt-BR"
}'`}
            </Code>
          </div>

          <div>
            <p className="font-medium mb-2">Exemplo de requisição em Python (Texto para Libras):</p>
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
        </div>
      </div>

      {/* API Response */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Resposta da API</h4>
        <p className="text-gray-600">
          A API retorna um link para um vídeo onde um avatar sinaliza o conteúdo traduzido para Libras.
        </p>
        
        <div>
          <p className="font-medium mb-2">Exemplo de resposta JSON para Tradução de Áudio/Texto para Libras:</p>
          <Code>
{`{
  "status": "success",
  "video_url": "https://videos.neotalk.com/traducao123.mp4"
}`}
          </Code>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li><code className="text-sm">status</code>: Indica se a tradução foi bem-sucedida.</li>
            <li><code className="text-sm">video_url</code>: Link para o vídeo do avatar em Libras.</li>
          </ul>
        </div>
      </div>

      {/* Common Errors */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Erros Comuns e Soluções</h4>
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
                <TableCell>Verifique se o áudio/texto foi enviado corretamente.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">401</TableCell>
                <TableCell>Não autorizado</TableCell>
                <TableCell>Confirme se seu token de API é válido.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">415</TableCell>
                <TableCell>Formato não suportado</TableCell>
                <TableCell>O arquivo deve estar em MP3 ou WAV.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default AudioTextTranslation;
