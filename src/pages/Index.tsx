import DocSidebar from "@/components/DocSidebar";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Index = () => {
  return (
    <div className="min-h-screen bg-neotalk-light">
      <DocSidebar />
      <main className="md:ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <section id="introduction" className="space-y-6">
            <h1 className="text-4xl font-bold text-neotalk-dark">NeoTalk Platform API</h1>
            <p className="text-lg text-gray-600">
              A API do NeoTalk permite que desenvolvedores integrem funcionalidades de tradução de
              Libras (Língua Brasileira de Sinais) em tempo real em seus aplicativos, utilizando
              inteligência artificial para reconhecimento e conversão entre diferentes formatos de
              comunicação.
            </p>

            {/* Main Features */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-neotalk-dark mb-3">
                  Tradução em Tempo Real
                </h3>
                <p className="text-gray-600">
                  Converta instantaneamente entre áudio, texto e Libras com nossa API de alta
                  performance.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-neotalk-dark mb-3">
                  Integração com Vídeos
                </h3>
                <p className="text-gray-600">
                  Adicione um intérprete virtual de Libras em vídeos ao vivo ou gravados.
                </p>
              </Card>
            </div>

            {/* Use Cases */}
            <section id="use-cases" className="mt-12">
              <h2 className="text-3xl font-bold text-neotalk-dark mb-6">Casos de Uso</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-neotalk-dark mb-3">Educação</h3>
                  <p className="text-gray-600">
                    Tradução de conteúdos educacionais em tempo real para plataformas EAD.
                  </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-neotalk-dark mb-3">
                    Eventos e Conferências
                  </h3>
                  <p className="text-gray-600">
                    Suporte para inclusão de Libras em palestras e eventos ao vivo.
                  </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-neotalk-dark mb-3">
                    Atendimento Digital
                  </h3>
                  <p className="text-gray-600">
                    Melhore a comunicação entre empresas e clientes surdos através de chatbots e
                    assistentes virtuais.
                  </p>
                </Card>
              </div>
            </section>

            {/* Technologies */}
            <section id="technologies" className="mt-12">
              <h2 className="text-3xl font-bold text-neotalk-dark mb-6">
                Tecnologias Suportadas
              </h2>
              <div className="bg-white p-6 rounded-lg shadow">
                <ul className="list-disc list-inside space-y-3 text-gray-600">
                  <li>API RESTful com suporte a requisições HTTP/HTTPS</li>
                  <li>WebSockets para comunicação em tempo real</li>
                  <li>SDKs disponíveis para Python, JavaScript, Node.js e Java</li>
                  <li>Ambiente de testes (sandbox) para desenvolvimento seguro</li>
                </ul>
              </div>
            </section>

            {/* Getting Started Button */}
            <div className="mt-12 text-center">
              <a
                href="#authentication"
                className="inline-block bg-neotalk-blue hover:bg-neotalk-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Começar a Integração
              </a>
            </div>
          </section>

          <section id="versioning" className="space-y-6">
            <h2 className="text-3xl font-bold text-neotalk-dark">Versionamento da API</h2>
            <p className="text-lg text-gray-600">
              A API do NeoTalk utiliza versionamento semântico para garantir compatibilidade e
              facilitar atualizações. Entenda como funciona e como utilizar diferentes versões em
              suas integrações.
            </p>

            <div className="space-y-8">
              {/* Semantic Versioning */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-neotalk-dark mb-4">
                  Esquema de Versionamento
                </h3>
                <p className="text-gray-600 mb-4">
                  Seguimos a convenção Semantic Versioning (MAJOR.MINOR.PATCH):
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>MAJOR</strong> (v1, v2): Mudanças que podem quebrar compatibilidade</li>
                  <li><strong>MINOR</strong> (v1.1, v1.2): Novas funcionalidades compatíveis</li>
                  <li><strong>PATCH</strong> (v1.0.1, v1.0.2): Correções de bugs e melhorias</li>
                </ul>
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-neotalk-dark mb-2">Exemplos de Versões:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>v1.0.0</strong> - Primeira versão pública</li>
                    <li><strong>v1.1.0</strong> - Adiciona suporte para integração com vídeos</li>
                    <li><strong>v2.0.0</strong> - Nova estrutura de autenticação</li>
                  </ul>
                </div>
              </Card>

              {/* Version Specification */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-neotalk-dark mb-4">
                  Como Definir a Versão nas Requisições
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neotalk-dark mb-2">1. Na URL:</h4>
                    <pre className="bg-gray-50 p-3 rounded-lg text-sm">
                      https://api.neotalk.com/v1/translate
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neotalk-dark mb-2">2. No Header da Requisição:</h4>
                    <pre className="bg-gray-50 p-3 rounded-lg text-sm whitespace-pre-wrap">
                      GET /translate HTTP/1.1
                      Host: api.neotalk.com
                      Accept: application/vnd.neotalk.v1+json
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neotalk-dark mb-2">3. Via Query Parameter:</h4>
                    <pre className="bg-gray-50 p-3 rounded-lg text-sm">
                      https://api.neotalk.com/translate?version=1
                    </pre>
                  </div>
                </div>
              </Card>

              {/* Version Maintenance */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-neotalk-dark mb-4">
                  Manutenção e Depreciação de Versões
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Cada versão da API tem um ciclo de vida definido. As versões principais (MAJOR)
                    são mantidas por no mínimo 12 meses antes da descontinuação.
                  </p>
                  <div>
                    <h4 className="font-semibold text-neotalk-dark mb-2">
                      Notificações de Depreciação:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>E-mails para contas registradas</li>
                      <li>Mensagens nos logs da API</li>
                      <li>Página de changelog da API</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Usage Examples */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-neotalk-dark mb-4">
                  Exemplos de Uso
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neotalk-dark mb-2">Versão na URL:</h4>
                    <pre className="bg-gray-50 p-3 rounded-lg text-sm">
                      GET https://api.neotalk.com/v1/translate
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neotalk-dark mb-2">Versão no Header:</h4>
                    <pre className="bg-gray-50 p-3 rounded-lg text-sm whitespace-pre-wrap">
                      GET /translate HTTP/1.1
                      Host: api.neotalk.com
                      Accept: application/vnd.neotalk.v1+json
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neotalk-dark mb-2">Versão Mais Recente:</h4>
                    <pre className="bg-gray-50 p-3 rounded-lg text-sm">
                      GET https://api.neotalk.com/translate
                    </pre>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section id="authentication" className="space-y-6">
            <h2 className="text-3xl font-bold text-neotalk-dark">Autenticação e Segurança</h2>
            
            {/* Authentication Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neotalk-dark">Métodos de Autenticação</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-neotalk-dark mb-4">API Key</h4>
                  <p className="text-gray-600 mb-4">
                    Cada usuário registrado recebe uma API Key exclusiva para autenticação.
                  </p>
                  <pre className="bg-gray-50 p-3 rounded-lg text-sm overflow-x-auto">
                    GET /translate/text HTTP/1.1
                    Host: api.neotalk.com
                    Authorization: Bearer SEU_TOKEN_AQUI
                  </pre>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-neotalk-dark mb-4">OAuth 2.0</h4>
                  <p className="text-gray-600 mb-4">
                    Para integrações avançadas, a API do NeoTalk suporta OAuth 2.0 com fluxo Client Credentials.
                  </p>
                  <pre className="bg-gray-50 p-3 rounded-lg text-sm overflow-x-auto">
{`POST /oauth/token
Content-Type: application/json

{
  "client_id": "SEU_CLIENT_ID",
  "client_secret": "SEU_CLIENT_SECRET",
  "grant_type": "client_credentials"
}`}
                  </pre>
                </Card>
              </div>
            </div>

            {/* Security Best Practices */}
            <Card className="p-6">
              <h3 className="text-2xl font-semibold text-neotalk-dark mb-4">
                Segurança e Melhores Práticas
              </h3>
              <ul className="space-y-3 text-gray-600 list-disc list-inside">
                <li>Use variáveis de ambiente para armazenar credenciais</li>
                <li>Não exponha suas chaves API em código público</li>
                <li>Revogue e gere novas chaves periodicamente</li>
                <li>Restrinja permissões da API Key</li>
                <li>Habilite IP Whitelisting para limitar requisições</li>
              </ul>
            </Card>

            {/* Rate Limiting */}
            <Card className="p-6">
              <h3 className="text-2xl font-semibold text-neotalk-dark mb-4">
                Proteção Contra Abusos
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Limite de <strong>100 requisições por minuto</strong> por usuário.
                </p>
                <p className="text-gray-600">
                  Caso um IP ultrapasse o limite, ele será temporariamente bloqueado por 5 minutos.
                </p>
              </div>
            </Card>

            {/* Common Errors */}
            <div>
              <h3 className="text-2xl font-semibold text-neotalk-dark mb-4">
                Erros Comuns e Soluções
              </h3>
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
                      <TableCell className="font-medium">401</TableCell>
                      <TableCell>Unauthorized (Token inválido ou ausente)</TableCell>
                      <TableCell>Verifique se o token está correto e ativo.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">403</TableCell>
                      <TableCell>Forbidden (Permissão negada)</TableCell>
                      <TableCell>Confirme se a API Key tem permissões para essa ação.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">429</TableCell>
                      <TableCell>Too Many Requests (Rate Limit Excedido)</TableCell>
                      <TableCell>Aguarde alguns minutos e tente novamente.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>

          {/* Translation Endpoints Section */}
          <section id="endpoints" className="space-y-6">
            <h2 className="text-3xl font-bold text-neotalk-dark">Endpoints Principais</h2>
            
            {/* Audio and Text Translation */}
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

                {/* Request URLs */}
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

                {/* Request Parameters */}
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

                {/* Request Examples */}
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

                {/* API Response */}
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

                {/* Common Errors */}
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
        </div>
      </main>
    </div>
  );
};

export default Index;
