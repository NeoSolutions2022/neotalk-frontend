export type ChatStep = {
  message: string;
  videoId: string;
  previewVideoId?: string;
  suggestions?: string[];
  inputType?: "text" | "buttons";
  nextOptions?: Record<string, string>;
};

export const chatFlow: Record<string, ChatStep> = {
  // =================================================
  // INÍCIO
  // =================================================
  inicio: {
    message: "Chatbot IEL/CE",
    videoId: "https://player.vimeo.com/video/1072422281", 
    previewVideoId: "https://player.vimeo.com/video/1072422281",
    suggestions: [
      "Em qual sala ocorreu um curso específico?",
      "Onde ficam as salas?",
      "Dúvidas sobre estágio no TJCE?",
      "Gostaria de falar com um funcionário específico?",
      "Tem reunião marcada com alguém?",
      "Dúvidas sobre o Programa Jovem Aprendiz?",
      "Onde fica o VunduRox?",
      "Onde fica o banheiro?",
      "Onde posso pegar água ou café?",
      "Posso usar as mesas de coworking?",
      "Qual a senha do Wi‑Fi?"
    ],
    nextOptions: {
      "Em qual sala ocorreu um curso específico?": "em_qual_sala_ocorreu_um_curso_especifico",
      "Onde ficam as salas?": "onde_ficam_as_salas",
      "Dúvidas sobre estágio no TJCE?": "duvidas_sobre_estagio_no_tjce",
      "Gostaria de falar com um funcionário específico?": "gostaria_de_falar_com_um_funcionario_especifico",
      "Tem reunião marcada com alguém?": "tem_reuniao_marcada_com_alguem",
      "Dúvidas sobre o Programa Jovem Aprendiz?": "duvidas_sobre_o_programa_jovem_aprendiz",
      "Onde fica o VunduRox?": "onde_fica_o_vundurox",
      "Onde fica o banheiro?": "onde_fica_o_banheiro",
      "Onde posso pegar água ou café?": "onde_posso_pegar_agua_ou_cafe",
      "Posso usar as mesas de coworking?": "posso_usar_as_mesas_de_coworking",
      "Qual a senha do Wi‑Fi?": "qual_a_senha_do_wifi"
    }
  },

  // =================================================
  // 1. Sala de curso específico
  // =================================================
  em_qual_sala_ocorreu_um_curso_especifico: {
    message: "Em qual sala ocorreu um curso específico?",
    videoId: "https://player.vimeo.com/video/1072421320", // Alterado para player.vimeo.com
    previewVideoId: "https://player.vimeo.com/video/1072421320",
    suggestions: ["Fale com Anderson ou Thiago (Educação Executiva)"],
    nextOptions: {
      "Fale com Anderson ou Thiago (Educação Executiva)": "fale_com_anderson_ou_thiago"
    }
  },
  fale_com_anderson_ou_thiago: {
    message: "Fale com Anderson ou Thiago (Educação Executiva)",
    videoId: "https://player.vimeo.com/video/1072421301", // Alterado para player.vimeo.com
    previewVideoId: ""
  },

  // =================================================
  // 2. Localização das salas
  // =================================================
  onde_ficam_as_salas: {
    message: "Onde ficam as salas?",
    videoId: "https://player.vimeo.com/video/1072422017", // Alterado para player.vimeo.com
    previewVideoId: "",
    suggestions: ["Indicar caminho para Salas de Aula, Hub de Inovação e LAB/PIAG"],
    nextOptions: {
      "Indicar caminho para Salas de Aula, Hub de Inovação e LAB/PIAG": "indicar_caminho_salas"
    }
  },
  indicar_caminho_salas: {
    message: "Indicar caminho para Salas de Aula, Hub de Inovação e LAB/PIAG",
    videoId: "https://player.vimeo.com/video/1072422010", // Alterado para player.vimeo.com
    previewVideoId: ""
  },

  // =================================================
  // 3. Estágio no TJCE
  // =================================================
  duvidas_sobre_estagio_no_tjce: {
    message: "Dúvidas sobre estágio no TJCE?",
    videoId: "https://player.vimeo.com/video/1072421998", // Alterado para player.vimeo.com
    previewVideoId: "",
    suggestions: ["Fale com Maria Clara (Trilhas de Carreiras)"],
    nextOptions: {
      "Fale com Maria Clara (Trilhas de Carreiras)": "fale_com_maria_clara"
    }
  },
  fale_com_maria_clara: {
    message: "Fale com Maria Clara (Trilhas de Carreiras)",
    videoId: "https://player.vimeo.com/video/1072421989", // Alterado para player.vimeo.com
    previewVideoId: ""
  },

  // =================================================
  // 4. Funcionário específico
  // =================================================
  gostaria_de_falar_com_um_funcionario_especifico: {
    message: "Gostaria de falar com um funcionário específico?",
    videoId: "https://player.vimeo.com/video/1072421983", // Alterado para player.vimeo.com
    previewVideoId: "",
    suggestions: [
      "Perguntar setor do funcionário e indicar caminho (caso não saiba, solicitar auxílio da recepção)"
    ],
    nextOptions: {
      "Perguntar setor do funcionário e indicar caminho (caso não saiba, solicitar auxílio da recepção)": "perguntar_setor_funcionario"
    }
  },
  perguntar_setor_funcionario: {
    message: "Perguntar setor do funcionário e indicar caminho (caso não saiba, solicitar auxílio da recepção)",
    videoId: "",
    previewVideoId: ""
  },

  // =================================================
  // 5. Reunião marcada
  // =================================================
  tem_reuniao_marcada_com_alguem: {
    message: "Tem reunião marcada com alguém?",
    videoId: "https://player.vimeo.com/video/1072421958", // Alterado para player.vimeo.com
    previewVideoId: "",
    suggestions: [
      "Perguntar local da reunião (caso não saiba, indicar setor do colaborador)"
    ],
    nextOptions: {
      "Perguntar local da reunião (caso não saiba, indicar setor do colaborador)": "perguntar_local_reuniao"
    }
  },
  perguntar_local_reuniao: {
    message: "Perguntar local da reunião (caso não saiba, indicar setor do colaborador)",
    videoId: "https://player.vimeo.com/video/1072421967", // Alterado para player.vimeo.com
    previewVideoId: ""
  },

  // =================================================
  // 6. Programa Jovem Aprendiz
  // =================================================
  duvidas_sobre_o_programa_jovem_aprendiz: {
    message: "Dúvidas sobre o Programa Jovem Aprendiz?",
    videoId: "https://player.vimeo.com/video/1072422169", // Alterado para player.vimeo.com
    previewVideoId: "",
    suggestions: ["Fale com Janaína ou Ana Régis (Educação Executiva)"],
    nextOptions: {
      "Fale com Janaína ou Ana Régis (Educação Executiva)": "fale_com_janaina_ana_regis"
    }
  },
  fale_com_janaina_ana_regis: {
    message: "Fale com Janaína ou Ana Régis (Educação Executiva)",
    videoId: "https://player.vimeo.com/video/1072422163", // Alterado para player.vimeo.com
    previewVideoId: ""
  },

  // =================================================
  // 7. VunduRox
  // =================================================
  onde_fica_o_vundurox: {
    message: "Onde fica o VunduRox?",
    videoId: "https://player.vimeo.com/video/1072422145", // Alterado para player.vimeo.com
    previewVideoId: "",
    suggestions: [
      "Indicar caminho para Área de Convivência e informar que aceita cartão e Pix"
    ],
    nextOptions: {
      "Indicar caminho para Área de Convivência e informar que aceita cartão e Pix": "indicar_area_convivencia_pix"
    }
  },
  indicar_area_convivencia_pix: {
    message: "Indicar caminho para Área de Convivência e informar que aceita cartão e Pix",
    videoId: "https://player.vimeo.com/video/1072422135", // Alterado para player.vimeo.com
    previewVideoId: ""
  },

  // =================================================
  // 8. Banheiro
  // =================================================
  onde_fica_o_banheiro: {
    message: "Onde fica o banheiro?",
    videoId: "https://player.vimeo.com/video/1072422128", // Alterado para player.vimeo.com
    previewVideoId: "",
    suggestions: [
      "Indicar caminho para os banheiros (caso seja deficiente, solicitar auxílio da recepção)"
    ],
    nextOptions: {
      "Indicar caminho para os banheiros (caso seja deficiente, solicitar auxílio da recepção)": "indicar_banheiros"
    }
  },
  indicar_banheiros: {
    message: "Indicar caminho para os banheiros (caso seja deficiente, solicitar auxílio da recepção)",
    videoId: "https://player.vimeo.com/video/1072422119", // Alterado para player.vimeo.com
    previewVideoId: ""
  },

  // =================================================
  // 9. Água ou café
  // =================================================
  onde_posso_pegar_agua_ou_cafe: {
    message: "Onde posso pegar água ou café?",
    videoId: "https://player.vimeo.com/video/1072422113", // Alterado para player.vimeo.com
    previewVideoId: "",
    suggestions: ["Indicar caminho para Área de Convivência"],
    nextOptions: {
      "Indicar caminho para Área de Convivência": "indicar_area_convivencia"
    }
  },

  // =================================================
  // 10. Mesas de coworking
  // =================================================
  posso_usar_as_mesas_de_coworking: {
    message: "Posso usar as mesas de coworking?",
    videoId: "https://player.vimeo.com/video/1072422090", // Alterado para player.vimeo.com
    previewVideoId: "https://player.vimeo.com/video/1072422090",
    suggestions: ["Indicar caminho para Área de Convivência"],
    nextOptions: {
      "Indicar caminho para Área de Convivência": "indicar_area_convivencia"
    }
  },
  indicar_area_convivencia: {
    message: "Indicar caminho para Área de Convivência",
    videoId: "https://player.vimeo.com/video/1072422097", // Alterado para player.vimeo.com
    previewVideoId: ""
  },

  // =================================================
  // 11. Wi‑Fi (duas etapas)
  // =================================================
  qual_a_senha_do_wifi: {
    message: "Qual a senha do Wi‑Fi?",
    videoId: "",
    previewVideoId: "",
    suggestions: ["Confirmar que o visitante pode usar as mesmas disponíveis"],
    nextOptions: {
      "Confirmar que o visitante pode usar as mesmas disponíveis": "confirmar_que_visitante_pode_usar"
    }
  },
  confirmar_que_visitante_pode_usar: {
    message: "Confirmar que o visitante pode usar as mesmas disponíveis",
    videoId: "",
    previewVideoId: "",
    suggestions: ["Informar que a rede é 'Visitantes'. Senha: 14a11F6k*"],
    nextOptions: {
      "Informar que a rede é 'Visitantes'. Senha: 14a11F6k*": "informar_rede_visitantes"
    }
  },
  informar_rede_visitantes: {
    message: "A rede é 'Visitantes'. Senha: 14a11F6k*",
    videoId: "",
    previewVideoId: ""
  }
};
