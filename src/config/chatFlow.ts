export type ChatStep = {
    message: string;
    videoId: string;
    suggestions?: string[];
    inputType?: "text" | "buttons";
    nextStep?: string;
    nextOptions?: Record<string, string>;
  };
  
  export const chatFlow: Record<string, ChatStep> = {
    inicio: {
      message: "Seja bem-vindo!",
      videoId: "f7NmQFs-WcE",
      suggestions: ["Sou visitante"],
      nextStep: "solicitar_nome",
    },
    solicitar_nome: {
      message: "Qual o seu nome?",
      videoId: "f7NmQFs-WcE",
      inputType: "text",
      nextStep: "solicitar_apartamento",
    },
    solicitar_apartamento: {
      message: "Digite o número do apartamento.",
      videoId: "AXMCxeFI1sU",
      inputType: "text",
      nextStep: "aguarde_processamento",
    },
    aguarde_processamento: {
      message: "Aguarde, enquanto processamos sua solicitação.",
      videoId: "u-icsWNkKIA",
      suggestions: [],
      nextStep: "morador_responde",
    },
    morador_responde: {
      message: "O morador solicitou mais informações. Você pode me dizer o motivo da visita?",
      videoId: "qXN4TGRKBtg",
      inputType: "text",
      nextOptions: {
        "Entrada aprovada": "entrada_aprovada",
        "Entrada negada": "entrada_negada",
      },
    },
    entrada_aprovada: {
      message: "Sua entrada foi autorizada. Seja bem-vindo ao prédio.",
      videoId: "2cMmc7VAuuU",
    },
    entrada_negada: {
      message: "O morador não pode receber visitas no momento.",
      videoId: "7RTh6iIFCFc",
    },
  };
  