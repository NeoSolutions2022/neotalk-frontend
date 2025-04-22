export type ChatStep = {
  message: string;
  videoId: string;
  previewVideoId?: string;
  suggestions?: string[];
  inputType?: "text" | "buttons";
  nextOptions?: Record<string, string>;
};

const formatVimeoUrl = (url: string) => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? `https://player.vimeo.com/video/${match[1]}` : "";
};

export const chatFlow: Record<string, ChatStep> = {
  // Menu inicial
  inicio: {
    message: "Seja bem vindo",
    videoId: formatVimeoUrl("https://vimeo.com/1072422373"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422373"),
    inputType: "buttons",
    suggestions: [
      "Quais serviços oferecidos?",
      "Lista de serviços",
      "Obrigado",
      "Quantas senhas ao dia são oferecidas?",
      "Depende, o número varia bastante",
      "Qual a documentação necessária para fazer o Cadastro Único?"
    ],
    nextOptions: {
      "Quais serviços oferecidos?": "servicos",
      "Lista de serviços": "lista_servicos",
      "Obrigado": "agradecimento",
      "Quantas senhas ao dia são oferecidas?": "quant_senhas",
      "Depende, o número varia bastante": "resp_senhas",
      "Qual a documentação necessária para fazer o Cadastro Único?": "perg_doc_cadastro"
    },
  },

  // 1) Serviços oferecidos
  servicos: {
    message: "Quais serviços oferecidos?",
    videoId: formatVimeoUrl("https://vimeo.com/1072422361"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422361"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 2) Lista de serviços
  lista_servicos: {
    message: "Lista de serviços",
    videoId: formatVimeoUrl("https://vimeo.com/1072422350"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422350"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 3) Agradecimento
  agradecimento: {
    message: "Obrigado",
    videoId: formatVimeoUrl("https://vimeo.com/1072422342"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422342"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 4) Senhas diárias
  quant_senhas: {
    message: "Quantas senhas ao dia são oferecidas?",
    videoId: formatVimeoUrl("https://vimeo.com/1072422330"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422330"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 5) Variação de senhas
  resp_senhas: {
    message: "Depende, o número varia bastante",
    videoId: formatVimeoUrl("https://vimeo.com/1072422322"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422322"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },

  // 6) Pergunta sobre documentação
  perg_doc_cadastro: {
    message: "Qual a documentação necessária para fazer o Cadastro Único?",
    // vídeo de pergunta
    videoId: formatVimeoUrl("https://vimeo.com/1072422307"),
    // vídeo de preview adicional
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422301"),
    inputType: "buttons",
    suggestions: ["Documentos necessários", "Voltar ao menu principal"],
    nextOptions: {
      "Documentos necessários": "lista_documentos",
      "Voltar ao menu principal": "inicio"
    },
  },

  // 7) Lista de documentos
  lista_documentos: {
    message:
      "Documentos necessários:\n" +
      "- Identidade (RG)\n" +
      "- CPF\n" +
      "- Título de eleitor\n" +
      "- Certidão de nascimento ou casamento\n" +
      "- Comprovante de endereço\n" +
      "- Matrícula escolar\n" +
      "- Contra‑cheque salarial",
    videoId: formatVimeoUrl("https://vimeo.com/1072422281"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422281"),
    inputType: "buttons",
    suggestions: ["Voltar ao menu principal"],
    nextOptions: {
      "Voltar ao menu principal": "inicio"
    },
  },
};
