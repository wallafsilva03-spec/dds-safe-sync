export interface DDSTheme {
  id: string; // "DDS-01" to "DDS-16"
  title: string;
  content: string; // HTML
}

export const ddsThemes: DDSTheme[] = [
  {
    id: "DDS-01",
    title: "CIPA & CIPATR",
    content: `
<p>No grupo Moreno duas comissões atuam firmemente na prevenção de acidentes e doenças relacionadas ao trabalho: a <strong>CIPA</strong> e a <strong>CIPATR</strong>.</p>

<h3>CIPA – Comissão Interna de Prevenção de Acidentes</h3>
<p>Regulamentada pela NR-05, formada por trabalhadores da área industrial (Representantes dos Empregados e do Empregador) com mandato de 01 (um) ano.</p>
<p>Ambas tem como objetivo a prevenção de acidentes e doenças decorrentes do trabalho, de modo a tornar compatível permanentemente o trabalho com a preservação da vida e a promoção da saúde do trabalhador.</p>
<p>Dentre as ações da CIPA e CIPATR destacamos a adequação e eliminação de desvios, fiscalização, investigação de acidentes e realização de orientações de segurança, sempre com o objetivo de <strong>PROMOVER UM AMBIENTE SEGURO</strong> a todos colaboradores da Empresa.</p>
<p>CIPA e CIPATR no grupo Moreno sempre se destacaram por terem representantes dos mais diversos setores, assim ficando bem distribuída com membros presentes em todos os departamentos da empresa praticando e incentivando a prevenção.</p>

<h3>CIPATR – Comissão Interna de Prevenção de Acidentes do Trabalho Rural</h3>
<p>Regulamentada pela NR-31, item 31.7, formada por trabalhadores da área agrícola e manutenção automotiva (Representantes dos Empregados e do Empregador) com mandato de 02 (dois) anos.</p>

<h3>Seriedade na Escolha de Seu Representante</h3>
<p>Para as eleições da CIPA e CIPATR é importante que todos os setores lancem seus candidatos e que os candidatos à "cipeiro" <strong>SEJAM EXEMPLOS NO AMBIENTE DE TRABALHO</strong> perante seus companheiros.</p>
<p>Identifique o cipeiro de sua área de trabalho e converse com ele sobre segurança, dê sugestões para ele levar para a comissão e ouça o que ele tem a lhe dizer, afinal a prevenção é responsabilidade de todos!</p>
    `,
  },
  {
    id: "DDS-02",
    title: "Uso de Coletes Refletivos",
    content: `
<p>Todos os funcionários e prestadores que acessem e circulem em locais com movimentação de máquinas e veículos, devem utilizar colete com faixas refletivas, independente das condições de luz (dia ou noite), do cargo, objetivo e tempo de permanência na área.</p>
<p>Durante o inverno os agasalhos devem estar por baixo do colete refletivo, pois acima ocultam a visão das faixas e prejudicam a funcionalidade.</p>

<h3>Riscos da Atividade</h3>
<ul>
<li>Atropelamento</li>
<li>Esmagamento</li>
<li>Prensagens</li>
<li>Dano ao patrimônio</li>
</ul>

<h3>Pontos de Atenção</h3>
<ul>
<li>Utilizar colete com faixa refletiva durante toda a jornada de trabalho</li>
<li>Respeitar a distância segura de acordo com o manual de interação homem x máquina</li>
<li>Atenção ao caminhar pela área de trabalho</li>
<li>Posicionar-se de forma que o condutor do veículo/máquina o aviste</li>
</ul>
    `,
  },
  {
    id: "DDS-03",
    title: "Causas de Acidente de Trabalho",
    content: `
<p>Quanto às causas, os acidentes de trabalho são classificados como ato inseguro ou condição insegura de acordo com a NBR 14280 da ABNT.</p>

<h3>Ato Inseguro</h3>
<p>É todo ato consciente ou não, capaz de provocar algum dano ao trabalhador, aos seus companheiros ou a máquinas, materiais ou equipamentos, estando diretamente relacionado à falha humana. São esses os atos responsáveis pela maioria dos acidentes de trabalho atualmente.</p>

<h3>Condições Inseguras</h3>
<p>São aquelas que, presentes no ambiente de trabalho, colocam em risco a integridade física e/ou mental do trabalhador.</p>
<p><strong>Exemplos:</strong></p>
<ul>
<li>Máquina sem proteção</li>
<li>Falta de treinamento</li>
<li>Fios e cabos desencapados</li>
<li>Não possuir vestuário adequado ao trabalho</li>
<li>Gambiarras em máquinas, equipamentos, ferramentas</li>
<li>Falta de limpeza ou organização</li>
<li>Falta de EPI</li>
<li>Iluminação deficiente ou imprópria</li>
</ul>

<h3>Situações relacionadas ao Ato Inseguro</h3>
<ul>
<li>Trabalhos em altura sem cinto de segurança</li>
<li>Brincadeiras, brigas ou correria no local de trabalho</li>
<li>Trabalhador com sono operando equipamento</li>
<li>Uso de equipamentos de forma inadequada</li>
<li>Recusa em usar EPI</li>
<li>Uso de bebidas alcoólicas ou entorpecentes no trabalho</li>
</ul>
    `,
  },
  {
    id: "DDS-04",
    title: "Animais Peçonhentos (Cobras)",
    content: `
<p>Vivemos em um país com uma grande diversidade de cobras. Muitos desses animais possuem mecanismos para se defenderem, como peçonha, que podem causar terríveis danos ao ser humano, e em alguns casos, até a morte.</p>

<h3>Dicas para evitar acidentes</h3>
<ul>
<li>Verifique calçados e roupas antes de usá-los</li>
<li>Não colocar as mãos em frestas ou buracos no chão, cupinzeiros etc.</li>
<li>Manter o local de trabalho e quintal sempre limpo, principalmente próximo a peças e equipamentos</li>
<li>Realizar refeições/descanso nas áreas de vivências</li>
<li>Sempre verificar o local que estará realizando manutenção em equipamentos</li>
</ul>

<p><strong>Particularidades:</strong></p>
<ul>
<li>Cobras alimentam-se principalmente de roedores. Mantenha o local limpo e livre deles!</li>
<li>Use o EPI adequado (botas de cano alto, luvas de raspa de couro, perneiras, etc.)</li>
</ul>

<p><strong>Lembre-se:</strong> em caso de acidentes encaminhar a vítima para o hospital/UBS mais próxima e comunicar o superior/gestor e ambulatório médico!</p>
    `,
  },
  {
    id: "DDS-05",
    title: "Procedimento para Uso de EPI (Creme de Proteção)",
    content: `
<p>Creme Protetor para Pele é um creme hidrossolúvel que, aplicado à pele, forma uma película de proteção invisível contra o ataque agressivo de produtos como: graxa, óleo, solvente, querosene, gasolina, tinta e cola.</p>

<h3>Instruções de Uso</h3>
<ul>
<li>Antes de iniciar o trabalho, aplique uma camada uniforme de aproximadamente 2 gramas em suas mãos</li>
<li>As mãos devem estar previamente limpas e secas</li>
<li>Aplique em: palmas das mãos, entre os dedos, pontas dos dedos, embaixo das unhas e sobre as cutículas</li>
<li>Caso necessário, aplique também nos antebraços</li>
<li>Aguarde alguns instantes até o produto secar</li>
<li>Reaplique a cada 4 horas de serviço ou após lavagem das mãos</li>
<li>Não esqueça de reaplicar após o retorno das refeições</li>
</ul>

<h3>Cuidados Especiais</h3>
<ul>
<li>Não misture água ou qualquer outra substância com o creme</li>
<li>Manter o creme sempre tampado e longe de fonte de calor</li>
<li>Manter as unhas sempre aparadas para maior eficiência</li>
</ul>

<h3>Quem Deve Utilizar</h3>
<p>Trabalhadores expostos a graxa, óleo, lubrificantes, solvente, querosene, gasolina, tinta e cola.</p>
    `,
  },
  {
    id: "DDS-06",
    title: "Tema Livre",
    content: `
<p>Neste Diálogo de Segurança, o gestor deverá escolher o tema junto com a equipe e falar sobre o mesmo, sempre exemplificando situações práticas do dia a dia!</p>
<p><strong>Discuta com sua equipe sobre segurança no trabalho e compartilhe experiências.</strong></p>
    `,
  },
  {
    id: "DDS-07",
    title: "Ergonomia",
    content: `
<h3>O que é Ergonomia?</h3>
<p>A ergonomia estuda o nosso conforto enquanto realizamos atividades. É uma espécie de engenharia que analisa o ambiente, nosso corpo e constrói ferramentas para que a vida seja mais fácil e produtiva. Além de objetos, a ergonomia também observa a nossa postura e se estamos mentalmente cansados.</p>

<h3>Quais os Riscos Ergonômicos?</h3>
<ul>
<li><strong>Cuidado com a postura:</strong> Lembre-se de fazer pausas regulares para alongamentos</li>
<li><strong>Carga pesada:</strong> A movimentação manual de cargas inclui elevação, deposição e carregamento. Use equipamentos e evite sobrecargas</li>
<li><strong>Pega leve:</strong> Cabeça cheia e falta de energia são as famosas fadigas mentais. Evite dispersões e faça pausas</li>
</ul>

<p><strong>Seguindo essas dicas, seu ambiente de trabalho ficará mais saudável!</strong></p>
    `,
  },
  {
    id: "DDS-08",
    title: "Segurança na Utilização de Ferramentas",
    content: `
<h3>Ferramentas e seus Riscos</h3>
<p>A utilização incorreta de ferramentas manuais podem provocar acidentes ou danificá-las. Os principais riscos são: ferimentos com corte, lesões oculares por projeção de partículas, contusão por batidas e prensamentos.</p>

<h3>Tipos de Ferramentas</h3>
<ul>
<li><strong>Ferramentas manuais:</strong> devem ser compatíveis com o trabalho, sem trincas, desgastes ou deformações</li>
<li><strong>Ferramentas elétricas:</strong> se houver superaquecimento, faíscas ou cabos partidos, interromper o uso e avisar o líder</li>
<li><strong>Ferramentas pneumáticas:</strong> cuidado especial com a mangueira de ar, avaliadas constantemente</li>
</ul>

<h3>Ações para uma Atividade Segura</h3>
<ul>
<li><strong>Treinamento:</strong> Tenha conhecimento e habilidade para utilizar a ferramenta</li>
<li><strong>Improvisação:</strong> Nunca improvise ou force as ferramentas</li>
<li><strong>Inspeção:</strong> Inspecione todas as ferramentas antes de iniciar</li>
<li><strong>Organização:</strong> Após o término, mantenha as ferramentas limpas e organizadas</li>
<li><strong>Uso de EPIs:</strong> Sempre utilize EPIs específicos para a ferramenta</li>
<li>Nunca utilize ferramentas gastas ou defeituosas</li>
</ul>
    `,
  },
  {
    id: "DDS-09",
    title: "Percepção de Riscos no Corte Manual de Cana",
    content: `
<p>Todos sabemos da criticidade da atividade de corte manual de cana. Vamos revisitar alguns pontos importantes:</p>

<p>Os podões são os maiores causadores de acidentes de trabalho no corte de cana. Tipos mais comuns:</p>
<ul>
<li>Podão enroscar em outra cana</li>
<li>Retirada das ponteiras</li>
<li>Podão desviar em outra cana</li>
</ul>

<p>Partes do corpo mais atingidas: face, mãos, tornozelo, joelhos e pés.</p>

<p><strong>NA FALTA DE ALGUM EPI, DE MANEIRA NENHUMA A ATIVIDADE DEVERÁ SER EXECUTADA.</strong></p>

<h3>Procedimentos durante o manuseio do podão</h3>
<ul>
<li>Se o podão enroscar, nunca puxá-lo — retire com cuidado</li>
<li>Retirada das ponteiras: faça com a cana no chão, nunca suspensa</li>
<li>Nunca use o pé para escorar o molho de cana durante o corte</li>
<li>Durante a limpeza da palha, posicione o corte do podão para o lado contrário do corpo</li>
<li>O podão sempre deverá ser transportado na bainha</li>
<li>Ao afiar o podão com a lima, utilize luva de segurança</li>
</ul>

<p><strong>Caso tenha dúvidas, acione seu gestor IMEDIATAMENTE. SE NÃO FOR SEGURO NÃO REALIZE A ATIVIDADE!</strong></p>
    `,
  },
  {
    id: "DDS-10",
    title: "Proteja-se com a Touca Árabe",
    content: `
<p>A touca árabe é um acessório essencial para sua segurança e bem-estar durante o dia e a noite.</p>

<h3>Benefícios durante o Dia</h3>
<ul>
<li><strong>Proteção Solar:</strong> Barreira eficaz contra raios solares prejudiciais</li>
<li><strong>Prevenção de Queimaduras:</strong> Reduz o risco de queimaduras solares</li>
<li><strong>Regulação da Temperatura:</strong> Mantém temperatura corporal estável</li>
<li><strong>Prevenção de Exaustão:</strong> Evita exaustão por calor e insolação</li>
<li><strong>Proteção do Cabelo:</strong> Evita danos causados pelos raios UV</li>
</ul>

<h3>Benefícios durante a Noite</h3>
<ul>
<li><strong>Proteção contra Orvalho:</strong> Barreira física contra friagem e baixa de temperatura do corpo</li>
<li><strong>Manutenção do Calor:</strong> Retém o calor corporal em temperaturas baixas</li>
<li><strong>Prevenção de Umidade:</strong> Evita umidade excessiva e propagação de fungos</li>
<li><strong>Proteção contra Impurezas:</strong> Protege contra poluentes noturnos</li>
</ul>

<p><strong>ATENÇÃO:</strong> É obrigatório a todos colaboradores a utilização da Touca Árabe em atividade a céu aberto (dia e noite).</p>
    `,
  },
  {
    id: "DDS-11",
    title: "Safra Sem Acidentes!",
    content: `
<p>Olá queridos companheiros(as) de trabalho, desejamos a todos uma ótima safra! Com grande alegria mais uma safra que se inicia!</p>

<p>Momento de reflexão em relação a tudo o que vivenciamos até aqui em relação à prevenção de <strong>ACIDENTES DE TRABALHO</strong>. Usarmos a experiência de cada um de nós para realizarmos nosso trabalho da forma mais segura possível.</p>

<h3>Usar a Experiência da Seguinte Forma</h3>
<ul>
<li>Aplicar em nosso dia a dia os procedimentos propostos pela Empresa</li>
<li>Seguir Normas de Segurança do Trabalho</li>
<li>Respeitar a vida e o Meio Ambiente</li>
<li>O acidente que já aconteceu (ou quase aconteceu) comigo eu vou deixar repetir? Qual vai ser a minha atitude?!</li>
<li>O acidente que já aconteceu (ou quase aconteceu) em nosso setor nós vamos deixar repetir? Qual vai ser a ação de nossa equipe?!</li>
</ul>

<p><strong>ANTECIPAR:</strong> Precisamos cada vez mais nos anteciparmos aos riscos em nosso ambiente de trabalho e criar barreiras para prevenir o acidente de trabalho.</p>

<p><strong>VAMOS PRA CIMA COM ACIDENTE ZERO!</strong></p>
    `,
  },
  {
    id: "DDS-12",
    title: "Tema Livre",
    content: `
<p>Neste Diálogo de Segurança, o gestor deverá escolher o tema junto com a equipe e falar sobre o mesmo, sempre exemplificando situações práticas do dia a dia!</p>
<p><strong>Discuta com sua equipe sobre segurança no trabalho e compartilhe experiências.</strong></p>
    `,
  },
  {
    id: "DDS-13",
    title: "Não Se Esqueça: Beber e Dirigir é Crime!",
    content: `
<p>Os efeitos nocivos do álcool sobre o ato de dirigir já começam no primeiro gole. Segundo o DETRAN, mais de 50% dos acidentes de trânsito no Brasil envolvem uma pessoa alcoolizada.</p>

<p>Consumir bebida alcoólica ou usar drogas antes de dirigir causa:</p>
<ul>
<li>Reduz a concentração</li>
<li>Afeta a coordenação motora</li>
<li>Muda o comportamento, levando a atitudes mais impetuosas</li>
<li>Prejudica a percepção de situações de perigo</li>
<li>Reduz a capacidade de ação e reação</li>
</ul>

<p>Os efeitos do álcool no organismo podem durar <strong>24 horas</strong>.</p>

<p><strong>Artigo 306 do CTB:</strong> Conduzir veículo automotor com capacidade psicomotora alterada por álcool ou substância psicoativa — Penas: detenção de 6 meses a 3 anos, multa e suspensão da habilitação.</p>

<p>O Grupo Moreno realiza campanhas de blitz com testes de etilômetro (bafômetro) em colaboradores e prestadores de serviços.</p>
    `,
  },
  {
    id: "DDS-14",
    title: "Manutenção em Máquinas e Equipamentos",
    content: `
<h3>Comunicação</h3>
<p>O responsável do serviço/manutenção deve conduzir as atividades do início ao fim, não repassando a responsabilidade para terceiros.</p>
<ul>
<li>Solicitar desenergização, bloqueio e sinalização do equipamento elétrico</li>
<li>A participação de muitas pessoas ou sua substituição devem ser evitadas — sempre isole a área</li>
<li>Cuidado com informações e confirmações via rádio durante testes/manutenções</li>
<li>As proteções de partes móveis devem ser recolocadas após o término das manutenções</li>
<li>Informe os envolvidos com antecedência sobre a realização dos testes</li>
</ul>

<h3>Botoeiras de Emergência</h3>
<p>O botão de emergência deve ser utilizado para desligar a máquina de forma rápida em situações de perigo. <strong>Em nenhuma hipótese</strong> deve ser utilizado para desligar para manutenções nem para partidas ou acionamentos.</p>

<h3>Pontos de Atenção</h3>
<p><strong>É proibido fazer manutenção em máquinas e equipamentos em movimento.</strong> Toda manutenção deverá ser efetuada por pessoal autorizado.</p>
    `,
  },
  {
    id: "DDS-15",
    title: "Operações com Caminhão Comboio",
    content: `
<h3>Antes de Iniciar as Atividades</h3>
<ul>
<li>Realizar o check-list pré turno de inspeção do veículo</li>
<li>Confira com atenção todos os itens de segurança</li>
<li>Em caso de não conformidade comunique o seu gestor de imediato</li>
</ul>

<h3>Atenção às Condições da Rota</h3>
<ul>
<li>Desníveis acentuados / Buracos</li>
<li>Solo úmido e/ou encharcado</li>
<li>Poeira, neblina, fumaça</li>
<li>Trechos com aclive/declive</li>
<li>Pratique a velocidade compatível com a rodovia</li>
</ul>

<h3>Durante o Abastecimento</h3>
<ul>
<li>Atenção ao se aproximar do veículo que será reabastecido — garanta que você seja visto</li>
<li>Efetue o isolamento e sinalização da área durante o abastecimento</li>
<li>O operador da máquina deverá desligar o motor e permanecer fora da área isolada</li>
</ul>

<h3>Manobras em Marcha Ré</h3>
<ul>
<li>Desça do caminhão e avalie todo o trajeto da manobra</li>
<li>Posicione cones para balizamento ou use referências fixas</li>
<li>Sempre que possível solicite ajuda a algum funcionário próximo</li>
</ul>
    `,
  },
  {
    id: "DDS-16",
    title: "Segurança em Operações com Oxi-Corte",
    content: `
<p>Confira todos os itens do seu conjunto oxicorte.</p>

<ul>
<li><strong>Cortinas anti-chama:</strong> Fundamentais para garantir a segurança de todos os colaboradores no local, além de proteger o ambiente de possíveis incêndios</li>
</ul>

<h3>EPIs Obrigatórios para Oxi-Corte</h3>
<ul>
<li>Óculos de Segurança</li>
<li>Protetor auricular</li>
<li>Avental e luvas de raspa</li>
<li>Protetor Facial (para serviços com esmerilhadeira)</li>
</ul>

<h3>Organização</h3>
<ul>
<li>Mantenha seu conjunto organizado</li>
<li>Cilindros travados (não utilizar amarrações improvisadas)</li>
<li>Mangueiras em suporte</li>
<li>Identifique seu conjunto de oxicorte (Número)</li>
</ul>

<p><strong>Para transportar cilindros é obrigatório o uso dos capacetes de proteção dos cilindros.</strong></p>
    `,
  },
];

/** Get DDS theme by ID (e.g. "DDS-01"). Returns undefined for IDs without content. */
export function getDDSTheme(id: string): DDSTheme | undefined {
  return ddsThemes.find((t) => t.id === id);
}

// ---- Legacy DSS exports (used by Index / DSSViewer / SelectionScreen) ----

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
      { title: "Condições da Estrada", color: "primary", content: `<p>Devemos nos adequar às condições da estrada, levando sempre em consideração as curvas, falta de acostamento, tipo de pavimento, buracos, óleo na pista, lombadas, falta de sinalização, ondulações, desníveis, animais, poças d'água.</p><p><strong>Mantenha-se sempre atento</strong> e avise os companheiros das condições das estradas, alertando-os dos riscos.</p>` },
      { title: "Condições do Trânsito", color: "secondary", content: `<p>As condições do trânsito interferem no modo de dirigir, sobretudo porque existe a presença de outros condutores que sofrem as mais diversas interferências.</p><p><strong>Tenha sempre calma no trânsito e dirija com segurança.</strong></p>` },
      { title: "Condições do Veículo", color: "primary", content: `<p>O motorista defensivo sempre mantém seu veículo em bom estado de conservação.</p><ul><li>Freios desregulados</li><li>Lâmpadas queimadas</li><li>Limpador do para-brisa com defeito</li><li>Pneus gastos ou defeituosos</li></ul><p><strong>Faça regularmente um check-list e/ou uma revisão de seu veículo.</strong></p>` },
      { title: "Atitudes para Prevenção", color: "accent", content: `<ul><li><strong>Habilidade:</strong> Manuseie bem todos os controles do veículo.</li><li><strong>Planeje:</strong> Planeje com antecedência o trajeto.</li><li><strong>Sinalize:</strong> Sempre dando seta.</li><li><strong>Cortesia:</strong> Facilite a ultrapassagem.</li></ul>` },
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
      { title: "Luz, Iluminação e Sinalização", color: "secondary", content: `<p>A Luz está ligada às condições de iluminação, pois a intensidade da luz afeta a nossa capacidade de ver ou sermos vistos.</p>` },
      { title: "Chuva", color: "accent", content: `<p>Torna a pista escorregadia e dificulta a visibilidade.</p><ul><li>Regular a velocidade</li><li>Aumentar a distância para o veículo da frente</li><li>Acender os faróis</li></ul>` },
      { title: "Neblina / Poeiras", color: "secondary", content: `<ul><li>Reduza a velocidade</li><li>Use luz baixa</li><li>Evite parar nos acostamentos</li><li>Não faça ultrapassagens em vias de duplo sentido</li></ul>` },
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
      { title: "Condições do Veículo", color: "primary", content: `<ul><li>Perfeito estado mecânico</li><li>Atenção redobrada à sinalização</li><li>Vistorie seu caminhão</li></ul>` },
      { title: "Condições do Condutor", color: "secondary", content: `<ul><li>Habilitação compatível</li><li>Proibido ingerir bebidas alcoólicas</li><li>Usar cinto de segurança</li><li>Não usar celular ao dirigir</li></ul>` },
      { title: "Condições do Percurso", color: "accent", content: `<ul><li>Utilizar somente acessos autorizados</li><li>Atenção redobrada em condições adversas</li><li>Informar equipe sobre riscos</li></ul>` },
    ],
    finalMessage: "FALE COM SEUS COMPANHEIROS DE TRABALHO SOBRE COMO ELIMINAR RISCOS DE ACIDENTES DURANTE O TRANSPORTE CANAVIEIRO.",
  },
  {
    id: 3,
    icon: "🚦",
    title: "Regras de Segurança no Trânsito",
    subtitle: "Limites de velocidade, cuidados na operação, abastecimento e pontos cegos",
    iconBg: "secondary",
    blocks: [
      { title: "Antes da Condução", color: "primary", content: `<ul><li>Verifique os itens de segurança</li><li>Use o Cinto de Segurança</li><li>Acenda os faróis</li><li>Não use celular ao dirigir</li></ul>` },
      { title: "Limites de Velocidade", color: "secondary", content: `<ul><li><strong>20 km/h</strong> — Curvas e rotatórias</li><li><strong>40 km/h</strong> — Estradas de terra</li><li><strong>80 km/h</strong> — Rodovias</li></ul>` },
      { title: "Cuidados na Operação", color: "accent", content: `<ul><li>Habilitação e documentos</li><li>Pontos cegos: posicione-se onde possa ser visto</li><li>Abastecimento: PROIBIDO que o condutor auxilie</li></ul>` },
    ],
    finalMessage: "A SEGURANÇA NO TRÂNSITO DEPENDE DE TODOS NÓS.",
  },
];
