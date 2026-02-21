import { useState, useEffect } from "react";
import { getDashboard, DashboardData } from "@/services/api";
import AppHeader from "@/components/AppHeader";

function getCurrentMonthRef() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

const Dashboard = () => {
  const [mesRef, setMesRef] = useState(getCurrentMonthRef());
  const [setor, setSetor] = useState("TODOS");
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDashboard(mesRef, setor).then((d) => {
      setData(d);
      setLoading(false);
    });
  }, [mesRef, setor]);

  const kpis = data
    ? [
        { label: "Funcionários Ativos", value: data.funcionarios_ativos },
        { label: "Meta/Funcionário", value: data.meta_por_funcionario },
        { label: "Previsto Total", value: data.previsto_total },
        { label: "Realizado Total", value: data.realizado_total },
        { label: "Pendente Total", value: data.pendente_total },
        { label: "Concluintes 30/30", value: data.concluintes_30_de_30 },
      ]
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <div className="flex-1 p-4 max-w-[700px] w-full mx-auto">
        <h2 className="font-display text-xl font-extrabold text-foreground mb-4">
          📈 Dashboard
        </h2>

        {/* Filters */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1">
            <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
              Mês
            </label>
            <input
              type="month"
              value={mesRef}
              onChange={(e) => setMesRef(e.target.value)}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground outline-none focus:border-verde transition-colors"
            />
          </div>
          <div className="flex-1">
            <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
              Setor
            </label>
            <input
              type="text"
              value={setor}
              onChange={(e) => setSetor(e.target.value.toUpperCase())}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground outline-none focus:border-verde transition-colors"
              placeholder="TODOS"
            />
          </div>
        </div>

        {loading ? (
          <p className="text-sm text-muted-foreground text-center py-8">Carregando...</p>
        ) : !data ? (
          <p className="text-sm text-destructive text-center py-8">Erro ao carregar dashboard.</p>
        ) : (
          <>
            {/* KPIs */}
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="bg-card border border-border rounded-xl p-3 text-center"
                >
                  <p className="font-display text-2xl font-bold text-verde">{kpi.value}</p>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-bold mt-1">
                    {kpi.label}
                  </p>
                </div>
              ))}
            </div>

            {/* DDS por setor */}
            {data.dds_por_setor && data.dds_por_setor.length > 0 && (
              <div className="bg-card border border-border rounded-xl overflow-hidden mb-4">
                <div className="bg-verde px-3.5 py-2.5 font-display text-[13px] font-bold tracking-wider uppercase text-primary-foreground">
                  Assinaturas por Setor
                </div>
                <div className="p-3">
                  {data.dds_por_setor.map((s) => (
                    <div key={s.setor} className="flex items-center justify-between py-1.5 border-b border-background last:border-0">
                      <span className="text-sm text-foreground font-bold">{s.setor}</span>
                      <span className="font-display text-sm font-bold text-verde">{s.total_assinaturas}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Abaixo da meta */}
            {data.abaixo_da_meta && data.abaixo_da_meta.length > 0 && (
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="bg-secondary px-3.5 py-2.5 font-display text-[13px] font-bold tracking-wider uppercase text-primary-foreground">
                  Abaixo da Meta
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2 font-display font-bold text-muted-foreground uppercase tracking-wider">Crachá</th>
                        <th className="text-left p-2 font-display font-bold text-muted-foreground uppercase tracking-wider">Nome</th>
                        <th className="text-left p-2 font-display font-bold text-muted-foreground uppercase tracking-wider">Função</th>
                        <th className="text-left p-2 font-display font-bold text-muted-foreground uppercase tracking-wider">Setor</th>
                        <th className="text-center p-2 font-display font-bold text-muted-foreground uppercase tracking-wider">Realizado</th>
                        <th className="text-center p-2 font-display font-bold text-destructive uppercase tracking-wider">Faltam</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.abaixo_da_meta.map((row) => (
                        <tr key={row.cracha} className="border-b border-background">
                          <td className="p-2 text-foreground">{row.cracha}</td>
                          <td className="p-2 text-foreground font-bold">{row.nome}</td>
                          <td className="p-2 text-muted-foreground">{row.funcao}</td>
                          <td className="p-2 text-muted-foreground">{row.setor}</td>
                          <td className="p-2 text-center text-verde font-bold">{row.realizado_no_mes}</td>
                          <td className="p-2 text-center text-destructive font-bold">{row.faltam_no_mes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
