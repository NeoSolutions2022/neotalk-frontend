import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Authentication = () => {
  return (
    <section id="auth" className="space-y-6">
      <h2 className="text-3xl font-bold text-neotalk-dark">Autenticação e Segurança</h2>
      
      <div id="auth-methods" className="space-y-6">
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
              Para integrações avançadas, a API do NeoTalk suporta OAuth 2.0.
            </p>
          </Card>
        </div>
      </div>

      <div id="tokens" className="space-y-6">
        <Card className="p-6">
          <h3 className="text-2xl font-semibold text-neotalk-dark mb-4">
            Tokens e Segurança
          </h3>
          <ul className="space-y-3 text-gray-600 list-disc list-inside">
            <li>Use variáveis de ambiente para armazenar credenciais</li>
            <li>Não exponha suas chaves API em código público</li>
            <li>Revogue e gere novas chaves periodicamente</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Authentication;