export type ChatStep = {
  message: string;
  videoId: string;
  previewVideoId?: string; // 🔥 Novo campo para preview
  suggestions?: string[];
  inputType?: "text" | "buttons";
  nextStep?: string;
  nextOptions?: Record<string, string>;
};

// 🔥 Função para extrair o ID do Vimeo e formatar corretamente a URL para o player
const formatVimeoUrl = (url: string) => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? `https://player.vimeo.com/video/${match[1]}?autoplay=1&loop=1&background=1&muted=1` : "";
};

export const chatFlow: Record<string, ChatStep> = {
  inicio: {
    message: "Seja bem-vindo!",
    videoId: formatVimeoUrl("https://vimeo.com/1063283011"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1063283011"), // ✅ Preview do vídeo
    suggestions: ["Sou visitante"],
    nextStep: "solicitar_nome",
  },
  solicitar_nome: {
    message: "Qual o seu nome?",
    videoId: formatVimeoUrl("https://vimeo.com/1062479303/127953a940"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1062479303/127953a940"),
    inputType: "text",
    nextStep: "solicitar_apartamento",
  },
  solicitar_apartamento: {
    message: "Digite o número do apartamento.",
    videoId: formatVimeoUrl("https://vimeo.com/1062479440/cd2244ff16"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1062479440/cd2244ff16"),
    inputType: "text",
    nextStep: "aguarde_processamento",
  },
  aguarde_processamento: {
    message: "Aguarde, enquanto processamos sua solicitação.",
    videoId: formatVimeoUrl("https://vimeo.com/1062480097/d6f45f71d8"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1062480097/d6f45f71d8"),
    suggestions: [],
    nextStep: "morador_responde",
  },
//  morador_responde: {
//    message: "O morador solicitou mais informações. Você pode me dizer o motivo da visita?",
//    videoId: formatVimeoUrl("https://vimeo.com/1063257013/8903dc82a8"),
//    previewVideoId: formatVimeoUrl("https://vimeo.com/1063257013/8903dc82a8"),
//    inputType: "text",

//  },
  entrada_aprovada: {
    message: "Sua entrada foi autorizada. Dirija-se ao portão.",
    videoId: formatVimeoUrl("https://vimeo.com/1062479526/1ec1d167f0"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1062479526/1ec1d167f0"),
  },
  entrada_negada: {
    message: "O morador está ocupado, tente novamente mais tarde.",
    videoId: formatVimeoUrl("https://vimeo.com/1062479744/b5aab75a42"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1062479744/b5aab75a42"),
  },
};
