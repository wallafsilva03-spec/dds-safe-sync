export interface DSSBlock {
  title: string;
  color: "primary" | "secondary" | "accent";
  content: string;
}

export interface DSSItem {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  iconBg: "primary" | "secondary" | "accent";
  blocks: DSSBlock[];
  finalMessage: string;
}

export const dssItems: DSSItem[] = [
  {
    id: 0,
    icon: "🛣️",
    title: "Direção Defensiva — Condições da Estrada, Trânsito e Veículo",
    subtitle: "Habilidades, cuidados na via e manutenção do veículo para prevenção de acidentes",
    iconBg: "primary",
    blocks: [
      {
        title: "Condições da Estrada",
        color: "primary",
        content: `<p>Devemos nos adequar às condições da estrada, levando sempre em consideração as curvas, falta de acostamento, tipo de pavimento, buracos, óleo na pista, lombadas, falta de sinalização, ondulações, desníveis, animais, poças d'água.</p><p><strong>Mantenha-se sempre atento</strong> e avise os companheiros das condições das estradas, alertando-os dos riscos.</p>`,
      },
      {
        title: "Condições do Trânsito",
        color: "secondary",
        content: `<p>As condições do trânsito interferem no modo de dirigir, sobretudo porque existe a presença de outros condutores que sofrem as mais diversas interferências: congestionamento ou trânsito livre, velocidade alta ou baixa, presença de bicicletas ou carroças, grande movimentação de pessoas, festas populares, etc.</p><p><strong>Tenha sempre calma no trânsito e dirija com segurança.</strong></p>`,
      },
      {
        title: "Condições do Veículo",
        color: "primary",
        content: `<p>O motorista defensivo sempre mantém seu veículo em bom estado de conservação. Os defeitos mais comuns que podem causar acidentes são:</p><ul><li>Freios desregulados</li><li>Lâmpadas queimadas</li><li>Limpador do para-brisa com defeito</li><li>Falta de buzina e alarme sonoro de ré</li><li>Espelho retrovisor deficiente</li><li>Cinto de segurança defeituoso</li><li>Pneus gastos ou defeituosos</li><li>Faróis desregulados</li></ul><p><strong>Faça regularmente um check-list e/ou uma revisão de seu veículo.</strong></p>`,
      },
      {
        title: "Atitudes para Prevenção",
        color: "accent",
        content: `<ul><li><strong>Habilidade:</strong> Manuseie bem todos os controles do veículo e execute com perícia as manobras básicas.</li><li><strong>Planeje:</strong> Planeje com antecedência o trajeto que você quer fazer.</li><li><strong>Sinalize:</strong> Sempre dando seta, informe ao motorista o que você vai fazer.</li><li><strong>Pare gradativamente:</strong> Para não forçar o veículo que vem atrás.</li><li><strong>Cortesia:</strong> Não permita que veículos os sigam colados, facilite a ultrapassagem.</li><li><strong>Cruzamentos rurais:</strong> Reduza velocidade, PARE para evitar colisão.</li></ul>`,
      },
    ],
    finalMessage: "SE VOCÊ USAR ESTES ELEMENTOS A CADA MOMENTO QUE ESTIVER DIRIGINDO, É SINAL QUE VOCÊ ESTÁ SE COMPORTANDO COMO UM MOTORISTA DEFENSIVO.",
  },
  {
    id: 1,
    icon: "🌧️",
    title: "Direção Defensiva — Iluminação e Condições Atmosféricas",
    subtitle: "Procedimentos seguros em chuva, neblina, iluminação precária e condições adversas",
    iconBg: "secondary",
    blocks: [
      {
        title: "Luz, Iluminação e Sinalização",
        color: "secondary",
        content: `<p>A Luz está ligada às condições de iluminação, pois a intensidade da luz afeta a nossa capacidade de ver (ofuscamento) ou sermos vistos.</p><p>Quando um veículo vier em sentido contrário com os faróis altos, devemos alertá-lo, piscando os nossos faróis. Caso persista, volte sua vista para a margem direita da pista.</p>`,
      },
      {
        title: "Dicas Seguras",
        color: "primary",
        content: `<ul><li>Ao cruzar pista durante a noite, utilize a <strong>"luz baixa"</strong> evitando ofuscar a visão dos outros condutores.</li><li>Caso haja poeira excessiva durante seu trajeto, acenda os faróis do veículo.</li><li>Mantenha a sinalização de seu veículo em perfeito estado: vistorie se as luzes estão funcionando, mantenha limpas as faixas refletivas.</li></ul>`,
      },
      {
        title: "Chuva",
        color: "accent",
        content: `<p>Torna a pista escorregadia e dificulta a visibilidade. Devemos:</p><ul><li>Regular a velocidade de acordo com a situação</li><li>Não deixar embaçar os vidros</li><li>Aumentar a distância para o veículo da frente</li><li>Acender os faróis</li><li>Sem condições de prosseguir, parar fora da pista (EM LOCAL SEGURO)</li><li>Evitar passar com velocidade em poças de água para prevenir <strong>aquaplanagem</strong></li></ul>`,
      },
      {
        title: "Neblina / Poeiras",
        color: "secondary",
        content: `<ul><li>Reduza a velocidade (não muito, para evitar uma colisão traseira)</li><li>Use <strong>luz baixa</strong> (nunca luz alta)</li><li>Evite parar nos acostamentos</li><li>Pare só em locais seguros, desligando todas as luzes</li><li>Não faça ultrapassagens em vias de duplo sentido</li></ul>`,
      },
    ],
    finalMessage: "SE VOCÊ USAR ESTES ELEMENTOS A CADA MOMENTO QUE ESTIVER DIRIGINDO, É SINAL QUE VOCÊ ESTÁ SE COMPORTANDO COMO UM MOTORISTA DEFENSIVO.",
  },
  {
    id: 2,
    icon: "🚛",
    title: "Direção Segura no Transporte Canavieiro",
    subtitle: "Normas específicas para motoristas de conjunto cavalo mecânico e reboque de cana-de-açúcar",
    iconBg: "accent",
    blocks: [
      {
        title: "Condições do Veículo",
        color: "primary",
        content: `<ul><li>O conjunto cavalo mecânico e reboque devem estar em <strong>perfeito estado mecânico</strong> (freios, sistema elétrico, engate, pneus)</li><li>Atenção redobrada à sinalização: luzes, faixas refletivas, placas devem estar limpas e visíveis</li><li>Ao assumir seu turno, <strong>vistorie seu caminhão</strong> e elimine riscos antes de iniciar</li><li>Cargas devem estar cobertas para evitar espalhar pela via</li><li>Manter luzes acesas</li></ul>`,
      },
      {
        title: "Condições do Condutor",
        color: "secondary",
        content: `<ul><li>Habilitação compatível com o veículo (CTB)</li><li><strong>Proibido</strong> ingerir bebidas alcoólicas e dirigir, bem como uso de entorpecentes</li><li>Estar descansado ao iniciar o turno</li><li>Seguir rigorosamente as leis de trânsito</li><li>Usar cinto de segurança</li><li>Não usar celular ao dirigir</li><li><strong>Proibido</strong> permanecer dentro do veículo durante abastecimento</li><li>Usar EPIs corretamente</li></ul>`,
      },
      {
        title: "Condições do Percurso",
        color: "accent",
        content: `<ul><li>Utilizar somente acessos regularizados e autorizados</li><li>Atenção redobrada em condições climáticas adversas: chuva, neblina, poeira, queimadas</li><li>Muita atenção em curvas, estradas sem acostamento, cruzamentos, trevos, rotatórias e perímetros urbanos</li><li>Informar equipe sobre eventuais riscos durante percurso</li></ul>`,
      },
    ],
    finalMessage: "FALE COM SEUS COMPANHEIROS DE TRABALHO SOBRE COMO ELIMINAR RISCOS DE ACIDENTES DURANTE O TRANSPORTE CANAVIEIRO. USE SUA EXPERIÊNCIA. COMPARTILHE IDEIAS. TRABALHE COM SEGURANÇA.",
  },
  {
    id: 3,
    icon: "🚦",
    title: "Regras de Segurança no Trânsito",
    subtitle: "Limites de velocidade, cuidados na operação, abastecimento e pontos cegos",
    iconBg: "secondary",
    blocks: [
      {
        title: "Antes da Condução",
        color: "primary",
        content: `<ul><li>Verifique os itens de segurança de seu veículo/equipamento</li><li>Use o <strong>Cinto de Segurança</strong></li><li>Acenda os faróis</li><li>Antes de movimentar, verifique a presença de pedestres</li><li><strong>Não use telefone celular ao dirigir</strong></li></ul>`,
      },
      {
        title: "Limites de Velocidade",
        color: "secondary",
        content: `<ul><li><strong>20 km/h</strong> — Em curvas e rotatórias</li><li><strong>40 km/h</strong> — Em estradas de terra (rurais)</li><li><strong>80 km/h</strong> — Em rodovias (vicinais, estaduais e federais)</li><li>⚠️ Alerta máximo ao realizar manobras em cruzamentos e acessos</li></ul><p><em>OBS.: Salvo onde houver a sinalização local.</em></p>`,
      },
      {
        title: "Cuidados na Operação",
        color: "accent",
        content: `<ul><li><strong>Habilitação e documentos:</strong> Conduza somente o equipamento que você esteja habilitado e autorizado. Porte sempre habilitação e documentação.</li><li><strong>Pontos cegos:</strong> Posicione-se onde possa ser visto. Redobre atenção durante manobras.</li><li><strong>Abastecimento:</strong> No Grupo Moreno é <strong>PROIBIDO</strong> que o condutor auxilie no abastecimento. Mantenha-se fora da área de abastecimento.</li><li><strong>Redes de energia elétrica:</strong> Informe-se da localização das redes e siga as recomendações da APR.</li><li><strong>Tombamento lateral:</strong> Informe-se das características topográficas. Redobre atenção com declives e aclives.</li></ul>`,
      },
    ],
    finalMessage: "A SEGURANÇA NO TRÂNSITO DEPENDE DE TODOS NÓS. PRATIQUE A DIREÇÃO DEFENSIVA E PROTEJA SUA VIDA E A VIDA DOS OUTROS.",
  },
];
