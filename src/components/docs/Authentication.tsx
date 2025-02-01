import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Authentication = () => {
  return (
    <section id="authentication" className="space-y-6">
      <h2 className="text-3xl font-bold text-neotalk-dark">Autenticação e Segurança</h2>
      
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Métodos de Autenticação</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="text-xl font-semibold text-neotalk-dark mb-4">API Key</h4>
            <p className="text-gray-600 mb-4">
              Cada usuário registrado recebe uma API Key exclusiva para autenticação.
            </p>
            <pre className="bg-gray-50 p-3 rounded-lg text-sm overflow-x-auto">
              {`GET /translate/text HTTP/1.1
Host: api.neotalk.com
Authorization: Bearer SEU_TOKEN_AQUI`}
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
  );
};

export default Authentication;