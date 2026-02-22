import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getMyDDS, DDSRecord } from "@/services/api";
import { getDDSTheme } from "@/data/ddsContent";
import AppHeader from "@/components/AppHeader";

function getCurrentMonthRef() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function generateDDSItems() {
  return Array.from({ length: 30 }, (_, i) => {
    const id = `DDS-${String(i + 1).padStart(2, "0")}`;
    const theme = getDDSTheme(id);
    return {
      id,
      title: theme ? theme.title : `DDS ${String(i + 1).padStart(2, "0")}`,
      hasContent: !!theme,
    };
  });
}

const DDSList = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [records, setRecords] = useState<DDSRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const mesRef = getCurrentMonthRef();
  const items = generateDDSItems();

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    getMyDDS(mesRef, user.cracha).then((r) => {
      setRecords(r);
      setLoading(false);
    });
  }, [user, mesRef]);

  const getRecord = (id: string) => records.find((r) => r.tema_id === id);

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <div className="flex-1 p-4 max-w-[540px] w-full mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-extrabold text-foreground">
            DDS do Mês
          </h2>
          <span className="font-display text-sm text-muted-foreground uppercase tracking-wider">
            {mesRef}
          </span>
        </div>

        {loading ? (
          <p className="text-sm text-muted-foreground text-center py-8">Carregando...</p>
        ) : (
          <div className="flex flex-col gap-2.5">
            {items.map((item) => {
              const record = getRecord(item.id);
              const signed = !!record;
              return (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-xl overflow-hidden shadow-[var(--shadow-card)]"
                >
                  <div className="p-3.5 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center text-lg font-display font-bold flex-shrink-0 ${
                      signed ? "bg-verde/10 text-verde" : "bg-secondary/10 text-secondary"
                    }`}>
                      {signed ? "✅" : "📋"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-[15px] font-bold text-foreground leading-tight">
                        <span className="text-secondary">{item.id.replace("DDS-", "DDS ")}</span>
                        {item.hasContent && <span className="text-muted-foreground font-normal"> — </span>}
                        {item.hasContent && <span className="text-[13px] font-semibold">{item.title}</span>}
                      </h3>
                      {signed && record?.signed_at && (
                        <p className="text-[10px] text-muted-foreground">
                          Assinado em {record.signed_at}
                        </p>
                      )}
                    </div>
                    {signed ? (
                      <span className="text-[10px] font-display font-bold text-verde uppercase tracking-wider px-2.5 py-1 rounded-full bg-verde/10">
                        Assinado
                      </span>
                    ) : (
                      <button
                        onClick={() => navigate(`/dds/${item.id}`)}
                        className="px-3 py-2 rounded-lg bg-gradient-button text-primary-foreground font-display text-[11px] font-bold tracking-wider transition-all active:scale-[0.97]"
                      >
                        ASSINAR
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DDSList;
