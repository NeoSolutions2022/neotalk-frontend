import { Code } from "@/components/ui/code";

const UserManagement = () => {
  return (
    <section id="user-management" className="space-y-8">
      <h3 className="text-2xl font-bold text-neotalk-dark">
        Autenticação e Gestão de Usuários
      </h3>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">
          Descrição da Funcionalidade
        </h4>
        <p className="text-gray-600">
          Este endpoint permite criar, atualizar e excluir usuários na API do NeoTalk.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Também pode ser utilizado para gerenciar permissões e definir níveis de acesso à API</li>
          <li>Usuários podem ser autenticados via API Key, OAuth 2.0 ou JWT</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">URLs da Requisição</h4>
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Para criar um novo usuário:</p>
            <Code>POST https://api.neotalk.com/v1/users/create</Code>
          </div>
          <div>
            <p className="font-medium mb-2">Para atualizar permissões de um usuário:</p>
            <Code>PUT https://api.neotalk.com/v1/users/update</Code>
          </div>
          <div>
            <p className="font-medium mb-2">Para excluir um usuário:</p>
            <Code>DELETE https://api.neotalk.com/v1/users/delete</Code>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Parâmetros da Requisição</h4>
        <div>
          <p className="font-medium mb-2">Para Criar um Novo Usuário:</p>
          <Code className="mb-4">{`{
  "name": "João Silva",
  "email": "joao@email.com",
  "role": "developer",
  "password": "senha123"
}`}</Code>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><code>name</code>: Nome do usuário</li>
            <li><code>email</code>: E-mail do usuário (único)</li>
            <li><code>role</code>: <code>developer</code> (acesso básico), <code>admin</code> (acesso total)</li>
            <li><code>password</code>: Senha para login</li>
          </ul>
        </div>

        <div>
          <p className="font-medium mb-2">Para Atualizar Permissões de um Usuário:</p>
          <Code className="mb-4">{`{
  "user_id": "123456",
  "role": "admin"
}`}</Code>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><code>user_id</code>: Identificador do usuário</li>
            <li><code>role</code>: Novo nível de permissão</li>
          </ul>
        </div>

        <div>
          <p className="font-medium mb-2">Para Excluir um Usuário:</p>
          <Code className="mb-4">{`{
  "user_id": "123456"
}`}</Code>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><code>user_id</code>: Identificador do usuário a ser removido</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Exemplos de Requisição</h4>
        <div>
          <p className="font-medium mb-2">Exemplo em cURL (Criar Usuário):</p>
          <Code>{`curl -X POST "https://api.neotalk.com/v1/users/create" \\
-H "Authorization: Bearer SEU_TOKEN_AQUI" \\
-H "Content-Type: application/json" \\
-d '{
  "name": "João Silva",
  "email": "joao@email.com",
  "role": "developer",
  "password": "senha123"
}'`}</Code>
        </div>

        <div>
          <p className="font-medium mb-2">Exemplo em Python (Atualizar Permissões):</p>
          <Code>{`import requests

url = "https://api.neotalk.com/v1/users/update"
headers = {
    "Authorization": "Bearer SEU_TOKEN_AQUI",
    "Content-Type": "application/json"
}
data = {
    "user_id": "123456",
    "role": "admin"
}

response = requests.put(url, json=data, headers=headers)
print(response.json())`}</Code>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Resposta da API</h4>
        <div>
          <p className="font-medium mb-2">Exemplo de resposta para Criação de Usuário:</p>
          <Code className="mb-4">{`{
  "status": "success",
  "user_id": "123456",
  "message": "Usuário criado com sucesso"
}`}</Code>
        </div>

        <div>
          <p className="font-medium mb-2">Exemplo de resposta para Atualização de Permissões:</p>
          <Code className="mb-4">{`{
  "status": "success",
  "message": "Permissões atualizadas com sucesso"
}`}</Code>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Segurança e Boas Práticas</h4>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Restrinja permissões conforme necessário → Apenas administradores devem criar ou excluir usuários</li>
          <li>Armazene senhas com hash seguro → Recomenda-se <code>bcrypt</code> ou <code>argon2</code></li>
          <li>Use autenticação multifator (MFA) para admins → Para evitar acessos não autorizados</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-neotalk-dark">Erros Comuns e Soluções</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Código HTTP
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Erro
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Solução
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">400</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Parâmetro inválido</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Verifique se todos os campos obrigatórios estão preenchidos corretamente
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">401</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Não autorizado</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Confirme se seu token de API é válido e se possui as permissões necessárias
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">409</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">E-mail já cadastrado</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  O e-mail informado já existe na base de usuários
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">500</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Erro interno no servidor</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Tente novamente mais tarde
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserManagement;