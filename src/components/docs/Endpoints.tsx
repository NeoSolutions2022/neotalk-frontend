import { Card } from "@/components/ui/card";

const Endpoints = () => {
  return (
    <section id="endpoints" className="space-y-6">
      <h2 className="text-3xl font-bold text-neotalk-dark">Endpoints Principais</h2>
      
      <div id="audio-text-translation" className="space-y-6">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Tradução de Áudio e Texto para Libras</h3>
        <Card className="p-6">
          <p className="text-gray-600">
            Documentação em desenvolvimento...
          </p>
        </Card>
      </div>

      <div id="libras-translation" className="space-y-6">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Tradução de Libras para Texto e Áudio</h3>
        <Card className="p-6">
          <p className="text-gray-600">
            Documentação em desenvolvimento...
          </p>
        </Card>
      </div>

      <div id="video-integration" className="space-y-6">
        <h3 className="text-2xl font-semibold text-neotalk-dark">Integração com Vídeos e Streaming</h3>
        <Card className="p-6">
          <p className="text-gray-600">
            Documentação em desenvolvimento...
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Endpoints;