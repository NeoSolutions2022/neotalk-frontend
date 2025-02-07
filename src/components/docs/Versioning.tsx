import { Card } from "@/components/ui/card";

const Versioning = () => {
  return (
    <section id="versioning" className="space-y-6">
      <h2 className="text-3xl font-bold text-neotalk-dark">Versionamento da API</h2>
      <p className="text-lg text-gray-600">
        A API do NeoTalk utiliza versionamento semântico para garantir compatibilidade e
        facilitar atualizações.
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
        </Card>
      </div>
    </section>
  );
};

export default Versioning;