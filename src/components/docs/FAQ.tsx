
import { Card } from "@/components/ui/card";
import { Mail, Globe2, MessageSquare } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Como faço para obter uma chave de API?",
      answer: "Você pode obter uma chave de API ao se cadastrar no painel de desenvolvedores do NeoTalk. Após o login, acesse a aba \"Credenciais\" e gere sua API Key.",
    },
    {
      question: "A API suporta quais formatos de arquivo?",
      answer: (
        <div>
          Atualmente, suportamos os seguintes formatos:
          <ul className="list-disc ml-6 mt-2">
            <li>Áudio: MP3, WAV</li>
            <li>Vídeo: MP4, WebM</li>
            <li>Texto: JSON</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Qual o tempo médio de resposta da API?",
      answer: (
        <div>
          O tempo médio de resposta varia conforme a complexidade da requisição:
          <ul className="list-disc ml-6 mt-2">
            <li>Tradução de texto para Libras: &lt;1s</li>
            <li>Tradução de áudio para Libras: 2-5s</li>
            <li>Tradução de vídeos completos: Dependendo da duração, pode levar até 30s</li>
          </ul>
        </div>
      ),
    },
    {
      question: "A API suporta idiomas além do português?",
      answer: "Sim! Atualmente, a API suporta português (pt-BR), inglês (en-US) e espanhol (es-ES). Estamos expandindo para novos idiomas em versões futuras.",
    },
    {
      question: "O que fazer se minha requisição for rejeitada com erro 401 (Unauthorized)?",
      answer: (
        <div>
          Verifique se:
          <ul className="list-disc ml-6 mt-2">
            <li>Sua API Key está correta e ativa</li>
            <li>Você está enviando a chave no cabeçalho correto (Authorization: Bearer SEU_TOKEN_AQUI)</li>
            <li>Sua API Key tem permissões para o endpoint solicitado</li>
          </ul>
        </div>
      ),
    },
    {
      question: "O que fazer se minha aplicação atingir o limite de requisições (429 - Too Many Requests)?",
      answer: (
        <div>
          <ul className="list-disc ml-6">
            <li>Aguarde o tempo especificado na resposta da API antes de tentar novamente</li>
            <li>Use exponential backoff para re-tentar requisições de maneira eficiente</li>
            <li>Considere migrar para um plano superior se precisar de mais requisições</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Posso usar a API para integrar Libras em um app de videoconferência?",
      answer: "Sim! Nossa API pode ser utilizada para adicionar tradução de Libras em tempo real em chamadas de vídeo, desde que sua plataforma suporte WebSockets ou WebRTC.",
    },
    {
      question: "Como posso testar a API antes de usá-la em produção?",
      answer: "Utilize o ambiente sandbox disponível no painel de desenvolvedores para testar requisições sem consumir créditos do seu plano.",
    },
    {
      question: "Como reportar um problema na API?",
      answer: (
        <div>
          Se você encontrar um problema ou comportamento inesperado na API, siga estas etapas:
          <ul className="list-disc ml-6 mt-2">
            <li>Verifique a documentação para garantir que sua requisição está correta</li>
            <li>Consulte o status da API para verificar se há alguma instabilidade no serviço</li>
            <li>Se o problema persistir, envie um e-mail para suporte@neotalk.com com os detalhes da requisição e a resposta da API</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section id="support" className="space-y-8">
      <h2 className="text-3xl font-bold text-neotalk-dark">FAQ e Suporte</h2>
      
      <Card className="p-6">
        <p className="text-gray-600 mb-4">
          Esta seção responde às dúvidas mais comuns dos desenvolvedores e fornece informações sobre como obter suporte técnico.
          Se sua dúvida não estiver respondida aqui, consulte a seção de suporte para mais detalhes.
        </p>
      </Card>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-lg font-semibold text-neotalk-dark mb-2">{faq.question}</h3>
            <div className="text-gray-600">{faq.answer}</div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-neotalk-dark mb-6">Como Obter Suporte</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <Globe2 className="w-8 h-8 text-neotalk-blue mb-4" />
            <h4 className="text-lg font-semibold mb-2">Documentação e Fórum</h4>
            <p className="text-gray-600">
              Consulte nossa documentação detalhada e interaja com outros desenvolvedores no fórum da comunidade.
            </p>
          </Card>

          <Card className="p-6">
            <Mail className="w-8 h-8 text-neotalk-blue mb-4" />
            <h4 className="text-lg font-semibold mb-2">E-mail de Suporte</h4>
            <p className="text-gray-600">
              Para dúvidas técnicas, envie um e-mail para suporte@neotalk.com com todos os detalhes necessários.
            </p>
          </Card>

          <Card className="p-6">
            <MessageSquare className="w-8 h-8 text-neotalk-blue mb-4" />
            <h4 className="text-lg font-semibold mb-2">Suporte Premium</h4>
            <p className="text-gray-600">
              Clientes empresariais têm acesso a suporte prioritário via Slack e chamadas técnicas.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
