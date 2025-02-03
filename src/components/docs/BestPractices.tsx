import { Card } from "@/components/ui/card";

const BestPractices = () => {
  return (
    <section id="best-practices" className="space-y-6">
      <h2 className="text-3xl font-bold text-neotalk-dark">
        Boas Práticas para Desenvolvedores
      </h2>
      
      <div className="space-y-8">
        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-neotalk-dark">
            Uso Eficiente da API
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <strong>Use Cache Quando Possível</strong>
                <p>Armazene respostas localmente ou em banco de dados quando aplicável para reduzir chamadas redundantes à API.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <strong>Agrupe Requisições</strong>
                <p>Em vez de fazer múltiplas chamadas à API, combine-as em requisições em lote quando suportado.</p>
              </div>
            </li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-neotalk-dark">
            Práticas de Segurança
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <strong>Mantenha as Chaves de API Seguras</strong>
                <p>Nunca exponha chaves de API no código do cliente. Armazene-as em variáveis de ambiente ou gerenciador de segredos.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <strong>Use Controle de Acesso Baseado em Função (RBAC)</strong>
                <p>Atribua permissões mínimas necessárias para cada usuário ou serviço.</p>
              </div>
            </li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-neotalk-dark">
            Tratamento de Erros
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <strong>Implemente Lógica de Retry com Backoff Exponencial</strong>
                <p>Se uma requisição falhar devido a um problema temporário, aguarde e tente novamente com intervalos crescentes.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <strong>Registre Logs de API</strong>
                <p>Mantenha logs detalhados das chamadas à API para auxiliar na depuração.</p>
              </div>
            </li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-neotalk-dark">
            Otimização de Performance
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <strong>Use Compressão</strong>
                <p>Envie e receba dados comprimidos (gzip) para reduzir o uso de banda.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <strong>Pagine Respostas para Grandes Conjuntos de Dados</strong>
                <p>Se um endpoint retorna grandes quantidades de dados, solicite em partes menores usando paginação.</p>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default BestPractices;