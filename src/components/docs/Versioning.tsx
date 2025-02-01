import { Card } from "@/components/ui/card";

const Versioning = () => {
  return (
    <section id="versioning" className="space-y-6">
      <h2 className="text-3xl font-bold text-neotalk-dark">Versionamento da API</h2>
      <p className="text-lg text-gray-600">
        A API do NeoTalk utiliza versionamento semântico para garantir compatibilidade e
        facilitar atualizações. Entenda como funciona e como utilizar diferentes versões em
        suas integrações.
      </p>

      <div className="space-y-8">
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
                {`GET /translate HTTP/1.1
Host: api.neotalk.com
Accept: application/vnd.neotalk.v1+json`}
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
      </div>
    </section>
  );
};

export default Versioning;