import { useState, useEffect } from "react";
import { getDashboard, getUnidades, DashboardData } from "@/services/api";
import { useDDS } from "@/contexts/DDSContext";
import { useAuth } from "@/contexts/AuthContext";
import AppHeader from "@/components/AppHeader";

const META_POR_FUNCIONARIO = 25;

function getCurrentMonthRef() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

const Dashboard = () => {
  const { user } = useAuth();
  const { lastSignedAt } = useDDS();
  const [mesRef, setMesRef] = useState(getCurrentMonthRef());
  const [setor, setSetor] = useState("TODOS");
  const [unidade, setUnidade] = useState("TODAS");
  const [unidades, setUnidades] = useState<string[]>([]);
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUnidades().then((list) => setUnidades(list));
  }, []);

  useEffect(() => {
    setLoading(true);
    getDashboard(mesRef, setor, unidade, user?.cracha, user?.role).then((d) => {
      setData(d);
      setLoading(false);
    });
  }, [mesRef, setor, unidade, lastSignedAt]);

  // Override meta with fixed 25
  const metaPorFuncionario = META_POR_FUNCIONARIO;
  const funcionariosAtivos = data?.funcionarios_ativos ?? 0;
  const previstoTotal = funcionariosAtivos * metaPorFuncionario;
  const realizadoTotal = data?.realizado_total ?? 0;
  const pendenteTotal = Math.max(0, previstoTotal - realizadoTotal);
  const concluintes = data?.concluintes_30_de_30 ?? 0;

  const kpis = data
    ? [
        { label: "Funcionários Ativos", value: funcionariosAtivos },
        { label: "Meta/Funcionário", value: metaPorFuncionario },
        { label: "Previsto Total", value: previstoTotal },
        { label: "Realizado Total", value: realizadoTotal },
        { label: "Pendente Total", value: pendenteTotal },
        { label: "Concluintes 25/25", value: concluintes },
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
        <div className="flex flex-col gap-2.5 mb-4">
          <div className="flex gap-3">
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

          {/* Unidade filter */}
          <div>
            <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
              Unidade
            </label>
            <div className="flex flex-wrap gap-2">
              {["TODAS", ...unidades].map((u) => (
                <button
                  key={u}
                  onClick={() => setUnidade(u)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-colors ${
                    unidade === u
                      ? "bg-verde text-primary-foreground border-verde"
                      : "bg-background text-muted-foreground border-border hover:border-verde"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
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
                        <th className="text-center p-2 font-display font-bold text-verde uppercase tracking-wider">Realizado</th>
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
