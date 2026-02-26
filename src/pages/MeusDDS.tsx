import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useDDS } from "@/contexts/DDSContext";
import AppHeader from "@/components/AppHeader";

function getMetaAtual() {
  return new Date().getDate();
}

const MeusDDS = () => {
  const { user } = useAuth();
  const { records, mesRef, loading, refreshRecords } = useDDS();

  useEffect(() => {
    if (user) refreshRecords(user.cracha);
  }, [user]);

  const META = getMetaAtual();
  const total = records.length;
  const faltam = Math.max(0, META - total);
  const progress = Math.min(100, (total / META) * 100);

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <div className="flex-1 p-4 max-w-[540px] w-full mx-auto">
        <h2 className="font-display text-xl font-extrabold text-foreground mb-4">
          📊 Meus DDS — {mesRef}
        </h2>

        {loading ? (
          <p className="text-sm text-muted-foreground text-center py-8">Carregando...</p>
        ) : (
          <>
            {/* Progress card */}
            <div className="bg-card border border-border rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  Progresso no mês
                </span>
                <span className="font-display text-2xl font-bold text-verde">
                  {total}/{META}
                </span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden mb-2">
                <div
                  className="h-full rounded-full bg-gradient-button transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground text-center">
                {faltam > 0
                  ? `Faltam ${faltam} de ${META} DDS`
                  : "🎉 Meta atingida! Parabéns!"}
              </p>
            </div>

            {/* Signed list */}
            {records.length > 0 ? (
              <div className="flex flex-col gap-2">
                {records.map((r, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-xl p-3.5 flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-verde/10 flex items-center justify-center text-verde font-display font-bold text-sm flex-shrink-0">
                      ✅
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm font-bold text-foreground">
                        {r.tema_titulo || r.tema_id}
                      </p>
                      <p className="text-[10px] text-muted-foreground">{r.signed_at}</p>
                    </div>
                    {r.assinatura_url && (
                      <a
                        href={r.assinatura_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-azul2 underline flex-shrink-0"
                      >
                        Ver assinatura
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-8">
                Nenhum DDS assinado neste mês.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MeusDDS;
