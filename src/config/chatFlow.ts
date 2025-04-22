export type ChatStep = {
  message: string;
  videoId: string;
  previewVideoId?: string;
  suggestions?: string[];
  inputType?: "text" | "buttons";
  nextStep?: string;
  nextOptions?: Record<string, string>;
};

// 🔥 Função para extrair o ID do Vimeo e formatar corretamente a URL para o player
const formatVimeoUrl = (url: string) => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match
    ? `https://player.vimeo.com/video/${match[1]}`
    : "";
};

export const chatFlow: Record<string, ChatStep> = {
  // Menu inicial
  inicio: {
    message: "Como posso ajudar você hoje? Escolha uma das opções abaixo:",
    videoId: "",
    previewVideoId: "",
    inputType: "buttons",
    suggestions: [
      "Qual a senha do Wi‑Fi?",
      "Onde ficam as salas?",
      "Dúvidas sobre estágio no TJCE?",
      "Gostaria de falar com um funcionário específico?",
      "Dúvidas sobre o programa jovem aprendiz?",
      "Onde fica o VendBox?",
      "Onde fica o banheiro?",
      "Onde pegar água ou café?",
      "Posso usar as mesas de coworking?",
      "Em qual sala ocorrerá um curso específico?"
    ],
    nextOptions: {
      "Em qual sala ocorrerá um curso específico?": "fale_anderson",
      "Onde ficam as salas?": "caminho_salas",
      "Dúvidas sobre estágio no TJCE?": "fale_maria_clara",
      "Gostaria de falar com um funcionário específico?": "funcionario_especifico",
      "Dúvidas sobre o programa jovem aprendiz?": "fale_janaina",
      "Onde fica o VendBox?": "caminho_vendbox",
      "Onde fica o banheiro?": "caminho_banheiro",
      "Onde pegar água ou café?": "caminho_agua",
      "Posso usar as mesas de coworking?": "mesas_coworking",
      "Qual a senha do Wi‑Fi?": "senha_wifi",
    },
  },

  // 1) Sala do curso
  fale_anderson: {
    message: "Fale com Anderson ou Thiago (educação executiva).",
    videoId: formatVimeoUrl("https://vimeo.com/1072421301"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421301"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 2) Onde ficam as salas
  caminho_salas: {
    message: "Indicar caminho das salas: Salas de Aula, Hub de Inovação e LAB/PAGI.",
    videoId: formatVimeoUrl("https://vimeo.com/1072422010"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422010"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 3) Estágio no TJCE
  fale_maria_clara: {
    message: "Fale com a Maria Clara (Trilhas de Carreiras).",
    videoId: formatVimeoUrl("https://vimeo.com/1072421989"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421989"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 4) Funcionário específico
  funcionario_especifico: {
    message: "Gostaria de falar com um funcionário específico?",
    videoId: formatVimeoUrl("https://vimeo.com/1072421983"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421983"),
    inputType: "buttons",
    suggestions: ["Sim", "Não"],
    nextOptions: { 
      "Sim": "tem_reuniao", 
      "Não": "inicio" 
    },
  },
  
  tem_reuniao: {
    message: "Tem reunião marcada com alguém?",
    videoId: formatVimeoUrl("https://vimeo.com/1072421958"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421958"),
    inputType: "buttons",
    suggestions: ["Sim", "Não"],
    nextOptions: { 
      "Sim": "local_reuniao", 
      "Não": "setor_colaborador" 
    },
  },
  
  local_reuniao: {
    message: "Em qual local será a reunião?",
    videoId: formatVimeoUrl("https://vimeo.com/1072421951"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421951"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },
  
  setor_colaborador: {
    message: "Caso não saiba, indico o setor do colaborador.",
    videoId: formatVimeoUrl("https://vimeo.com/1072421940"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421940"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 5) Jovem aprendiz
  fale_janaina: {
    message: "Fale com Janaína ou Ana Régia (Educação Executiva).",
    videoId: formatVimeoUrl("https://vimeo.com/1072422163"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422163"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 6) VendBox
  caminho_vendbox: {
    message: "Indicar caminho para a Área de Convivência; aceita cartão e Pix.",
    videoId: formatVimeoUrl("https://vimeo.com/1072422135"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422135"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 7) Banheiro
  caminho_banheiro: {
    message: "Indicar caminho para os banheiros. Se cadeirante, solicitar auxílio da recepcionista.",
    videoId: formatVimeoUrl("https://vimeo.com/1072422119"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422119"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 8) Água ou café
  caminho_agua: {
    message: "Indicar caminho para a Área de Convivência.",
    videoId: formatVimeoUrl("https://vimeo.com/1072422097"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422097"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 9) Coworking
  mesas_coworking: {
    message: "Posso usar as mesas de coworking?",
    videoId: formatVimeoUrl("https://vimeo.com/1072422090"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422090"),
    inputType: "buttons",
    suggestions: ["Sim", "Não"],
    nextOptions: { 
      "Sim": "coworking_sim", 
      "Não": "inicio" 
    },
  },
  
  coworking_sim: {
    message: "Indicar caminho para a Área de Convivência.",
    videoId: formatVimeoUrl("https://vimeo.com/1072422097"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422097"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 10) Senha Wi-Fi
  senha_wifi: {
    message: "A senha do Wi-Fi é: TJCEConecta",
    videoId: "",
    previewVideoId: "",
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  }
};
