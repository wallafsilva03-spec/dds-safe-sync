import { useEffect, useState } from "react";

/**
 * Painéis laterais com slogans de segurança, inspirados nas melhores
 * campanhas de SST do mercado. Aparecem apenas em telas grandes (xl+),
 * onde há espaço em branco ao lado do conteúdo central. Em telas menores
 * ficam ocultos para não atrapalhar a navegação.
 */

interface Slogan {
  emoji: string;
  titulo: string;
  texto: string;
}

const SLOGANS: Slogan[] = [
  { emoji: "❤️", titulo: "Nossa maior prioridade é VOCÊ", texto: "Nenhuma tarefa é tão urgente que não possa ser feita com segurança." },
  { emoji: "🏠", titulo: "Sua família espera você em casa", texto: "Trabalhe com atenção. O cuidado de hoje é o reencontro de amanhã." },
  { emoji: "🎯", titulo: "Meta: Zero Acidentes", texto: "Cada dia sem acidentes é uma vitória de toda a equipe." },
  { emoji: "🛑", titulo: "Pare, pense e aja com segurança", texto: "Na dúvida, pare. Avaliar o risco leva segundos e salva vidas." },
  { emoji: "🤝", titulo: "Eu cuido, você cuida, todos seguros", texto: "Segurança é responsabilidade de todos. Cuide do colega ao seu lado." },
  { emoji: "🧠", titulo: "Comportamento seguro salva vidas", texto: "Atitudes seguras viram hábito. Hábitos seguros viram cultura." },
  { emoji: "🦺", titulo: "Segurança não é negociável", texto: "Use sempre o EPI. Ele é a sua última barreira de proteção." },
  { emoji: "💪", titulo: "Cada vida importa. A sua também.", texto: "Valorize a sua vida e a de quem trabalha com você." },
];

function SloganCard({ s, featured }: { s: Slogan; featured?: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-4 transition-all duration-500 ${
        featured
          ? "bg-gradient-button border-verde shadow-lg scale-[1.02]"
          : "bg-card border-border"
      }`}
    >
      <div className="text-2xl mb-1.5">{s.emoji}</div>
      <h4
        className={`font-display text-sm font-extrabold uppercase tracking-wide leading-tight mb-1 ${
          featured ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {s.titulo}
      </h4>
      <p
        className={`text-[11px] leading-snug ${
          featured ? "text-primary-foreground/85" : "text-muted-foreground"
        }`}
      >
        {s.texto}
      </p>
    </div>
  );
}

function Panel({ side, slogans, featuredIndex }: { side: "left" | "right"; slogans: Slogan[]; featuredIndex: number }) {
  return (
    <aside
      className={`hidden xl:flex flex-col gap-3 fixed top-24 bottom-14 w-[260px] z-30 overflow-hidden ${
        side === "left" ? "left-5" : "right-5"
      }`}
    >
      <div className="font-display text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1 px-1">
        {side === "left" ? "🔒 Segurança em 1º lugar" : "🦺 Cultura de Segurança"}
      </div>
      {slogans.map((s, i) => (
        <SloganCard key={s.titulo} s={s} featured={i === featuredIndex} />
      ))}
    </aside>
  );
}

const SafetyAside = () => {
  const [tick, setTick] = useState(0);

  // Rotaciona o slogan em destaque a cada 4s, dando vida aos painéis.
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 4000);
    return () => clearInterval(id);
  }, []);

  const metade = Math.ceil(SLOGANS.length / 2);
  const esquerda = SLOGANS.slice(0, metade);
  const direita = SLOGANS.slice(metade);

  return (
    <>
      <Panel side="left" slogans={esquerda} featuredIndex={tick % esquerda.length} />
      <Panel side="right" slogans={direita} featuredIndex={tick % direita.length} />
    </>
  );
};

export default SafetyAside;
