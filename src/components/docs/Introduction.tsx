import { Card } from "@/components/ui/card";

const Introduction = () => {
  return (
    <section id="introduction" className="space-y-6">
      <h1 className="text-4xl font-bold text-neotalk-dark">NeoTalk Platform API</h1>
      <p className="text-lg text-gray-600">
        A API do NeoTalk permite que desenvolvedores integrem funcionalidades de tradução de
        Libras (Língua Brasileira de Sinais) em tempo real em seus aplicativos, utilizando
        inteligência artificial para reconhecimento e conversão entre diferentes formatos de
        comunicação.
      </p>

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
    </section>
  );
};

export default Introduction;