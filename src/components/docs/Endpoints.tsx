import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Endpoints = () => {
  return (
    <section id="endpoints" className="space-y-6">
      <h2 className="text-3xl font-bold text-neotalk-dark">Endpoints Principais</h2>
      
      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-2xl font-semibold text-neotalk-dark mb-4">
            Tradução de Áudio e Texto para Libras
          </h3>
          <p className="text-gray-600 mb-6">
            Este endpoint permite enviar um arquivo de áudio ou um texto e obter a tradução
            correspondente em Libras. O resultado será um vídeo de um avatar 3D sinalizando o
            conteúdo traduzido.
          </p>

          <div className="space-y-4 mb-6">
            <h4 className="text-lg font-semibold text-neotalk-dark">URLs da Requisição</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Para tradução de áudio:</p>
                <pre className="bg-gray-50 p-3 rounded-lg text-sm">
                  POST https://api.neotalk.com/v1/translate/audio
                </pre>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Para tradução de texto:</p>
                <pre className="bg-gray-50 p-3 rounded-lg text-sm">
                  POST https://api.neotalk.com/v1/translate/text
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <h4 className="text-lg font-semibold text-neotalk-dark">Parâmetros da Requisição</h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Para Tradução de Áudio:</p>
                <pre className="bg-gray-50 p-3 rounded-lg text-sm whitespace-pre-wrap">
                  {`{
  "audio_file": "base64_do_arquivo_ou_URL",
  "language": "pt-BR"
}`}
                </pre>
                <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
                  <li>audio_file: Arquivo de áudio em formato MP3 ou WAV, via Base64 ou URL pública</li>
                  <li>language: Código do idioma do áudio (pt-BR, en-US, etc.)</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Para Tradução de Texto:</p>
                <pre className="bg-gray-50 p-3 rounded-lg text-sm whitespace-pre-wrap">
                  {`{
  "text": "Olá, como posso te ajudar?",
  "language": "pt-BR"
}`}
                </pre>
                <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
                  <li>text: String com o texto a ser traduzido</li>
                  <li>language: Código do idioma do texto</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <h4 className="text-lg font-semibold text-neotalk-dark">Exemplos de Requisição</h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Exemplo em cURL (Áudio):</p>
                <pre className="bg-gray-50 p-3 rounded-lg text-sm whitespace-pre-wrap">
                  {`curl -X POST "https://api.neotalk.com/v1/translate/audio" \\
-H "Authorization: Bearer SEU_TOKEN_AQUI" \\
-H "Content-Type: application/json" \\
-d '{
  "audio_file": "https://meuarquivo.com/audio.mp3",
  "language": "pt-BR"
}'`}
                </pre>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Exemplo em Python (Texto):</p>
                <pre className="bg-gray-50 p-3 rounded-lg text-sm whitespace-pre-wrap">
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
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <h4 className="text-lg font-semibold text-neotalk-dark">Resposta da API</h4>
            <p className="text-sm text-gray-600 mb-2">
              A API retornará um link do vídeo com o avatar sinalizando o conteúdo traduzido:
            </p>
            <pre className="bg-gray-50 p-3 rounded-lg text-sm whitespace-pre-wrap">
              {`{
  "status": "success",
  "video_url": "https://videos.neotalk.com/traducao123.mp4"
}`}
            </pre>
            <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
              <li>status: Indica se a tradução foi bem-sucedida</li>
              <li>video_url: Link para o vídeo do avatar em Libras</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-neotalk-dark mb-4">
              Erros Comuns e Soluções
            </h4>
            <div className="rounded-lg border">
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
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Endpoints;