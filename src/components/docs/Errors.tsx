import { Card } from "@/components/ui/card";
import { Code } from "@/components/ui/code";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Errors = () => {
  return (
    <section id="errors" className="space-y-8">
      <h2 className="text-3xl font-bold text-neotalk-dark">Erros e Respostas</h2>
      
      {/* Introdução */}
      <div className="space-y-4">
        <p className="text-gray-600">
          Esta seção lista os códigos de erro mais comuns retornados pela API do NeoTalk.
          Cada erro contém uma descrição, sua causa provável e como corrigi-lo.
        </p>
      </div>

      {/* Tabela de Erros */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Tabela de Erros e Soluções</h3>
        <Card className="p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Código HTTP</TableHead>
                  <TableHead>Erro</TableHead>
                  <TableHead>Causa Provável</TableHead>
                  <TableHead>Solução</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">200</TableCell>
                  <TableCell>OK</TableCell>
                  <TableCell>A requisição foi processada com sucesso.</TableCell>
                  <TableCell>Nenhuma ação necessária.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">201</TableCell>
                  <TableCell>Created</TableCell>
                  <TableCell>O recurso foi criado com sucesso.</TableCell>
                  <TableCell>Nenhuma ação necessária.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">400</TableCell>
                  <TableCell>Bad Request</TableCell>
                  <TableCell>Parâmetros inválidos ou mal formatados.</TableCell>
                  <TableCell>Verifique a estrutura JSON e os campos obrigatórios.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">401</TableCell>
                  <TableCell>Unauthorized</TableCell>
                  <TableCell>Token de autenticação ausente ou inválido.</TableCell>
                  <TableCell>Certifique-se de enviar um token válido no header da requisição.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">403</TableCell>
                  <TableCell>Forbidden</TableCell>
                  <TableCell>O usuário não tem permissão para esta ação.</TableCell>
                  <TableCell>Confirme se seu usuário tem as permissões necessárias.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">404</TableCell>
                  <TableCell>Not Found</TableCell>
                  <TableCell>O recurso solicitado não existe.</TableCell>
                  <TableCell>Verifique a URL e os identificadores utilizados.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">415</TableCell>
                  <TableCell>Unsupported Media Type</TableCell>
                  <TableCell>O formato do arquivo enviado não é suportado.</TableCell>
                  <TableCell>Utilize os formatos aceitos, como MP3, WAV, MP4 e JSON.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">429</TableCell>
                  <TableCell>Too Many Requests</TableCell>
                  <TableCell>O limite de requisições foi excedido.</TableCell>
                  <TableCell>Aguarde um momento antes de tentar novamente.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">500</TableCell>
                  <TableCell>Internal Server Error</TableCell>
                  <TableCell>Erro inesperado no servidor.</TableCell>
                  <TableCell>Tente novamente mais tarde ou entre em contato com o suporte.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">503</TableCell>
                  <TableCell>Service Unavailable</TableCell>
                  <TableCell>O serviço está temporariamente indisponível.</TableCell>
                  <TableCell>Aguarde alguns minutos e tente novamente.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>

      {/* Exemplos de Resposta de Erro */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Exemplo de Resposta de Erro</h3>
        <p className="text-gray-600 mb-4">
          Caso ocorra um erro, a API retorna uma resposta JSON com detalhes sobre o problema.
        </p>

        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Exemplo de resposta para um erro 400 - Bad Request:</p>
            <Code>
{`{
  "status": "error",
  "error_code": 400,
  "message": "O campo 'text' é obrigatório."
}`}
            </Code>
          </div>

          <div>
            <p className="font-medium mb-2">Exemplo de resposta para um erro 401 - Unauthorized:</p>
            <Code>
{`{
  "status": "error",
  "error_code": 401,
  "message": "Token inválido ou expirado."
}`}
            </Code>
          </div>

          <div>
            <p className="font-medium mb-2">Exemplo de resposta para um erro 429 - Too Many Requests:</p>
            <Code>
{`{
  "status": "error",
  "error_code": 429,
  "message": "Limite de requisições excedido. Tente novamente em 60 segundos."
}`}
            </Code>
          </div>
        </div>
      </div>

      {/* Boas Práticas */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Boas Práticas para Tratamento de Erros</h3>
        <Card className="p-6">
          <ul className="space-y-2 list-disc pl-6 text-gray-600">
            <li>Sempre verifique a resposta da API antes de processar os dados.</li>
            <li>Implemente um mecanismo de retry (com backoff exponencial) para evitar falhas em casos de erros 429.</li>
            <li>Armazene logs de erros para diagnóstico e melhoria contínua.</li>
            <li>Evite expor mensagens de erro sensíveis ao usuário final para manter a segurança da aplicação.</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Errors;