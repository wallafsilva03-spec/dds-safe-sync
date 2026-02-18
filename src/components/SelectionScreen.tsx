import logoMoreno from "@/assets/logo-moreno.png";
import { DSSItem } from "@/data/dssContent";

interface SelectionScreenProps {
  dssItems: DSSItem[];
  signedIds: number[];
  onSelectDSS: (id: number) => void;
}

const iconBgMap = {
  primary: "bg-primary/10",
  secondary: "bg-secondary/10",
  accent: "bg-accent/10",
};

const SelectionScreen = ({ dssItems, signedIds, onSelectDSS }: SelectionScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="bg-gradient-header w-full px-5 py-6 flex flex-col items-center gap-3">
        <img
          src={logoMoreno}
          alt="Grupo Moreno"
          className="h-[90px] object-contain rounded-lg bg-white/[0.08] p-1.5"
        />
        <h1 className="font-display text-[26px] font-extrabold text-primary-foreground text-center tracking-wide">
          DIÁLOGO DE SEGURANÇA
        </h1>
        <p className="text-xs text-primary-foreground/65 text-center leading-relaxed max-w-[300px]">
          Selecione o tema do DSS para leitura e assinatura digital do colaborador
        </p>
        <div className="flex gap-1.5 flex-wrap justify-center mt-1">
          <span className="px-3 py-0.5 rounded-full bg-verde text-primary-foreground font-display text-[10px] font-bold tracking-widest uppercase">
            FORTALECER
          </span>
          <span className="px-3 py-0.5 rounded-full bg-verde2 text-primary-foreground font-display text-[10px] font-bold tracking-widest uppercase">
            CONECTAR
          </span>
          <span className="px-3 py-0.5 rounded-full bg-azul text-primary-foreground font-display text-[10px] font-bold tracking-widest uppercase">
            CRESCER
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full max-w-[540px] p-4 flex flex-col gap-3">
        {dssItems.map((item) => {
          const isSigned = signedIds.includes(item.id);
          return (
            <button
              key={item.id}
              onClick={() => onSelectDSS(item.id)}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all active:scale-[0.98] text-left w-full"
            >
              <div className="p-3.5 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center text-[22px] flex-shrink-0 ${iconBgMap[item.iconBg]}`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-bold text-foreground leading-tight mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-snug">{item.subtitle}</p>
                </div>
                <span className="text-lg text-muted-foreground/40 flex-shrink-0 ml-auto">›</span>
              </div>
              <div className="px-4 py-2 border-t border-background flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${isSigned ? "bg-verde2" : "bg-border"}`} />
                <span className="text-[10px] text-muted-foreground tracking-wide">
                  {isSigned ? "✅ Assinado" : "Pendente de assinatura"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="text-center text-[10px] text-muted-foreground py-4 px-4 leading-relaxed mt-auto">
        © Grupo Moreno · Segurança em Primeiro Lugar
        <br />
        CTA – Grupo Moreno · Fortalecer · Conectar · Crescer
      </div>
    </div>
  );
};

export default SelectionScreen;
