import DocSidebar from "@/components/DocSidebar";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-neotalk-light">
      <DocSidebar />
      <main className="md:ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
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
        </div>
      </main>
    </div>
  );
};

export default Index;