import { Code } from "@/components/ui/code"

const Webhooks = () => {
  return (
    <section id="webhooks" className="space-y-8">
      <h3 className="text-2xl font-bold text-neotalk-dark">Webhooks e Notificações</h3>
      
      {/* Descrição */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Descrição da Funcionalidade</h4>
        <p className="text-gray-600">
          Webhooks permitem que a API do NeoTalk envie notificações automáticas para um servidor sempre que eventos importantes ocorrerem.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Tradução concluída (exemplo: um vídeo foi processado e está pronto)</li>
          <li>Erro durante o processamento</li>
          <li>Expiração de tokens de autenticação</li>
        </ul>
      </div>

      {/* URLs */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">URLs da Requisição</h4>
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Para registrar um Webhook:</p>
            <Code>POST https://api.neotalk.com/v1/webhooks/register</Code>
          </div>
          <div>
            <p className="font-medium mb-2">Para remover um Webhook:</p>
            <Code>DELETE https://api.neotalk.com/v1/webhooks/remove</Code>
          </div>
        </div>
      </div>

      {/* Parâmetros */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Parâmetros da Requisição</h4>
        
        <div>
          <p className="font-medium mb-2">Para Registrar um Webhook:</p>
          <Code className="mb-4">
{`{
  "event": "translation_completed",
  "callback_url": "https://meusistema.com/webhook",
  "secret": "chave-secreta-para-validacao"
}`}
          </Code>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><code>event</code>: O evento que acionará o webhook (<code>translation_completed</code>, <code>error_occurred</code>, <code>token_expired</code>)</li>
            <li><code>callback_url</code>: O endpoint do cliente que receberá os eventos</li>
            <li><code>secret</code>: Chave opcional para validação de segurança</li>
          </ul>
        </div>

        <div>
          <p className="font-medium mb-2">Para Remover um Webhook:</p>
          <Code className="mb-4">
{`{
  "callback_url": "https://meusistema.com/webhook"
}`}
          </Code>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><code>callback_url</code>: O endpoint que deve ser removido</li>
          </ul>
        </div>
      </div>

      {/* Exemplos */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Exemplos de Requisição</h4>
        
        <div>
          <p className="font-medium mb-2">Exemplo em cURL (Registrar Webhook):</p>
          <Code>
{`curl -X POST "https://api.neotalk.com/v1/webhooks/register" \\
-H "Authorization: Bearer SEU_TOKEN_AQUI" \\
-H "Content-Type: application/json" \\
-d '{
  "event": "translation_completed",
  "callback_url": "https://meusistema.com/webhook",
  "secret": "minha_chave_secreta"
}'`}
          </Code>
        </div>

        <div>
          <p className="font-medium mb-2">Exemplo em Python (Remover Webhook):</p>
          <Code>
{`import requests

url = "https://api.neotalk.com/v1/webhooks/remove"
headers = {
    "Authorization": "Bearer SEU_TOKEN_AQUI",
    "Content-Type": "application/json"
}
data = {
    "callback_url": "https://meusistema.com/webhook"
}

response = requests.delete(url, json=data, headers=headers)
print(response.json())`}
          </Code>
        </div>
      </div>

      {/* Estrutura da Notificação */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Estrutura da Notificação (Webhook Callback)</h4>
        
        <div>
          <p className="font-medium mb-2">Exemplo de Payload para o Evento translation_completed:</p>
          <Code className="mb-4">
{`{
  "event": "translation_completed",
  "translation_id": "123456",
  "status": "success",
  "video_url": "https://videos.neotalk.com/traducao123.mp4",
  "timestamp": "2025-01-31T15:30:00Z"
}`}
          </Code>
        </div>

        <div>
          <p className="font-medium mb-2">Exemplo de Payload para o Evento error_occurred:</p>
          <Code className="mb-4">
{`{
  "event": "error_occurred",
  "translation_id": "123456",
  "error_code": "500",
  "error_message": "Erro interno no processamento",
  "timestamp": "2025-01-31T15:35:00Z"
}`}
          </Code>
        </div>
      </div>

      {/* Segurança */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Segurança e Validação</h4>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Verifique o cabeçalho <code>X-NeoTalk-Signature</code>, que contém um hash HMAC da requisição assinado com a <code>secret</code> fornecida</li>
          <li>Registre apenas Webhooks em servidores HTTPS para evitar ataques man-in-the-middle</li>
          <li>Evite armazenar dados sensíveis nos logs de requisição do Webhook</li>
        </ul>
      </div>

      {/* Erros */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Erros Comuns e Soluções</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código HTTP</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Erro</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solução</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">400</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Parâmetro inválido</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Verifique se os dados enviados estão corretos</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">401</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Não autorizado</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Confirme se seu token de API é válido</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">403</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Webhook não permitido</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apenas URLs HTTPS são aceitas</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">500</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Erro interno no servidor</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tente novamente mais tarde</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Webhooks