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
      "Em qual sala ocorrerá um curso específico?",
      "Onde ficam as salas?",
      "Dúvidas sobre estágio no TJCE?",
      "Gostaria de falar com um funcionário específico?",
      "Dúvidas sobre o programa jovem aprendiz?",
      "Onde fica o VendBox?",
      "Onde fica o banheiro?",
      "Onde pegar água ou café?",
      "Posso usar as mesas de coworking?",
      "Qual a senha do Wi‑Fi?"
    ],
    nextOptions: {
      "Em qual sala ocorrerá um curso específico?": "sala_curso",
      "Onde ficam as salas?": "onde_salas",
      "Dúvidas sobre estágio no TJCE?": "duvidas_estagio",
      "Gostaria de falar com um funcionário específico?": "funcionario_especifico",
      "Dúvidas sobre o programa jovem aprendiz?": "duvidas_jovem_aprendiz",
      "Onde fica o VendBox?": "onde_vendbox",
      "Onde fica o banheiro?": "onde_banheiro",
      "Onde pegar água ou café?": "onde_agua_cafe",
      "Posso usar as mesas de coworking?": "mesas_coworking",
      "Qual a senha do Wi‑Fi?": "senha_wifi",
    },
  },

  // 1) Sala do curso
  sala_curso: {
    message: "Em qual sala ocorrerá um curso específico?",
    videoId: formatVimeoUrl("https://vimeo.com/1072421320"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421320"),
    inputType: "text",
    nextStep: "fale_anderson",
  },
  fale_anderson: {
    message: "Fale com Anderson ou Thiago (educação executiva).",
    videoId: formatVimeoUrl("https://vimeo.com/1072421301"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421301"),
    nextStep: "obrigado",
  },

  // 2) Onde ficam as salas
  onde_salas: {
    message: "Onde ficam as salas?",
    videoId: formatVimeoUrl("https://vimeo.com/1072422017"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422017"),
    nextStep: "caminho_salas",
  },
  caminho_salas: {
    message: "Indicar caminho das salas: Salas de Aula, Hub de Inovação e LAB/PAGI.",
    videoId: formatVimeoUrl("https://vimeo.com/1072422010"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422010"),
    nextStep: "obrigado",
  },

  // 3) Estágio no TJCE
  duvidas_estagio: {
    message: "Dúvidas sobre estágio no TJCE?",
    videoId: formatVimeoUrl("https://vimeo.com/1072421998"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421998"),
    nextStep: "fale_maria_clara",
  },
  fale_maria_clara: {
    message: "Fale com a Maria Clara (Trilhas de Carreiras).",
    videoId: formatVimeoUrl("https://vimeo.com/1072421989"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421989"),
    nextStep: "obrigado",
  },

  // 4) Funcionário específico
  funcionario_especifico: {
    message: "Gostaria de falar com um funcionário específico?",
    videoId: formatVimeoUrl("https://vimeo.com/1072421983"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421983"),
    inputType: "buttons",
    suggestions: ["Sim", "Não"],
    nextOptions: { Sim: "tem_reuniao", Não: "obrigado" },
  },
  tem_reuniao: {
    message: "Tem reunião marcada com alguém?",
    videoId: formatVimeoUrl("https://vimeo.com/1072421958"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421958"),
    inputType: "buttons",
    suggestions: ["Sim", "Não"],
    nextOptions: { Sim: "local_reuniao", Não: "setor_colaborador" },
  },
  local_reuniao: {
    message: "Em qual local será a reunião?",
    videoId: formatVimeoUrl("https://vimeo.com/1072421951"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421951"),
    inputType: "text",
    nextStep: "obrigado",
  },
  setor_colaborador: {
    message: "Caso não saiba, indico o setor do colaborador.",
    videoId: formatVimeoUrl("https://vimeo.com/1072421940"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421940"),
    nextStep: "obrigado",
  },

  // 5) Jovem aprendiz
  duvidas_jovem_aprendiz: {
    message: "Dúvidas sobre o programa jovem aprendiz?",
    videoId: formatVimeoUrl("https://vimeo.com/1072422169"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422169"),
    nextStep: "fale_janaina",
  },
  fale_janaina: {
    message: "Fale com Janaína ou Ana Régia (Educação Executiva).",
    videoId: formatVimeoUrl("https://vimeo.com/1072422163"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422163"),
    nextStep: "obrigado",
  },

  // 6) VendBox
  onde_vendbox: {
    message: "Onde fica o VendBox?",
    videoId: formatVimeoUrl("https://vimeo.com/1072422145"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422145"),
    nextStep: "caminho_vendbox",
  },
  caminho_vendbox: {
    message: "Indicar caminho para a Área de Convivência; aceita cartão e Pix.",
    videoId: formatVimeoUrl("https://vimeo.com/1072422135"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422135"),
    nextStep: "obrigado",
  },

  // 7) Banheiro
  onde_banheiro: {
    message: "Onde fica o banheiro?",
    videoId: formatVimeoUrl("https://vimeo.com/1072422128"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422128"),
    nextStep: "caminho_banheiro",
  },
  caminho_banheiro: {
    message: "Indicar caminho para os banheiros. Se cadeirante, solicitar auxílio da recepcionista.",
    videoId: formatVimeoUrl("https://vimeo.com/1072422119"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422119"),
    nextStep: "obrigado",
  },

  // 8) Água ou café
  onde_agua_cafe: {
    message: "Onde pegar água ou café?",
    videoId: formatVimeoUrl("https://vimeo.com/1072422113"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422113"),
    nextStep: "caminho_agua",
  },
  caminho_agua: {
    message: "Indicar caminho para a Área de Convivência.",
    videoId: formatVimeoUrl("https://vimeo.com/1072422097"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422097"),
    nextStep: "obrigado",
  },

  // 9) Coworking
  mesas_coworking: {
    message: "Posso usar as mesas de coworking?",
    videoId: formatVimeoUrl("https://vimeo.com/1072422090"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072422090"),
    inputType: "buttons",
    suggestions: ["Sim", "Não"],
    nextOptions: { Sim: "caminho_agua", Não: "obrigado" },
  },

  // 10) Wi‑Fi
  senha_wifi: {
    message: "A rede de visitantes é “Visitantes”. Senha: 114111FC",
    videoId: "",
    previewVideoId: "",
    nextStep: "obrigado",
  },

  // Mensagem final
  obrigado: {
    message: "Obrigado, volte sempre!",
    videoId: formatVimeoUrl("https://vimeo.com/1072421292"),
    previewVideoId: formatVimeoUrl("https://vimeo.com/1072421292"),
  },
};
