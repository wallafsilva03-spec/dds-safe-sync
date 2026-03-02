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
  {
    id: "DDS-17",
    title: "Prevenção de Quedas em Altura",
    content: `
<p>Trabalhos em altura são aqueles realizados acima de <strong>2 metros</strong> do nível inferior, onde haja risco de queda. A queda é uma das principais causas de acidentes graves e fatais no trabalho.</p>

<h3>EPIs Obrigatórios para Trabalho em Altura</h3>
<ul>
<li>Cinto de segurança tipo paraquedista</li>
<li>Talabarte duplo com absorvedor de energia</li>
<li>Capacete com jugular</li>
<li>Calçado de segurança com solado antiderrapante</li>
</ul>

<h3>Regras Essenciais</h3>
<ul>
<li>Nunca trabalhe em altura sem estar devidamente amarrado</li>
<li>Verifique o ponto de ancoragem antes de iniciar</li>
<li>Nunca use cinto de segurança tipo abdominal para trabalho em altura</li>
<li>Realize inspeção visual do cinto e talabarte antes do uso</li>
<li>Em caso de chuva, suspenda a atividade imediatamente</li>
</ul>

<p><strong>LEMBRE-SE: Nenhuma tarefa é tão urgente que não possa ser feita com segurança!</strong></p>
    `,
  },
  {
    id: "DDS-18",
    title: "Bloqueio e Etiquetagem (LOTO)",
    content: `
<p>O procedimento de Bloqueio e Etiquetagem (Lock Out / Tag Out — LOTO) é fundamental para proteger trabalhadores durante manutenção de máquinas e equipamentos.</p>

<h3>Quando Aplicar</h3>
<ul>
<li>Manutenção de máquinas e equipamentos</li>
<li>Limpeza interna de equipamentos</li>
<li>Desobstrução de engarrafamentos</li>
<li>Troca de partes e componentes</li>
</ul>

<h3>Passos do Procedimento LOTO</h3>
<ul>
<li><strong>1.</strong> Identifique todas as fontes de energia</li>
<li><strong>2.</strong> Comunique as pessoas envolvidas</li>
<li><strong>3.</strong> Desligue o equipamento pelo painel principal</li>
<li><strong>4.</strong> Aplique o cadeado pessoal e etiqueta de bloqueio</li>
<li><strong>5.</strong> Teste o equipamento para garantir a desenergização</li>
<li><strong>6.</strong> Inicie a manutenção com segurança</li>
</ul>

<p><strong>CADA TRABALHADOR tem seu próprio cadeado. Nunca retire o cadeado de outra pessoa!</strong></p>
    `,
  },
  {
    id: "DDS-19",
    title: "Prevenção de Incêndio",
    content: `
<p>O fogo é resultado da combinação de três elementos: <strong>combustível</strong>, <strong>comburente (oxigênio)</strong> e <strong>calor</strong>. Para prevenir incêndios, é preciso eliminar ao menos um desses elementos.</p>

<h3>Classes de Incêndio</h3>
<ul>
<li><strong>Classe A:</strong> Materiais sólidos (madeira, papel, tecido) — use água</li>
<li><strong>Classe B:</strong> Líquidos inflamáveis (gasolina, álcool) — use CO₂ ou pó químico</li>
<li><strong>Classe C:</strong> Equipamentos elétricos — use CO₂ ou pó químico (NUNCA água)</li>
<li><strong>Classe D:</strong> Metais combustíveis — use areia seca</li>
</ul>

<h3>Como Usar o Extintor (PASS)</h3>
<ul>
<li><strong>P</strong>uxe o pino de segurança</li>
<li><strong>A</strong>ponte o bico para a base do fogo</li>
<li><strong>S</strong>obre o gatilho com firmeza</li>
<li><strong>S</strong>arrafo — faça movimentos laterais</li>
</ul>

<p><strong>Em caso de incêndio de grande proporção: evacue a área e acione o Corpo de Bombeiros (193)!</strong></p>
    `,
  },
  {
    id: "DDS-20",
    title: "Saúde Mental no Trabalho",
    content: `
<p>A saúde mental é tão importante quanto a saúde física. O estresse, a ansiedade e a sobrecarga de trabalho afetam diretamente a segurança e a produtividade.</p>

<h3>Sinais de Alerta</h3>
<ul>
<li>Dificuldade de concentração</li>
<li>Irritabilidade constante</li>
<li>Cansaço excessivo mesmo após descanso</li>
<li>Insônia ou sono excessivo</li>
<li>Sentimentos de desmotivação</li>
</ul>

<h3>Como Cuidar da Saúde Mental</h3>
<ul>
<li>Organize suas tarefas e prioridades</li>
<li>Faça pausas regulares durante o trabalho</li>
<li>Pratique atividade física regularmente</li>
<li>Mantenha uma boa alimentação e hidratação</li>
<li>Converse com colegas, gestores ou profissionais de saúde</li>
<li>Respeite seu tempo de descanso e lazer</li>
</ul>

<p><strong>Não hesite em buscar ajuda. Falar sobre o que sente é um sinal de força, não fraqueza!</strong></p>
    `,
  },
  {
    id: "DDS-21",
    title: "Hidratação e Calor no Trabalho",
    content: `
<p>O trabalho exposto ao calor, especialmente na safra, exige atenção redobrada à hidratação. A desidratação pode causar desde cansaço até situações graves como a insolação.</p>

<h3>Sinais de Desidratação</h3>
<ul>
<li>Sede intensa</li>
<li>Urina escura ou redução na frequência urinária</li>
<li>Tontura ou dor de cabeça</li>
<li>Cansaço excessivo e dificuldade de concentração</li>
<li>Cãibras musculares</li>
</ul>

<h3>Boas Práticas de Hidratação</h3>
<ul>
<li>Beba água regularmente, sem esperar a sede</li>
<li>Consuma ao menos 250ml de água a cada hora de trabalho</li>
<li>Em dias muito quentes, aumente a ingestão</li>
<li>Evite bebidas alcoólicas antes e durante o trabalho</li>
<li>Prefira locais com sombra para descanso</li>
</ul>

<p><strong>Em caso de insolação: leve o trabalhador para local fresco, hidrate-o e acione o ambulatório médico!</strong></p>
    `,
  },
  {
    id: "DDS-22",
    title: "Resíduos e Meio Ambiente",
    content: `
<p>A correta destinação dos resíduos é responsabilidade de todos. O descarte inadequado polui o meio ambiente, prejudica a saúde e pode gerar multas e penalidades legais.</p>

<h3>Tipos de Resíduos e Destinação</h3>
<ul>
<li><strong>Resíduos comuns:</strong> Lixo orgânico e embalagens limpas — coleta municipal</li>
<li><strong>Resíduos perigosos:</strong> Óleos, graxas, embalagens de agroquímicos — coletores específicos</li>
<li><strong>Resíduos recicláveis:</strong> Papel, plástico, metal, vidro — coleta seletiva</li>
</ul>

<h3>Regras Fundamentais</h3>
<ul>
<li>Nunca descarte resíduos em rios, lagoas ou áreas de preservação</li>
<li>Utilize sempre os coletores corretos de acordo com o tipo de resíduo</li>
<li>Embalagens de agroquímicos têm descarte obrigatório nas unidades credenciadas</li>
<li>Comunique imediatamente qualquer vazamento de produtos químicos</li>
</ul>

<p><strong>Preservar o meio ambiente é uma obrigação legal e um compromisso com as futuras gerações!</strong></p>
    `,
  },
  {
    id: "DDS-23",
    title: "Segurança em Espaços Confinados",
    content: `
<p>Espaço confinado é qualquer área não projetada para ocupação contínua, com entrada e saída limitadas, como silos, fossas, tanques, dutos e poços.</p>

<h3>Principais Riscos</h3>
<ul>
<li>Atmosfera deficiente de oxigênio (abaixo de 19,5%)</li>
<li>Atmosfera enriquecida de oxigênio (acima de 23,5%)</li>
<li>Presença de gases tóxicos ou inflamáveis</li>
<li>Risco de engolfamento por materiais sólidos ou líquidos</li>
</ul>

<h3>Procedimentos Obrigatórios</h3>
<ul>
<li>Nunca entre em espaço confinado sem autorização (Permissão de Trabalho)</li>
<li>Realize medição atmosférica antes da entrada</li>
<li>Tenha sempre um vigia externo durante o trabalho</li>
<li>Use equipamentos de proteção respiratória adequados</li>
<li>Estabeleça plano de resgate antes de iniciar</li>
</ul>

<p><strong>NUNCA tente resgatar uma vítima em espaço confinado sem equipamento adequado. Você pode se tornar mais uma vítima!</strong></p>
    `,
  },
  {
    id: "DDS-24",
    title: "Primeiros Socorros — Noções Básicas",
    content: `
<p>Conhecer noções básicas de primeiros socorros pode salvar vidas. O atendimento correto nos primeiros minutos faz toda a diferença.</p>

<h3>Princípios Básicos (3P's)</h3>
<ul>
<li><strong>Preservar a vida</strong> — da vítima e dos socorristas</li>
<li><strong>Prevenir o agravamento</strong> — não mova vítimas sem necessidade</li>
<li><strong>Promover a recuperação</strong> — conforto e segurança para a vítima</li>
</ul>

<h3>Situações Frequentes</h3>
<ul>
<li><strong>Cortes e hemorragias:</strong> comprima o local com pano limpo</li>
<li><strong>Queimaduras:</strong> resfrie com água corrente por 10 minutos (nunca gelo)</li>
<li><strong>Desmaio:</strong> deixe deitado, eleve os pés e verifique a respiração</li>
<li><strong>Fratura:</strong> imobilize o membro, não tente alinhar o osso</li>
<li><strong>Parada cardíaca:</strong> inicie RCP e acione o SAMU (192)</li>
</ul>

<p><strong>Mantenha a calma, chame socorro e não deixe a vítima sozinha!</strong></p>
    `,
  },
  {
    id: "DDS-25",
    title: "Operação Segura de Empilhadeiras",
    content: `
<p>Empilhadeiras são equipamentos de grande porte que exigem atenção e responsabilidade. O uso inadequado pode causar acidentes graves com pessoas e danos ao patrimônio.</p>

<h3>Antes de Operar</h3>
<ul>
<li>Verifique os itens do check-list diário do equipamento</li>
<li>Confirme que a habilitação e treinamento estão em dia</li>
<li>Certifique-se de que o cinto de segurança está funcionando</li>
</ul>

<h3>Durante a Operação</h3>
<ul>
<li>Reduza a velocidade em curvas e áreas movimentadas</li>
<li>Nunca transporte pessoas no garfo ou na carroceria</li>
<li>Mantenha o garfo baixo durante o deslocamento</li>
<li>Dê atenção aos pontos cegos — use buzina ao sair de corredores</li>
<li>Respeite os limites de carga do equipamento</li>
</ul>

<h3>Proibições</h3>
<ul>
<li>Operar empilhadeira sem habilitação específica</li>
<li>Deixar a empilhadeira ligada sem operador presente</li>
<li>Transportar cargas instáveis sem amarração</li>
</ul>
    `,
  },
  {
    id: "DDS-26",
    title: "Riscos Elétricos e Prevenção",
    content: `
<p>A eletricidade é invisível e silenciosa, mas extremamente perigosa. O choque elétrico pode causar queimaduras, parada cardiorrespiratória e até a morte.</p>

<h3>Principais Riscos Elétricos</h3>
<ul>
<li>Contato com fios desencapados ou danificados</li>
<li>Equipamentos sem aterramento</li>
<li>Sobrecarga de tomadas (benjamins)</li>
<li>Trabalho em equipamentos energizados</li>
<li>Uso de equipamentos elétricos em locais úmidos</li>
</ul>

<h3>Prevenção</h3>
<ul>
<li>Somente eletricistas habilitados (NR-10) devem realizar serviços elétricos</li>
<li>Nunca use fios, tomadas ou equipamentos com danos visíveis</li>
<li>Mantenha distância segura de cabos e redes de alta tensão</li>
<li>Desligue o equipamento antes de qualquer manutenção</li>
<li>Reporte imediatamente qualquer irregularidade elétrica ao setor de manutenção</li>
</ul>

<p><strong>Em caso de choque elétrico: não toque na vítima com as mãos — desligue a energia primeiro e chame socorro!</strong></p>
    `,
  },
  {
    id: "DDS-27",
    title: "Segurança na Aplicação de Agroquímicos",
    content: `
<p>A aplicação de agroquímicos exige treinamento, equipamentos adequados e extrema atenção aos procedimentos de segurança para proteger sua saúde e o meio ambiente.</p>

<h3>EPIs Obrigatórios</h3>
<ul>
<li>Macacão impermeável</li>
<li>Luvas de borracha nitrílica</li>
<li>Botas de borracha</li>
<li>Máscara respiratória com filtro específico</li>
<li>Óculos de proteção</li>
<li>Touca árabe</li>
</ul>

<h3>Procedimentos Importantes</h3>
<ul>
<li>Leia sempre o rótulo e a bula do produto antes de usar</li>
<li>Prepare a calda em local arejado</li>
<li>Nunca aplique em condições de vento forte</li>
<li>Ao final, lave os EPIs, tome banho e troque de roupa</li>
<li>Guarde os agroquímicos em local adequado e longe de crianças</li>
</ul>

<p><strong>Sintomas de intoxicação (náusea, tontura, visão turva): afaste-se imediatamente e procure atendimento médico!</strong></p>
    `,
  },
  {
    id: "DDS-28",
    title: "Comunicação de Acidentes e Quase Acidentes",
    content: `
<p>Todo acidente ou quase acidente DEVE ser comunicado imediatamente ao gestor e ao Departamento de Segurança do Trabalho. A notificação é obrigatória e protege tanto o trabalhador quanto a empresa.</p>

<h3>Por Que Comunicar?</h3>
<ul>
<li>Garantir o atendimento médico ao trabalhador</li>
<li>Identificar e eliminar as causas do acidente</li>
<li>Prevenir que o mesmo acidente aconteça com outro colega</li>
<li>Cumprir obrigações legais (CAT — Comunicação de Acidente de Trabalho)</li>
</ul>

<h3>O Que Deve Ser Comunicado</h3>
<ul>
<li>Acidentes com lesão, mesmo pequenas</li>
<li>Quase acidentes (situações de risco que não resultaram em lesão)</li>
<li>Doenças ou sintomas possivelmente relacionados ao trabalho</li>
<li>Condições inseguras identificadas no ambiente de trabalho</li>
</ul>

<p><strong>A omissão de acidentes prejudica você, seus colegas e a empresa. Comunique sempre!</strong></p>
    `,
  },
  {
    id: "DDS-29",
    title: "Transporte Seguro de Trabalhadores",
    content: `
<p>O transporte de trabalhadores rurais é regulamentado pela NR-31 e exige veículos adequados e motoristas habilitados para garantir a segurança de todos.</p>

<h3>Regras para o Transporte</h3>
<ul>
<li>Todos os passageiros devem estar sentados durante o transporte</li>
<li>É proibido o transporte de trabalhadores na carroceria de caminhões e tratores</li>
<li>Veículos devem possuir assentos fixos e seguros</li>
<li>O motorista deve ter habilitação compatível com o veículo</li>
<li>A lotação máxima do veículo deve ser respeitada</li>
</ul>

<h3>Responsabilidades do Trabalhador</h3>
<ul>
<li>Use o cinto de segurança sempre que disponível</li>
<li>Não distraia o motorista durante o trajeto</li>
<li>Informe o motorista sobre qualquer anomalia no veículo</li>
<li>Respeite as regras de embarque e desembarque</li>
</ul>

<p><strong>Em caso de acidente de trajeto, comunique imediatamente o gestor — isso também é acidente de trabalho!</strong></p>
    `,
  },
  {
    id: "DDS-30",
    title: "Ordem e Limpeza no Ambiente de Trabalho (5S)",
    content: `
<p>Um ambiente limpo e organizado é um ambiente mais seguro e produtivo. O programa 5S é uma metodologia simples e eficaz para organizar o local de trabalho.</p>

<h3>Os 5 Sensos</h3>
<ul>
<li><strong>Seiri (Utilização):</strong> Elimine o que não é necessário</li>
<li><strong>Seiton (Organização):</strong> Um lugar para cada coisa, cada coisa no seu lugar</li>
<li><strong>Seiso (Limpeza):</strong> Mantenha o ambiente sempre limpo</li>
<li><strong>Seiketsu (Padronização):</strong> Padronize as boas práticas</li>
<li><strong>Shitsuke (Disciplina):</strong> Mantenha a disciplina e os hábitos criados</li>
</ul>

<h3>Benefícios Diretos</h3>
<ul>
<li>Redução de acidentes por tropeços, quedas e choques</li>
<li>Facilidade para encontrar ferramentas e materiais</li>
<li>Maior produtividade e qualidade no trabalho</li>
<li>Ambiente de trabalho mais agradável para todos</li>
</ul>

<p><strong>A ordem e a limpeza são responsabilidade de TODOS. Não espere alguém mandar — faça a sua parte!</strong></p>
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
