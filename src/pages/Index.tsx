import DocSidebar from "@/components/DocSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-neotalk-light">
      <DocSidebar />
      <main className="md:ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <section id="introduction" className="mb-12">
            <h1 className="text-4xl font-bold text-neotalk-dark mb-6">NeoTalk Platform API</h1>
            <p className="text-lg text-gray-600 mb-4">
              A API do NeoTalk permite que desenvolvedores integrem funcionalidades de tradução de
              Libras (Língua Brasileira de Sinais) em tempo real em seus aplicativos, plataformas
              de vídeo, EAD e sistemas de autoatendimento.
            </p>
          </section>

          <section id="versioning" className="mb-12">
            <h2 className="text-3xl font-bold text-neotalk-dark mb-4">Versionamento da API</h2>
            <p className="text-gray-600 mb-4">
              Informações sobre o versionamento da API serão adicionadas aqui.
            </p>
          </section>

          {/* Add more sections as needed */}
        </div>
      </main>
    </div>
  );
};

export default Index;